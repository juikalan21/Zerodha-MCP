import { KiteConnect } from "kiteconnect";

const apiKey = "0dir1vv1fhwxtlbv";
let accessToken = "l9wGG1EaZT81RDHjSoNKoQa8q3w7svT0"; 

const kc = new KiteConnect({ api_key: apiKey });

export async function placeOrder(tradingsymbol: string, quantity: number, type: "BUY" | "SELL") {
  try {
    kc.setAccessToken(accessToken); //hardcoded access token which we generated in last session from the request token we had
    await kc.placeOrder("regular", {
        exchange: "NSE",
        tradingsymbol,
        transaction_type: type,
        quantity: 1,
        product: "CNC", //long term order
        order_type: "MARKET"
    });
  } catch (err) {
    console.error(err);
  }
}
