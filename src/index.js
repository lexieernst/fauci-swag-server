const app = require('express')()
// const cors = require('cors')()
const bodyParser = require('body-parser')
const port = 4000
const host = 'localhost'
const createPayment = require('./stripe').createPayment

// app.use(cors())
app.use(bodyParser.urlencoded({
	extended: true
}))

app.get('/secret', async (req, res)=>{
	const intent = await createPayment()
	console.log(intent)
	res.json({client_secret:intent.client_secret})
})

app.get('/', (req, res)=>{
	res.send('welcome to dr fauci swag site')
})

app.listen(port, host, function(){
	console.log('app is running on port '+port)
})

//set up server