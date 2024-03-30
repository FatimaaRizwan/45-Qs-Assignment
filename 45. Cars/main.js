function make_car(manufacture, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = { manufacture: manufacture, model: model };
    options.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        return car[key] = value;
    });
    return car;
}
console.log(make_car("Toyota", "Corolla", ["colour", "black"], ["year", "2021"]));
console.log(make_car("Honda", "Civic", ["colour", "purple"], ["year", "2019"]));
console.log(make_car("Ford", "Explorer", ["colour", "white"], ["year", "2022"]));
