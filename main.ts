input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.magneticForce(Dimension.Strength))
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "door open") {
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.showIcon(IconNames.No)
    } else if (receivedString == "door closed") {
        basic.showIcon(IconNames.Yes)
    }
})
radio.setGroup(17)
basic.forever(function () {
    if (input.magneticForce(Dimension.Strength) < 100) {
        basic.showIcon(IconNames.SmallDiamond)
        radio.sendString("door open")
    } else {
        basic.clearScreen()
        radio.sendString("door close")
    }
    basic.pause(2000)
})
