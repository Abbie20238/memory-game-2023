input.onPinPressed(TouchPin.P0, function () {
    basic.showArrow(ArrowNames.North)
    basic.pause(100)
    basic.showArrow(ArrowNames.SouthEast)
    basic.pause(100)
    basic.showArrow(ArrowNames.SouthWest)
    basic.pause(100)
    basic.showArrow(ArrowNames.NorthEast)
    basic.pause(100)
    basic.showArrow(ArrowNames.West)
    basic.pause(100)
    basic.clearScreen()
    basic.showNumber(1)
    basic.pause(900)
    basic.showArrow(ArrowNames.South)
    basic.pause(350)
    basic.showArrow(ArrowNames.SouthWest)
    basic.pause(350)
    basic.showArrow(ArrowNames.NorthEast)
    basic.pause(350)
    basic.showArrow(ArrowNames.North)
    basic.pause(350)
    basic.showArrow(ArrowNames.West)
    basic.pause(350)
    basic.clearScreen()
    basic.showNumber(2)
    basic.pause(900)
    basic.showArrow(ArrowNames.North)
    basic.pause(350)
    basic.showArrow(ArrowNames.SouthEast)
    basic.pause(350)
    basic.showArrow(ArrowNames.SouthWest)
    basic.pause(350)
    basic.showArrow(ArrowNames.NorthEast)
    basic.pause(350)
    basic.showArrow(ArrowNames.West)
    basic.pause(350)
    basic.clearScreen()
    basic.showNumber(3)
    basic.pause(900)
    basic.showArrow(ArrowNames.East)
    basic.pause(350)
    basic.showArrow(ArrowNames.South)
    basic.pause(350)
    basic.showArrow(ArrowNames.NorthEast)
    basic.pause(350)
    basic.showArrow(ArrowNames.North)
    basic.pause(350)
    basic.showArrow(ArrowNames.West)
    basic.pause(350)
    music.stopAllSounds()
    basic.clearScreen()
    basic.showString("1:A")
    basic.showString("2:B")
    basic.showString("3:A+B")
})
input.onButtonPressed(Button.A, function () {
	
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showArrow(ArrowNames.North)
    basic.pause(100)
    basic.showArrow(ArrowNames.SouthEast)
    basic.pause(100)
    basic.showArrow(ArrowNames.SouthWest)
    basic.pause(100)
    basic.showArrow(ArrowNames.NorthEast)
    basic.pause(100)
    basic.showArrow(ArrowNames.West)
    basic.pause(100)
    basic.clearScreen()
    basic.showNumber(1)
    basic.pause(900)
    basic.showArrow(ArrowNames.South)
    basic.pause(350)
    basic.showArrow(ArrowNames.SouthWest)
    basic.pause(350)
    basic.showArrow(ArrowNames.NorthEast)
    basic.pause(350)
    basic.showArrow(ArrowNames.North)
    basic.pause(350)
    basic.showArrow(ArrowNames.West)
    basic.pause(350)
    basic.clearScreen()
    basic.showNumber(2)
    basic.pause(900)
    basic.showArrow(ArrowNames.North)
    basic.pause(350)
    basic.showArrow(ArrowNames.SouthEast)
    basic.pause(350)
    basic.showArrow(ArrowNames.SouthWest)
    basic.pause(350)
    basic.showArrow(ArrowNames.NorthEast)
    basic.pause(350)
    basic.showArrow(ArrowNames.West)
    basic.pause(350)
    basic.clearScreen()
    basic.showNumber(3)
    basic.pause(900)
    basic.showArrow(ArrowNames.East)
    basic.pause(350)
    basic.showArrow(ArrowNames.South)
    basic.pause(350)
    basic.showArrow(ArrowNames.NorthEast)
    basic.pause(350)
    basic.showArrow(ArrowNames.North)
    basic.pause(350)
    basic.showArrow(ArrowNames.West)
    basic.pause(350)
    music.stopAllSounds()
    basic.clearScreen()
    basic.showString("1:A")
    basic.showString("2:B")
    basic.showString("3:A+B")
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showArrow(ArrowNames.East)
    basic.pause(100)
    basic.showArrow(ArrowNames.South)
    basic.pause(100)
    basic.showArrow(ArrowNames.West)
    basic.pause(100)
    basic.showArrow(ArrowNames.North)
    basic.pause(100)
    basic.showArrow(ArrowNames.NorthEast)
    basic.pause(100)
    basic.clearScreen()
    basic.showNumber(1)
    basic.pause(900)
    basic.showArrow(ArrowNames.East)
    basic.pause(350)
    basic.showArrow(ArrowNames.South)
    basic.pause(350)
    basic.showArrow(ArrowNames.West)
    basic.pause(350)
    basic.showArrow(ArrowNames.North)
    basic.pause(350)
    basic.showArrow(ArrowNames.NorthEast)
    basic.pause(350)
    basic.clearScreen()
    basic.showNumber(2)
    basic.pause(900)
    basic.showArrow(ArrowNames.East)
    basic.pause(350)
    basic.showArrow(ArrowNames.SouthWest)
    basic.pause(350)
    basic.showArrow(ArrowNames.West)
    basic.pause(350)
    basic.showArrow(ArrowNames.NorthEast)
    basic.pause(350)
    basic.showArrow(ArrowNames.West)
    basic.pause(350)
    basic.clearScreen()
    basic.showNumber(3)
    basic.pause(900)
    basic.showArrow(ArrowNames.East)
    basic.pause(350)
    basic.showArrow(ArrowNames.South)
    basic.pause(350)
    basic.showArrow(ArrowNames.NorthWest)
    basic.pause(350)
    basic.showArrow(ArrowNames.East)
    basic.pause(350)
    basic.showArrow(ArrowNames.North)
    basic.pause(350)
    music.stopAllSounds()
    basic.clearScreen()
    basic.showString("1:A")
    basic.showString("2:B")
    basic.showString("3:A+B")
})
input.onLogoEvent(TouchButtonEvent.Released, function () {
    for (let index = 0; index < 6; index++) {
        music.playMelody("C5 B C5 G E F A D ", 120)
    }
})
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0)) {
        while (input.buttonIsPressed(Button.A)) {
            basic.showString("Right good memory")
            basic.showIcon(IconNames.Happy)
        }
    }
})
basic.forever(function () {
	
})
basic.forever(function () {
	
})
basic.forever(function () {
	
})
basic.forever(function () {
	
})
