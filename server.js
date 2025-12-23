import express from 'express'
import connectToDB from './db.js'
import productRoutes from './routes/product.routes.js'
const app = express()
const port = process.env.port || 6000

// 1) Middleware to parse JSON bodies => [We can hit POST request]
app.use(express.json())

// 2) Function call to connect to DB
connectToDB();

// 3) To use product routes we have to MOUNT the router file.
app.use('/api/products', productRoutes)

app.listen(port, () => {
    console.log(`Server app listening on port ${port}`)
})
