const products = {
    plainBurger: {
        name: 'GAMBURGER',
        price: 10000,
        kcall: 400,
        amount: 0,
        get Summ() {
            return this.price * this.amount
        },
        get Kcall() {
            return this.kcall * this.amount
        }
    },
    freshBurger: {
        name: 'GAMBURGER FRESH',
        price: 20500,
        kcall: 600,
        amount: 0,
        get Summ() {
            return this.price * this.amount
        },
        get Kcall() {
            return this.kcall * this.amount
        }
    },
    freshCombo: {
        name: 'FRESH COMBO',
        price: 31900,
        kcall: 900,
        amount: 0,
        get Summ() {
            return this.price * this.amount
        },
        get Kcall() {
            return this.kcall * this.amount
        }
    }
}
const btnPlusOrMinus = document.querySelectorAll('.main__product-btn'),
    addCart = document.querySelector('.addCart'),
    receipt = document.querySelector('.receipt'),
    receipt__window = document.querySelector('.receipt__window'),
    receipt__window_out = document.querySelector('.receipt__window-out'),
    receipt__window_btn = document.querySelector('.receipt__window-btn');


for (let i = 0; i < btnPlusOrMinus.length; i++) {
    const el = btnPlusOrMinus[i];
    el.addEventListener('click', function () {
        plusOrMinus(this)
    })
}

function plusOrMinus(element) {
    const parent = element.closest('.main__product'),
        parentId = parent.getAttribute('id'), /* getAttribute bu html elementni atribut qiymatini oladi */
        out = parent.querySelector('.main__product-num'),
        price = parent.querySelector('.main__product-price span'),
        kcall = parent.querySelector('.main__product-kcall span'),
        elAttr = element.getAttribute('data-symbol');
    if (elAttr == '+') {
        products[parentId].amount++
    } else if (elAttr == '-') {
        products[parentId].amount--
    }
    out.innerHTML = products[parentId].amount
    price.innerHTML = products[parentId].Summ
    kcall.innerHTML = products[parentId].Kcall
}


let arrayProduct = [],
    totalName = '',
    totalPrice = 0,
    totalKcall = 0;

addCart.addEventListener('click', function () {
    for (const key in products) {
        const po = products[key];
        if (po.amount > 0) {
            arrayProduct.push(po);
        }
        po.price = po.Summ;
        po.kcall = po.Kcall;
    }

    for (let i = 0; i < arrayProduct.length; i++) {
        const el = arrayProduct[i];
        totalPrice += el.price;
        totalKcall += el.kcall;
        totalName += `${el.name}\n`;
    }
    receipt__window_out.innerHTML = `Buyurtma:\n ${totalName}\nKaloriya: ${totalKcall}\nUmumiy summa: ${totalPrice} so'm`;
    receipt.style.display = 'flex';
    setTimeout(() => {
        receipt.style.opacity = '1';
    }, 100);
    setTimeout(() => {
        receipt__window.style.top = '30%';
    }, 200);
    let amountOut = document.querySelectorAll('.main__product-num');
    let priceOut = document.querySelectorAll('.main__product-price span');
    let kcallOut = document.querySelectorAll('.main__product-kcall span');
    for (let i = 0; i < amountOut.length; i++) {
        const el = amountOut[i];
        el.innerHTML = 0
        priceOut[i].innerHTML = 0
        kcallOut[i].innerHTML = 0
    }
})

receipt__window_btn.addEventListener('click', function () {
    location.reload()
})