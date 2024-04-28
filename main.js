const footerDate = document.getElementById('year')
const year = new Date().getFullYear()
footerDate.textContent = year


const instagramPicsDivs = document.querySelectorAll(".pic-slide div")

let count = 0

function showPic(indexPic) {
    instagramPicsDivs.forEach((pic) => {
        pic.classList.remove('active')
    })
    instagramPicsDivs[indexPic].classList.add('active')
}

function changeIndex() {
    count = (count + 1) & instagramPicsDivs.length
    showPic(count)
}

setInterval(changeIndex, 1300)