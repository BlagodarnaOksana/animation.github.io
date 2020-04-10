function parallax(event) {
var x = Math.round(event.clientX / window.innerWidth * 100);
var l1=-(x-50)/10+45;
var l2=-(x-50)/6;



tri = this.querySelector(".trimaran");
tri1 = this.querySelector(".trimaran1");
water = this.querySelector(".water");
sky1 = this.querySelector(".sky1");
sky2 = this.querySelector(".sky2");

tri.style.left = l1 + '%';
tri1.style.left = l1 + '%';
water.style.backgroundPosition = (l2+"% 0%");
sky1.style.backgroundPosition = (l2+"% 0%");
sky2.style.backgroundPosition = (l2+"% 0%");
}


document.addEventListener("mousemove", parallax);
