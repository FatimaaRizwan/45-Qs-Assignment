var magicians = ["Jin", "Jimin"];
function show_magicians(magicians) {
    console.log("magicians:");
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " The Great";
    }
}
make_great(magicians);
show_magicians(magicians);
