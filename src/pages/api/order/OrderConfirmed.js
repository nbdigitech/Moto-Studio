import { apipath } from "../apiPath";

export default async function handler(req, res) {
  const endpoint = req.headers.host.includes("localhost")
    ? process.env.NEXT_PUBLIC_PAYMENT_SUCCESS_URL_LOCAL
    : process.env.NEXT_PUBLIC_PAYMENT_SUCCESS_URL;
  if (req.method === "POST") {
    const { mihpayid, status, email, mode, txnid, amount } = req.body;
    if (status === "success") {
      const order_id = txnid.split("-")[2];
      const response = await fetch(`${apipath}/api/v1/order/payment_verify`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ order_id, email, mode, mihpayid }),
      });
      const jsonData = await response.json();
      console.log(jsonData);
      console.log("payment verified----------------->");
      const paymentresponse = await fetch(apipath + "/api/v1/payments/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount,
          order_id,
          user_id: jsonData.data.user_id,
          products: jsonData.data.products_,
        }),
      });
      await paymentresponse.json();
      console.log("Payment & Cart Updated----------------->");
      res.writeHead(302, { Location: endpoint.replace("api/", "") }).end();
      console.log(paymentresponse);
    }
  } else {
    res.writeHead(302, { Location: endpoint }).end();
  }
}
