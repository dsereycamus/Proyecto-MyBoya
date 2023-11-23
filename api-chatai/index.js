import express from 'express'
import logger from 'morgan'
import 'dotenv/config'
import { apiGpt } from './gpt-chat.js'

import { Server } from 'socket.io'
import { createServer } from 'node:http'

const port = process.env.PORTCHAT ?? 8074
const app = express()
const server = createServer(app)
const io = new Server(server, {cors: {
  origin: "*"
}})

io.on('connection', (socket) => {
  console.log('a user has connected')
  socket.on('disconnected', () => {
    console.log('an user has disconnected')
  })
  socket.on('chat message', async (msg) => {
    const completion = await apiGpt(msg)
    console.log(completion)
  })
})

app.use(logger('dev'))

app.get('/', (req, res) => {
  res.send('Hola de nuevo')
})

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})