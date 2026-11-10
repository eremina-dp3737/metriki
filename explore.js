const currency = document.getElementById('cc1')
const currency2 = document.getElementById('cc2')
const inputNumber = document.getElementById('inputNumber')
const button = document.querySelector('#button')
const result = document.getElementById('result')
const switchButton = document.getElementById('switch')

button.addEventListener('click', () => {
    const num = inputNumber.value
    const first = currency.value
    const second = currency2.value

    if (first === "MM" && second === "SM") {
        result.innerHTML = Number(num) / 10 + currency2.value
    }
    if (first === "MM" && second === "M") {
        result.innerHTML = Number(num) / 1000 + currency2.value
    }
    if (first === "MM" && second === "KM") {
        result.innerHTML = Number(num) / 1000000 + currency2.value
    }
    if (first === "M" && second === "MM") {
        result.innerHTML = Number(num) * 10000 + currency2.value
    }
    if (first === "KM" && second === "MM") {
        result.innerHTML = Number(num) * 1000 + currency2.value
    }
    if (first === "SM" && second === "MM") {
        result.innerHTML = Number(num) * 10 + currency2.value
    }

    if (first === "SM" && second === "M") {
        result.innerHTML = Number(num) / 100 + currency2.value
    }
    if (first === "SM" && second === "KM") {
        result.innerHTML = Number(num) / 100000 + currency2.value
    }
    if (first === "M" && second === "KM") {
        result.innerHTML = Number(num) / 1000 + currency2.value
    }
    if (first === "M" && second === "SM") {
        result.innerHTML = Number(num) * 100 + currency2.value
    }
    if (first === "KM" && second === "SM") {
        result.innerHTML = Number(num) * 100000 + currency2.value
    }
    if (first === "KM" && second === "M") {
        result.innerHTML = Number(num) * 1000 + currency2.value
    }

});


switchButton.addEventListener('click', () => {
    const temp1 = currency.value
    const temp2 = currency2.value
    currency.value = temp2
    currency2.value = temp1


    const num = inputNumber.value
    const first = currency.value
    const second = currency2.value

    if (first === "MM" && second === "SM") {
        result.innerHTML = Number(num) / 10 + currency2.value
    }
    if (first === "MM" && second === "M") {
        result.innerHTML = Number(num) / 100 + currency2.value
    }
    if (first === "MM" && second === "KM") {
        result.innerHTML = Number(num) / 1000 + currency2.value
    }
    if (first === "M" && second === "MM") {
        result.innerHTML = Number(num) * 100 + currency2.value
    }
    if (first === "KM" && second === "MM") {
        result.innerHTML = Number(num) * 1000 + currency2.value
    }
    if (first === "SM" && second === "MM") {
        result.innerHTML = Number(num) * 10 + currency2.value
    }
    if (first === "SM" && second === "M") {
        result.innerHTML = Number(num) / 100 + currency2.value
    }
    if (first === "SM" && second === "KM") {
        result.innerHTML = Number(num) / 100000 + currency2.value
    }
    if (first === "M" && second === "KM") {
        result.innerHTML = Number(num) / 1000 + currency2.value
    }
    if (first === "M" && second === "SM") {
        result.innerHTML = Number(num) * 100 + currency2.value
    }
    if (first === "KM" && second === "SM") {
        result.innerHTML = Number(num) * 100000 + currency2.value
    }
    if (first === "KM" && second === "M") {
        result.innerHTML = Number(num) * 1000 + currency2.value
    }


})