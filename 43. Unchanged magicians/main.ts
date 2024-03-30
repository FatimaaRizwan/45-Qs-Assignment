let magicians:string[]=["Jin", "Jimin", "Suga"];

function show_magicians(magicians: string[]):void{
    console.log("Magicians:");
    for (const magician of magicians){
        console.log(magician);
    }
}


function make_great(magicians: string[]): string[]{
    let greatMagicians=[];
    magicians.forEach(magician=> {
        greatMagicians.push(`${magician} the Great`);
    });
    return greatMagicians;
}

let greatMagicians = make_great(magicians.slice());
console.log("original magicians:");
show_magicians(magicians);
console.log("Great magicians");
show_magicians(greatMagicians);


