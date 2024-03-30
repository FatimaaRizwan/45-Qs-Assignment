function describe_cities(city:string , country:string="Pakistan"){
    console.log(`${city} is the capital city of ${country}.`);
}
describe_cities("Islamabad");

describe_cities("Dhaka" , "Bangladesh");

describe_cities("Istanbul" , "Turkey");

describe_cities("Seoul" , "South Korea");