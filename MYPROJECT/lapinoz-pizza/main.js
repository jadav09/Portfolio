const Bars = document.getElementsByClassName("fa-bars")[0]
const Close = document.getElementsByClassName("fa-close")[0]

console.log("jadav========>", Close)

const ContentUl = document.getElementsByClassName("content")[0]
const ContentUlChild = document.getElementsByTagName("li")

const handleBars = () => {

    Close.style.opacity = "1"
    Close.style.display = "block"
    Bars.style.display = "none"

    ContentUl.style.position = "fixed"
    ContentUl.style.top = "0"
    ContentUl.style.left = "0"
    ContentUl.style.height = "100vh"
    ContentUl.style.backgroundColor = "white"
    ContentUl.style.display = "block"

    ContentUlChild[0].style.display = "block"
    ContentUlChild[1].style.display = "block"
    ContentUlChild[2].style.display = "block"
    ContentUlChild[3].style.display = "block"
    ContentUlChild[4].style.display = "block"
    ContentUlChild[5].style.display = "block"



}

const handleClose = () => {


    Close.style.opacity = "0"
    Close.style.transition = "none"
    Bars.style.display = "block"
    ContentUl.style.display = "none"

}


function handlesize() {

    const Bars = document.getElementsByClassName("fa-bars")[0]
    const ContentUl = document.getElementsByClassName("content")[0]
    const ContentUlChild = document.getElementsByTagName("li")
    console.log(ContentUlChild)

    const correntWidth = window.innerWidth
    console.log(correntWidth)

    console.log(Bars)

    if (correntWidth > 1100) {

        // bars
        // Bars.style.display = "none"
        Close.style.display = "none"

        // ul style
        ContentUl.style.position = "static"
        ContentUl.style.height = "auto"
        ContentUl.style.display = "block"

        // li style
        ContentUlChild[0].style.display = "inline"
        ContentUlChild[1].style.display = "inline"
        ContentUlChild[2].style.display = "inline"
        ContentUlChild[3].style.display = "inline"
        ContentUlChild[4].style.display = "inline"
        ContentUlChild[5].style.display = "inline"
    }

    else if (correntWidth < 1100) {

        // bars
        Bars.style.display = "block"
        Close.style.display = "none"

        // if( Bars.style.display == "none"){

        // }


        // ul style
        ContentUl.style.position = "fixed"
        ContentUl.style.top = "0"
        ContentUl.style.left = "0"
        ContentUl.style.height = "100vh"
        ContentUl.style.display = "none"
        // ContentUl.style.backgroundColor = "white"

        // li styles
        ContentUlChild[0].style.display = "block"
        ContentUlChild[1].style.display = "block"
        ContentUlChild[2].style.display = "block"
        ContentUlChild[3].style.display = "block"
        ContentUlChild[4].style.display = "block"
        ContentUlChild[5].style.display = "block"
    }


}

window.addEventListener("resize", handlesize)



