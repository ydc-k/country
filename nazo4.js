const button = document.getElementById('explay');
const ex = document.getElementById('ex');


const answers = {
    q1: "—Î",
    q2: "‚Ð‚Æ‚Â",
@@q3: "i‚ñ‚Å"
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
        alert("‚Ç‚¤‚â‚çŠÔˆá‚Á‚Ä‚¢‚é‚æ‚¤‚¾");
    }

});

document.getElementById("next").addEventListener("click", () => {
	location.href = "5rvscnr.htm"
});





