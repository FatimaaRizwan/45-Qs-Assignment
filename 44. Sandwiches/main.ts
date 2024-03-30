function make_sandwiches(...items: string[]){
    console.log(`Making a sandwich with: ${items.join(', ')}.`);
}

make_sandwiches("mayo", "cheese");
make_sandwiches("egg", "tomato");
make_sandwiches("pepper", "chicken");
make_sandwiches("beef", "ketchup");