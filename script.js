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
            alert("You don’t have enough coins! You need at least 20 coins to make a call.")
            return;
        }

        const totalCoin = coinCount - 20
        document.getElementById("coin-count").innerText = totalCoin

        const parent = e.target.parentNode.parentNode
        const serviceName = parent.querySelector(".service-name").innerText
        const serviceNumber = parent.querySelector(".service-number").innerText
        const titleName = parent.querySelector(".title-name").innerText
        alert("Calling " + serviceName + " " + serviceNumber)

        const callHistoryContainer = document.getElementById("call-history")
        const child = document.createElement("div")
        child.innerHTML = `
        <div class = "bg-[#f2eeee] flex justify-between items-center mx-5 rounded-2xl mb-3 px-2 py-2">
              <h3> <span class = "font-bold">${titleName}</span> <br> ${serviceNumber}</h3>
            <div>
              <p>${new Date().toLocaleTimeString()}</P>
            </div>
        </div>`
        callHistoryContainer.appendChild(child)
    })
}

document.getElementById("clear-button")
    .addEventListener("click", function () {
        const callHistoryContainer = document.getElementById("call-history")
        callHistoryContainer.innerHTML = " "
    })
const copyButtons = document.getElementsByClassName("copy-btn")
for (const button of copyButtons){
    button.addEventListener("click", function(e){
        e.preventDefault()

         const parent = e.target.parentNode.parentNode
         const serviceNumber = parent.querySelector(".service-number").innerText

        navigator.clipboard.writeText(serviceNumber).then(() => {
            alert("Copied Successfully : " + serviceNumber)

        const copyCount = parseInt(document.getElementById("copy-count").innerText)
        document.getElementById("copy-count").innerText = copyCount + 1

    })
})
}







