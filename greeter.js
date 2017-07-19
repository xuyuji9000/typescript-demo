function greeter(person) {
    return 'Hello' + person.lastName;
}
var user = { firstName: 'Jane', lastName: 'user' };
document.body.innerHTML = greeter(user);
