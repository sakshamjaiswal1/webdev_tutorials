// Inserting data in mongo db 
use saksham_cart
db.items.insertOne({name:'Samsung 30s',price:'22000 rupee',rating:4.5,qty:233,sold:98})
db.items.insertMany([{name:'Samsung 30s',price:'22000 rupee',rating:4.5,qty:233,sold:98},{name:'realme narzo',price:'11000 rupee',rating:3.2,qty:200,sold:180},{name:'iphone',price:'111000 rupee',rating:3.2,qty:300,sold:50,is_big:'true'}])