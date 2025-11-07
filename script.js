let inner_div = document.querySelector(".inner_div");

const disapear_div = () => {
    inner_div.style.display = "none";
} 

inner_div.addEventListener("click",disapear_div);

