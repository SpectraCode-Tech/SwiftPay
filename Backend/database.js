import mongoose from 'mongoose'

const MONGO_URI = 'mongodb+srv://admin:smartbuy53@smartbuy.19zhcvm.mongodb.net/'


export async function connectDb(){
    try{
        await mongoose.connect(MONGO_URI)
        console.log('MongoDB atlas connected ✅')
    }catch(error){
        console.error('MongoDB connection failed ❌:', error)
    }
}