const app = require('express')()
// const cors = require('cors')()
const bodyParser = require('body-parser')
const port = 4000
const host = 'localhost'

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