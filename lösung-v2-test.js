let original = [0, 0, 0, 0, 0, 0]
let zahlen = [0, 0, 0, 0, 0, 0]

function arrayAnzeigen() {
    for (let i = 0; i < zahlen.length; i++) {
        basic.showNumber(zahlen[i])
        basic.pause(500)
    }
}

function arrayZuruecksetzen() {
    for (let i = 0; i < original.length; i++) {
        zahlen[i] = original[i]
    }
}

input.onButtonPressed(Button.A, function () {
    for (let i = 0; i < original.length; i++) {
        let neu = Math.randomRange(1, 9)
        let doppelt = true
        while (doppelt) {
            doppelt = false
            for (let j = 0; j < i; j++) {
                if (original[j] == neu){

                    doppelt = true
                neu = Math.randomRange(1, 9)
                }
            }
            original[i] = neu
        }



    }
    arrayZuruecksetzen()
    basic.showString("A")
    basic.pause(30)
    arrayAnzeigen()
})


input.onButtonPressed(Button.B, function () {
    arrayZuruecksetzen()
    basic.showString("SEL")
    basic.pause(300)
    for (let i = 0; i < zahlen.length; i++) {
        let minimum = i;
        for (let j = i + 1; j < zahlen.length; j++) {
            if (zahlen[j] < zahlen[minimum]) {
                minimum = zahlen[j]
            }
        }
    





    //for (let runde = 0; runde < zahlen.length; runde++) {
    //    for (let i = 0; i < zahlen.length - 1 - runde; i++) {
    //        if (zahlen[i] > zahlen[i + 1]) {
    //            let temp = zahlen[i]
    //            zahlen[i] = zahlen[i + 1]
    //            zahlen[i + 1] = temp
    //        }
    //    }
    //    basic.showString("R" + runde)
    //    basic.pause(300)
    //    arrayAnzeigen()
    //    basic.pause(1000)
    //
    //}
    basic.showString("R" + i)
    basic.pause(300)
    arrayAnzeigen()
    basic.pause(1000)
    }
    
})
