let iphone = new mobile(true, 50, [], [], []);

if(iphone.checkstatus()) {
    document.getElementById("mobileStatus").innerHTML = "Máy đang bật";    
}

document.getElementById("batteryStatus").innerHTML = "Pin còn: " + iphone.battery;
iphone.chargeBattery();
document.getElementById("batteryCharge").innerHTML = "Pin sạc được: " + iphone.battery;

let bphone = new mobile(true, 100, [], [], []);

function senttextfriphone() {
    iphone.gettextdraftiphone();
    bphone.textinbox.push(iphone.textdraft);
    iphone.textsent.push(iphone.textdraft); 
    
    document.getElementById("iphoneMessage").innerHTML = 
    "Bphone inbox: bạn đã nhận được tin nhắn: " + bphone.textinbox;
    
    iphone.textdraft.pop();  
}

function senttextfrbphone() {
    bphone.gettextdraftbphone();
    iphone.textinbox.push(bphone.textdraft);
    bphone.textsent.push(bphone.textdraft); 
   
    document.getElementById("bphoneMessage").innerHTML = 
    "Iphone inbox: bạn đã nhận được tin nhắn: " + iphone.textinbox;
    
    bphone.textdraft.pop();      
}