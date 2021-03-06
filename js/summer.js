const cartBtn=document.getElementById("#myBtn");
const clearcartbtn=document.querySelector(".clear-cart");
const cartDOM=document.querySelector(".cart");
const cartoverlay=document.querySelector(".cart-overlay");
const cartItems=document.querySelector('.cart-items');
const cartTotal=document.querySelector('.cart-total');

const cartcontent=document.querySelector(".cart-content");

let container=document.querySelector('.container');

let cart=[];
let DomButtons=[];
class Summer{
    async getJordans(){
        try {
            let result = await fetch("json/summer.json"); 
            let data=await result.json();
            let summer=data.items;
            summer=summer.map(function(sumer){
                const{price}=sumer.fields;
                const{id}=sumer.sys;
                const{image}=sumer.fields;
                return {price,id,image};
            });
//            console.log(summer);
            return summer;
           
        } catch (error) {
            console.log(error);
            console.log('khaled');
        }
    }
}

class UI{
    displayJordans(summer){
        let result='';
        summer.forEach(sumer => {
            result += `
                    <div class="card">
                        <img src=${sumer.image} alt="Denim Jeans" style="width:100%">
                        <p class="price">Price : $ ${sumer.price}</p>
                        <p><button class="cart-btn" data-id=${sumer.id}>Add to Cart</button></p>
                    </div>
            `
        })
     container.innerHTML=result;   
    }
    getBagButtons()
    {
        const btns=[...document.querySelectorAll('.cart-btn')];
        DomButtons=btns;
        console.log(btns);
        btns.forEach(btns=>{
            let id=btns.dataset.id;
            let incart=cart.find(item=>item.id === id);
            if(incart) 
            {
                btns.innerText="in Cart";
                btns.disabled=true;
            }
            else
            {
                btns.addEventListener('click',(e)=>
                {
                  e.target.innerText="In Cart";
                  e.target.disabled=true;
                  //get bags from Bags
                  let caritem={...Storage.getsummers(id),amount: 1};
                  console.log(caritem);

                  //add bags to cart
                  cart=[...cart,caritem];
               //   console.log(cart);

                  //save cart in localstorage
                  Storage.savecart(cart);

                  //set cart values
                  this.setCartValues(cart);
                  //add cart items
                  this.addCartItems(caritem);
                })
            }
            console.log(id);
        })
 
    }
   
    setCartValues(cart)
    {
        var temptotal=0;
//console.log(temptot);
        var itemstotal=0;
        cart.map(item=>
            {
                temptotal +=item.price*item.amount;

                itemstotal +=item.amount;
            })
            cartTotal.innerText = parseFloat(temptotal.toFixed(2));
            cartItems.innerText = itemstotal;
          console.log(cartTotal,cartItems);        
    }
    addCartItems(item)
    {
        const div=document.createElement('div');
        div.classList.add('cart-item');
        div.innerHTML=`  
        
        <div class="card">
                <img src=${item.image} alt="Denim Jeans" style="width:100%">
                <i class="fas fa-chevron-up" data-id=${item.id}></i>
                <p class="item-amount">${item.amount}</p>
                <i class="fas fa-chevron-down">${item.id}</i>
                <span class="remove-item" data-id=${item.id}>remove</span>
                <p class="price">Price : $ ${item.price}</p>
       </div>
       `
       cartcontent.appendChild(div);
       console.log(cartcontent);
    }
    setupApp()
    {

      cart=Storage.getcart();
          this.setCartValues(cart); 
          this.populatecart(cart);
        
         // cartBtn.addEventListener
    }
    populatecart(cart)
    {
        cart.forEach(item=>this.addCartItems(item));
    }
    CartIsideOperations()
    {
        
        //clear cart button
        clearcartbtn.addEventListener('click',()=>{
            this.clearCart();
        });
        cartcontent.addEventListener('click',(e)=>
        {
            if(e.target.classList.contains("remove-item"))
            {
                let removeItem=e.target;
                let id= removeItem.dataset.id;
                this.removeItem(id);
                   cartcontent.removeChild(removeChild.parentElement);
               
             
                console.log(removeItem);
            }
            //add amount of item
            else if(e.target.classList.contains("fa-chevron-up"))
            {
              let addAmount=e.target;
              let id= addAmount.dataset.id;
              let tempItem=cart.find(item => item.id===id);
              tempItem.amount=tempItem.amount +1;
             Storage.savecart(cart);
             this.setCartValues(cart);
              addAmount.nextElementSibling.innerHTML=tempItem.amount;
            }
            else if(e.target.classList.contains("fa-chevron-down"))
            {
                
                let loweAmount=e.target;
                let id=loweAmount.dataset.id;
                let tempItem=cart.find(item => item.id===id);
              
                tempItem.amount=tempItem.amount -1;
           
                
                if(tempItem.amount > 0)
                {
                 Storage.savecart(cart);
                 this.setCartValues(cart);
                 loweAmount.previousElementSibling.innerHTML=tempItem.amount;
                }
                else
                {
                    cartcontent.removeChild(loweAmount.parentElement);
                    this.removeItem(id);
                }

            }
           
        })
    }
    clearCart()
    {
        console.log(this);
        let cartItems = cart.map(item => item.id);
        console.log(cartItems);
        cartItems.forEach(id => this.removeItem(id))
        while(cartcontent.children.length>0)
        {
             cartcontent.removeChild(cartcontent.children[id])
        }
        
        console.log(cartItems);
    }
    removeItem(id)
    {
        
        cart = cart.filter(item => item.id !== id);
        this.setCartValues(cart);
        Storage.savecart(cart);
        let btn=this.getsinglebtn(id);
        btn.disabled=false;
        btn.innerHTML='<button class="cart-btn" data-id=${jordan.id}>Add to Cart</button>'
        console.log(cart);
    }
    getsinglebtn()
    {
        return DomButtons.find(btn => btn.dataset.id===id);
    }
}
class Storage
{
    static saveproduct(summer){
        localStorage.setItem('summers',JSON.stringify(summer));

    }
    static getsummers(id)
    {
        let summers=JSON.parse(localStorage.getItem ('summers'));
        return summers.find(summer => summer.id === id);
    }
    static savecart(cart)
    {
        localStorage.setItem('cart',JSON.stringify(cart))
    }
    static getcart()
    {
        return localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')):[];
    }
}

document.addEventListener('DOMContentLoaded',function(){
    let summer=new Summer()
    let ui=new UI();
    summer.getJordans().then(function(summer){
        ui.displayJordans(summer);
        Storage.saveproduct(summer);
    }).then(()=>{
        ui.getBagButtons();
        ui.CartIsideOperations();
    });
})
//////////////////////////////////cart
 // Get the modal
 var modal = document.getElementById("myModal");
        
 // Get the button that opens the modal
 var btn = document.getElementById("myBtn");
 
 // Get the <span> element that closes the modal
 var span = document.getElementsByClassName("close")[0];
 
 // When the user clicks the button, open the modal 
 btn.onclick = function() {
   modal.style.display = "block";
 }
 
 // When the user clicks on <span> (x), close the modal
 span.onclick = function() {
   modal.style.display = "none";
 }
 
 // When the user clicks anywhere outside of the modal, close it
 window.onclick = function(event) {
   if (event.target == modal) {
     modal.style.display = "none";
   }
 }