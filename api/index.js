import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import fileUpload from 'express-fileupload'

import authRoute from './routes/auth.js'
import postRoute from './routes/posts.js'
import commentRoute from './routes/comments.js'

const app = express()
dotenv.config()

// Constants
const PORT = process.env.PORT || 3002
const MONGODB_URI = process.env.DB_MONGO

// Middleware
app.use(cors())
app.use(fileUpload())
app.use(express.json())
// app.use(express.static('uploads'))
app.use('/api/', express.static('uploads'));

// Routes
// http://localhost:3002
app.use('/api/auth', authRoute)
app.use('/api/posts', postRoute)
app.use('/api/comments', commentRoute)
app.get('/test', function (req, res) {
    res.send('hello world');
});


async function start() {
    try {
        await mongoose.connect(
            // 'mongodb+srv://admin:l5wVsKHsbcZBI9tX@patriot.ghzx2ys.mongodb.net/?retryWrites=true&w=majority'
            process.env.MONGODB_URI
        )

        app.listen(PORT, () => console.log(`Server started on port: ${PORT}`))
    } catch (error) {
        console.log(error)
    }
}
start()
