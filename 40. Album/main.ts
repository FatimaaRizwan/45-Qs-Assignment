function make_album(artist:string, title:string, tracks:number){
    let album= {artist, title};
    if (tracks){
        album['tracks'] = tracks;
    }
    return album;
}
console.log(make_album("Jimin","Face"));
console.log(make_album("Jungkook","Golden", 11));
console.log(make_album("Namjoon","Indigo", 10));