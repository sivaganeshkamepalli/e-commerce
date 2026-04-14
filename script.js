// ---------- CATEGORY DATA ----------
const categoryData = {
Electronics:["Laptop","Phone","Earbuds","TV"],
Clothing:["T-Shirt","Pants","Shirt","Innerwear"],
Shoes:["Sneakers","Formal Shoes","Sandals","Boots"],
Watches:["Digital Watch","Analog Watch","Smart Watch","Luxury Watch"],
Mobiles:["Android Phone","iPhone","Foldable Phone","Gaming Phone"],
Laptops:["Gaming Laptop","Ultrabook","Notebook","MacBook"],
Books:["Fiction","Science Book","Biography","Comics"],
Toys:["Car Toy","Doll","Puzzle","Lego"],
Beauty:["Face Cream","Lipstick","Perfume","Shampoo"],
Sports:["Cricket Bat","Football","Tennis Racket","Basketball"],
Furniture:["Chair","Table","Sofa","Bed"],
Groceries:["Rice","Oil","Snacks","Beverages"],
Kitchen:["Mixer","Cookware","Knife Set","Microwave"],
Accessories:["Sunglasses","Wallet","Belt","Cap"],
Gaming:["Console","Controller","Gaming Chair","VR Headset"],
Cameras:["DSLR","Mirrorless","Action Camera","Tripod"],
Headphones:["Wireless Headphones","Bluetooth Earphones","Neckband","Gaming Headset"],
Jewelry:["Necklace","Ring","Bracelet","Earrings"],
Bags:["Backpack","Handbag","Travel Bag","Laptop Bag"],
Fitness:["Dumbbells","Treadmill","Yoga Mat","Skipping Rope"],
Office:["Chair","Desk","Printer","Stationery"],
Garden:["Plants","Tools","Pots","Seeds"],
Automotive:["Helmet","Car Cover","Bike Accessories","Car Vacuum"],
Music:["Guitar","Keyboard","Drums","Speaker"],
Baby:["Diapers","Baby Dress","Toys","Feeding Bottle"],
Pet:["Dog Food","Cat Toy","Leash","Pet Bed"],
Art:["Paint","Brush","Canvas","Sketch Book"],
Travel:["Suitcase","Travel Pillow","Backpack","Adapter"],
Health:["Vitamins","Mask","Sanitizer","Thermometer"],
DIY:["Tools Kit","Drill","Hammer","Screwdriver"]
};

// ---------- IMAGE MAPPING ----------
        function getImage(name) {

            const images = {

                // Electronics
                "Laptop": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400",
                "Phone": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
                "Earbuds": "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "TV": "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=400",

                // Clothing
                "T-Shirt": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
                "Pants": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400",
                "Shirt": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400",
                "Innerwear": "https://plus.unsplash.com/premium_photo-1688497831197-9c792767fb8c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

                // Shoes
                "Sneakers": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "Formal Shoes": "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=400",
                "Sandals": "https://images.unsplash.com/photo-1625318880107-49baad6765fd?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "Boots": "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=400",

                // Watches
                "Digital Watch": "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "Analog Watch": "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=400",
                "Smart Watch": "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=400",
                "Luxury Watch": "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400",

                // Mobiles
                "Android Phone": "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400",
                "iPhone": "https://images.unsplash.com/photo-1510557880182-3c29b2e4dcbf?w=400",
                "Foldable Phone": "https://images.unsplash.com/photo-1603899123025-0dcb9c2b0c6f?w=400",
                "Gaming Phone": "https://images.unsplash.com/photo-1603898037225-1c7c7e8e3e0b?w=400",

                // Laptops
                "Gaming Laptop": "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400",
                "Ultrabook": "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400",
                "Notebook": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400",
                "MacBook": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400",

                // Books
                "Fiction": "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400",
                "Science Book": "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400",
                "Biography": "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400",
                "Comics": "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400",

                // Toys
                "Car Toy": "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?w=400",
                "Puzzle": "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400",
                "Doll": "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=400",
                "Lego": "https://images.unsplash.com/photo-1581092334420-2e7e9e9c4d0d?w=400",

                // Beauty
                "Face Cream": "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400",
                "Lipstick": "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400",
                "Perfume": "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400",
                "Shampoo": "https://images.unsplash.com/photo-1585238342028-4e7d7c3b0c6b?w=400",

                // Sports
                "Cricket Bat": "https://images.unsplash.com/photo-1593341646782-e0b495cff86d?w=400",
                "Football": "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?w=400",
                "Tennis Racket": "https://images.unsplash.com/photo-1571019613914-85f342c1d4b5?w=400",
                "Basketball": "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=400",

                // Furniture
                "Chair": "https://images.unsplash.com/photo-1503602642458-232111445657?w=400",
                "Sofa": "https://images.unsplash.com/photo-1493666438817-866a91353ca9?w=400",
                "Table": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400",
                "Bed": "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=400",

                // Groceries
                "Oil": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400",
                "Rice": "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400",
                "Snacks": "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=400",
                "Beverages": "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400",

                // Kitchen
                "Mixer": "https://images.unsplash.com/photo-1585237672814-8f85a8118bf6?q=80&w=2155&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "Cookware": "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400",
                "Knife Set": "https://images.unsplash.com/photo-1594007654729-407eedc4fe2f?w=400",
                "Microwave": "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400",

                // Accessories
                "Sunglasses": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400",
                "Wallet": "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=400",
                "Belt": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400",
                "Cap": "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=400",

                // Gaming
                "Console": "https://images.unsplash.com/photo-1606813909021-0a378c94b4d1?w=400",
                "Controller": "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400",
                "Gaming Chair": "https://images.unsplash.com/photo-1616628182507-3ec3c5a2c3c1?w=400",
                "VR Headset": "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=400",

                // Bags
                "Backpack": "https://images.unsplash.com/photo-1509762774605-f07235a08f1f?w=400",
                "Handbag": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400",
                "Travel Bag": "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400",
                "Laptop Bag": "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400",

                // Fitness
                "Dumbbells": "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400",
                "Treadmill": "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400",
                "Yoga Mat": "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?w=400",
                "Skipping Rope": "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=400",

                // Travel
                "Suitcase": "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400",
                "Travel Pillow": "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400",
                "Adapter": "https://images.unsplash.com/photo-1580894908361-967195033215?w=400",

                // Health
                "Vitamins": "https://images.unsplash.com/photo-1588776814546-ec7e1c7b0a9e?w=400",
                "Mask": "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=400",
                "Sanitizer": "https://images.unsplash.com/photo-1588776814546-ec7e1c7b0a9e?w=400",
                "Thermometer": "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400",

                // DIY
                "Tools Kit": "https://images.unsplash.com/photo-1581091215367-59ab6b0b3e78?w=400",
                "Drill": "https://images.unsplash.com/photo-1581091870622-2c5d5a8e4c66?w=400",
                "Hammer": "https://images.unsplash.com/photo-1567016549032-0d79b4cb3c52?w=400",
                "Screwdriver": "https://images.unsplash.com/photo-1581093588401-0f6cfa9c8e69?w=400"

            };

            return images[name] || "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400";
        }

// ---------- PRODUCTS ----------
let products=[];
let id=1;

for(let cat in categoryData){
categoryData[cat].forEach(name=>{
products.push({
id:id++,
name:name,
price:Math.floor(Math.random()*5000)+500,
category:cat,
img:getImage(name)
});
});
}

// ---------- STORAGE ----------
let cart=JSON.parse(localStorage.getItem('cart'))||[];
let wishlist=JSON.parse(localStorage.getItem('wishlist'))||[];

function save(){
localStorage.setItem('cart',JSON.stringify(cart));
localStorage.setItem('wishlist',JSON.stringify(wishlist));
}

// ---------- SIDEBAR ----------
function renderSidebar(){
let side=document.getElementById('sidebar');
side.innerHTML='';

for(let cat in categoryData){
let div=document.createElement('div');
div.className='cat';
div.textContent=cat;

div.onclick=()=>{
renderProducts(cat);
side.classList.add('hidden');
};

side.appendChild(div);
}
}

function toggleSidebar(){
document.getElementById('sidebar').classList.toggle('hidden');
}

// ---------- PRODUCTS ----------
function renderProducts(filter){
let list=document.getElementById('productList');
list.innerHTML='';

products
.filter(p=>!filter || p.category===filter)
.forEach(p=>{
let div=document.createElement('div');
div.className='card';

div.innerHTML=`
<img src="${p.img}">
<h4>${p.name}</h4>
<p>₹${p.price}</p>
<button onclick="addToCart(${p.id})">Add to Cart</button>
<button onclick="addToWishlist(${p.id})">Wishlist</button>
`;

list.appendChild(div);
});
}

// ---------- SEARCH ----------
function searchProducts(val){
let filtered=products.filter(p=>
p.name.toLowerCase().includes(val.toLowerCase())
);

let list=document.getElementById('productList');
list.innerHTML='';

filtered.forEach(p=>{
let div=document.createElement('div');
div.className='card';

div.innerHTML=`
<img src="${p.img}">
<h4>${p.name}</h4>
<p>₹${p.price}</p>
<button onclick="addToCart(${p.id})">Add to Cart</button>
<button onclick="addToWishlist(${p.id})">Wishlist</button>
`;

list.appendChild(div);
});
}

// ---------- CART ----------
function addToCart(id){
let item=cart.find(p=>p.id===id);

if(item){
item.qty++;
}else{
cart.push({...products.find(p=>p.id===id), qty:1});
}

save();
renderCart();
}

function renderCart(){
let list=document.getElementById('cartList');
list.innerHTML='';
let total=0;

cart.forEach((item,i)=>{
total+=item.price*item.qty;

let li=document.createElement('li');
li.innerHTML=`
${item.name} ₹${item.price} x ${item.qty}
<button onclick="changeQty(${i},1)">+</button>
<button onclick="changeQty(${i},-1)">-</button>
<button onclick="removeItem(${i})">Remove</button>
`;

list.appendChild(li);
});

document.getElementById('total').textContent=total;
document.getElementById('cartCount').textContent=cart.length;
}

// ---------- WISHLIST ----------
function addToWishlist(id){
if(!wishlist.find(p=>p.id===id)){
wishlist.push(products.find(p=>p.id===id));
}

save();
renderWishlist();
}

function renderWishlist(){
let list=document.getElementById('wishList');
list.innerHTML='';

wishlist.forEach((item,i)=>{
let li=document.createElement('li');

li.innerHTML=`
${item.name}
<button onclick="moveToCart(${i})">Move to Cart</button>
`;

list.appendChild(li);
});
}

// ---------- ACTIONS ----------
function changeQty(i,val){
cart[i].qty+=val;

if(cart[i].qty<=0){
cart.splice(i,1);
}

save();
renderCart();
}

function removeItem(i){
cart.splice(i,1);
save();
renderCart();
}

function moveToCart(i){
addToCart(wishlist[i].id);
wishlist.splice(i,1);
save();
renderWishlist();
}

// ---------- NAVIGATION ----------
function showPage(page){
['home','cart','wishlist'].forEach(p=>{
document.getElementById(p).classList.add('hidden');
});

document.getElementById(page).classList.remove('hidden');
}

// ---------- INIT ----------
renderSidebar();
renderProducts();
renderCart();
renderWishlist();