"use strict";

let text = document.getElementById("username");

let check = document.getElementById("checkbox");

let button = document.getElementById("submit");

button.addEventListener("click", add);

function add(event){
    event.preventDefault();

    if(check.value ===""){
        alert("Please enter the username");
    }
    else if(!check.checked){
        alert("Please click the checkbox");
    }
    else{
        alert("The page has been updated");
        location.href='https://www.amazon.in/?&ext_vrnc=hi&tag=googhydrabk1-21&ref=pd_sl_7hz2t19t5c_e&adgrpid=58355126069&hvpone=&hvptwo=&hvadid=676742234347&hvpos=&hvnetw=g&hvrand=10374549626825750189&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9061930&hvtargid=kwd-10573980&hydadcr=14453_2367553&gclid=Cj0KCQiA35urBhDCARIsAOU7QwmoIgz7FKPSWvzOCFt42cfHIKObZu3p-_XLrJRU82wWi00CJqZxRoIaAvreEALw_wcB'
    }
}