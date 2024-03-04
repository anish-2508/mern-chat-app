
import express from 'express'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.routes.js'
import cookieParser from 'cookie-parser'
import messageRoutes from './routes/message.routes.js'
import userRoutes from './routes/user.routes.js'
import connectToMongoDB from './db/connectToMongoDB.js'
import { app, server } from './socket/socket.js'


const PORT = process.env.PORT || 7500;



dotenv.config()

app.use(express.json()) //to parse the incoming req with json payloads (from req.body)
app.use(cookieParser())

app.use('/api/auth', authRoutes)
app.use('/api/messages', messageRoutes)
app.use('/api/users', userRoutes)



//app.get("/", (req, res) => {
//    res.send("hello new world ")
//})



server.listen(PORT, () => {
    connectToMongoDB()
    console.log(`server is running on port ${PORT}`)
});