let product=[
    {
        title:"Google, Interaction Designer",
        text:"I currently am the lead designer on the interaction design team for Google Play.",
        price:"01",
        id:1,
        
    },
    {
        title:"Facebook, Product Designer",
        text:"I’ve worked on a wide variety of internal tools for facebook over the past 6 years.",
        price:"02",
        id:2,
        
    },
    {
        title:"Dribbble, Graphic Designer",
        text:"I started my design career with Dribbble. I was incharge of creating illustrations for the platform.",
        price:"03",
        id:3,
        
    },
]
let k01=document.querySelector(".k01")
k01.innerHTML=product.map((item)=>{
    return`
    <div class="lol">
    <h1>${item.price}</h1>
    <h3>${item.title}</h3>
    <p>${item.text}}</p>
    </div>
    `
}).join("")
let prodact2=[
    {
        img:"./svg/a1.svg"
    },
    {
        img:"./svg/a2.svg"
    },
    {
        img:"./svg/a3.svg"
    },
    {
        img:"./svg/a4.svg"
    },
]

let zas=document.querySelector(".zas")
zas.innerHTML=prodact2.map((item)=>{
    return`
    <div class="weq">
    <img src="${item.img}" alt="">

    </div>
    `
}).join("")