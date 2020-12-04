const {myLibrary, Book, bookCard, addBookToLibrary, readBookToggler} = libraryJs;

const visibility = (e) => {
    const { bookForm } = document.forms;
    e.target.classList.add('hide-form');
    bookForm.classList.remove('hide-form');
    bookForm.classList.add('show-form');
  };
  
const displayBooks = () => {
    let booksList = '';

    const removeBookFromLibrary = (e) => {
        const { bookIndex } = e.target.dataset;
        myLibrary.splice(bookIndex, 1);
        displayBooks();
    };

    myLibrary.forEach((book, bookIndex) => {
        booksList += bookCard(book, bookIndex);
    });

    const booksContainer = document.getElementById('booksContainer');
    booksContainer.innerHTML = booksList;

    const removeBookButtons = document.querySelectorAll('.remove-btn');
    removeBookButtons.forEach((btn) => {
    btn.addEventListener('click', removeBookFromLibrary);
});

const readTogglers = document.querySelectorAll('.toggle-read');
    readTogglers.forEach((btn) => {
        btn.addEventListener('click', readBookToggler);
    });
};
  
const main = () => {
  displayBooks();

  const { bookForm } = document.forms;

  document.getElementById('addBook').addEventListener('click', visibility);

  bookForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const [title, author, numberOfPages, hasRead] = e.target.elements;
    const book = new Book(title.value, author.value, numberOfPages.value, hasRead.checked);

    addBookToLibrary(book);

    displayBooks();

    e.target.reset();

    e.target.classList.remove('show-form');
    e.target.classList.add('hide-form');

    const addBook = document.getElementById('addBook');
    addBook.classList.remove('hide-form');
    addBook.classList.add('show-form');

    return false;
  });
};

main();
