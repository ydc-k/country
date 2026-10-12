const button = document.getElementById('send');
var answer = document.getElementById('answer');

button.addEventListener('click', () => {

if (answer.value == '2')  {
alert("認証が完了しました。");
location.href = "1tltsny.htm"
} else {
alert("認証に失敗しました。再度解きなおしてください。");
}

});





