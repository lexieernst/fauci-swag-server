const app = require('express')()
// const cors = require('cors')()
const bodyParser = require('body-parser')
const port = 4000
const host = 'localhost'
const apiKey = 'pk_test_51HB9t8Hs8cvrYh7rXFiciTTySGGJId9eEwEKjjBKTVugiqTMARIRGqLVIv1XyGn5mUGxECAbHF6KXQ8xLFvUHVeK00tt6HX14I'
const stripe = require('stripe')(apiKey)

// app.use(cors())
app.use(bodyParser.urlencoded({
	extended: true
}))

app.get('/', (req, res)=>{
	res.send('welcome to dr fauci swag site')
})

app.listen(port, host, function(){
	console.log('app is running on port '+port)
})

//set up server