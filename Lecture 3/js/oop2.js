var name = "Fatema"
function fun(){
    console.log(this.name)
}


const user = {
    name: "Marium",
    yearOfBirth: 1999,
    calcAge: function(){
        const currentYear = (new Date()).getFullYear()
        return currentYear - this.yearOfBirth
    }
}

fun()
user.calcAge()
fun.call(user)
