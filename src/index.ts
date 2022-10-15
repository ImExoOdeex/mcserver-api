import { getBedrockServerInfo } from "./getBedrockServerInfo"
import { getServerInfo } from "./getServerInfo"

const PORT = 8000
const express = require('express')

const app = express()
app.use(express.json())

app.get("/", (req: any, res: any) => {
    res.status(200).send({ lol: "LOL" })
})

app.get("/:name", async (req: any, res: any) => {
    const name = req.params.name

    res.status(200).send(await getServerInfo(name))
})

app.get("/bedrock/:name", async (req: any, res: any) => {
    const name = req.params.name

    res.status(200).send(await getBedrockServerInfo(name))
})

app.listen(PORT, () => console.log("listening on: " + PORT))