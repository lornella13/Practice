const products = [
  { name: "T-shirt",    price: 800,  stock: 12,  category: "clothing"    },
  { name: "Headphones", price: 2500, stock: 0,   category: "electronics" },
  { name: "Notebook",   price: 150,  stock: 45,  category: "stationery"  },
  { name: "Sneakers",   price: 3200, stock: 5,   category: "clothing"    },
  { name: "Pen",        price: 50,   stock: 200, category: "stationery"  },
];

for(let i=0; i<products.length;i++){
    for (i in products){
        if(products[i].stock>0){
            console.log(products[i].name);
        }
    }
}

  console.log("\n\n\n");

for(let i=0; i<products.length;i++){
    for (i in products){
        if(products[i].price<1000){
            console.log(products[i].name);
        }
    }
    console.log("\n\n\n");

    for(let i=0; i<products.length;i++){
    for (i in products){
        if(products[i].category=="clothing"){
console.log(products[i].name);
        }
    }

    }
    console.log("\n\n\n");
    var totalValue=0;
    for(i=0; i<products.length;i++){
        totalValue=products[i].price*products[i].stock+totalValue;
    }
    console.log(totalValue);
}
 console.log("\n\n\n");

for(i = 0; i < products.length; i++){
    if(products[i].stock&&products[i].category=="clothing"){
        console.log(products[i].name);
    }
}