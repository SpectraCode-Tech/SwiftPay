import mongoose from 'mongoose'

const MONGO_URI = 'mongodb+srv://Dimeji:iy8vLRpf24pFmvmH@cluster0.xtnqssk.mongodb.net/'


export async function connectDb(){
    try{
        await mongoose.connect(MONGO_URI)
        console.log('MongoDB atlas connected ✅')
    }catch(error){
        console.error('MongoDB connection failed ❌:', error)
    }
}