function make_sandwiches() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a sandwich with: ".concat(items.join(', '), "."));
}
make_sandwiches("mayo", "cheese");
make_sandwiches("egg", "tomato");
make_sandwiches("pepper", "chicken");
make_sandwiches("beef", "ketchup");
