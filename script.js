let button = document.querySelector(`.icon`);
async function getAdvice() {
    let responce = await fetch("https://api.adviceslip.com/advice");
    let json = await responce.json();
    document.querySelector("h1").innerHTML = `"${json["slip"]["advice"]}"`;
    document.querySelector(".NAdvice span").innerHTML = json["slip"]["id"];
}
getAdvice();
button.addEventListener("click", getAdvice);