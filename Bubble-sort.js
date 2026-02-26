function bubbleSortAnimated(arr: number[]) {
    for (let pass = 0; pass < arr.length - 1; pass++) {
        for (let i = 0; i < arr.length - 1 - pass; i++) {

            // --- comparison visualization ---
            clear_led()
            display_values(arr)
            basic.pause(300)

            if (arr[i] > arr[i + 1]) {
                let tmp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = tmp

                // --- show swap ---
                clear_led()
                display_values(arr)
                basic.pause(300)
            }
        }
    }
}


input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    bubbleSortAnimated(Bars)
})
