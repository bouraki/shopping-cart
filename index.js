const data = [
    {
        id:1,
        title:'CASQUETTE ',
        color:'black',
        price:96,
        image:'./image1.webp'
    },
    {
        id:2,
        title:'CASQUETTE ',
        color:'white',
        price:46,
        image:'./image2.webp'
    }
]

const added = document.querySelector('.item')
const item = data.map((item)=>{
    return (
        `<div class="item1">

        <div class="app-icons">
            <i id="empty-heart" class="fa-sharp fa-regular fa-heart "></i> 
            <i id="trash-icon" class="fa-solid fa-trash"></i>
        </div>   


        <div class="app-img">
            <img src="${item.image}" alt="">
        </div>

        <div class="app-desp">
            <h3>${item.title}</h3>
            <p>${item.color}</p>
        </div>

        <div class="app-quantity">
            <span class="butt-plus">+</span>
            <span class="quantity">1</span>
            <span class="butt-minus">-</span>
        </div>

        <div class="app-price">
            <h4 class="price-cas-black">${item.price}$</h4>
        </div>
        
    </div>`
    )
}).join('')

added.innerHTML = item
let empty_heart = document.querySelectorAll('#empty-heart')
Array.from(empty_heart).forEach((item)=>{
    item.addEventListener('click',(e)=>{
        item.classList.toggle('fa-solid')
    })
})




const trash = document.querySelectorAll("#trash-icon")

for(let i = 0; i < trash.length ; i++){
    let tr = trash[i]
    tr.addEventListener("click",e=>{
         tr.parentElement.parentElement.remove()
    })
}



let i = 0
const total = document.querySelector('.total')

const quantity = document.querySelectorAll('.quantity')

const increase  = document.querySelectorAll('.butt-plus')

const decrease = document.querySelectorAll(".butt-minus")


for(let i = 0 ; i < increase.length ; i++  ){
    let plus = increase[i]
    plus.addEventListener("click",e =>{
        let qu = plus.nextElementSibling
        let vl = qu.innerHTML
        let num = parseInt(vl)
        qu.innerHTML = num + 1
        oumaima()
    })
}


for(let i = 0 ; i < decrease.length ; i++  ){
    let minus = decrease[i]
    minus.addEventListener("click",e =>{
        let qu = minus.previousElementSibling
        let v2 = qu.innerHTML
        let num = parseInt(v2)
        if (num >= 1){

            qu.innerHTML = num - 1
            oumaima()
        }
        
     
    })
}

function oumaima() {
    let item = document.querySelectorAll('.item1')
    let total = document.querySelector('.total')
    let t = 0
    for(let i = 0 ; i < item.length ; i++){
        let product = item[i]
        let price_pro = product.querySelector(".price-cas-black").innerHTML
        let quantity = product.querySelector(".quantity").innerHTML
        t = t + (parseInt(price_pro) * parseInt(quantity))
        total.innerHTML = `${t}$`
    }
} 


oumaima();






