const express = require('express');
const app=express();

const PORT= 5000

app.get('/', (req, res) => {
    res.send('<h1>Mani Baji</h1>')
})

app.use(express.json());

app.get("/services", (req, res) => {
    res.send('<h1>Mani Pamarthi</h1>')
})

        const products = [
            {
                id: "1",
                title: "TITLE 1",
                subTitle: "SUB TITLE 1",
                description: "Description1...",
                imagePath: "./img1.jpg"
            },
            {
                id: "2",
                title: "",
                subTitle: "",
                description: "",
                imagePath: ""
            },
            {
                id: "3",
                title: "",
                subTitle: "",
                description: "",
                imagePath: ""
            },
            {
                id: "4",
                title: "",
                subTitle: "",
                description: "",
                imagePath: ""
            }
        ]

app.get("/products", (req,res)=>{      
    res.send(products)
})

app.get('/products/:id', (req,res) => {
    const newData = products.filter(item => item.id.toString() === req.params.id);
    return res.send(newData);
})

app.post('/addproducts', (req,res) =>{
    const {id,name} = req.body;
    console.log(id,name);
    return res.send('Data Stored....!')
})

app.listen(PORT, () => {
    console.log("SERVER ON:" + PORT)
  })