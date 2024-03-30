function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "Take a rest"; }
    console.log("Customize a ".concat(size, " size shirt with a ").concat(message, " printed on it"));
}
make_shirt();
make_shirt("small");
make_shirt("standard", "Love wins all");
