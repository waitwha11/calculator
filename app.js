let inp1 = document.getElementById('input1')
let inp2 = document.getElementById('input2')
let result = document.getElementById('result')
let plus = document.getElementById('plus')
let minus = document.getElementById('minus')
let submit = document.getElementById('submit')

plus.onclick = function () {
    submit.classList.add('pluss')
    submit.classList.remove('minuss')
    plus.classList.toggle('charged')
    if(minus.classList.contains('charged')){
        minus.classList.remove('charged')
    }
}

minus.onclick = function () {
    submit.classList.add('minuss')
    submit.classList.remove('pluss')
    minus.classList.toggle('charged')
    if(plus.classList.contains('charged')){
        plus.classList.remove('charged')
    }
}

submit.onclick = function () {
    if (submit.classList.contains('pluss')) {
            result.innerHTML = Number(inp1.value) + Number(inp2.value)
    }

    else if (submit.classList.contains('minuss')) {
        result.innerHTML = Number(inp1.value) - Number(inp2.value)
}
}

