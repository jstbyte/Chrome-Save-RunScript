function toBGS(o){browser.runtime.sendMessage(o)}
////////////////////////////////////////////////
browser.storage.local.get("text")
    .then(onGet, onErr);
/////////////////////////////////////////////////
var onSet = (data)=>{}; // On Set Data Function.
var onErr = (err)=>{}; // On Err Setting Fun.

var txt_area = document.getElementById("txt_area");
var bt_run = document.getElementById("run");
var bt_save = document.getElementById("save");


// Load Data From Storage.
function onGet(data){
    if(data.text == undefined || data.text == "Write Valid JavaScript Code Here !"){
        txt_area.value = "Write Your JavaScript Code Here !"
    }else{
        txt_area.value = data.text;
    }
}

// Run Script On Ckick Run Script Button.
bt_run.onclick = ()=>{
    browser.tabs.executeScript({
        code: txt_area.value
      });
}

// Save User Code To Use Next Time.
bt_save.onclick = ()=>{
    browser.storage.local.set({ text: txt_area.value })
    .then(onSet, onErr);
}

