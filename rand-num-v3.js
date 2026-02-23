/**
 * (B button zeigt 2x5 leds an, test Funktion)
 */
/**
 * Author: nicht Finn
 */
// Unfertiges Script, dass mit dem A button mit 5 Balken Zufallszahlen von 0 bis 5 zeigt
let Bars: number[] = []

function clear_led () {
    for (let x = 0; x <= 4; x++) {
        for (let y = 0; y <= 4; y++) {
            led.unplot(x, y)
        }
    }
}
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    clear_led()
    used_numbers = [
    0,
    1,
    2,
    3,
    4
    ]
    for (let Row = 0; Row <= 4; Row++) {
        Index2 = randint(0, used_numbers.length - 1)
        Bars[Row] = used_numbers.removeAt(Index2)
    }
    display_values(Bars)
})

input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    for (let i = 0; i <= 4; i++) {
        if (Bars[i] > Bars[i + 1]) {
            [Bars[i], Bars[i + 1]] = [Bars[i + 1], Bars[i]];
        }
    }
    clear_led()
    display_values(Bars)
})

function display_values (Led_value_array: number[]) {
    pos = 0
    for (let Wert of Led_value_array) {
        for (let Index3 = 0; Index3 <= 4; Index3++) {
            if (Wert >= Index3) {
                led.toggle(pos, Index3)
            }
        }
        pos += 1
    }
}
input.onGesture(Gesture.ThreeG, function () {
    display_values([
    4,
    4,
    4,
    4,
    4
    ])
})
let pos = 0
let Index2 = 0
let used_numbers: number[] = []
let Index = 0
