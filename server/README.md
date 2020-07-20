# Football Explorer API

Football Explorer App allows you to browse the different leagues, and to consult the list of teams participating in these leagues as well as their players.

## Specific libraries used

* [Mongoose](https://mongoosejs.com/) for querying Mongo DB
* [Express](https://expressjs.com/fr/) to run the Node Server

## API documentation
This API is documented with [APIDOC](https://apidocjs.com/) tool.
To generate the API documentation, run the following command:

```
npm run doc:generate
```
Then, open the `/server/apidoc/index.html` file in your browser.
Note: The API doc has not been integrated in the Docker container. To generate the API doc, you need to have Node and Npm installed, and the dependencies installed locally (not only in the Docker container).