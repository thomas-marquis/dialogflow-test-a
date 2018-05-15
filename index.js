const WebHook = require("./hook/index");

/**
 * Responds to any HTTP request that can provide a "message" field in the body.
 *
 * @param {!Object} req Cloud Function request context.
 * @param {!Object} res Cloud Function response context.
 */
exports.helloWorld = (req, res) => {
  const hook = new WebHook(req.body);
  hook
    .handleRequest()
    .then(response => {
      console.log(response);
      res.status(200).send("Success: " + response);
    })
    .catch(error => {
      console.error(error);
      res.status(400).send("No message defined!" + error);
    });
};
