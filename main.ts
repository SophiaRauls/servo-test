let Temp = 0
for (let index = 0; index < 2; index++) {
    pins.servoWritePin(AnalogPin.P1, 45)
    pins.servoWritePin(AnalogPin.P2, 45)
    basic.pause(1000)
    pins.servoWritePin(AnalogPin.P1, 180)
    pins.servoWritePin(AnalogPin.P2, 180)
    basic.pause(1000)
}
while (true) {
    Temp = pins.analogReadPin(AnalogReadWritePin.C16)
    basic.showNumber(Temp)
    if (Temp >= 495) {
        pins.servoWritePin(AnalogPin.P1, 180)
    } else {
        pins.servoWritePin(AnalogPin.P1, 45)
    }
}
