// initiate payment intent where we need it
const apiKey = 'sk_test_51HB9t8Hs8cvrYh7rbaRdU8VmooWA9dDsQiJEcTRjCwFX0sFGAcSS9zGJXQTyzWgIjuzg3LIcGmGS8kZeBLs2aI2I006cWZUk9f'
const stripe = require('stripe')(apiKey)

module.exports.createPayment = async function(){
	const paymentIntent = await stripe.paymentIntents.create({
	amount: 500,
	currency: 'usd',
	metadata: {
		integration_check: 'accept_a_payment'
	}
})
	if (paymentIntent){
		console.log('initiate payment successful')
		return paymentIntent
	// create logs here
	}
	// create logs here
	console.log('initiate payment failed')
	return null
}
// initiatePaymentIntent()
