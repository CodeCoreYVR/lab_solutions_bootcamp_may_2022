// Library
class Book {
  constructor(title, [authors], edition) {
    this.title = title;
    this.authors = [authors];
    this.edition = edition;
  }
}

const eloquentJS = new Book("Eloquent Javascript", ["Marijn Haverbeke"], 3);
const speakingJS = new Book("Speaking JavaScript", ["Dr. Axel Rauschmayer"], 1);
const theRustProgLang = new Book(
  "The Rust Programming Language",
  ["Steve Klabnik", "Carol Nichols"],
  2
);

class Library {
  constructor(books) {
    this.books = [];
  }

  shelve(book) {
    this.books.push(book);

    this.books.sort(function (a, b) {
      return a.title < b.title ? -1 : a.title > b.title ? 1 : 0;
    });

    return this; // returning `this` makes shelve method chainable
  }

  findByTitle(title) {
    let searchResults = [];
    for (let book of this.books) {
      if (book.title.toLowerCase().includes(title.toLowerCase())) {
        searchResults.push(book);
      }
    }
    return searchResults;
  }

  list() {
    return this.books;
  }
}

const lib = new Library();
lib.shelve(theRustProgLang).shelve(speakingJS).shelve(eloquentJS);

console.log(lib.list());

lib.findByTitle("javascript"); // this will return both javascript books
