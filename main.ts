input.onButtonPressed(Button.A, function () {
    basic.showNumber(A)
    A += 1
})
input.onButtonPressed(Button.AB, function () {
    Texto = 0
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(B)
    B += -1
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("" + (Texto))
})
let B = 0
let A = 0
let Texto = 0
let Numero = 0
Texto = "hola"
