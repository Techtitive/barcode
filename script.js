const input = document.getElementById('name');
const barcode = document.getElementById('barcode');
const generate = document.getElementById('generate');
const download = document.getElementById("download");
const error = document.getElementById('error');
const box = document.getElementById("box");

generate.addEventListener("click", () => {

    if(input.value.trim() === "") {
        error.innerHTML = "Please enter a value";
        error.style.color = "red";
        error.classList.remove("hide");
        barcode.classList.add("barcode")
        download.classList.add("hide");
    }
    else if (input.value !== "") {
        error.classList.add("hide");
        barcode.classList.remove("barcode")
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

document.addEventListener("keydown", (event) => {
    if(event.key === "Enter") {
        if(input.value.trim() === "") {
            error.innerHTML = "Please enter a value";
            error.style.color = "red";
            error.classList.remove("hide");
            barcode.classList.add("barcode")
            download.classList.add("hide");
        }
        else if (input.value !== "") {
            error.classList.add("hide");
            barcode.classList.remove("barcode")
            download.classList.remove("hide");
    
            JsBarcode("#barcode", input.value, {
              format: "code128",
              lineColor: "#000",
              width: 2,
              height: 50,
              displayValue: true  
            });
        }
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
