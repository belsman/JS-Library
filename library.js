const {
  myLibrary,
  Book,
  bookCard,
  addBookToLibrary,
  readBookToggler,
} = (() => {
  const myLibrary = [];

  class Book {
    constructor(title, author, numberOfPages, hasRead) {
      this.title = title;
      this.author = author;
      this.numberOfPages = numberOfPages;
      this.hasRead = hasRead;
    }

    toggle() {
      this.hasRead = !this.hasRead;
    }
  }

  const bookCard = (book, bookIndex) => `<div class="book-card">
      <h4 class="text-secondary">${book.title}</h4>
      <hr>
      <p><span class="font-italic">Written by:</span> ${book.author}</p>
      <p>Number of pages: ${book.numberOfPages}</p>
      <p>Read: 
        <input type="checkbox" name="read" class="toggle-read" ${book.hasRead ? 'checked' : ''} data-toggled-book-index="${bookIndex}" >
      </p>
      <button class="remove-btn" data-book-index="${bookIndex}"><i class="fa fa-trash-o trash-icon"></i></button>
    </div>`;

  const addBookToLibrary = (book) => {
    myLibrary.push(book);
  };

  const readBookToggler = (e) => {
    const bookIndex = e.target.dataset.toggledBookIndex;
    const book = myLibrary[bookIndex];
    book.toggle();
  };

  return {
    myLibrary,
    Book,
    bookCard,
    addBookToLibrary,
    readBookToggler,
  };
})();
