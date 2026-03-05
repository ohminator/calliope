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
    display_values("", Bars)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    for (let r = 0; r <= Bars.length; r++) {
        for (let i = 0; i <= Bars.length - r; i++) {
            if (Bars[i] > Bars[i + 1]) {
                [Bars[i], Bars[i + 1]] = [Bars[i + 1], Bars[i]]
                clear_led()
                basic.showString("R" + r)
                basic.pause(300)
                for (let array_item of Bars) {
                    basic.showNumber(array_item)
                    basic.pause(400)
                pause(1000)
            }
        }
    }
    clear_led()
    display_values(Bars)
})

function display_values (Text: string, Led_value_array: number[]) {
    basic.showString(Text)
    basic.pause(300)
    for (let array_item of Led_value_array) {
        basic.showNumber(array_item)
        basic.pause(400)
    }
}

let pos = 0
let Index2 = 0
let used_numbers: number[] = []
// (B button zeigt 2x5 leds an, test Funktion)
// 
// 
// Author: nicht Finn
// 
// Unfertiges Script, dass mit dem A button mit 5 Balken Zufallszahlen von 0 bis 5 zeigt
let Bars: number[] = []
let Index = 0
