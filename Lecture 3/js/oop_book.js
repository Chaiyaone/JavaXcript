const book = {
    title: "1984",
    author: "George Orwell",
    isAvailbale: false,

    checkIn: function(){
        this.isAvailbale = true
    },
    checkOut: function(){
        this.isAvailbale = false
    }
}
console.log(book["checkIn"]())