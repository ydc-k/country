const button = document.getElementById('explay');
const ex = document.getElementById('ex');


const answers = {
    q1: "点線",
    q2: "中",
    q3: "逆さに見える",
};

document.getElementById("send").addEventListener("click", () => {

    let correct = true;

    for(const id in answers){

        const select = document.getElementById(id);

        if(select.value !== answers[id]){
            correct = false;
        }

    }

    if(correct){
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
	location.href = "2akskazk.htm"
});




