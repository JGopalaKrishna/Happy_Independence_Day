var Name=window.prompt("Enter Your Name");

setTimeout(function() {
    wish();
}, 1000);

function wish(){
    a1=document.getElementsByClassName("d2")[0];
    a1.innerHTML=" <br>TO "+Name.toLocaleUpperCase();
    start();
}

const start = () => {
    setTimeout(function() {
        confetti.start()
    }, 1000);
};
