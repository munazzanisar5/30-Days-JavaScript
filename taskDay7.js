// Objects
// Activity 1: Object creation and access

let bookStore = {
    Title : "Prisoners of Geography",
    Author : "Tim Marshall",
    Year: 2000,
    getTitleAndAuthor: function() {
        return this.Title + " by " + this.Author;
    }
}

console.log(bookStore);
console.log(bookStore.Title);
console.log(bookStore.Author);

// Activity 2: Object Method
console.log(bookStore.getTitleAndAuthor());

bookStore.Year = function myFun() {
    return console.log(2020);
}
console.log(bookStore.Year());


// Activity 3: Nested Object

let library = {
    books:[
        {
            title: "The Optics Of Ibn Al Haytham ",
            author: "Ibn Al Haytham",
            year: 1898
        },
       {
            title: "Calculas ",
            author: "Chris McMullen",
            year: 2018
        },
        {
            title: "Sapiens",
            author: "Yuval Noah Harari",
            year: 2011
        },
        {
            title: "Educated",
            author: "Tara Westover",
            year: 2018
        },
        { 
            getTitleandAuthor: function() {
            return this.title + " by " + this.author;
        }}
    ]
}

console.log(library[0]);
console.log(library[1]);

library.books.forEach(book => {
     console.log(book.title);
});

// Activity 4: The this  keyword
function getTitleandAuthor() {
    return this.title + " by " + this.author;
}

library.books.forEach(book => {
    book.getTitleandAuthor = getTitleandAuthor;
});

// Log the title and author for each book
library.books.forEach(book => {
    console.log(book.getTitleandAuthor());
});


for (const key in library) {
  
    console.log(library);
}

console.log(Object.keys(bookStore));
console.log(Object.values(bookStore));
