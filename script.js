const adding = document.getElementById('adding');
const popUp = document.querySelector('.pop-up-box');
const img = document.querySelector('.img');

const deleteOne = document.getElementById('delete');
const readed = document.getElementById('read');
const lineOne = document.querySelector('.line');

const myLibrary = [
    {
        title: 'Slaughterhouse-Five',
        author: 'Kurt Vonnegut',
        pages: 700
    },
    {
        title: 'The Lord of the Rings',
        author: 'J.R.R. Tolkien',
        pages: 864
    },
    {
        title: 'The Book Thief',
        author: 'Markus Zusak',
        pages: 452
    }
    
]

// myLibrary.pop()

console.log(myLibrary);

//object constructor
function Books(title,author,pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

// add book to library
function addBookToLibrary() {
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let newBook = new Books(title,author,pages);
    myLibrary.push(newBook);
    program();

 };

const newBookbtn = document.getElementById('newbook');
newBookbtn.addEventListener('click',(e)=>{
    e.preventDefault();
    popUp.style.display= "none";
    addBookToLibrary()
})

const showBook = document.querySelector('.show_book')
function program() {
    
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        console.log(book);
        let works = myLibrary.map((item) => `
    <li class="line"">
        <p><strong>Title: <br></strong>${item.title}</p>
        <p><strong>Author: <br></strong>-${item.author}-</p>
        <p><strong>Pages: <br></strong> ${item.pages}</p>
        <button id="read" onclick='removeBook(${i})'>Read</button>
        <button id="delete">Delete</button>
    </li> `).join('');
    showBook.innerHTML = works;
    }
  }

  window.addEventListener('DOMContentLoaded', program);

adding.addEventListener('click', (e)=> {
    e.preventDefault();
    popUp.style.display = 'flex';
})

img.addEventListener('click', ()=> {
    popUp.style.display = 'none';
})

// remove book

function removeBook (index){
    myLibrary.slice(index, 1)
    program();
}



