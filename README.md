## Setup
To set up the app,  make sure you have the two appropriate repositories set up.
 - Clone the repo (server) `git clone https://github.com/lexieernst/fauci-swag-server` 
 - Clone the repo (client) `git clone https://github.com/lexieernst/fauci-swag-client`

 ## Repos 
 - [Server Repo](https://github.com/lexieernst/fauci-swag-server)
 - [Client Repo](https://github.com/lexieernst/fauci-swag-client)

#### Set up the server 

 - Navigate to the server repository directory `cd fauci-swag-server`
 - Install dependencies `npm install` __(Make sure you have node installed on your machine)__
 - Run the server `npm run dev`
 - test the server by navigating to the url on your browser `localhost:4000`. You should see a welome message. This confirms that the server is running. 

 #### Set up the client 
 - Navigate to the client repository directory `cd fauci-swag-client`
  - Install dependencies `npm install` __(Make sure you have node installed on your machine)__
  - Run the server `npm run start`
  - Navigate to  `localhost:3000`. You should see a default stripe form.

#### Set up the webhook locally 
- First install the stripe CLI 
   - For Mac `brew install stripe/stripe-cli/stripe`
   - for Winddows 
       1. Download the latest windows tar.gz file from https://github.com/stripe/stripe-cli/releases/latest
       2. Unzip the stripe_X.X.X_windows_x86_64.zip file
       3. Run the unzipped .exe file
   - For Linux
       1. Download the latest linux tar.gz file from https://github.com/stripe/stripe-cli/releases/latest
       2. Unzip the file: tar -xvf stripe_X.X.X_linux_x86_64.tar.gz
       3. Run the executable: ./stripe
    [consult the docs for more information](https://stripe.com/docs/payments/handling-payment-events#build-your-own-webhook)

- Navigate to the terminal, and enter: `stripe login --api-key {{TEST_API_KEY}}` __replace content of the curly braces with your APIKEY that you're using in the server in Stripe.js__
- Run `stripe listen --forward-to http://localhost:4000/webhook` this allows the CLI to portforward requests to the webhook running on the node server on port 4000.

#### Test the product
 - Once you have the server, client, and Stripe CLI running, you are ready to test the integration.

 - Navigate to http://localhost:3000/, enter in test credit card data (shown below), and click `Buy T-Shirt`. If the Payment is successful, you should see an alert that reads, `Payment was successful`.
 
  <img width="655" alt="Screen Shot 2020-08-02 at 3 26 20 PM" src="https://user-images.githubusercontent.com/7201030/89130694-f3672580-d4d4-11ea-9cc4-eb43b4d06f02.png">

 - If the payment intent was indeed successful, in your server directory `dr-fauci-swag`, a `logger.txt` file will appear that reads  `SUCCESS! PaymentIntent was successful!` with the corresponding date and time of the payment success event.

## Structure and Architecture 
To start the server run the script `npm run dev`, This uses nodemon to watch the `index.js` file on the server for changes to support live reload functionality.

- The index.js file composes the app object. The app object is an instance of node's http server fulfilled by Express.js 
   - The app also composes the middlewares `cors` and `body-parser`
  - cors allows us to whitelist domains that can communicate with the server 
  - in the case of this we do not need to implement an additional layer of security on our server so we are opening up the server to accept connections from all domains 
  - we then created routes for the app object 
   1. The home route `/` is the default route when a user hits the domain with no path 
   2. The secret route `/secret` returns a secret for the initated payement in order to connect to the client
   3. The webhook route `/webhook` handles the webhook implementation 
   4. The Stripe payment intent was implemented in src/stripe
   5. The webhook writes to a logger at the fle `loggger.txt`

 - The server listens on port 4000 
 – The client listens on port 3000
 - The client is built with React 
 - Bootstrapped from the tool `create-react-app`
 - Within the `app.js` file we implemented the Stripe component 
 - Subscribed to the payment intent object we declared in the server on `checkoutForm.js` file 
 - And then the payment logic is implemented on the file 
 - Once the payment is successful we display an alert on the client
