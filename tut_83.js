show dbs
use saksham_cart
show collections

db.items.find({price:22000})

// deleting items from the mongodb database
db.items.deleteOne({rating:4.5})
// will dete the first entry in the multiple document match