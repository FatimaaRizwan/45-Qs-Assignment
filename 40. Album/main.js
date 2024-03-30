function make_album(artist, title, tracks) {
    var album = { artist: artist, title: title };
    if (tracks) {
        album['tracks'] = tracks;
    }
    return album;
}
console.log(make_album("Jimin", "Face"));
console.log(make_album("Jungkook", "Golden", 11));
console.log(make_album("Namjoon", "Indigo", 10));
