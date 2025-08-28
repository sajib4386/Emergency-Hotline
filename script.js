// Heart Icon Section
const heartIcons = document.getElementsByClassName("heart-icon")
for (const icon of heartIcons) {
    icon.addEventListener("click", function (e) {
        e.preventDefault()

        const heartImg = parseInt(document.getElementById("heart-img").innerText)
        const totalCount = heartImg + 1
        document.getElementById("heart-img").innerText = totalCount


    })

}
// Call Button Section
const callButtons = document.getElementsByClassName("call-button")

for (const button of callButtons) {
    button.addEventListener("click", function (e) {
        e.preventDefault()
        const coinCount = parseInt(document.getElementById("coin-count").innerText)

        if (coinCount < 20) {
            alert("You don't have enough coins!")
            return;
        }

        const totalCoin = coinCount - 20
        document.getElementById("coin-count").innerText = totalCoin

        const parent = e.target.parentNode.parentNode
        const serviceName = parent.querySelector(".service-name").innerText
        const serviceNumber = parent.querySelector(".service-number").innerText
        alert("Calling " + serviceName + " " + serviceNumber)

        const callHistoryContainer = document.getElementById("call-history")
        const child = document.createElement("div")
        child.innerHTML = `
        <div class = "flex justify-between items-center px-5">
              <h3> <span class = "font-bold">${serviceName}</span> <br> ${serviceNumber}</h3>
            <div>
              <p>${new Date().toLocaleTimeString()}</P>
            </div>
        </div>`
        callHistoryContainer.appendChild(child)

        document.getElementById("clear-button")
        .addEventListener("click", function(){
            const callHistoryContainer = document.getElementById("call-history")
            callHistoryContainer.innerHTML = " "
        })
    })
}



