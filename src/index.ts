import express from 'express'
import dotenv from 'dotenv'

import router from "./routes/router"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use('/api', router)

app.use(router)

app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`)
})

export default app