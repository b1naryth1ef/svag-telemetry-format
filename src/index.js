/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const RecordingSample = $root.RecordingSample = (() => {

    /**
     * Properties of a RecordingSample.
     * @exports IRecordingSample
     * @interface IRecordingSample
     * @property {number|Long|null} [unixTime] RecordingSample unixTime
     * @property {number|null} [frameNumber] RecordingSample frameNumber
     * @property {boolean|null} [bluetoothConnected] RecordingSample bluetoothConnected
     * @property {number|null} [fanCurrent] RecordingSample fanCurrent
     * @property {number|null} [pumpCurrent] RecordingSample pumpCurrent
     * @property {number|null} [vcuHumidity] RecordingSample vcuHumidity
     * @property {number|null} [vcuTemperature] RecordingSample vcuTemperature
     * @property {number|null} [throttleIdFb] RecordingSample throttleIdFb
     * @property {number|null} [throttleIqFb] RecordingSample throttleIqFb
     * @property {number|null} [throttlePosition] RecordingSample throttlePosition
     * @property {number|null} [map] RecordingSample map
     * @property {number|null} [speedKmh] RecordingSample speedKmh
     * @property {number|null} [motorRpm] RecordingSample motorRpm
     * @property {number|null} [odometer] RecordingSample odometer
     * @property {number|null} [inverterDcBus] RecordingSample inverterDcBus
     * @property {number|null} [inverterIqRef] RecordingSample inverterIqRef
     * @property {number|null} [inverterIdRef] RecordingSample inverterIdRef
     * @property {number|null} [inverterIq] RecordingSample inverterIq
     * @property {number|null} [inverterId] RecordingSample inverterId
     * @property {number|null} [inverterVq] RecordingSample inverterVq
     * @property {number|null} [inverterVd] RecordingSample inverterVd
     * @property {number|null} [mcuTempLogic] RecordingSample mcuTempLogic
     * @property {number|null} [mcuTempGate] RecordingSample mcuTempGate
     * @property {number|null} [ntc1] RecordingSample ntc1
     * @property {number|null} [ntc2] RecordingSample ntc2
     * @property {number|null} [ntc3] RecordingSample ntc3
     * @property {number|null} [inverterPcbTemp] RecordingSample inverterPcbTemp
     * @property {number|null} [inverterPcbHumidity] RecordingSample inverterPcbHumidity
     * @property {number|null} [faults] RecordingSample faults
     * @property {number|null} [status] RecordingSample status
     * @property {number|null} [inverterHumidity] RecordingSample inverterHumidity
     * @property {number|null} [miscBits] RecordingSample miscBits
     * @property {number|null} [indicatorBits] RecordingSample indicatorBits
     * @property {number|null} [alertBits] RecordingSample alertBits
     * @property {number|null} [faultBits] RecordingSample faultBits
     * @property {number|null} [infoBits] RecordingSample infoBits
     * @property {number|null} [batteryDcBus] RecordingSample batteryDcBus
     * @property {number|null} [batterySoc] RecordingSample batterySoc
     * @property {number|null} [batteryCurrent] RecordingSample batteryCurrent
     * @property {number|null} [batteryVMin] RecordingSample batteryVMin
     * @property {number|null} [batteryVMax] RecordingSample batteryVMax
     * @property {number|null} [batteryVAvg] RecordingSample batteryVAvg
     * @property {number|null} [gpsTimestamp] RecordingSample gpsTimestamp
     * @property {number|null} [gpsSpeed] RecordingSample gpsSpeed
     * @property {number|null} [gpsHeading] RecordingSample gpsHeading
     * @property {number|null} [gpsAltitude] RecordingSample gpsAltitude
     * @property {number|null} [gpsAccuracy] RecordingSample gpsAccuracy
     * @property {number|null} [gpsAltitudeAccuracy] RecordingSample gpsAltitudeAccuracy
     * @property {number|null} [gpsLongitude] RecordingSample gpsLongitude
     * @property {number|null} [gpsLatitude] RecordingSample gpsLatitude
     * @property {ITemperatureSensorData|null} [igbtSensor] RecordingSample igbtSensor
     * @property {ITemperatureSensorData|null} [motorSensor] RecordingSample motorSensor
     * @property {IIMUData|null} [imuData] RecordingSample imuData
     * @property {Array.<number>|null} [batteryTemperatures] RecordingSample batteryTemperatures
     */

    /**
     * Constructs a new RecordingSample.
     * @exports RecordingSample
     * @classdesc Represents a RecordingSample.
     * @implements IRecordingSample
     * @constructor
     * @param {IRecordingSample=} [properties] Properties to set
     */
    function RecordingSample(properties) {
        this.batteryTemperatures = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RecordingSample unixTime.
     * @member {number|Long} unixTime
     * @memberof RecordingSample
     * @instance
     */
    RecordingSample.prototype.unixTime = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * RecordingSample frameNumber.
     * @member {number} frameNumber
     * @memberof RecordingSample
     * @instance
     */
    RecordingSample.prototype.frameNumber = 0;

    /**
     * RecordingSample bluetoothConnected.
     * @member {boolean} bluetoothConnected
     * @memberof RecordingSample
     * @instance
     */
    RecordingSample.prototype.bluetoothConnected = false;

    /**
     * RecordingSample fanCurrent.
     * @member {number} fanCurrent
     * @memberof RecordingSample
     * @instance
     */
    RecordingSample.prototype.fanCurrent = 0;

    /**
     * RecordingSample pumpCurrent.
     * @member {number} pumpCurrent
     * @memberof RecordingSample
     * @instance
     */
    RecordingSample.prototype.pumpCurrent = 0;

    /**
     * RecordingSample vcuHumidity.
     * @member {number} vcuHumidity
     * @memberof RecordingSample
     * @instance
     */
    RecordingSample.prototype.vcuHumidity = 0;

    /**
     * RecordingSample vcuTemperature.
     * @member {number} vcuTemperature
     * @memberof RecordingSample
     * @instance
     */
    RecordingSample.prototype.vcuTemperature = 0;

    /**
     * RecordingSample throttleIdFb.
     * @member {number} throttleIdFb
     * @memberof RecordingSample
     * @instance
     */
    RecordingSample.prototype.throttleIdFb = 0;

    /**
     * RecordingSample throttleIqFb.
     * @member {number} throttleIqFb
     * @memberof RecordingSample
     * @instance
     */
    RecordingSample.prototype.throttleIqFb = 0;

    /**
     * RecordingSample throttlePosition.
     * @member {number} throttlePosition
     * @memberof RecordingSample
     * @instance
     */
    RecordingSample.prototype.throttlePosition = 0;

    /**
     * RecordingSample map.
     * @member {number} map
     * @memberof RecordingSample
     * @instance
     */
    RecordingSample.prototype.map = 0;

    /**
     * RecordingSample speedKmh.
     * @member {number} speedKmh
     * @memberof RecordingSample
     * @instance
     */
    RecordingSample.prototype.speedKmh = 0;

    /**
     * RecordingSample motorRpm.
     * @member {number} motorRpm
     * @memberof RecordingSample
     * @instance
     */
    RecordingSample.prototype.motorRpm = 0;

    /**
     * RecordingSample odometer.
     * @member {number} odometer
     * @memberof RecordingSample
     * @instance
     */
    RecordingSample.prototype.odometer = 0;

    /**
     * RecordingSample inverterDcBus.
     * @member {number} inverterDcBus
     * @memberof RecordingSample
     * @instance
     */
    RecordingSample.prototype.inverterDcBus = 0;

    /**
     * RecordingSample inverterIqRef.
     * @member {number} inverterIqRef
     * @memberof RecordingSample
     * @instance
     */
    RecordingSample.prototype.inverterIqRef = 0;

    /**
     * RecordingSample inverterIdRef.
     * @member {number} inverterIdRef
     * @memberof RecordingSample
     * @instance
     */
    RecordingSample.prototype.inverterIdRef = 0;

    /**
     * RecordingSample inverterIq.
     * @member {number} inverterIq
     * @memberof RecordingSample
     * @instance
     */
    RecordingSample.prototype.inverterIq = 0;

    /**
     * RecordingSample inverterId.
     * @member {number} inverterId
     * @memberof RecordingSample
     * @instance
     */
    RecordingSample.prototype.inverterId = 0;

    /**
     * RecordingSample inverterVq.
     * @member {number} inverterVq
     * @memberof RecordingSample
     * @instance
     */
    RecordingSample.prototype.inverterVq = 0;

    /**
     * RecordingSample inverterVd.
     * @member {number} inverterVd
     * @memberof RecordingSample
     * @instance
     */
    RecordingSample.prototype.inverterVd = 0;

    /**
     * RecordingSample mcuTempLogic.
     * @member {number} mcuTempLogic
     * @memberof RecordingSample
     * @instance
     */
    RecordingSample.prototype.mcuTempLogic = 0;

    /**
     * RecordingSample mcuTempGate.
     * @member {number} mcuTempGate
     * @memberof RecordingSample
     * @instance
     */
    RecordingSample.prototype.mcuTempGate = 0;

    /**
     * RecordingSample ntc1.
     * @member {number} ntc1
     * @memberof RecordingSample
     * @instance
     */
    RecordingSample.prototype.ntc1 = 0;

    /**
     * RecordingSample ntc2.
     * @member {number} ntc2
     * @memberof RecordingSample
     * @instance
     */
    RecordingSample.prototype.ntc2 = 0;

    /**
     * RecordingSample ntc3.
     * @member {number} ntc3
     * @memberof RecordingSample
     * @instance
     */
    RecordingSample.prototype.ntc3 = 0;

    /**
     * RecordingSample inverterPcbTemp.
     * @member {number} inverterPcbTemp
     * @memberof RecordingSample
     * @instance
     */
    RecordingSample.prototype.inverterPcbTemp = 0;

    /**
     * RecordingSample inverterPcbHumidity.
     * @member {number} inverterPcbHumidity
     * @memberof RecordingSample
     * @instance
     */
    RecordingSample.prototype.inverterPcbHumidity = 0;

    /**
     * RecordingSample faults.
     * @member {number} faults
     * @memberof RecordingSample
     * @instance
     */
    RecordingSample.prototype.faults = 0;

    /**
     * RecordingSample status.
     * @member {number} status
     * @memberof RecordingSample
     * @instance
     */
    RecordingSample.prototype.status = 0;

    /**
     * RecordingSample inverterHumidity.
     * @member {number} inverterHumidity
     * @memberof RecordingSample
     * @instance
     */
    RecordingSample.prototype.inverterHumidity = 0;

    /**
     * RecordingSample miscBits.
     * @member {number} miscBits
     * @memberof RecordingSample
     * @instance
     */
    RecordingSample.prototype.miscBits = 0;

    /**
     * RecordingSample indicatorBits.
     * @member {number} indicatorBits
     * @memberof RecordingSample
     * @instance
     */
    RecordingSample.prototype.indicatorBits = 0;

    /**
     * RecordingSample alertBits.
     * @member {number} alertBits
     * @memberof RecordingSample
     * @instance
     */
    RecordingSample.prototype.alertBits = 0;

    /**
     * RecordingSample faultBits.
     * @member {number} faultBits
     * @memberof RecordingSample
     * @instance
     */
    RecordingSample.prototype.faultBits = 0;

    /**
     * RecordingSample infoBits.
     * @member {number} infoBits
     * @memberof RecordingSample
     * @instance
     */
    RecordingSample.prototype.infoBits = 0;

    /**
     * RecordingSample batteryDcBus.
     * @member {number} batteryDcBus
     * @memberof RecordingSample
     * @instance
     */
    RecordingSample.prototype.batteryDcBus = 0;

    /**
     * RecordingSample batterySoc.
     * @member {number} batterySoc
     * @memberof RecordingSample
     * @instance
     */
    RecordingSample.prototype.batterySoc = 0;

    /**
     * RecordingSample batteryCurrent.
     * @member {number} batteryCurrent
     * @memberof RecordingSample
     * @instance
     */
    RecordingSample.prototype.batteryCurrent = 0;

    /**
     * RecordingSample batteryVMin.
     * @member {number} batteryVMin
     * @memberof RecordingSample
     * @instance
     */
    RecordingSample.prototype.batteryVMin = 0;

    /**
     * RecordingSample batteryVMax.
     * @member {number} batteryVMax
     * @memberof RecordingSample
     * @instance
     */
    RecordingSample.prototype.batteryVMax = 0;

    /**
     * RecordingSample batteryVAvg.
     * @member {number} batteryVAvg
     * @memberof RecordingSample
     * @instance
     */
    RecordingSample.prototype.batteryVAvg = 0;

    /**
     * RecordingSample gpsTimestamp.
     * @member {number} gpsTimestamp
     * @memberof RecordingSample
     * @instance
     */
    RecordingSample.prototype.gpsTimestamp = 0;

    /**
     * RecordingSample gpsSpeed.
     * @member {number} gpsSpeed
     * @memberof RecordingSample
     * @instance
     */
    RecordingSample.prototype.gpsSpeed = 0;

    /**
     * RecordingSample gpsHeading.
     * @member {number} gpsHeading
     * @memberof RecordingSample
     * @instance
     */
    RecordingSample.prototype.gpsHeading = 0;

    /**
     * RecordingSample gpsAltitude.
     * @member {number} gpsAltitude
     * @memberof RecordingSample
     * @instance
     */
    RecordingSample.prototype.gpsAltitude = 0;

    /**
     * RecordingSample gpsAccuracy.
     * @member {number} gpsAccuracy
     * @memberof RecordingSample
     * @instance
     */
    RecordingSample.prototype.gpsAccuracy = 0;

    /**
     * RecordingSample gpsAltitudeAccuracy.
     * @member {number} gpsAltitudeAccuracy
     * @memberof RecordingSample
     * @instance
     */
    RecordingSample.prototype.gpsAltitudeAccuracy = 0;

    /**
     * RecordingSample gpsLongitude.
     * @member {number} gpsLongitude
     * @memberof RecordingSample
     * @instance
     */
    RecordingSample.prototype.gpsLongitude = 0;

    /**
     * RecordingSample gpsLatitude.
     * @member {number} gpsLatitude
     * @memberof RecordingSample
     * @instance
     */
    RecordingSample.prototype.gpsLatitude = 0;

    /**
     * RecordingSample igbtSensor.
     * @member {ITemperatureSensorData|null|undefined} igbtSensor
     * @memberof RecordingSample
     * @instance
     */
    RecordingSample.prototype.igbtSensor = null;

    /**
     * RecordingSample motorSensor.
     * @member {ITemperatureSensorData|null|undefined} motorSensor
     * @memberof RecordingSample
     * @instance
     */
    RecordingSample.prototype.motorSensor = null;

    /**
     * RecordingSample imuData.
     * @member {IIMUData|null|undefined} imuData
     * @memberof RecordingSample
     * @instance
     */
    RecordingSample.prototype.imuData = null;

    /**
     * RecordingSample batteryTemperatures.
     * @member {Array.<number>} batteryTemperatures
     * @memberof RecordingSample
     * @instance
     */
    RecordingSample.prototype.batteryTemperatures = $util.emptyArray;

    /**
     * Creates a new RecordingSample instance using the specified properties.
     * @function create
     * @memberof RecordingSample
     * @static
     * @param {IRecordingSample=} [properties] Properties to set
     * @returns {RecordingSample} RecordingSample instance
     */
    RecordingSample.create = function create(properties) {
        return new RecordingSample(properties);
    };

    /**
     * Encodes the specified RecordingSample message. Does not implicitly {@link RecordingSample.verify|verify} messages.
     * @function encode
     * @memberof RecordingSample
     * @static
     * @param {IRecordingSample} message RecordingSample message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RecordingSample.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.unixTime != null && Object.hasOwnProperty.call(message, "unixTime"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.unixTime);
        if (message.frameNumber != null && Object.hasOwnProperty.call(message, "frameNumber"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.frameNumber);
        if (message.bluetoothConnected != null && Object.hasOwnProperty.call(message, "bluetoothConnected"))
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.bluetoothConnected);
        if (message.fanCurrent != null && Object.hasOwnProperty.call(message, "fanCurrent"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.fanCurrent);
        if (message.pumpCurrent != null && Object.hasOwnProperty.call(message, "pumpCurrent"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.pumpCurrent);
        if (message.vcuHumidity != null && Object.hasOwnProperty.call(message, "vcuHumidity"))
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.vcuHumidity);
        if (message.vcuTemperature != null && Object.hasOwnProperty.call(message, "vcuTemperature"))
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.vcuTemperature);
        if (message.throttleIdFb != null && Object.hasOwnProperty.call(message, "throttleIdFb"))
            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.throttleIdFb);
        if (message.throttleIqFb != null && Object.hasOwnProperty.call(message, "throttleIqFb"))
            writer.uint32(/* id 9, wireType 0 =*/72).int32(message.throttleIqFb);
        if (message.throttlePosition != null && Object.hasOwnProperty.call(message, "throttlePosition"))
            writer.uint32(/* id 10, wireType 0 =*/80).int32(message.throttlePosition);
        if (message.map != null && Object.hasOwnProperty.call(message, "map"))
            writer.uint32(/* id 11, wireType 0 =*/88).int32(message.map);
        if (message.speedKmh != null && Object.hasOwnProperty.call(message, "speedKmh"))
            writer.uint32(/* id 12, wireType 0 =*/96).int32(message.speedKmh);
        if (message.motorRpm != null && Object.hasOwnProperty.call(message, "motorRpm"))
            writer.uint32(/* id 13, wireType 0 =*/104).int32(message.motorRpm);
        if (message.odometer != null && Object.hasOwnProperty.call(message, "odometer"))
            writer.uint32(/* id 14, wireType 0 =*/112).int32(message.odometer);
        if (message.inverterDcBus != null && Object.hasOwnProperty.call(message, "inverterDcBus"))
            writer.uint32(/* id 15, wireType 0 =*/120).int32(message.inverterDcBus);
        if (message.inverterIqRef != null && Object.hasOwnProperty.call(message, "inverterIqRef"))
            writer.uint32(/* id 16, wireType 0 =*/128).int32(message.inverterIqRef);
        if (message.inverterIdRef != null && Object.hasOwnProperty.call(message, "inverterIdRef"))
            writer.uint32(/* id 17, wireType 0 =*/136).int32(message.inverterIdRef);
        if (message.inverterIq != null && Object.hasOwnProperty.call(message, "inverterIq"))
            writer.uint32(/* id 18, wireType 0 =*/144).int32(message.inverterIq);
        if (message.inverterId != null && Object.hasOwnProperty.call(message, "inverterId"))
            writer.uint32(/* id 19, wireType 0 =*/152).int32(message.inverterId);
        if (message.inverterVq != null && Object.hasOwnProperty.call(message, "inverterVq"))
            writer.uint32(/* id 20, wireType 0 =*/160).int32(message.inverterVq);
        if (message.inverterVd != null && Object.hasOwnProperty.call(message, "inverterVd"))
            writer.uint32(/* id 21, wireType 0 =*/168).int32(message.inverterVd);
        if (message.mcuTempLogic != null && Object.hasOwnProperty.call(message, "mcuTempLogic"))
            writer.uint32(/* id 22, wireType 0 =*/176).int32(message.mcuTempLogic);
        if (message.mcuTempGate != null && Object.hasOwnProperty.call(message, "mcuTempGate"))
            writer.uint32(/* id 23, wireType 0 =*/184).int32(message.mcuTempGate);
        if (message.ntc1 != null && Object.hasOwnProperty.call(message, "ntc1"))
            writer.uint32(/* id 24, wireType 0 =*/192).int32(message.ntc1);
        if (message.ntc2 != null && Object.hasOwnProperty.call(message, "ntc2"))
            writer.uint32(/* id 25, wireType 0 =*/200).int32(message.ntc2);
        if (message.ntc3 != null && Object.hasOwnProperty.call(message, "ntc3"))
            writer.uint32(/* id 26, wireType 0 =*/208).int32(message.ntc3);
        if (message.inverterPcbTemp != null && Object.hasOwnProperty.call(message, "inverterPcbTemp"))
            writer.uint32(/* id 27, wireType 0 =*/216).int32(message.inverterPcbTemp);
        if (message.inverterPcbHumidity != null && Object.hasOwnProperty.call(message, "inverterPcbHumidity"))
            writer.uint32(/* id 28, wireType 0 =*/224).int32(message.inverterPcbHumidity);
        if (message.faults != null && Object.hasOwnProperty.call(message, "faults"))
            writer.uint32(/* id 29, wireType 0 =*/232).int32(message.faults);
        if (message.status != null && Object.hasOwnProperty.call(message, "status"))
            writer.uint32(/* id 30, wireType 0 =*/240).int32(message.status);
        if (message.inverterHumidity != null && Object.hasOwnProperty.call(message, "inverterHumidity"))
            writer.uint32(/* id 31, wireType 0 =*/248).int32(message.inverterHumidity);
        if (message.miscBits != null && Object.hasOwnProperty.call(message, "miscBits"))
            writer.uint32(/* id 32, wireType 0 =*/256).int32(message.miscBits);
        if (message.indicatorBits != null && Object.hasOwnProperty.call(message, "indicatorBits"))
            writer.uint32(/* id 33, wireType 0 =*/264).int32(message.indicatorBits);
        if (message.alertBits != null && Object.hasOwnProperty.call(message, "alertBits"))
            writer.uint32(/* id 34, wireType 0 =*/272).int32(message.alertBits);
        if (message.faultBits != null && Object.hasOwnProperty.call(message, "faultBits"))
            writer.uint32(/* id 35, wireType 0 =*/280).int32(message.faultBits);
        if (message.infoBits != null && Object.hasOwnProperty.call(message, "infoBits"))
            writer.uint32(/* id 36, wireType 0 =*/288).int32(message.infoBits);
        if (message.batteryDcBus != null && Object.hasOwnProperty.call(message, "batteryDcBus"))
            writer.uint32(/* id 37, wireType 0 =*/296).int32(message.batteryDcBus);
        if (message.batterySoc != null && Object.hasOwnProperty.call(message, "batterySoc"))
            writer.uint32(/* id 38, wireType 0 =*/304).int32(message.batterySoc);
        if (message.batteryCurrent != null && Object.hasOwnProperty.call(message, "batteryCurrent"))
            writer.uint32(/* id 39, wireType 0 =*/312).int32(message.batteryCurrent);
        if (message.batteryVMin != null && Object.hasOwnProperty.call(message, "batteryVMin"))
            writer.uint32(/* id 40, wireType 0 =*/320).int32(message.batteryVMin);
        if (message.batteryVMax != null && Object.hasOwnProperty.call(message, "batteryVMax"))
            writer.uint32(/* id 41, wireType 0 =*/328).int32(message.batteryVMax);
        if (message.batteryVAvg != null && Object.hasOwnProperty.call(message, "batteryVAvg"))
            writer.uint32(/* id 42, wireType 0 =*/336).int32(message.batteryVAvg);
        if (message.gpsTimestamp != null && Object.hasOwnProperty.call(message, "gpsTimestamp"))
            writer.uint32(/* id 43, wireType 0 =*/344).int32(message.gpsTimestamp);
        if (message.gpsSpeed != null && Object.hasOwnProperty.call(message, "gpsSpeed"))
            writer.uint32(/* id 44, wireType 5 =*/357).float(message.gpsSpeed);
        if (message.gpsHeading != null && Object.hasOwnProperty.call(message, "gpsHeading"))
            writer.uint32(/* id 45, wireType 0 =*/360).int32(message.gpsHeading);
        if (message.gpsAltitude != null && Object.hasOwnProperty.call(message, "gpsAltitude"))
            writer.uint32(/* id 46, wireType 0 =*/368).int32(message.gpsAltitude);
        if (message.gpsAccuracy != null && Object.hasOwnProperty.call(message, "gpsAccuracy"))
            writer.uint32(/* id 47, wireType 5 =*/381).float(message.gpsAccuracy);
        if (message.gpsAltitudeAccuracy != null && Object.hasOwnProperty.call(message, "gpsAltitudeAccuracy"))
            writer.uint32(/* id 48, wireType 5 =*/389).float(message.gpsAltitudeAccuracy);
        if (message.gpsLongitude != null && Object.hasOwnProperty.call(message, "gpsLongitude"))
            writer.uint32(/* id 49, wireType 1 =*/393).double(message.gpsLongitude);
        if (message.gpsLatitude != null && Object.hasOwnProperty.call(message, "gpsLatitude"))
            writer.uint32(/* id 50, wireType 1 =*/401).double(message.gpsLatitude);
        if (message.igbtSensor != null && Object.hasOwnProperty.call(message, "igbtSensor"))
            $root.TemperatureSensorData.encode(message.igbtSensor, writer.uint32(/* id 51, wireType 2 =*/410).fork()).ldelim();
        if (message.motorSensor != null && Object.hasOwnProperty.call(message, "motorSensor"))
            $root.TemperatureSensorData.encode(message.motorSensor, writer.uint32(/* id 52, wireType 2 =*/418).fork()).ldelim();
        if (message.imuData != null && Object.hasOwnProperty.call(message, "imuData"))
            $root.IMUData.encode(message.imuData, writer.uint32(/* id 53, wireType 2 =*/426).fork()).ldelim();
        if (message.batteryTemperatures != null && message.batteryTemperatures.length) {
            writer.uint32(/* id 54, wireType 2 =*/434).fork();
            for (let i = 0; i < message.batteryTemperatures.length; ++i)
                writer.int32(message.batteryTemperatures[i]);
            writer.ldelim();
        }
        return writer;
    };

    /**
     * Encodes the specified RecordingSample message, length delimited. Does not implicitly {@link RecordingSample.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RecordingSample
     * @static
     * @param {IRecordingSample} message RecordingSample message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RecordingSample.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RecordingSample message from the specified reader or buffer.
     * @function decode
     * @memberof RecordingSample
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RecordingSample} RecordingSample
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RecordingSample.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.RecordingSample();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.unixTime = reader.uint64();
                    break;
                }
            case 2: {
                    message.frameNumber = reader.uint32();
                    break;
                }
            case 3: {
                    message.bluetoothConnected = reader.bool();
                    break;
                }
            case 4: {
                    message.fanCurrent = reader.int32();
                    break;
                }
            case 5: {
                    message.pumpCurrent = reader.int32();
                    break;
                }
            case 6: {
                    message.vcuHumidity = reader.int32();
                    break;
                }
            case 7: {
                    message.vcuTemperature = reader.int32();
                    break;
                }
            case 8: {
                    message.throttleIdFb = reader.int32();
                    break;
                }
            case 9: {
                    message.throttleIqFb = reader.int32();
                    break;
                }
            case 10: {
                    message.throttlePosition = reader.int32();
                    break;
                }
            case 11: {
                    message.map = reader.int32();
                    break;
                }
            case 12: {
                    message.speedKmh = reader.int32();
                    break;
                }
            case 13: {
                    message.motorRpm = reader.int32();
                    break;
                }
            case 14: {
                    message.odometer = reader.int32();
                    break;
                }
            case 15: {
                    message.inverterDcBus = reader.int32();
                    break;
                }
            case 16: {
                    message.inverterIqRef = reader.int32();
                    break;
                }
            case 17: {
                    message.inverterIdRef = reader.int32();
                    break;
                }
            case 18: {
                    message.inverterIq = reader.int32();
                    break;
                }
            case 19: {
                    message.inverterId = reader.int32();
                    break;
                }
            case 20: {
                    message.inverterVq = reader.int32();
                    break;
                }
            case 21: {
                    message.inverterVd = reader.int32();
                    break;
                }
            case 22: {
                    message.mcuTempLogic = reader.int32();
                    break;
                }
            case 23: {
                    message.mcuTempGate = reader.int32();
                    break;
                }
            case 24: {
                    message.ntc1 = reader.int32();
                    break;
                }
            case 25: {
                    message.ntc2 = reader.int32();
                    break;
                }
            case 26: {
                    message.ntc3 = reader.int32();
                    break;
                }
            case 27: {
                    message.inverterPcbTemp = reader.int32();
                    break;
                }
            case 28: {
                    message.inverterPcbHumidity = reader.int32();
                    break;
                }
            case 29: {
                    message.faults = reader.int32();
                    break;
                }
            case 30: {
                    message.status = reader.int32();
                    break;
                }
            case 31: {
                    message.inverterHumidity = reader.int32();
                    break;
                }
            case 32: {
                    message.miscBits = reader.int32();
                    break;
                }
            case 33: {
                    message.indicatorBits = reader.int32();
                    break;
                }
            case 34: {
                    message.alertBits = reader.int32();
                    break;
                }
            case 35: {
                    message.faultBits = reader.int32();
                    break;
                }
            case 36: {
                    message.infoBits = reader.int32();
                    break;
                }
            case 37: {
                    message.batteryDcBus = reader.int32();
                    break;
                }
            case 38: {
                    message.batterySoc = reader.int32();
                    break;
                }
            case 39: {
                    message.batteryCurrent = reader.int32();
                    break;
                }
            case 40: {
                    message.batteryVMin = reader.int32();
                    break;
                }
            case 41: {
                    message.batteryVMax = reader.int32();
                    break;
                }
            case 42: {
                    message.batteryVAvg = reader.int32();
                    break;
                }
            case 43: {
                    message.gpsTimestamp = reader.int32();
                    break;
                }
            case 44: {
                    message.gpsSpeed = reader.float();
                    break;
                }
            case 45: {
                    message.gpsHeading = reader.int32();
                    break;
                }
            case 46: {
                    message.gpsAltitude = reader.int32();
                    break;
                }
            case 47: {
                    message.gpsAccuracy = reader.float();
                    break;
                }
            case 48: {
                    message.gpsAltitudeAccuracy = reader.float();
                    break;
                }
            case 49: {
                    message.gpsLongitude = reader.double();
                    break;
                }
            case 50: {
                    message.gpsLatitude = reader.double();
                    break;
                }
            case 51: {
                    message.igbtSensor = $root.TemperatureSensorData.decode(reader, reader.uint32());
                    break;
                }
            case 52: {
                    message.motorSensor = $root.TemperatureSensorData.decode(reader, reader.uint32());
                    break;
                }
            case 53: {
                    message.imuData = $root.IMUData.decode(reader, reader.uint32());
                    break;
                }
            case 54: {
                    if (!(message.batteryTemperatures && message.batteryTemperatures.length))
                        message.batteryTemperatures = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.batteryTemperatures.push(reader.int32());
                    } else
                        message.batteryTemperatures.push(reader.int32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a RecordingSample message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RecordingSample
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RecordingSample} RecordingSample
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RecordingSample.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RecordingSample message.
     * @function verify
     * @memberof RecordingSample
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RecordingSample.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.unixTime != null && message.hasOwnProperty("unixTime"))
            if (!$util.isInteger(message.unixTime) && !(message.unixTime && $util.isInteger(message.unixTime.low) && $util.isInteger(message.unixTime.high)))
                return "unixTime: integer|Long expected";
        if (message.frameNumber != null && message.hasOwnProperty("frameNumber"))
            if (!$util.isInteger(message.frameNumber))
                return "frameNumber: integer expected";
        if (message.bluetoothConnected != null && message.hasOwnProperty("bluetoothConnected"))
            if (typeof message.bluetoothConnected !== "boolean")
                return "bluetoothConnected: boolean expected";
        if (message.fanCurrent != null && message.hasOwnProperty("fanCurrent"))
            if (!$util.isInteger(message.fanCurrent))
                return "fanCurrent: integer expected";
        if (message.pumpCurrent != null && message.hasOwnProperty("pumpCurrent"))
            if (!$util.isInteger(message.pumpCurrent))
                return "pumpCurrent: integer expected";
        if (message.vcuHumidity != null && message.hasOwnProperty("vcuHumidity"))
            if (!$util.isInteger(message.vcuHumidity))
                return "vcuHumidity: integer expected";
        if (message.vcuTemperature != null && message.hasOwnProperty("vcuTemperature"))
            if (!$util.isInteger(message.vcuTemperature))
                return "vcuTemperature: integer expected";
        if (message.throttleIdFb != null && message.hasOwnProperty("throttleIdFb"))
            if (!$util.isInteger(message.throttleIdFb))
                return "throttleIdFb: integer expected";
        if (message.throttleIqFb != null && message.hasOwnProperty("throttleIqFb"))
            if (!$util.isInteger(message.throttleIqFb))
                return "throttleIqFb: integer expected";
        if (message.throttlePosition != null && message.hasOwnProperty("throttlePosition"))
            if (!$util.isInteger(message.throttlePosition))
                return "throttlePosition: integer expected";
        if (message.map != null && message.hasOwnProperty("map"))
            if (!$util.isInteger(message.map))
                return "map: integer expected";
        if (message.speedKmh != null && message.hasOwnProperty("speedKmh"))
            if (!$util.isInteger(message.speedKmh))
                return "speedKmh: integer expected";
        if (message.motorRpm != null && message.hasOwnProperty("motorRpm"))
            if (!$util.isInteger(message.motorRpm))
                return "motorRpm: integer expected";
        if (message.odometer != null && message.hasOwnProperty("odometer"))
            if (!$util.isInteger(message.odometer))
                return "odometer: integer expected";
        if (message.inverterDcBus != null && message.hasOwnProperty("inverterDcBus"))
            if (!$util.isInteger(message.inverterDcBus))
                return "inverterDcBus: integer expected";
        if (message.inverterIqRef != null && message.hasOwnProperty("inverterIqRef"))
            if (!$util.isInteger(message.inverterIqRef))
                return "inverterIqRef: integer expected";
        if (message.inverterIdRef != null && message.hasOwnProperty("inverterIdRef"))
            if (!$util.isInteger(message.inverterIdRef))
                return "inverterIdRef: integer expected";
        if (message.inverterIq != null && message.hasOwnProperty("inverterIq"))
            if (!$util.isInteger(message.inverterIq))
                return "inverterIq: integer expected";
        if (message.inverterId != null && message.hasOwnProperty("inverterId"))
            if (!$util.isInteger(message.inverterId))
                return "inverterId: integer expected";
        if (message.inverterVq != null && message.hasOwnProperty("inverterVq"))
            if (!$util.isInteger(message.inverterVq))
                return "inverterVq: integer expected";
        if (message.inverterVd != null && message.hasOwnProperty("inverterVd"))
            if (!$util.isInteger(message.inverterVd))
                return "inverterVd: integer expected";
        if (message.mcuTempLogic != null && message.hasOwnProperty("mcuTempLogic"))
            if (!$util.isInteger(message.mcuTempLogic))
                return "mcuTempLogic: integer expected";
        if (message.mcuTempGate != null && message.hasOwnProperty("mcuTempGate"))
            if (!$util.isInteger(message.mcuTempGate))
                return "mcuTempGate: integer expected";
        if (message.ntc1 != null && message.hasOwnProperty("ntc1"))
            if (!$util.isInteger(message.ntc1))
                return "ntc1: integer expected";
        if (message.ntc2 != null && message.hasOwnProperty("ntc2"))
            if (!$util.isInteger(message.ntc2))
                return "ntc2: integer expected";
        if (message.ntc3 != null && message.hasOwnProperty("ntc3"))
            if (!$util.isInteger(message.ntc3))
                return "ntc3: integer expected";
        if (message.inverterPcbTemp != null && message.hasOwnProperty("inverterPcbTemp"))
            if (!$util.isInteger(message.inverterPcbTemp))
                return "inverterPcbTemp: integer expected";
        if (message.inverterPcbHumidity != null && message.hasOwnProperty("inverterPcbHumidity"))
            if (!$util.isInteger(message.inverterPcbHumidity))
                return "inverterPcbHumidity: integer expected";
        if (message.faults != null && message.hasOwnProperty("faults"))
            if (!$util.isInteger(message.faults))
                return "faults: integer expected";
        if (message.status != null && message.hasOwnProperty("status"))
            if (!$util.isInteger(message.status))
                return "status: integer expected";
        if (message.inverterHumidity != null && message.hasOwnProperty("inverterHumidity"))
            if (!$util.isInteger(message.inverterHumidity))
                return "inverterHumidity: integer expected";
        if (message.miscBits != null && message.hasOwnProperty("miscBits"))
            if (!$util.isInteger(message.miscBits))
                return "miscBits: integer expected";
        if (message.indicatorBits != null && message.hasOwnProperty("indicatorBits"))
            if (!$util.isInteger(message.indicatorBits))
                return "indicatorBits: integer expected";
        if (message.alertBits != null && message.hasOwnProperty("alertBits"))
            if (!$util.isInteger(message.alertBits))
                return "alertBits: integer expected";
        if (message.faultBits != null && message.hasOwnProperty("faultBits"))
            if (!$util.isInteger(message.faultBits))
                return "faultBits: integer expected";
        if (message.infoBits != null && message.hasOwnProperty("infoBits"))
            if (!$util.isInteger(message.infoBits))
                return "infoBits: integer expected";
        if (message.batteryDcBus != null && message.hasOwnProperty("batteryDcBus"))
            if (!$util.isInteger(message.batteryDcBus))
                return "batteryDcBus: integer expected";
        if (message.batterySoc != null && message.hasOwnProperty("batterySoc"))
            if (!$util.isInteger(message.batterySoc))
                return "batterySoc: integer expected";
        if (message.batteryCurrent != null && message.hasOwnProperty("batteryCurrent"))
            if (!$util.isInteger(message.batteryCurrent))
                return "batteryCurrent: integer expected";
        if (message.batteryVMin != null && message.hasOwnProperty("batteryVMin"))
            if (!$util.isInteger(message.batteryVMin))
                return "batteryVMin: integer expected";
        if (message.batteryVMax != null && message.hasOwnProperty("batteryVMax"))
            if (!$util.isInteger(message.batteryVMax))
                return "batteryVMax: integer expected";
        if (message.batteryVAvg != null && message.hasOwnProperty("batteryVAvg"))
            if (!$util.isInteger(message.batteryVAvg))
                return "batteryVAvg: integer expected";
        if (message.gpsTimestamp != null && message.hasOwnProperty("gpsTimestamp"))
            if (!$util.isInteger(message.gpsTimestamp))
                return "gpsTimestamp: integer expected";
        if (message.gpsSpeed != null && message.hasOwnProperty("gpsSpeed"))
            if (typeof message.gpsSpeed !== "number")
                return "gpsSpeed: number expected";
        if (message.gpsHeading != null && message.hasOwnProperty("gpsHeading"))
            if (!$util.isInteger(message.gpsHeading))
                return "gpsHeading: integer expected";
        if (message.gpsAltitude != null && message.hasOwnProperty("gpsAltitude"))
            if (!$util.isInteger(message.gpsAltitude))
                return "gpsAltitude: integer expected";
        if (message.gpsAccuracy != null && message.hasOwnProperty("gpsAccuracy"))
            if (typeof message.gpsAccuracy !== "number")
                return "gpsAccuracy: number expected";
        if (message.gpsAltitudeAccuracy != null && message.hasOwnProperty("gpsAltitudeAccuracy"))
            if (typeof message.gpsAltitudeAccuracy !== "number")
                return "gpsAltitudeAccuracy: number expected";
        if (message.gpsLongitude != null && message.hasOwnProperty("gpsLongitude"))
            if (typeof message.gpsLongitude !== "number")
                return "gpsLongitude: number expected";
        if (message.gpsLatitude != null && message.hasOwnProperty("gpsLatitude"))
            if (typeof message.gpsLatitude !== "number")
                return "gpsLatitude: number expected";
        if (message.igbtSensor != null && message.hasOwnProperty("igbtSensor")) {
            let error = $root.TemperatureSensorData.verify(message.igbtSensor);
            if (error)
                return "igbtSensor." + error;
        }
        if (message.motorSensor != null && message.hasOwnProperty("motorSensor")) {
            let error = $root.TemperatureSensorData.verify(message.motorSensor);
            if (error)
                return "motorSensor." + error;
        }
        if (message.imuData != null && message.hasOwnProperty("imuData")) {
            let error = $root.IMUData.verify(message.imuData);
            if (error)
                return "imuData." + error;
        }
        if (message.batteryTemperatures != null && message.hasOwnProperty("batteryTemperatures")) {
            if (!Array.isArray(message.batteryTemperatures))
                return "batteryTemperatures: array expected";
            for (let i = 0; i < message.batteryTemperatures.length; ++i)
                if (!$util.isInteger(message.batteryTemperatures[i]))
                    return "batteryTemperatures: integer[] expected";
        }
        return null;
    };

    /**
     * Creates a RecordingSample message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RecordingSample
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RecordingSample} RecordingSample
     */
    RecordingSample.fromObject = function fromObject(object) {
        if (object instanceof $root.RecordingSample)
            return object;
        let message = new $root.RecordingSample();
        if (object.unixTime != null)
            if ($util.Long)
                (message.unixTime = $util.Long.fromValue(object.unixTime)).unsigned = true;
            else if (typeof object.unixTime === "string")
                message.unixTime = parseInt(object.unixTime, 10);
            else if (typeof object.unixTime === "number")
                message.unixTime = object.unixTime;
            else if (typeof object.unixTime === "object")
                message.unixTime = new $util.LongBits(object.unixTime.low >>> 0, object.unixTime.high >>> 0).toNumber(true);
        if (object.frameNumber != null)
            message.frameNumber = object.frameNumber >>> 0;
        if (object.bluetoothConnected != null)
            message.bluetoothConnected = Boolean(object.bluetoothConnected);
        if (object.fanCurrent != null)
            message.fanCurrent = object.fanCurrent | 0;
        if (object.pumpCurrent != null)
            message.pumpCurrent = object.pumpCurrent | 0;
        if (object.vcuHumidity != null)
            message.vcuHumidity = object.vcuHumidity | 0;
        if (object.vcuTemperature != null)
            message.vcuTemperature = object.vcuTemperature | 0;
        if (object.throttleIdFb != null)
            message.throttleIdFb = object.throttleIdFb | 0;
        if (object.throttleIqFb != null)
            message.throttleIqFb = object.throttleIqFb | 0;
        if (object.throttlePosition != null)
            message.throttlePosition = object.throttlePosition | 0;
        if (object.map != null)
            message.map = object.map | 0;
        if (object.speedKmh != null)
            message.speedKmh = object.speedKmh | 0;
        if (object.motorRpm != null)
            message.motorRpm = object.motorRpm | 0;
        if (object.odometer != null)
            message.odometer = object.odometer | 0;
        if (object.inverterDcBus != null)
            message.inverterDcBus = object.inverterDcBus | 0;
        if (object.inverterIqRef != null)
            message.inverterIqRef = object.inverterIqRef | 0;
        if (object.inverterIdRef != null)
            message.inverterIdRef = object.inverterIdRef | 0;
        if (object.inverterIq != null)
            message.inverterIq = object.inverterIq | 0;
        if (object.inverterId != null)
            message.inverterId = object.inverterId | 0;
        if (object.inverterVq != null)
            message.inverterVq = object.inverterVq | 0;
        if (object.inverterVd != null)
            message.inverterVd = object.inverterVd | 0;
        if (object.mcuTempLogic != null)
            message.mcuTempLogic = object.mcuTempLogic | 0;
        if (object.mcuTempGate != null)
            message.mcuTempGate = object.mcuTempGate | 0;
        if (object.ntc1 != null)
            message.ntc1 = object.ntc1 | 0;
        if (object.ntc2 != null)
            message.ntc2 = object.ntc2 | 0;
        if (object.ntc3 != null)
            message.ntc3 = object.ntc3 | 0;
        if (object.inverterPcbTemp != null)
            message.inverterPcbTemp = object.inverterPcbTemp | 0;
        if (object.inverterPcbHumidity != null)
            message.inverterPcbHumidity = object.inverterPcbHumidity | 0;
        if (object.faults != null)
            message.faults = object.faults | 0;
        if (object.status != null)
            message.status = object.status | 0;
        if (object.inverterHumidity != null)
            message.inverterHumidity = object.inverterHumidity | 0;
        if (object.miscBits != null)
            message.miscBits = object.miscBits | 0;
        if (object.indicatorBits != null)
            message.indicatorBits = object.indicatorBits | 0;
        if (object.alertBits != null)
            message.alertBits = object.alertBits | 0;
        if (object.faultBits != null)
            message.faultBits = object.faultBits | 0;
        if (object.infoBits != null)
            message.infoBits = object.infoBits | 0;
        if (object.batteryDcBus != null)
            message.batteryDcBus = object.batteryDcBus | 0;
        if (object.batterySoc != null)
            message.batterySoc = object.batterySoc | 0;
        if (object.batteryCurrent != null)
            message.batteryCurrent = object.batteryCurrent | 0;
        if (object.batteryVMin != null)
            message.batteryVMin = object.batteryVMin | 0;
        if (object.batteryVMax != null)
            message.batteryVMax = object.batteryVMax | 0;
        if (object.batteryVAvg != null)
            message.batteryVAvg = object.batteryVAvg | 0;
        if (object.gpsTimestamp != null)
            message.gpsTimestamp = object.gpsTimestamp | 0;
        if (object.gpsSpeed != null)
            message.gpsSpeed = Number(object.gpsSpeed);
        if (object.gpsHeading != null)
            message.gpsHeading = object.gpsHeading | 0;
        if (object.gpsAltitude != null)
            message.gpsAltitude = object.gpsAltitude | 0;
        if (object.gpsAccuracy != null)
            message.gpsAccuracy = Number(object.gpsAccuracy);
        if (object.gpsAltitudeAccuracy != null)
            message.gpsAltitudeAccuracy = Number(object.gpsAltitudeAccuracy);
        if (object.gpsLongitude != null)
            message.gpsLongitude = Number(object.gpsLongitude);
        if (object.gpsLatitude != null)
            message.gpsLatitude = Number(object.gpsLatitude);
        if (object.igbtSensor != null) {
            if (typeof object.igbtSensor !== "object")
                throw TypeError(".RecordingSample.igbtSensor: object expected");
            message.igbtSensor = $root.TemperatureSensorData.fromObject(object.igbtSensor);
        }
        if (object.motorSensor != null) {
            if (typeof object.motorSensor !== "object")
                throw TypeError(".RecordingSample.motorSensor: object expected");
            message.motorSensor = $root.TemperatureSensorData.fromObject(object.motorSensor);
        }
        if (object.imuData != null) {
            if (typeof object.imuData !== "object")
                throw TypeError(".RecordingSample.imuData: object expected");
            message.imuData = $root.IMUData.fromObject(object.imuData);
        }
        if (object.batteryTemperatures) {
            if (!Array.isArray(object.batteryTemperatures))
                throw TypeError(".RecordingSample.batteryTemperatures: array expected");
            message.batteryTemperatures = [];
            for (let i = 0; i < object.batteryTemperatures.length; ++i)
                message.batteryTemperatures[i] = object.batteryTemperatures[i] | 0;
        }
        return message;
    };

    /**
     * Creates a plain object from a RecordingSample message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RecordingSample
     * @static
     * @param {RecordingSample} message RecordingSample
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RecordingSample.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults)
            object.batteryTemperatures = [];
        if (options.defaults) {
            if ($util.Long) {
                let long = new $util.Long(0, 0, true);
                object.unixTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.unixTime = options.longs === String ? "0" : 0;
            object.frameNumber = 0;
            object.bluetoothConnected = false;
            object.fanCurrent = 0;
            object.pumpCurrent = 0;
            object.vcuHumidity = 0;
            object.vcuTemperature = 0;
            object.throttleIdFb = 0;
            object.throttleIqFb = 0;
            object.throttlePosition = 0;
            object.map = 0;
            object.speedKmh = 0;
            object.motorRpm = 0;
            object.odometer = 0;
            object.inverterDcBus = 0;
            object.inverterIqRef = 0;
            object.inverterIdRef = 0;
            object.inverterIq = 0;
            object.inverterId = 0;
            object.inverterVq = 0;
            object.inverterVd = 0;
            object.mcuTempLogic = 0;
            object.mcuTempGate = 0;
            object.ntc1 = 0;
            object.ntc2 = 0;
            object.ntc3 = 0;
            object.inverterPcbTemp = 0;
            object.inverterPcbHumidity = 0;
            object.faults = 0;
            object.status = 0;
            object.inverterHumidity = 0;
            object.miscBits = 0;
            object.indicatorBits = 0;
            object.alertBits = 0;
            object.faultBits = 0;
            object.infoBits = 0;
            object.batteryDcBus = 0;
            object.batterySoc = 0;
            object.batteryCurrent = 0;
            object.batteryVMin = 0;
            object.batteryVMax = 0;
            object.batteryVAvg = 0;
            object.gpsTimestamp = 0;
            object.gpsSpeed = 0;
            object.gpsHeading = 0;
            object.gpsAltitude = 0;
            object.gpsAccuracy = 0;
            object.gpsAltitudeAccuracy = 0;
            object.gpsLongitude = 0;
            object.gpsLatitude = 0;
            object.igbtSensor = null;
            object.motorSensor = null;
            object.imuData = null;
        }
        if (message.unixTime != null && message.hasOwnProperty("unixTime"))
            if (typeof message.unixTime === "number")
                object.unixTime = options.longs === String ? String(message.unixTime) : message.unixTime;
            else
                object.unixTime = options.longs === String ? $util.Long.prototype.toString.call(message.unixTime) : options.longs === Number ? new $util.LongBits(message.unixTime.low >>> 0, message.unixTime.high >>> 0).toNumber(true) : message.unixTime;
        if (message.frameNumber != null && message.hasOwnProperty("frameNumber"))
            object.frameNumber = message.frameNumber;
        if (message.bluetoothConnected != null && message.hasOwnProperty("bluetoothConnected"))
            object.bluetoothConnected = message.bluetoothConnected;
        if (message.fanCurrent != null && message.hasOwnProperty("fanCurrent"))
            object.fanCurrent = message.fanCurrent;
        if (message.pumpCurrent != null && message.hasOwnProperty("pumpCurrent"))
            object.pumpCurrent = message.pumpCurrent;
        if (message.vcuHumidity != null && message.hasOwnProperty("vcuHumidity"))
            object.vcuHumidity = message.vcuHumidity;
        if (message.vcuTemperature != null && message.hasOwnProperty("vcuTemperature"))
            object.vcuTemperature = message.vcuTemperature;
        if (message.throttleIdFb != null && message.hasOwnProperty("throttleIdFb"))
            object.throttleIdFb = message.throttleIdFb;
        if (message.throttleIqFb != null && message.hasOwnProperty("throttleIqFb"))
            object.throttleIqFb = message.throttleIqFb;
        if (message.throttlePosition != null && message.hasOwnProperty("throttlePosition"))
            object.throttlePosition = message.throttlePosition;
        if (message.map != null && message.hasOwnProperty("map"))
            object.map = message.map;
        if (message.speedKmh != null && message.hasOwnProperty("speedKmh"))
            object.speedKmh = message.speedKmh;
        if (message.motorRpm != null && message.hasOwnProperty("motorRpm"))
            object.motorRpm = message.motorRpm;
        if (message.odometer != null && message.hasOwnProperty("odometer"))
            object.odometer = message.odometer;
        if (message.inverterDcBus != null && message.hasOwnProperty("inverterDcBus"))
            object.inverterDcBus = message.inverterDcBus;
        if (message.inverterIqRef != null && message.hasOwnProperty("inverterIqRef"))
            object.inverterIqRef = message.inverterIqRef;
        if (message.inverterIdRef != null && message.hasOwnProperty("inverterIdRef"))
            object.inverterIdRef = message.inverterIdRef;
        if (message.inverterIq != null && message.hasOwnProperty("inverterIq"))
            object.inverterIq = message.inverterIq;
        if (message.inverterId != null && message.hasOwnProperty("inverterId"))
            object.inverterId = message.inverterId;
        if (message.inverterVq != null && message.hasOwnProperty("inverterVq"))
            object.inverterVq = message.inverterVq;
        if (message.inverterVd != null && message.hasOwnProperty("inverterVd"))
            object.inverterVd = message.inverterVd;
        if (message.mcuTempLogic != null && message.hasOwnProperty("mcuTempLogic"))
            object.mcuTempLogic = message.mcuTempLogic;
        if (message.mcuTempGate != null && message.hasOwnProperty("mcuTempGate"))
            object.mcuTempGate = message.mcuTempGate;
        if (message.ntc1 != null && message.hasOwnProperty("ntc1"))
            object.ntc1 = message.ntc1;
        if (message.ntc2 != null && message.hasOwnProperty("ntc2"))
            object.ntc2 = message.ntc2;
        if (message.ntc3 != null && message.hasOwnProperty("ntc3"))
            object.ntc3 = message.ntc3;
        if (message.inverterPcbTemp != null && message.hasOwnProperty("inverterPcbTemp"))
            object.inverterPcbTemp = message.inverterPcbTemp;
        if (message.inverterPcbHumidity != null && message.hasOwnProperty("inverterPcbHumidity"))
            object.inverterPcbHumidity = message.inverterPcbHumidity;
        if (message.faults != null && message.hasOwnProperty("faults"))
            object.faults = message.faults;
        if (message.status != null && message.hasOwnProperty("status"))
            object.status = message.status;
        if (message.inverterHumidity != null && message.hasOwnProperty("inverterHumidity"))
            object.inverterHumidity = message.inverterHumidity;
        if (message.miscBits != null && message.hasOwnProperty("miscBits"))
            object.miscBits = message.miscBits;
        if (message.indicatorBits != null && message.hasOwnProperty("indicatorBits"))
            object.indicatorBits = message.indicatorBits;
        if (message.alertBits != null && message.hasOwnProperty("alertBits"))
            object.alertBits = message.alertBits;
        if (message.faultBits != null && message.hasOwnProperty("faultBits"))
            object.faultBits = message.faultBits;
        if (message.infoBits != null && message.hasOwnProperty("infoBits"))
            object.infoBits = message.infoBits;
        if (message.batteryDcBus != null && message.hasOwnProperty("batteryDcBus"))
            object.batteryDcBus = message.batteryDcBus;
        if (message.batterySoc != null && message.hasOwnProperty("batterySoc"))
            object.batterySoc = message.batterySoc;
        if (message.batteryCurrent != null && message.hasOwnProperty("batteryCurrent"))
            object.batteryCurrent = message.batteryCurrent;
        if (message.batteryVMin != null && message.hasOwnProperty("batteryVMin"))
            object.batteryVMin = message.batteryVMin;
        if (message.batteryVMax != null && message.hasOwnProperty("batteryVMax"))
            object.batteryVMax = message.batteryVMax;
        if (message.batteryVAvg != null && message.hasOwnProperty("batteryVAvg"))
            object.batteryVAvg = message.batteryVAvg;
        if (message.gpsTimestamp != null && message.hasOwnProperty("gpsTimestamp"))
            object.gpsTimestamp = message.gpsTimestamp;
        if (message.gpsSpeed != null && message.hasOwnProperty("gpsSpeed"))
            object.gpsSpeed = options.json && !isFinite(message.gpsSpeed) ? String(message.gpsSpeed) : message.gpsSpeed;
        if (message.gpsHeading != null && message.hasOwnProperty("gpsHeading"))
            object.gpsHeading = message.gpsHeading;
        if (message.gpsAltitude != null && message.hasOwnProperty("gpsAltitude"))
            object.gpsAltitude = message.gpsAltitude;
        if (message.gpsAccuracy != null && message.hasOwnProperty("gpsAccuracy"))
            object.gpsAccuracy = options.json && !isFinite(message.gpsAccuracy) ? String(message.gpsAccuracy) : message.gpsAccuracy;
        if (message.gpsAltitudeAccuracy != null && message.hasOwnProperty("gpsAltitudeAccuracy"))
            object.gpsAltitudeAccuracy = options.json && !isFinite(message.gpsAltitudeAccuracy) ? String(message.gpsAltitudeAccuracy) : message.gpsAltitudeAccuracy;
        if (message.gpsLongitude != null && message.hasOwnProperty("gpsLongitude"))
            object.gpsLongitude = options.json && !isFinite(message.gpsLongitude) ? String(message.gpsLongitude) : message.gpsLongitude;
        if (message.gpsLatitude != null && message.hasOwnProperty("gpsLatitude"))
            object.gpsLatitude = options.json && !isFinite(message.gpsLatitude) ? String(message.gpsLatitude) : message.gpsLatitude;
        if (message.igbtSensor != null && message.hasOwnProperty("igbtSensor"))
            object.igbtSensor = $root.TemperatureSensorData.toObject(message.igbtSensor, options);
        if (message.motorSensor != null && message.hasOwnProperty("motorSensor"))
            object.motorSensor = $root.TemperatureSensorData.toObject(message.motorSensor, options);
        if (message.imuData != null && message.hasOwnProperty("imuData"))
            object.imuData = $root.IMUData.toObject(message.imuData, options);
        if (message.batteryTemperatures && message.batteryTemperatures.length) {
            object.batteryTemperatures = [];
            for (let j = 0; j < message.batteryTemperatures.length; ++j)
                object.batteryTemperatures[j] = message.batteryTemperatures[j];
        }
        return object;
    };

    /**
     * Converts this RecordingSample to JSON.
     * @function toJSON
     * @memberof RecordingSample
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RecordingSample.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for RecordingSample
     * @function getTypeUrl
     * @memberof RecordingSample
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    RecordingSample.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/RecordingSample";
    };

    return RecordingSample;
})();

export const IMUData = $root.IMUData = (() => {

    /**
     * Properties of a IMUData.
     * @exports IIMUData
     * @interface IIMUData
     * @property {number|null} [accelX] IMUData accelX
     * @property {number|null} [accelY] IMUData accelY
     * @property {number|null} [accelZ] IMUData accelZ
     * @property {number|null} [gyroX] IMUData gyroX
     * @property {number|null} [gyroY] IMUData gyroY
     * @property {number|null} [gyroZ] IMUData gyroZ
     */

    /**
     * Constructs a new IMUData.
     * @exports IMUData
     * @classdesc Represents a IMUData.
     * @implements IIMUData
     * @constructor
     * @param {IIMUData=} [properties] Properties to set
     */
    function IMUData(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * IMUData accelX.
     * @member {number} accelX
     * @memberof IMUData
     * @instance
     */
    IMUData.prototype.accelX = 0;

    /**
     * IMUData accelY.
     * @member {number} accelY
     * @memberof IMUData
     * @instance
     */
    IMUData.prototype.accelY = 0;

    /**
     * IMUData accelZ.
     * @member {number} accelZ
     * @memberof IMUData
     * @instance
     */
    IMUData.prototype.accelZ = 0;

    /**
     * IMUData gyroX.
     * @member {number} gyroX
     * @memberof IMUData
     * @instance
     */
    IMUData.prototype.gyroX = 0;

    /**
     * IMUData gyroY.
     * @member {number} gyroY
     * @memberof IMUData
     * @instance
     */
    IMUData.prototype.gyroY = 0;

    /**
     * IMUData gyroZ.
     * @member {number} gyroZ
     * @memberof IMUData
     * @instance
     */
    IMUData.prototype.gyroZ = 0;

    /**
     * Creates a new IMUData instance using the specified properties.
     * @function create
     * @memberof IMUData
     * @static
     * @param {IIMUData=} [properties] Properties to set
     * @returns {IMUData} IMUData instance
     */
    IMUData.create = function create(properties) {
        return new IMUData(properties);
    };

    /**
     * Encodes the specified IMUData message. Does not implicitly {@link IMUData.verify|verify} messages.
     * @function encode
     * @memberof IMUData
     * @static
     * @param {IIMUData} message IMUData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    IMUData.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.accelX != null && Object.hasOwnProperty.call(message, "accelX"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.accelX);
        if (message.accelY != null && Object.hasOwnProperty.call(message, "accelY"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.accelY);
        if (message.accelZ != null && Object.hasOwnProperty.call(message, "accelZ"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.accelZ);
        if (message.gyroX != null && Object.hasOwnProperty.call(message, "gyroX"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.gyroX);
        if (message.gyroY != null && Object.hasOwnProperty.call(message, "gyroY"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.gyroY);
        if (message.gyroZ != null && Object.hasOwnProperty.call(message, "gyroZ"))
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.gyroZ);
        return writer;
    };

    /**
     * Encodes the specified IMUData message, length delimited. Does not implicitly {@link IMUData.verify|verify} messages.
     * @function encodeDelimited
     * @memberof IMUData
     * @static
     * @param {IIMUData} message IMUData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    IMUData.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a IMUData message from the specified reader or buffer.
     * @function decode
     * @memberof IMUData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {IMUData} IMUData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    IMUData.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.IMUData();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.accelX = reader.int32();
                    break;
                }
            case 2: {
                    message.accelY = reader.int32();
                    break;
                }
            case 3: {
                    message.accelZ = reader.int32();
                    break;
                }
            case 4: {
                    message.gyroX = reader.int32();
                    break;
                }
            case 5: {
                    message.gyroY = reader.int32();
                    break;
                }
            case 6: {
                    message.gyroZ = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a IMUData message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof IMUData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {IMUData} IMUData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    IMUData.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a IMUData message.
     * @function verify
     * @memberof IMUData
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    IMUData.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.accelX != null && message.hasOwnProperty("accelX"))
            if (!$util.isInteger(message.accelX))
                return "accelX: integer expected";
        if (message.accelY != null && message.hasOwnProperty("accelY"))
            if (!$util.isInteger(message.accelY))
                return "accelY: integer expected";
        if (message.accelZ != null && message.hasOwnProperty("accelZ"))
            if (!$util.isInteger(message.accelZ))
                return "accelZ: integer expected";
        if (message.gyroX != null && message.hasOwnProperty("gyroX"))
            if (!$util.isInteger(message.gyroX))
                return "gyroX: integer expected";
        if (message.gyroY != null && message.hasOwnProperty("gyroY"))
            if (!$util.isInteger(message.gyroY))
                return "gyroY: integer expected";
        if (message.gyroZ != null && message.hasOwnProperty("gyroZ"))
            if (!$util.isInteger(message.gyroZ))
                return "gyroZ: integer expected";
        return null;
    };

    /**
     * Creates a IMUData message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof IMUData
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {IMUData} IMUData
     */
    IMUData.fromObject = function fromObject(object) {
        if (object instanceof $root.IMUData)
            return object;
        let message = new $root.IMUData();
        if (object.accelX != null)
            message.accelX = object.accelX | 0;
        if (object.accelY != null)
            message.accelY = object.accelY | 0;
        if (object.accelZ != null)
            message.accelZ = object.accelZ | 0;
        if (object.gyroX != null)
            message.gyroX = object.gyroX | 0;
        if (object.gyroY != null)
            message.gyroY = object.gyroY | 0;
        if (object.gyroZ != null)
            message.gyroZ = object.gyroZ | 0;
        return message;
    };

    /**
     * Creates a plain object from a IMUData message. Also converts values to other types if specified.
     * @function toObject
     * @memberof IMUData
     * @static
     * @param {IMUData} message IMUData
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    IMUData.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.accelX = 0;
            object.accelY = 0;
            object.accelZ = 0;
            object.gyroX = 0;
            object.gyroY = 0;
            object.gyroZ = 0;
        }
        if (message.accelX != null && message.hasOwnProperty("accelX"))
            object.accelX = message.accelX;
        if (message.accelY != null && message.hasOwnProperty("accelY"))
            object.accelY = message.accelY;
        if (message.accelZ != null && message.hasOwnProperty("accelZ"))
            object.accelZ = message.accelZ;
        if (message.gyroX != null && message.hasOwnProperty("gyroX"))
            object.gyroX = message.gyroX;
        if (message.gyroY != null && message.hasOwnProperty("gyroY"))
            object.gyroY = message.gyroY;
        if (message.gyroZ != null && message.hasOwnProperty("gyroZ"))
            object.gyroZ = message.gyroZ;
        return object;
    };

    /**
     * Converts this IMUData to JSON.
     * @function toJSON
     * @memberof IMUData
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    IMUData.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for IMUData
     * @function getTypeUrl
     * @memberof IMUData
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    IMUData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/IMUData";
    };

    return IMUData;
})();

export const TemperatureSensorData = $root.TemperatureSensorData = (() => {

    /**
     * Properties of a TemperatureSensorData.
     * @exports ITemperatureSensorData
     * @interface ITemperatureSensorData
     * @property {number|null} [sensor1] TemperatureSensorData sensor1
     * @property {number|null} [sensor2] TemperatureSensorData sensor2
     * @property {number|null} [sensor3] TemperatureSensorData sensor3
     * @property {boolean|null} [valid] TemperatureSensorData valid
     * @property {boolean|null} [used] TemperatureSensorData used
     */

    /**
     * Constructs a new TemperatureSensorData.
     * @exports TemperatureSensorData
     * @classdesc Represents a TemperatureSensorData.
     * @implements ITemperatureSensorData
     * @constructor
     * @param {ITemperatureSensorData=} [properties] Properties to set
     */
    function TemperatureSensorData(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * TemperatureSensorData sensor1.
     * @member {number} sensor1
     * @memberof TemperatureSensorData
     * @instance
     */
    TemperatureSensorData.prototype.sensor1 = 0;

    /**
     * TemperatureSensorData sensor2.
     * @member {number} sensor2
     * @memberof TemperatureSensorData
     * @instance
     */
    TemperatureSensorData.prototype.sensor2 = 0;

    /**
     * TemperatureSensorData sensor3.
     * @member {number} sensor3
     * @memberof TemperatureSensorData
     * @instance
     */
    TemperatureSensorData.prototype.sensor3 = 0;

    /**
     * TemperatureSensorData valid.
     * @member {boolean} valid
     * @memberof TemperatureSensorData
     * @instance
     */
    TemperatureSensorData.prototype.valid = false;

    /**
     * TemperatureSensorData used.
     * @member {boolean} used
     * @memberof TemperatureSensorData
     * @instance
     */
    TemperatureSensorData.prototype.used = false;

    /**
     * Creates a new TemperatureSensorData instance using the specified properties.
     * @function create
     * @memberof TemperatureSensorData
     * @static
     * @param {ITemperatureSensorData=} [properties] Properties to set
     * @returns {TemperatureSensorData} TemperatureSensorData instance
     */
    TemperatureSensorData.create = function create(properties) {
        return new TemperatureSensorData(properties);
    };

    /**
     * Encodes the specified TemperatureSensorData message. Does not implicitly {@link TemperatureSensorData.verify|verify} messages.
     * @function encode
     * @memberof TemperatureSensorData
     * @static
     * @param {ITemperatureSensorData} message TemperatureSensorData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TemperatureSensorData.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.sensor1 != null && Object.hasOwnProperty.call(message, "sensor1"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.sensor1);
        if (message.sensor2 != null && Object.hasOwnProperty.call(message, "sensor2"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.sensor2);
        if (message.sensor3 != null && Object.hasOwnProperty.call(message, "sensor3"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.sensor3);
        if (message.valid != null && Object.hasOwnProperty.call(message, "valid"))
            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.valid);
        if (message.used != null && Object.hasOwnProperty.call(message, "used"))
            writer.uint32(/* id 5, wireType 0 =*/40).bool(message.used);
        return writer;
    };

    /**
     * Encodes the specified TemperatureSensorData message, length delimited. Does not implicitly {@link TemperatureSensorData.verify|verify} messages.
     * @function encodeDelimited
     * @memberof TemperatureSensorData
     * @static
     * @param {ITemperatureSensorData} message TemperatureSensorData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TemperatureSensorData.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a TemperatureSensorData message from the specified reader or buffer.
     * @function decode
     * @memberof TemperatureSensorData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {TemperatureSensorData} TemperatureSensorData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TemperatureSensorData.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.TemperatureSensorData();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.sensor1 = reader.int32();
                    break;
                }
            case 2: {
                    message.sensor2 = reader.int32();
                    break;
                }
            case 3: {
                    message.sensor3 = reader.int32();
                    break;
                }
            case 4: {
                    message.valid = reader.bool();
                    break;
                }
            case 5: {
                    message.used = reader.bool();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a TemperatureSensorData message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof TemperatureSensorData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {TemperatureSensorData} TemperatureSensorData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TemperatureSensorData.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a TemperatureSensorData message.
     * @function verify
     * @memberof TemperatureSensorData
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    TemperatureSensorData.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.sensor1 != null && message.hasOwnProperty("sensor1"))
            if (!$util.isInteger(message.sensor1))
                return "sensor1: integer expected";
        if (message.sensor2 != null && message.hasOwnProperty("sensor2"))
            if (!$util.isInteger(message.sensor2))
                return "sensor2: integer expected";
        if (message.sensor3 != null && message.hasOwnProperty("sensor3"))
            if (!$util.isInteger(message.sensor3))
                return "sensor3: integer expected";
        if (message.valid != null && message.hasOwnProperty("valid"))
            if (typeof message.valid !== "boolean")
                return "valid: boolean expected";
        if (message.used != null && message.hasOwnProperty("used"))
            if (typeof message.used !== "boolean")
                return "used: boolean expected";
        return null;
    };

    /**
     * Creates a TemperatureSensorData message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof TemperatureSensorData
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {TemperatureSensorData} TemperatureSensorData
     */
    TemperatureSensorData.fromObject = function fromObject(object) {
        if (object instanceof $root.TemperatureSensorData)
            return object;
        let message = new $root.TemperatureSensorData();
        if (object.sensor1 != null)
            message.sensor1 = object.sensor1 | 0;
        if (object.sensor2 != null)
            message.sensor2 = object.sensor2 | 0;
        if (object.sensor3 != null)
            message.sensor3 = object.sensor3 | 0;
        if (object.valid != null)
            message.valid = Boolean(object.valid);
        if (object.used != null)
            message.used = Boolean(object.used);
        return message;
    };

    /**
     * Creates a plain object from a TemperatureSensorData message. Also converts values to other types if specified.
     * @function toObject
     * @memberof TemperatureSensorData
     * @static
     * @param {TemperatureSensorData} message TemperatureSensorData
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    TemperatureSensorData.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.sensor1 = 0;
            object.sensor2 = 0;
            object.sensor3 = 0;
            object.valid = false;
            object.used = false;
        }
        if (message.sensor1 != null && message.hasOwnProperty("sensor1"))
            object.sensor1 = message.sensor1;
        if (message.sensor2 != null && message.hasOwnProperty("sensor2"))
            object.sensor2 = message.sensor2;
        if (message.sensor3 != null && message.hasOwnProperty("sensor3"))
            object.sensor3 = message.sensor3;
        if (message.valid != null && message.hasOwnProperty("valid"))
            object.valid = message.valid;
        if (message.used != null && message.hasOwnProperty("used"))
            object.used = message.used;
        return object;
    };

    /**
     * Converts this TemperatureSensorData to JSON.
     * @function toJSON
     * @memberof TemperatureSensorData
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    TemperatureSensorData.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for TemperatureSensorData
     * @function getTypeUrl
     * @memberof TemperatureSensorData
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    TemperatureSensorData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/TemperatureSensorData";
    };

    return TemperatureSensorData;
})();

export { $root as default };
