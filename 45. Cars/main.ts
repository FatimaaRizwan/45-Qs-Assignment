function make_car(manufacture:string[], model: string,  ...options:[string, any][]) : Object {
    let car={manufacture, model};
    options.forEach(([key ,value ]) => car[key]= value);
    return car;
}
console.log(make_car("Toyota", "Corolla", ["colour" , "black"] , ["year", "2021"]));
console.log(make_car("Honda", "Civic", ["colour", "purple"] , ["year" , "2019"]));
console.log(make_car("Ford", "Explorer" , ["colour", "white"], ["year","2022"]));