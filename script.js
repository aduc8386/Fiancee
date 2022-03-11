
var yes = document.getElementById("yes");
var no = document.getElementById("no");
var count = 0;
var chat = document.getElementById("chat");
var main = document.getElementById("main");
var main1 = document.getElementById("main1");


document.addEventListener("mousemove", parallax);

function parallax(e) {
	this.querySelectorAll(".layer").forEach(layer => {
		const speed = layer.getAttribute("data-speed");

		const x = (window.innerWidth - e.pageX*speed)/100;
		const y = (window.innerWidth - e.pageY*speed)/100;


		layer.style.transform = `translateX(${x}px) translateY(${y}px)`;

	})
}

no.onmouseover = () => {
	count ++;
	if(count > 6) {
		chat.innerHTML = "Em hết thưn anh rùi T.T";
	} else if (count > 4) {
		chat.innerHTML = "Nút kia cơ mà huhu:(";
	} else if (count > 2) {
		chat.innerHTML = "Ơ! Em ơi nhầm nút rùiiiiii";
	} else if (count > 1) {
		chat.innerHTML = "Nhỉ??????????";
	} else {
		chat.innerHTML = "Khum sao chắc em trượt tay thui! Nhỉ?";
	}

	var audio1 = new Audio("img/beep.mp3");
	audio1.play();

	let randomTop = (Math.random() * 400) - 200;
	let randomLeft = (Math.random() * 400) - 200;

	console.log("top" + randomTop);
	console.log("left" + randomLeft);

	no.style.transform = `translateX(${randomTop}px) translateY(${randomLeft}px)`

	// no.setAttribute("style", `top: ${randomTop}px;`);
	// no.setAttribute("style", `left: ${randomLeft}px;`);

}

yes.onclick = () => {
	main.setAttribute("style", "display: none;");
	main1.setAttribute("style", "display: block;");

	var audio1 = new Audio("img/ngaydautien.mp3");
	audio1.play();
}


