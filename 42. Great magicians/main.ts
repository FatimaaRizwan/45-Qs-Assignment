let magicians:string[]=["Jin", "Jimin"];
function show_magicians(magicians: string[]):void {
    console.log("magicians:");
    for (const magician of magicians){
        console.log(magician);
    }
}
function make_great(magicians: string[]):void{
    for (let i=0; i<magicians.length; i++){
        magicians[i]= magicians[i] + " The Great";
    }
}

make_great(magicians);
show_magicians(magicians);

