const prod = process.env.NODE_ENV === "production";
module.exports = {
  "process.env.BASE_URL": prod ? "https://domain.ir" : "http://localhost:5000",
};
