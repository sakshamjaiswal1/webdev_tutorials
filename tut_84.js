show dbs
use saksham_cart
show collections

db.items.updateMany({name:"realme narzo"},{$set:{qty:200000}})
db.items.find()
db.items.updateMany({name:"realme narzo"},{$set:{qty:200000},$set:{sold:100000}})
