import 'https://cdn.socket.io/4.7.2/socket.io.min.js'
import { useState } from 'react'

const socket = io('http://localhost:8074')

/* const messages = document.getElementById('messages') */
  /* socket.on('chat message',async (msg) => {
    console.log('Mensaje recibido en el cliente: ', msg)
    const item = await `<li>${msg}</li>`
    messages.insertAdjacentHTML('beforeend', item)
  }) */

export function Chatai(){
  const [chat, setChat] = useState('')
  const [mensaje, setMensaje] = useState('')

  socket.on('chat message',async (msg) => {
    if(mensaje !== msg){
      /* console.log('Mensaje recibido en el cliente: ', msg) */
      setMensaje(`😎 ${msg}`)
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const chatVal = document.getElementById('chat')
    if(chatVal.value !== ''){
      socket.emit('chat message', chat)
      chatVal.value = ''
      setChat('')
    }
    
  }
  const handleChat = (e) => {
    setChat(e.target.value)
  }
  return(
    <section className='chatai-container'>
      <form className='chatai-form' onSubmit={handleSubmit}>
        <ul id='messages'>
          {mensaje ? mensaje : null}
        </ul>
        <input type="text" onChange={handleChat} id='chat' />
        <button type="submit" onSubmit={handleSubmit}>Enviar</button>
      </form>
    </section>
  )
}