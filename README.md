## SETUP
to set up the app make sure you have the apropriate repository and have them setup 
 - clone the repo (server) `git clone https://github.com/lexieernst/fauci-swag-server` 
 - clone the repo (client) `git clone https://github.com/lexieernst/fauci-swag-client`

 ## Repos 
 [Server Repo](https://github.com/lexieernst/fauci-swag-server)
 [Client Repo](https://github.com/lexieernst/fauci-swag-client)
#### Setup the server 

 - navigate to the server repository directory `cd fauci-swag-server`
 - install dependencies `npm install` __(Make sure you have node installed on your machine )__
 - run the server `npm run dev`
 - test the server by navigating to these url on your browser `localhost:4000`, should see a welome message , this confirms that the server is running 

 #### Setup the client 
 - navigate to the client repository directory `cd fauci-swag-client`
  - install dependencies `npm install` __(Make sure you have node installed on your machine )__
  - run the server `npm run start`
  - navigate to  `localhost:3000` and should see a default stripe form 


## Structure and Architecture 
The started with the script , npm run dev, which in turns uses nodemon to watch the index.js file on the server for changes 
- The index.js file composes the app object , the app object is an instance of node's http server fulfilled by express js 
   - The app also composes the middlewares `cors` and `body-parser`
  - cors allows us to whitelist domains that can communicate with the server 
  - in the case of this we dpo not need to implement an additional layer of security on our server so we are opening up the server to acce[pt connections from all domains 
  - we then created routes for the app object 
   1. The Home route `/` this is the default route when a user hits the domain with no path 
   2. The secret route `/secret` returns a secret for the initated payement in order to connect to the client
   3. The webhook route `/webhook` handles the webhook implementation 
   4. The stripe payment intent was implemented in src/stripe
   5. Webhooks writes to a logger at the fle `loggger.txt`

 - The server listens on port 4000 
 
 - The client is built with react 
 - Bootstrapped fron the tool create react app
 - Within the app.js file we implemented the stripe component 
 - Subscribed to the payment intent object we declared in the server on `checkoutForm.js` file 
 - And then the payment logic is implemented on the file 
 - once the payment is successful we display an alert on the client 


## Friction Log 
 - it was quite easy to set up the server 
 - the client is straight forward 
 - but the webhook logic is quite complicated 