import express from 'express'
import 'dotenv/config'

const port = process.env.PORTCHAT ?? 8074

const app = express()