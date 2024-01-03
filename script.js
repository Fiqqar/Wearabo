const items = [
    {
        id: 1, 
        title: "Indian T-Shirt",
        category: "t-Shirt",
        price: 65000,
        img: "https://d1xv5jidmf7h0f.cloudfront.net/circleone/images/products_gallery_images/round-neck-0163.jpg",
        desc: "This T-Shirt is designed by famous T-Shirt designer with image of colorful Indian person. This T-Shirt is made of 100% premium cotton.",
    },
    {
        id: 2, 
        title: "Yellow Blouse",
        category: "blouse",
        price: 90000,
        img: "https://storage.googleapis.com/hijup-production-sg-magazine/2022/12/067bbfc9-blouse-wanita-kekinian.jpeg",
        desc: "The yellow blouse is a bright and cheerful garment that exudes a sense of vibrancy and style. Its fabric is smooth and lightweight, ensuring a comfortable fit.",
    },
    {
        id: 3, 
        title: "White Polo",
        category: "polo",
        price: 100000,
        img: "https://media.istockphoto.com/id/1097626470/id/foto/template-desain-kemeja-berkerah-putih.jpg?s=612x612&w=0&k=20&c=TmpauAomBVhcEQMoTIiO-AT92fAapLjznRKaYHp7Ieg=",
        desc: "The white polo shirt is a timeless and classic piece of clothing that effortlessly combines style and comfort.",
    },
    {
        id: 4, 
        title: "White Hoodie",
        category: "hoodie",
        price: 65000,
        img: "https://asset-a.grid.id/crop/0x0:0x0/x/photo/2022/03/28/white-hoodie-with-headphones-1-20220328013647.jpg",
        desc: "The white hoodie is a versatile and stylish piece of casual clothing that combines comfort with a contemporary edge.",
    },
    {
        id: 5, 
        title: "White Shirt",
        category: "shirt",
        price: 65000,
        img: "https://ca.frankandoak.com/cdn/shop/files/2120225-017_800x.jpg?v=1692209329",
        desc: "The classic design of this white shirt exudes sophistication, featuring a well-tailored fit that effortlessly flatters any silhouette.",
    },
    
]
const sectioncenter = document.querySelector(".section-center");
const btncontainer = document.querySelector(".btn-container");
window.addEventListener("DOMContentLoaded", function(){
    displayitem(items);
    displaybuttons();
});
function displayitem(items){
    let display = items.map(function(item){
        return `<article class="menu-item">
        <img src="${item.img}" alt="" class="photo">
        <div class="item-info">
            <header>
                <h4>${item.title}</h4>
                <h4 class="price">Rp ${item.price}</h4>
            </header>
            <p class="item-text">${item.desc}</p>
        </div>
    </article>`
    });
    display = display.join("");
    sectioncenter.innerHTML = display;
}
function displaybuttons(){
    const categories = items.reduce(function(values, item){
        if(!values.includes(item.category)){
        values.push(item.category);
        }
        return values;
    }, ["all"]
    );
    // console.log(categories);
    const categorybtns = categories.map(function(category){
        return `<button class="filter-btn" type = "button" data-id="${category}" >${category}</button>`;
    }).join("");
    btncontainer.innerHTML = categorybtns;
    const filterbtns = btncontainer.querySelectorAll(".filter-btn");
    filterbtns.forEach(function (btn){
        btn.addEventListener("click", function(e){
            const category = e.currentTarget.dataset.id;
            const filtereditems = items.filter(function(item){
                if(item.category === category){
                    return item;
                }
            });
            if(category === "all"){
                displayitem(items);
            }
            else {
                displayitem(filtereditems);
            }
        });
    }); 
}
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");
const prevbtn = document.querySelector(".prev-btn");
const nextbtn = document.querySelector(".next-btn");
const randombtn = document.querySelector(".random-btn");
const reviews = [
    {
        id : 1,
        name : "Andrian Johanes",
        job : "Famous Singer",
        img : "https://media.licdn.com/dms/image/D5603AQGSisiqoNwKUQ/profile-displayphoto-shrink_800_800/0/1666700799886?e=2147483647&v=beta&t=LfGj5pWPu97uFrEkSQdheOokFfy6Q6EGADvfeX-MinQ",
        info : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, quis id nam, ipsa libero, esse possimus excepturi nisi incidunt qui eius? Harum sit esse consequatur ipsa tempore dolore laborum pariatur?",
    },
    {
        id : 2,
        name : "Budiman",
        job : "Business Manager",
        img : "https://media.licdn.com/dms/image/D5603AQFWvysaUx3_fQ/profile-displayphoto-shrink_800_800/0/1665797434142?e=2147483647&v=beta&t=5jY-7t2v41V-Y-0z14KMlvB-8zI6nglw2uvmVSh-KOM",
        info : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, quis id nam, ipsa libero, esse possimus excepturi nisi incidunt qui eius? Harum sit esse consequatur ipsa tempore dolore laborum pariatur?",
    },
    {
        id : 3,
        name : "Abdullah",
        job : "Marketing Manager",
        img : "https://mitsloan.mit.edu/sites/default/files/profile-images/2023/08/22/profile-image-86396.jpeg",
        info : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, quis id nam, ipsa libero, esse possimus excepturi nisi incidunt qui eius? Harum sit esse consequatur ipsa tempore dolore laborum pariatur?",
    },
    {
        id : 4,
        name : "Sintiya",
        job : "Sales Manager",
        img : "https://i1.rgstatic.net/ii/profile.image/986385968295939-1612184149709_Q512/Sintiya-Novita.jpg",
        info : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, quis id nam, ipsa libero, esse possimus excepturi nisi incidunt qui eius? Harum sit esse consequatur ipsa tempore dolore laborum pariatur?",
    },
];
let currentitem = 0;
window.addEventListener("DOMContentLoaded", function(){
    const item = reviews[currentitem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.info;
});
function showperson(index){
    const item = reviews[index];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.info;
}
nextbtn.addEventListener("click", function(){
    currentitem++;
    if(currentitem > reviews.length - 1){
        currentitem = 0;
    }
    showperson(currentitem);
});
prevbtn.addEventListener("click", function(){
    currentitem--;
    if(currentitem < 0){
        currentitem = reviews.length - 1;
    }
    showperson(currentitem);
});
randombtn.addEventListener("click", function(){
    currentitem = Math.floor(Math.random()*reviews.length);
    showperson(currentitem);
});