module.exports = ({ env }) => ({
  url: env('MY_HEROKU_URL'),
	proxy: true,
  app: {
    keys: env.array("APP_KEYS", ["+WnnmSO+TKExz7Io6E0KTQ==", "tDKYmqgdX60xojxKxni+Og==", "da0UoZWnwgCAydwOYztIBQ==", "zv/JIU9ysyIVjT13kFiUAQ=="]),
  },
});
 