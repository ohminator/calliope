//
// Author: nicht Finn
// Unfertiges Script, dass mit dem A button mit 5 Balken Zufallszahlen von 0 bis 5 zeigt
// (B button zeigt 2x5 leds an, test Funktion)
//
let testing : number[] = []
let pos = 0
let Bars : number[] = []
function clear_led() {
    for (let x = 0; x < 5; x++) {
        for (let y = 0; y < 5; y++) {
            led.unplot(x, y)
        }
    }
}

input.onButtonEvent(Button.B, input.buttonEventClick(), function on_button_b() {
    
    testing = [1, 1, 1, 1, 1]
    display_values(testing)
})
function display_values(Led_value_array: number[]) {
    
    pos = 0
    for (let Wert of Led_value_array) {
        for (let Index = 0; Index < 6; Index++) {
            if (Wert >= Index) {
                if (Wert != 0) {
                    led.toggle(pos, Index)
                }
                
            }
            
        }
        pos += 1
    }
}

basic.forever(function on_forever() {
    
    if (input.buttonIsPressed(Button.A)) {
        clear_led()
        Bars = [0, 0, 0, 0, 0]
        for (let Row = 0; Row < 5; Row++) {
            Bars[Row] = randint(0, 5)
        }
        display_values(Bars)
    }
    
})
