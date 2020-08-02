const app = require('express')()
const cors = require('cors')
const bodyParser = require('body-parser')
const port = 4000
const host = 'localhost'
const createPayment = require('./stripe').createPayment
const logger = require('./logger')

app.use(cors())
app.use(bodyParser.urlencoded({
	extended: true
}))

app.post('/webhook', bodyParser.raw({type: 'application/json'}), ( req, res ) => {
	let event;
  const { body } = req
  try {
    event = JSON.parse(body);
  } catch (err) {
    res.status(400).send(`Webhook Error: ${err.message}`);
  }
	
	const { type } = event 

  // Handle the event
  switch (type) {
    case 'payment_intent.succeeded':
			const paymentIntent = event.data.object;
			logger.success('PaymentIntent was successful!')
      break;
    // ... handle other event types if needed
    default:
      // Unexpected event type
      return res.status(400).end();
  }

  // Return a 200 response to acknowledge receipt of the event
  res.json({received: true});

})
app.get('/secret', async (req, res)=>{
	const intent = await createPayment()
	logger.success('secret was sent ')
	res.json({client_secret:intent.client_secret})
})

app.get('/', (req, res)=>{
	res.send('welcome to dr fauci swag site')
})

app.listen(port, host, function(){
	console.log('app is running on port '+port)
})

//set up server