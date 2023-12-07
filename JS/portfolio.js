function displayMessage(id){
    // window.alert('I describe myself here');
    const p1 = document.getElementById(id);
    if(p1.style.display=="none"){
        p1.style.display = "block"; }
    else{
        p1.style.display = "none";}
}

