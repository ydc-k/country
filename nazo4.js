const button = document.getElementById('explay');
const ex = document.getElementById('ex');


const answers = {
    q1: "緑",
    q2: "ひとつ",
　　q3: "進んで"
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
	location.href = "5rvscnr.htm"
});










