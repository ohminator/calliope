let testing: number[] = []
let pos = 0
let alleZahlen: number[] = []
let Bars: number[] = []
let zufallsIndex = 0
function clear_led () {
    for (let x = 0; x <= 4; x++) {
        for (let y = 0; y <= 4; y++) {
            led.unplot(x, y)
        }
    }
}
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    testing = [
    2,
    2,
    2,
    2,
    2
    ]
    display_values(testing)
})
function display_values (Led_value_array: number[]) {
    pos = 0
    for (let Wert of Led_value_array) {
        for (let Index = 0; Index <= 4; Index++) {
            if (Wert > Index) {
                led.plot(pos, 4 - Index)
            }
        }
        pos += 1
    }
}
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        clear_led()
        // Liste mit allen möglichen Zahlen
        alleZahlen = [
        0,
        1,
        2,
        3,
        4,
        5
        ]
        Bars = []
        // 5 verschiedene Zahlen ziehen
        for (let index = 0; index < 5; index++) {
            zufallsIndex = randint(0, alleZahlen.length - 1)
            Bars.push(alleZahlen[zufallsIndex])
            alleZahlen.removeAt(zufallsIndex)
        }
        display_values(Bars)
        basic.pause(500)
    }
})
