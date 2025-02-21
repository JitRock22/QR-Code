const wrapper = document.querySelector(".main");
const qrInput = document.querySelector(".form input");
const button = document.querySelector(".btn");
const errImg = document.querySelector("#err");
const qrImg = document.querySelector("#qr img");
const qr = document.querySelector("#qr");


button.addEventListener("click", async () => {
    let qrVal = qrInput.value;
    if (!qrVal) {
        errImg.style.display = "flex";
    } else {
        errImg.style.display = "none";
        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrVal}`;
        qr.style.display = "flex";
    }

})
qrInput.addEventListener("keyup", () => {
    if (!qrInput.value) {
        qr.style.display = "none";
    }
})