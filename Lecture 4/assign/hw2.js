const library = {
    books: [],

    addBook: function (book) {
        const isduplicate = this.books.some(b => b.title === book.title)
        console.log(isduplicate)
        if(isduplicate){
            return (`The book "${book.title}" already exist`)
        }
        else{
            this.books.push(book)
        }
    },

    removeBook: function (title) {
        const isExist = this.books.some(b => b.title === title)
        if(isExist){
            this.books = this.books.filter(b => b.title !== title)
            console.log(`"${title}" has been removed.`)
        }
        else{
            console.log(`"${title}" does not exist.`)
        }
    },

    listBooks: function () {
        for(let i = 0 ; i < this.books.length ; i++){
            console.log(this.books[i])
        }
    },

    getUnreadBooks: function () {
        const check = this.books.some(b => b.isRead === false)
        if(check){
            return this.books.filter(b => b.isRead === false)
        }
        else{
            return "all book are read"
        }
    }
};

library.addBook({ title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, isRead: true });
//library.addBook({ title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, isRead: false });
//library.addBook({ title: "1984", author: "George Orwell", year: 1949, isRead: true });

//console.log(library.removeBook("1985"))
//console.log(library.getUnreadBooks())
//console.log(library.books)
//console.log(library.getUnreadBooks())
library.listBooks();