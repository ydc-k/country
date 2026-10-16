
const button = document.getElementById('send');
var answer = document.getElementById('answer');

button.addEventListener('click', () => {

if (answer.value == 'イカ')  {
	ex.classList.add('is-active');
	ex.scrollIntoView({
    behavior: "smooth",
    block: "end"
});
} else {
alert("どうやら間違っているようだ");
}

});

document.getElementById("next").addEventListener("click", () => {
	location.href = "4akihsk.htm"
});





