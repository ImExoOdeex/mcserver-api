import { Request, Response } from "express"
import { getBedrockServerInfo } from "./getBedrockServerInfo"
import { getServerInfo } from "./getServerInfo"
const apicache = require('apicache')
const cors = require('cors')

const PORT = 8000
const express = require('express')
const app = express()
let cache = apicache.middleware

app.use(cache("10 seconds"))
app.use(express.json())
app.use(cors())

app.get("/", (req: Request, res: Response) => {
    res.status(200).send("<body style='background-color: black; color: white'><p style='font-weight: 500; font-family: sans-serif'>Nothing's there ;D. Enter server address after <code>/</code> to get server info. If it's bedrock server, enter server address after <code>/bedrock/</code>.</p></body>")
})

app.get("/:name", async (req: Request, res: Response) => {
    const name = req.params.name

    res.status(200).send(await getServerInfo(name))
})

app.get("/bedrock/:name", async (req: Request, res: Response) => {
    const name = req.params.name

    res.status(200).send(await getBedrockServerInfo(name))
})

app.listen(PORT, () => console.log("listening on " + PORT + " Port"))