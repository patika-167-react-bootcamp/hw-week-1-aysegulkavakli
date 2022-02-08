const accessible = ["admin", "moderator", "superadmin", "guest"];

Array.prototype.includesCi = function (val) {
    //Here we also can use toLowerCase() method
    return this.map((a) => a.toUpperCase()).includes(val.toUpperCase())
}
console.log(accessible.includesCi("adMin"));
