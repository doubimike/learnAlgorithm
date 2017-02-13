var fs = require('fs')
var List = require('./list')

function createArr(file) {
    var arr = fs.readFileSync(file).toString().split('\n');
    for (var i = 0; i < arr.length; i++) {
        arr[i].trim();
    }
    return arr;
}

var movies = createArr('films.txt')

var movieList = new List();
for (var i = 0; i < movies.length; i++) {
    movieList.append(movies[i]);
}

function displayList(list) {
    for (list.front(); list.currPos() < list.length(); list.next()) {

        if (list.getElement() instanceof Customer) {
            console.log(list.getElement()['name'] + ',' + list.getElement()['movie']);
        } else {
            console.log(list.getElement());
        }
    }
}


function Customer(name, movie) {
    this.name = name;
    this.movie = movie;
}


function checkOut(name, movie, filmList, customerList) {
    if (movieList.contains(movie)) {
        var c = new Customer(name, movie);
        customerList.append(c);
        filmList.remove(movie);
    } else {
        console.log(movie + 'is not available.');
    }
}
console.log('"Available movies: \n"')
displayList(movieList)
var customers = new List();
checkOut('mike', "1. The Shawshank Redemption（《肖申克的救赎》）", movieList, customers);

console.log('\nCustomer Rentals: \n')
displayList(customers);
