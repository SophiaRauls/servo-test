let Feuchte = 0
let Temperatur = 0
let Wasser = 0
for (let index = 0; index < 2; index++) {
    pins.servoWritePin(AnalogPin.P1, 45)
    pins.servoWritePin(AnalogPin.P2, 45)
    basic.pause(1000)
    pins.servoWritePin(AnalogPin.P1, 180)
    pins.servoWritePin(AnalogPin.P2, 180)
    basic.pause(1000)
}
basic.forever(function () {
    Temperatur = pins.analogReadPin(AnalogPin.C16)
    Feuchte = pins.analogReadPin(AnalogPin.C17)
    basic.showNumber(Temperatur)
    if (Temperatur >= 495) {
        pins.servoWritePin(AnalogPin.P1, 180)
    } else {
        pins.servoWritePin(AnalogPin.P1, 45)
    }
})
basic.forever(function () {
    basic.setLedColor(0xff0080)
})
