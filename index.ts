import { KiteConnect } from "kiteconnect";

const apiKey = "0dir1vv1fhwxtlbv";
const apiSecret = "9cz574qpe8fs2fnd7m0sbjrgwufhcpci";
const requestToken = "FRw29smOWbcS5sjUWTr43T4FpIrFgaa3"; //you have acces to your own account only 

const kc = new KiteConnect({ api_key: apiKey });

//Oauth workflow
console.log(kc.getLoginURL());

async function init() {
  try {
    await generateSession();
    await getProfile();
  } catch (err) {
    console.error(err);
  }
}

async function generateSession() {
  try {
    const response = await kc.generateSession(requestToken, apiSecret);
    kc.setAccessToken(response.access_token);
    console.log("Session generated:", response);
  } catch (err) {
    console.error("Error generating session:", err);
  }
}

async function getProfile() {
  try {
    const profile = await kc.placeOrder("regular", {
        exchange: "NSE",
        tradingsymbol: "NHPC",
        transaction_type: "BUY",
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