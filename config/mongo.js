const mongoose = require("mongoose")

const dbMongo = () => {

    const dbMongoUri = process.env.DBMongoUri
    mongoose.connect(dbMongoUri, {
        useNewUrlParser:true,
        useUnifiedTopology:true
    },(err, res)=>{
        if(!err)
            console.log("*********CONECTION OK**************")
        else
            console.log("*********CONECTION FAIL**************")
    })

}

module.exports = dbMongo