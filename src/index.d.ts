import * as $protobuf from "protobufjs";
import Long = require("long");
/** Properties of a RecordingSample. */
export interface IRecordingSample {

    /** RecordingSample unixTime */
    unixTime?: (number|Long|null);

    /** RecordingSample frameNumber */
    frameNumber?: (number|null);

    /** RecordingSample bluetoothConnected */
    bluetoothConnected?: (boolean|null);

    /** RecordingSample fanCurrent */
    fanCurrent?: (number|null);

    /** RecordingSample pumpCurrent */
    pumpCurrent?: (number|null);

    /** RecordingSample vcuHumidity */
    vcuHumidity?: (number|null);

    /** RecordingSample vcuTemperature */
    vcuTemperature?: (number|null);

    /** RecordingSample throttleIdFb */
    throttleIdFb?: (number|null);

    /** RecordingSample throttleIqFb */
    throttleIqFb?: (number|null);

    /** RecordingSample throttlePosition */
    throttlePosition?: (number|null);

    /** RecordingSample map */
    map?: (number|null);

    /** RecordingSample speedKmh */
    speedKmh?: (number|null);

    /** RecordingSample motorRpm */
    motorRpm?: (number|null);

    /** RecordingSample odometer */
    odometer?: (number|null);

    /** RecordingSample inverterDcBus */
    inverterDcBus?: (number|null);

    /** RecordingSample inverterIqRef */
    inverterIqRef?: (number|null);

    /** RecordingSample inverterIdRef */
    inverterIdRef?: (number|null);

    /** RecordingSample inverterIq */
    inverterIq?: (number|null);

    /** RecordingSample inverterId */
    inverterId?: (number|null);

    /** RecordingSample inverterVq */
    inverterVq?: (number|null);

    /** RecordingSample inverterVd */
    inverterVd?: (number|null);

    /** RecordingSample mcuTempLogic */
    mcuTempLogic?: (number|null);

    /** RecordingSample mcuTempGate */
    mcuTempGate?: (number|null);

    /** RecordingSample ntc1 */
    ntc1?: (number|null);

    /** RecordingSample ntc2 */
    ntc2?: (number|null);

    /** RecordingSample ntc3 */
    ntc3?: (number|null);

    /** RecordingSample inverterPcbTemp */
    inverterPcbTemp?: (number|null);

    /** RecordingSample inverterPcbHumidity */
    inverterPcbHumidity?: (number|null);

    /** RecordingSample faults */
    faults?: (number|null);

    /** RecordingSample status */
    status?: (number|null);

    /** RecordingSample inverterHumidity */
    inverterHumidity?: (number|null);

    /** RecordingSample miscBits */
    miscBits?: (number|null);

    /** RecordingSample indicatorBits */
    indicatorBits?: (number|null);

    /** RecordingSample alertBits */
    alertBits?: (number|null);

    /** RecordingSample faultBits */
    faultBits?: (number|null);

    /** RecordingSample infoBits */
    infoBits?: (number|null);

    /** RecordingSample batteryDcBus */
    batteryDcBus?: (number|null);

    /** RecordingSample batterySoc */
    batterySoc?: (number|null);

    /** RecordingSample batteryCurrent */
    batteryCurrent?: (number|null);

    /** RecordingSample batteryVMin */
    batteryVMin?: (number|null);

    /** RecordingSample batteryVMax */
    batteryVMax?: (number|null);

    /** RecordingSample batteryVAvg */
    batteryVAvg?: (number|null);

    /** RecordingSample gpsTimestamp */
    gpsTimestamp?: (number|null);

    /** RecordingSample gpsSpeed */
    gpsSpeed?: (number|null);

    /** RecordingSample gpsHeading */
    gpsHeading?: (number|null);

    /** RecordingSample gpsAltitude */
    gpsAltitude?: (number|null);

    /** RecordingSample gpsAccuracy */
    gpsAccuracy?: (number|null);

    /** RecordingSample gpsAltitudeAccuracy */
    gpsAltitudeAccuracy?: (number|null);

    /** RecordingSample gpsLongitude */
    gpsLongitude?: (number|null);

    /** RecordingSample gpsLatitude */
    gpsLatitude?: (number|null);

    /** RecordingSample igbtSensor */
    igbtSensor?: (ITemperatureSensorData|null);

    /** RecordingSample motorSensor */
    motorSensor?: (ITemperatureSensorData|null);

    /** RecordingSample imuData */
    imuData?: (IIMUData|null);

    /** RecordingSample batteryTemperatures */
    batteryTemperatures?: (number[]|null);
}

/** Represents a RecordingSample. */
export class RecordingSample implements IRecordingSample {

    /**
     * Constructs a new RecordingSample.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRecordingSample);

    /** RecordingSample unixTime. */
    public unixTime: (number|Long);

    /** RecordingSample frameNumber. */
    public frameNumber: number;

    /** RecordingSample bluetoothConnected. */
    public bluetoothConnected: boolean;

    /** RecordingSample fanCurrent. */
    public fanCurrent: number;

    /** RecordingSample pumpCurrent. */
    public pumpCurrent: number;

    /** RecordingSample vcuHumidity. */
    public vcuHumidity: number;

    /** RecordingSample vcuTemperature. */
    public vcuTemperature: number;

    /** RecordingSample throttleIdFb. */
    public throttleIdFb: number;

    /** RecordingSample throttleIqFb. */
    public throttleIqFb: number;

    /** RecordingSample throttlePosition. */
    public throttlePosition: number;

    /** RecordingSample map. */
    public map: number;

    /** RecordingSample speedKmh. */
    public speedKmh: number;

    /** RecordingSample motorRpm. */
    public motorRpm: number;

    /** RecordingSample odometer. */
    public odometer: number;

    /** RecordingSample inverterDcBus. */
    public inverterDcBus: number;

    /** RecordingSample inverterIqRef. */
    public inverterIqRef: number;

    /** RecordingSample inverterIdRef. */
    public inverterIdRef: number;

    /** RecordingSample inverterIq. */
    public inverterIq: number;

    /** RecordingSample inverterId. */
    public inverterId: number;

    /** RecordingSample inverterVq. */
    public inverterVq: number;

    /** RecordingSample inverterVd. */
    public inverterVd: number;

    /** RecordingSample mcuTempLogic. */
    public mcuTempLogic: number;

    /** RecordingSample mcuTempGate. */
    public mcuTempGate: number;

    /** RecordingSample ntc1. */
    public ntc1: number;

    /** RecordingSample ntc2. */
    public ntc2: number;

    /** RecordingSample ntc3. */
    public ntc3: number;

    /** RecordingSample inverterPcbTemp. */
    public inverterPcbTemp: number;

    /** RecordingSample inverterPcbHumidity. */
    public inverterPcbHumidity: number;

    /** RecordingSample faults. */
    public faults: number;

    /** RecordingSample status. */
    public status: number;

    /** RecordingSample inverterHumidity. */
    public inverterHumidity: number;

    /** RecordingSample miscBits. */
    public miscBits: number;

    /** RecordingSample indicatorBits. */
    public indicatorBits: number;

    /** RecordingSample alertBits. */
    public alertBits: number;

    /** RecordingSample faultBits. */
    public faultBits: number;

    /** RecordingSample infoBits. */
    public infoBits: number;

    /** RecordingSample batteryDcBus. */
    public batteryDcBus: number;

    /** RecordingSample batterySoc. */
    public batterySoc: number;

    /** RecordingSample batteryCurrent. */
    public batteryCurrent: number;

    /** RecordingSample batteryVMin. */
    public batteryVMin: number;

    /** RecordingSample batteryVMax. */
    public batteryVMax: number;

    /** RecordingSample batteryVAvg. */
    public batteryVAvg: number;

    /** RecordingSample gpsTimestamp. */
    public gpsTimestamp: number;

    /** RecordingSample gpsSpeed. */
    public gpsSpeed: number;

    /** RecordingSample gpsHeading. */
    public gpsHeading: number;

    /** RecordingSample gpsAltitude. */
    public gpsAltitude: number;

    /** RecordingSample gpsAccuracy. */
    public gpsAccuracy: number;

    /** RecordingSample gpsAltitudeAccuracy. */
    public gpsAltitudeAccuracy: number;

    /** RecordingSample gpsLongitude. */
    public gpsLongitude: number;

    /** RecordingSample gpsLatitude. */
    public gpsLatitude: number;

    /** RecordingSample igbtSensor. */
    public igbtSensor?: (ITemperatureSensorData|null);

    /** RecordingSample motorSensor. */
    public motorSensor?: (ITemperatureSensorData|null);

    /** RecordingSample imuData. */
    public imuData?: (IIMUData|null);

    /** RecordingSample batteryTemperatures. */
    public batteryTemperatures: number[];

    /**
     * Creates a new RecordingSample instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RecordingSample instance
     */
    public static create(properties?: IRecordingSample): RecordingSample;

    /**
     * Encodes the specified RecordingSample message. Does not implicitly {@link RecordingSample.verify|verify} messages.
     * @param message RecordingSample message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRecordingSample, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RecordingSample message, length delimited. Does not implicitly {@link RecordingSample.verify|verify} messages.
     * @param message RecordingSample message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRecordingSample, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RecordingSample message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RecordingSample
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RecordingSample;

    /**
     * Decodes a RecordingSample message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RecordingSample
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RecordingSample;

    /**
     * Verifies a RecordingSample message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RecordingSample message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RecordingSample
     */
    public static fromObject(object: { [k: string]: any }): RecordingSample;

    /**
     * Creates a plain object from a RecordingSample message. Also converts values to other types if specified.
     * @param message RecordingSample
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RecordingSample, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RecordingSample to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for RecordingSample
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a IMUData. */
export interface IIMUData {

    /** IMUData accelX */
    accelX?: (number|null);

    /** IMUData accelY */
    accelY?: (number|null);

    /** IMUData accelZ */
    accelZ?: (number|null);

    /** IMUData gyroX */
    gyroX?: (number|null);

    /** IMUData gyroY */
    gyroY?: (number|null);

    /** IMUData gyroZ */
    gyroZ?: (number|null);
}

/** Represents a IMUData. */
export class IMUData implements IIMUData {

    /**
     * Constructs a new IMUData.
     * @param [properties] Properties to set
     */
    constructor(properties?: IIMUData);

    /** IMUData accelX. */
    public accelX: number;

    /** IMUData accelY. */
    public accelY: number;

    /** IMUData accelZ. */
    public accelZ: number;

    /** IMUData gyroX. */
    public gyroX: number;

    /** IMUData gyroY. */
    public gyroY: number;

    /** IMUData gyroZ. */
    public gyroZ: number;

    /**
     * Creates a new IMUData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns IMUData instance
     */
    public static create(properties?: IIMUData): IMUData;

    /**
     * Encodes the specified IMUData message. Does not implicitly {@link IMUData.verify|verify} messages.
     * @param message IMUData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IIMUData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified IMUData message, length delimited. Does not implicitly {@link IMUData.verify|verify} messages.
     * @param message IMUData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IIMUData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a IMUData message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns IMUData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): IMUData;

    /**
     * Decodes a IMUData message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns IMUData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): IMUData;

    /**
     * Verifies a IMUData message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a IMUData message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns IMUData
     */
    public static fromObject(object: { [k: string]: any }): IMUData;

    /**
     * Creates a plain object from a IMUData message. Also converts values to other types if specified.
     * @param message IMUData
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: IMUData, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this IMUData to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for IMUData
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a TemperatureSensorData. */
export interface ITemperatureSensorData {

    /** TemperatureSensorData sensor1 */
    sensor1?: (number|null);

    /** TemperatureSensorData sensor2 */
    sensor2?: (number|null);

    /** TemperatureSensorData sensor3 */
    sensor3?: (number|null);

    /** TemperatureSensorData valid */
    valid?: (boolean|null);

    /** TemperatureSensorData used */
    used?: (boolean|null);
}

/** Represents a TemperatureSensorData. */
export class TemperatureSensorData implements ITemperatureSensorData {

    /**
     * Constructs a new TemperatureSensorData.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITemperatureSensorData);

    /** TemperatureSensorData sensor1. */
    public sensor1: number;

    /** TemperatureSensorData sensor2. */
    public sensor2: number;

    /** TemperatureSensorData sensor3. */
    public sensor3: number;

    /** TemperatureSensorData valid. */
    public valid: boolean;

    /** TemperatureSensorData used. */
    public used: boolean;

    /**
     * Creates a new TemperatureSensorData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TemperatureSensorData instance
     */
    public static create(properties?: ITemperatureSensorData): TemperatureSensorData;

    /**
     * Encodes the specified TemperatureSensorData message. Does not implicitly {@link TemperatureSensorData.verify|verify} messages.
     * @param message TemperatureSensorData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITemperatureSensorData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TemperatureSensorData message, length delimited. Does not implicitly {@link TemperatureSensorData.verify|verify} messages.
     * @param message TemperatureSensorData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITemperatureSensorData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TemperatureSensorData message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TemperatureSensorData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TemperatureSensorData;

    /**
     * Decodes a TemperatureSensorData message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TemperatureSensorData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TemperatureSensorData;

    /**
     * Verifies a TemperatureSensorData message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a TemperatureSensorData message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TemperatureSensorData
     */
    public static fromObject(object: { [k: string]: any }): TemperatureSensorData;

    /**
     * Creates a plain object from a TemperatureSensorData message. Also converts values to other types if specified.
     * @param message TemperatureSensorData
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: TemperatureSensorData, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TemperatureSensorData to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for TemperatureSensorData
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}
