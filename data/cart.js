export let cart = JSON.parse(localStorage.getItem('cart'))||[];

function saveCart(){
    localStorage.setItem('cart',JSON.stringify(cart));
}

export function addToCart(id){
    let matchid;
    cart.forEach((item)=>{
        if(id===item.id){
          matchid=item;
        }
    })
    if(matchid){
        matchid.quantity++;
    }
    else{
        cart.push({
            id,
            quantity: 1,
        })
    }
    
    saveCart();
}

export function deleteFromCart(id){
    cart.forEach((value,index)=>{
        if(id===value.id){
            cart.splice(index,1);
        }
    })
    saveCart();
}