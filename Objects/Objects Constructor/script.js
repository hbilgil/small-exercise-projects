function Library(){
}

Library.prototype.info = function() {
    return `${this.title}` + " by " + `${this.author}` + ", " + `${this.pages}` + " pages, " + `${this.status}`;
}

function Book(title, author, pages, status) {
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
}

Book.prototype = Object.create(Library.prototype);

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295', 'not read yet');

console.log(theHobbit.info());