// STEP 1: BRING IN EXPRESS
const express = require("express");
const app = express();
const port = 3000;

// STEP 2: THE DATA
const books = [
    { title: "The Hobbit", author: "tolkien", year: 1937 },
    { title: "The Fellowship of the Ring", author: "tolkien", year: 1954 },
    { title: "Pride and Prejudice", author: "austen", year: 1813 },
    { title: "Sense and Sensibility", author: "austen", year: 1811 },
    { title: "1984", author: "orwell", year: 1949 },
    { title: "Animal Farm", author: "orwell", year: 1945 },
    { title: "Song of Solomon", author: "morrison", year: 1977 },
    { title: "Kindred", author: "butler", year: 1979 },
    { title: "Parable of the Sower", author: "butler", year: 1993 }
]


// STEP 3: ROUTE 1 - SERVE THE HOME PAGE
app.get("/", function (request, response) {
    response.sendFile(__dirname + "/public/index.html");
});

//STEP 4: ROUTE 2 - SERVE ALL THE DATA
app.get("/data", function (request, response) {
    response.json(books);
});

//STEP 5: ROUTE 3 - SERVE ONE AUTHOR'S BOOKS
app.get ("/data/:author", function (request, response) {
    //whatever the visitor typed after /data/ lands here
    const wanted = request.params.author;
    //keep only the books that match the wanted author
    const matches = books.filter(function (book) {
        return book.author === wanted;
    });
    //send the matches back to the visitor
    response.json(matches);
});

//STEP 6: START LISTENING
app.listen(port, function () {
    console.log("Server is running at http://localhost:" + port);
});