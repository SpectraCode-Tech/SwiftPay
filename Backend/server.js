import express from 'express'
import cors from 'cors'
import {connectDb} from './database.js'
import userRoutes from './routes/userRoutes.js'
import transactionRoutes from './Routes/transactionRoutes.js'


const app = express()
const PORT = 6000

connectDb()

app.use(cors()); //Allow frontend connection
app.use(express.json())

app.use('/api/Users', userRoutes)
app.use('/api/users', transactionRoutes);
app.use('/uploads', express.static('uploads')); // Serve static files from uploads folder

app.get('/', (req, res) => {
    res.send('QuickPay API is running....')
})

app.listen(PORT, () => {
    console.log(`Backend is running at http://localhost:${PORT}`)
})