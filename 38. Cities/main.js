function describe_cities(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is the capital city of ").concat(country, "."));
}
describe_cities("Islamabad");
describe_cities("Dhaka", "Bangladesh");
describe_cities("Istanbul", "Turkey");
describe_cities("Seoul", "South Korea");
