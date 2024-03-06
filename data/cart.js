export const cart = [{
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity: 2,
    image: "images/products/athletic-cotton-socks-6-pairs.jpg",
    name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
    priceCents: 1090
  },{
    id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity:1,
    image: "images/products/intermediate-composite-basketball.jpg",
    name: "Intermediate Size Basketball",
    priceCents: 2095
  }];

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
            quantity: 1
        })
    }
}