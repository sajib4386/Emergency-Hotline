// Heart Icon Handler
const heartIcons = document.getElementsByClassName("heart-icon");
for (const icon of heartIcons) {
    icon.addEventListener("click", function (e) {
        e.preventDefault();
        const heartImg = parseInt(document.getElementById("heart-img").innerText);
        const totalCount = heartImg + 1
        document.getElementById("heart-img").innerText = totalCount


    })
   
}


