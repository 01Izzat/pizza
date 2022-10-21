"use strict";

////  Variebles/////////
let get = document.querySelector('#select');
let pizza = document.querySelector('.nons');
let vip = document.querySelector('.width');
let under = document.querySelector('.ustida');
let box = document.querySelector('.qosh');
let option = document.querySelector('option');
let holder = document.querySelector('.wrapper');
let holderItem = document.querySelector('.wrapper-item');
let check = document.querySelector('.checkbox');
let lower = document.querySelector("#upper");
let old = document.querySelector('.qoshimcha');


get.addEventListener('change', (e) => {
    pizza.textContent = `=>  Nonning turi ${e.target.value}`
})

//================================== SIZE ==================================//
holder.addEventListener('click', (e) => {
    let box = e.target.className
    if (box == 'wrapper-item bg-white') {
        vip.innerHTML = ` => ${e.target.textContent}`
        box.setAttribute('class ', 'wrapper-item bg-success')
    }
})

//================================ input ====================================//
let arr = []
let newArr = []
check.addEventListener('click', (e) => {
    let inputValue = e.target
    if (inputValue.name !== undefined) {
        let li = document.createElement("li")
        if (inputValue.checked == true) {
            console.log(inputValue.value);
            li.textContent = `=> ${inputValue.value}`
            lower.appendChild(li)
        } else if (inputValue.checked == false) {
            lower.innerHTML = ''
        }
    }
})


old.addEventListener('click', (e) => {
    let plus = e.target
    let div = document.createElement('div')
    if (plus !== undefined) {
        if (plus.checked == true) {
            box.textContent = ` => ${plus.value}`
        } else if (plus.checked == false) {
            box.textContent = ''
        }
    }
})

//================================== MODAL ===================================//
console.log(pizza.textContent);
let modalWrapper = document.querySelector('.modl')
function modal() {
    let btn = document.querySelector('.btn')
    let title = document.querySelector('.modal-title')
    btn.addEventListener('click', () => {
        console.log(title.textContent);
        if (pizza.textContent != 0  && box.textContent != 0 && vip.textContent != 0) {
            console.log('salom');
            modalWrapper.setAttribute('class', 'modl d-flex')
            title.textContent = 'Success'
        } else {
            modalWrapper.setAttribute('class', 'modl d-flex')
            console.log('sa');
        }
        setTimeout(() => {
            modalWrapper.setAttribute('class', 'modl swipe')
        }, 2000);
    })
}

modal()
