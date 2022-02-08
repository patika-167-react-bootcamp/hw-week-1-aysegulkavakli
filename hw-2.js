const accessible = ["admin", "moderator", "superadmin", "guest"];

Array.prototype.includesCi = function (val) {
    //Here we also can use toLowerCase() method
    return this.map((a) => a.toUpperCase()).includes(val.toUpperCase()) ? console.log(true) : console.log(false)
}

accessible.includesCi("modeRatOR")
