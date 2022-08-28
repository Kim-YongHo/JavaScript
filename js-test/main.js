function User(first, last) {
    this.firstName = first
    this.lastName = last
}
User.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`
}

const heropy = new User('Heropy', 'Park')
const army = new User('Amy', 'Clarke')

console.log(heropy.getFullName())
console.log(army.getFullName())