import App from "./app"

const app = App()
const port = process.env.PORT

app.listen(port, () => {
    console.log(`Porta: ${port}`)
})