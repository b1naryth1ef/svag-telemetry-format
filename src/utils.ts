import { BinaryReader } from "@protobuf-ts/runtime";
import { RecordingSample } from "./v1";

import { BaseBuilder, buildGPX } from "gpx-builder";
import { Point } from "gpx-builder/dist/builder/BaseBuilder/models";
import { Timestamp } from "./google/protobuf/timestamp";

/// RecordingSamples represents the data in a recording, either loaded in-memory or as binary protobuf data
export type RecordingSamples = RecordingSample[] | BinaryReader;

/// PartialBinaryReader describes an object which can fulfill small reads of binary data
export interface PartialBinaryReader {
  readBytes(length: number): Uint8Array<ArrayBuffer>;
}

/// readFirstSample reads a single sample from a PartialBinaryReader for an STF
export function readFirstSample(
  partialReader: PartialBinaryReader
): RecordingSample {
  const enoughData = partialReader.readBytes(4096);
  const reader = new BinaryReader(enoughData);

  const messageBytes = reader.bytes();
  return RecordingSample.fromBinary(messageBytes);
}

/// readSamples takes a BinaryReader of a STF file and returns an array of its samples
export function readSamples(reader: BinaryReader): Array<RecordingSample> {
  const samples: Array<RecordingSample> = [];
  while (reader.pos < reader.len) {
    const messageBytes = reader.bytes();
    samples.push(RecordingSample.fromBinary(messageBytes));
  }
  return samples;
}

/// processSamples handles iterating over a given RecordingSamples, calling onSample for every individual sample
export function processSamples(
  samples: RecordingSamples,
  onSample: (sample: RecordingSample) => void,
  onError?: ((error: unknown) => void | "stop") | "ignore"
) {
  if (samples instanceof BinaryReader) {
    while (samples.pos < samples.len) {
      const messageBytes = samples.bytes();
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
  } else {
    for (const sample of samples) {
      try {
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
}

// generateGPXPoints creates an array of GPX Point objects based on the given RecordingSamples
export function generateGPXPoints(samples: RecordingSamples): Array<Point> {
  const points: Array<Point> = [];

  processSamples(samples, (sample) => {
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

/// toGPX converts the given RecordingSamples into a GPX file
export function toGPX(samples: RecordingSamples): string {
  const points = generateGPXPoints(samples);
  const builder = new BaseBuilder();
  builder.setSegmentPoints(points);
  return buildGPX(builder.toObject());
}
