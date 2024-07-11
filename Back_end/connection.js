const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://farizzain255:HiHello123!!!@internshipcluster.tlxoxmo.mongodb.net/?retryWrites=true&w=majority&appName=internshipCluster').then((res)=>{
    console.log('DB is connected')
}).catch((res)=>{
    console.log('DB is not connected')
})