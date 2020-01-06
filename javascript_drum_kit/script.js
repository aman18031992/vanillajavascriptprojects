let elementA = document.getElementById("letter_a");
let elementS = document.getElementById("letter_s");
let elementD = document.getElementById("letter_d");
let elementF = document.getElementById("letter_f");
let elementG = document.getElementById("letter_g");
let elementH = document.getElementById("letter_h");
let elementJ = document.getElementById("letter_j");
let elementK = document.getElementById("letter_k");
let elementL = document.getElementById("letter_l");

elementA.onclick = function myFunction() {
    let audio = document.getElementsByClassName("alphabet-A");
    console.log('playing A')
    audio[0].play();
};
elementS.onclick = function myFunction() {
    document.getElementById("letter_a").innerText = "lime";
};
elementD.onclick = function myFunction() {
    document.getElementById("letter_a").innerText = "lime";
};
elementF.onclick = function myFunction() {
    document.getElementById("letter_a").innerText = "lime";
};
elementG.onclick = function myFunction() {
    document.getElementById("letter_a").innerText = "lime";
};
elementH.onclick = function myFunction() {
    document.getElementById("letter_a").innerText = "lime";
};
elementJ.onclick = function myFunction() {
    document.getElementById("letter_a").innerText = "lime";
};
elementK.onclick = function myFunction() {
    document.getElementById("letter_a").innerText = "lime";
};
elementL.onclick = function myFunction() {
    document.getElementById("letter_a").innerText = "lime";
};

