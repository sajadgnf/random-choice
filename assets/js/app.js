const $ = document
const frame = $.querySelector(".frame")
const tags = $.querySelector(".tags")


const addChoice = event => {
    let input = event.target.value.split(",")
    let tagsData = input.filter(tag => tag.trim() !== '').map(tag => tag.trim())

    tags.innerHTML = ""
    tagsData.forEach(element => tags.insertAdjacentHTML("beforeend", `<span>${element}</span>`))

    if (event.which === 13) {
        const interval = setInterval(() => {
            let RandomTage = Math.floor(Math.random() * tags.children.length)
            tags.children[RandomTage].classList.add("highlight")

            setTimeout(() => tags.children[RandomTage].classList.remove("highlight"), 100)
        }, 100)

        setTimeout(() => {
            setTimeout(() => {
                let RandomTage = Math.floor(Math.random() * tags.children.length)
                tags.children[RandomTage].classList.add("highlight")
            }, 100)

            clearInterval(interval)
        }, 2000)
    }
}

frame.addEventListener("keyup", addChoice)