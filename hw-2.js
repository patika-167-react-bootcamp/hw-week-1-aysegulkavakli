const accessible = ["admin", "moderator", "superadmin", "guest"];

Array.prototype.includesCi = function (val) {
    //Here we also can use toLowerCase() method
    return this.some((a) => a.toUpperCase() === val.toUpperCase())
}
console.log(accessible.includesCi("cefe"));
