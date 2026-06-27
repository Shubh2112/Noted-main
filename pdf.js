const PDF_URL = "https://drive.google.com/file/d/1ePQYKfgBU5SNODrPFRuV6uiLTVo2Wpr8/view?usp=sharing";

const openBtn = document.getElementById("openBtn");

openBtn.addEventListener("click", () => {
    window.open(PDF_URL, "_blank");
});
