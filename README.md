# Svag Telemetry Format (STF)

This repository contains a very simple protobuf based file format for telemetry data recorded by the Svag app, a third party application for the Stark Varg series of electric motorcycles. This format is designed to record samples of all the relevant telemetry data produced by the VCU.

## Format Details

The format mostly replicates the data available via the Bluetooth interface, and the units also directly match the data received via this interface. This can produce unexpected results as different fields may use different units depending on Stark's internal design.

### Power Usage

One very common question when processing a STF file would be calculating the instantaneous motor power. This can be done with two fields, the `battery_dc_bus` and `battery_current`. First you must divide `battery_dc_bus` by 10 to convert it into volts. Next we can simply do the standard electrical calculation of current _ voltage, or in our case: `(battery_dc_bus / 10) _ battery_current`.

To calculate the HP from the KW used in the motor we must know the motors power factor. For at least the Varg EX and probably the MX this value is 0.0011. Multiplying the motor wattage by this value produces the instantaneous HP used.

### Battery Cell Voltages

While not all recordings may include this data as its very verbose, the battery cell voltages include a value for all 100 cell groups. One half of the pack is indexes 0-49 and the other half is 50-99. Cell voltages are recorded in 1/10000 of a volt, _not_ millivolts.

### GPS Data

GPS data from the VCU is not available so these fields are intended for the recording device to fill in. This data is intended to be contextual rather than authoritative.
