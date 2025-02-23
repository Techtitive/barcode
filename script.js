const input = document.getElementById('name');
const barcode = document.getElementById('barcode');
const generate = document.getElementById('generate');
const download = document.getElementById("download");
const error = document.getElementById('error');
const box = document.getElementById("box");

generate.addEventListener("click", () => {

    if(input.value === "") {
        error.innerHTML = "Please enter a value";
        error.style.color = "red";
    }
    else if (input.value !== "") {
        barcode.classList.remove("barcode")
        error.classList.add("hide");
        download.classList.remove("hide");

        JsBarcode("#barcode", input.value, {
          format: "code128",
          lineColor: "#000",
          width: 2,
          height: 50,
          displayValue: true  
        });
    }
});

window.onload = () => {
    input.value = ""
};

download.addEventListener("click", () => {
    html2canvas(box).then((canvas) => {
        let link = (document.createElement("a"));
        link.href = canvas.toDataURL("image/png");
        link.download = "Barcode.png";
        link.click();
    })
});