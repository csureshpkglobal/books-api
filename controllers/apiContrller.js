var https = require("https");
module.exports = function (app) {
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
  });
  // Get books by search keyword
  app.get("/api/books/:searchword", function (req, res) {
    var BASE_URL = "https://www.googleapis.com/books/v1/volumes?q=";
    var url = BASE_URL + req.params.searchword;
    var body = "";
    var books = [];

    https.get(url, function (response) {
      if (response.statusCode !== 200) {
        throw Error("Error!");
      }
      response.on("data", function (data) {
        body += data;
      });

      response.on("end", function () {
        var err, data;
        try {
          data = JSON.parse(body).items;
          data.forEach((item) => {
            books.push({
              id: item.id,
              title: item.volumeInfo.title,
              imageLink: item.volumeInfo?.imageLinks?.thumbnail,
              description: item.volumeInfo.description,
              authors: item.volumeInfo.authors,
              ratingsCount: item.volumeInfo.ratingsCount,
              publisher: item.volumeInfo.publisher,
              pageCount: item.volumeInfo.pageCount,
              language: item.volumeInfo.language,
            });
          });
          res.json(books);
        } catch (e) {
          err = new Error("Invalid response from Google Books API.");
        }
      });
    });
  });
};
