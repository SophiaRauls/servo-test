for (let index = 0; index < 10; index++) {
    pins.servoWritePin(AnalogPin.P1, 45)
    pins.servoWritePin(AnalogPin.P2, 45)
    basic.pause(10000)
    pins.servoWritePin(AnalogPin.P1, 180)
    pins.servoWritePin(AnalogPin.P2, 180)
    basic.pause(10000)
}
