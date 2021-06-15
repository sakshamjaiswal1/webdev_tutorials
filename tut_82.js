// Searching data in mongo db 
use saksham_cart
// This queryt will return all the objects with rating equal to 3.5
db.items.find({rating:4.5})
db.items.find({rating:{$gte:3.5}})

db.items.find({rating:{$gt:3.5}})

db.items.find({rating:{$gte:3.5},price:{$gte:20000}})
db.items.find({$or:[{rating:{$gte:3.5}},{price:{$gte:20000}}]})

db.items.find({rating:{$gt:3.5}},{rating:1})
db.items.find({rating:{$gt:3.5}},{rating:1,qty:1})

