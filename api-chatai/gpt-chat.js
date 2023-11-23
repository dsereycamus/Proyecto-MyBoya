import OpenAI from 'openai'
const openai = new OpenAI({apiKey: process.env.API_KEY})

export async function apiGpt(msg){
   const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "Eres un asistente llamado boyabot" },
    { role: "user", content: `${msg}` }
  ],
    model: "gpt-3.5-turbo",
  }) 
  console.log(msg)
  /* const completion = await fetch('https://api.openai.com/v1/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + process.env.API_KEY
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [
        {role: "user", content: `${msg}`}
      ]
    })
  }) */
  return completion.choices[0].message.content
}