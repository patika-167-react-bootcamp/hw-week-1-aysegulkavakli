const accessible = "admin";

String.prototype.includesCi = function (val) {
    if (this.toUpperCase().includes(val.toUpperCase())) {
        //toUpperCase() methodu yerinde toLowerCase() methodunu da kullanabilirdik
        return console.log(true);
    } else {
        return console.log(false);
    }
}

accessible.includesCi("aDmIn")
