const mongoose = require('mongoose')

module.exports = ()=>{
mongoose.connect('mongodb+srv://<username>:<password>@myfirstcluster-nfet9.mongodb.net/easyrestful?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify:false})
mongoose.connection.on('open',()=>{
    console.log("connection: on")
});
mongoose.connection.on('error',(err)=>{
    console.log("connection: error",err)
});


}
