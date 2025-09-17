import { BinaryReader } from "@protobuf-ts/runtime";
import { RecordingSample } from "./v1";

import { BaseBuilder, buildGPX } from "gpx-builder";
import { Point } from "gpx-builder/dist/builder/BaseBuilder/models";
import { Timestamp } from "./google/protobuf/timestamp";

/// readSamples takes a BinaryReader of a STF file and returns an array of its samples
export function readSamples(reader: BinaryReader): Array<RecordingSample> {
  const samples: Array<RecordingSample> = [];
  while (reader.pos < reader.len) {
    const messageBytes = reader.bytes();
    samples.push(RecordingSample.fromBinary(messageBytes));
  }
  return samples;
}

/// processSamples takes a BinaryReader of a STF file and calls onSample for each of its samples
export function processSamples(
  reader: BinaryReader,
  onSample: (sample: RecordingSample) => void,
  onError?: ((error: unknown) => void | "stop") | "ignore"
) {
  while (reader.pos < reader.len) {
    const messageBytes = reader.bytes();
    try {
      let sample = RecordingSample.fromBinary(messageBytes);
      onSample(sample);
    } catch (e) {
      if (typeof onError === "function") {
        if (onError(e) === "stop") {
          return;
        }
      } else if (onError === "ignore") {
        continue;
      } else {
        throw e;
      }
    }
  }
}

/// generateGPXPoints returns an array of GPX Point objects for the given STF file
export function generateGPXPoints(reader: BinaryReader): Array<Point> {
  const points: Array<Point> = [];

  processSamples(reader, (sample) => {
    if (!sample.unixTime) return;
    points.push(
      new Point(sample.gpsLatitude, sample.gpsLongitude, {
        ele: sample.gpsAltitude,
        time: Timestamp.toDate(sample.unixTime),
      })
    );
  });

  return points;
}

/// toGPX converts a BinaryReader containing a STF file into a GPX file
export function toGPX(reader: BinaryReader): string {
  const points = generateGPXPoints(reader);
  const builder = new BaseBuilder();
  builder.setSegmentPoints(points);
  return buildGPX(builder.toObject());
}
