class mobile {
    status;
    battery;
    textdraft;
    textinbox;
    textsent;
    constructor (status, battery, textdraft, textinbox, textsent) {
        this.status = status;
        this.battery = battery;
        this.textdraft = textdraft;
        this.textinbox = textinbox;
        this.textsent = textsent;
    }    

    checkstatus() {
        return this.status;
    }

    chargeBattery() {
        this.battery++;
    }

    gettextdraftiphone () {        
        return this.textdraft.push(document.getElementById("inputtextiphone").value);
    }

    gettextdraftbphone() {
        return this.textdraft.push(document.getElementById("inputtextbphone").value);
    }
}