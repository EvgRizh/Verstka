{
	"use strict"

const fna = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg"];
let img_el = document.getElementById("hi");
let curent_index = 1;
let n = 500;
let intervalID;

intervalID = setInterval(() => {
	img_el.src = "img/Anim/"+fna[curent_index];
	++curent_index;
	if (curent_index == fna.length) //curent_index = 0;
	clearInterval(intervalID);
}, n);

}