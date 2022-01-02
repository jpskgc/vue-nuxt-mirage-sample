import { createServer, Model } from "miragejs"

createServer({
    models: {
        user: Model,
    },

    routes() {
        this.urlPrefix = 'http://localhost:3000'

        this.get("/users", (schema, request) => {
            return schema.users.all()
        })

        this.post("/users", (schema, request) => {
            let attrs = JSON.parse(request.requestBody)
            console.log(request.requestBody)

            return schema.users.create(attrs)
        })
    },

    seeds(server) {
        server.create("user", { value: "Inception" })
        server.create("user", { value: "Interstellar" })
    },
})