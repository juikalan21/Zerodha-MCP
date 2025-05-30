import { KiteConnect } from "kiteconnect";

const apiKey = "0dir1vv1fhwxtlbv";
//const apiSecret = "9cz574qpe8fs2fnd7m0sbjrgwufhcpci";
//const requestToken = "ky60L5zasMVK2koTdFUAcINKx3q1yfxt"; //you have acces to your own account only - one time use
let accessToken = "l9wGG1EaZT81RDHjSoNKoQa8q3w7svT0"; 

const kc = new KiteConnect({ api_key: apiKey });

//Oauth workflow
console.log(kc.getLoginURL());

async function init() {
  try {
    kc.setAccessToken(accessToken); //hardcoded access token which we generated in last session from the request token we had
    await getProfile();
  } catch (err) {
    console.error(err);
  }
}

// async function generateSession() {
//   try {
//     //const response = await kc.generateSession(requestToken, apiSecret);
//     //console.log(response.access_token) //it is long term
//     //kc.setAccessToken(response.access_token);
//     //console.log("Session generated:", response);
//   } catch (err) {
//     console.error("Error generating session:", err);
//   }
// }

async function getProfile() {
  try {
    const profile = await kc.placeOrder("regular", {
        exchange: "NSE",
        tradingsymbol: "NHPC",
        transaction_type: "SELL",
        quantity: 1,
        product: "CNC", //long term order
        order_type: "MARKET"
    } );
    console.log("Profile:", profile);
  } catch (err) {
    console.error("Error getting profile:", err);
  }
}
// Initialize the API calls
init();