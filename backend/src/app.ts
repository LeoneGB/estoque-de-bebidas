import express from "express"
import router from "./routes"

function App() {
    const app = express()
    app.use(express.json())
    app.use("/api", router)

    return app
}

export default App