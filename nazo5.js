

const answers = {
    q1: "赤",
    q2: "　"
};

document.getElementById("send").addEventListener("click", () => {

    let correct = true;

    for(const id in answers){

        const select = document.getElementById(id);

        if(select.value !== answers[id]){
            correct = false;
        }

    }

const button = document.getElementById('send');
	var answer = document.getElementById('answer');

    if(correct && answer.value == 'トウシ'){
	ex.classList.add('is-active');
	ex.scrollIntoView({
    behavior: "smooth",
    block: "end"
});
    }else{
        alert("どうやら間違っているようだ");
    }

});

document.getElementById("next").addEventListener("click", () => {
	location.href = "clearstk.htm"
});




