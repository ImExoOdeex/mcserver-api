const PORT = 8000
const express = require('express')
const ms = require("minestat")

const app = express()
app.use(express.json())

app.get("/", (req, res) => {
    res.status(200).send({ lol: "LOL" })
})

app.get("/:name", (req, res) => {
    const name = req.params.name

    let server = {}

    ms.init(name, 25565, async function (res) {
        server.address = ms.address
        server.port = ms.port

        if (ms.online) {
            server.status = 'online'
            server.version = ms.version
            server.current_players = ms.current_players
            server.max_players = ms.max_players
            server.motd = ms.motd
            server.latency = ms.latency
        }
        else {
            server.status = 'offline'
        }
    })

    res.status(200).send(server)
})



app.listen(PORT, () => console.log("listening on: " + PORT))