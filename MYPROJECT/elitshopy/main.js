const men = document.getElementById("men")
const women = document.getElementById("women")
const bag = document.getElementById("bag")
const footware = document.getElementById("footware")

const men_child = men.children;
const women_child = women.children;
const bag_child = bag.children;
const footware_child = footware.children;

console.log("chld_men====>", men_child)

men_child[0].style.color="#fff"
men_child[0].style.backgroundColor = "#fc636b"

const sub_contain6 = document.getElementsByClassName("sub-contain6")

console.log("sub_contin========>", sub_contain6)
sub_contain6[0].style.display = "flex"
sub_contain6[1].style.display = "none"
sub_contain6[2].style.display = "none"
sub_contain6[3].style.display = "none"



const hendlemen = () => {
    // men.style.display='none'
    sub_contain6[0].style.display = "flex"
    sub_contain6[0].style.transition = "1s"

    men_child[0].style.backgroundColor="#fc636b"
    men_child[0].style.color="#fff"
    
    bag_child[0].style.backgroundColor = "#fff"
    women_child[0].style.backgroundColor = "#fff"
    footware_child[0].style.backgroundColor = "#fff"

    footware_child[0].style.color = "#000"
     bag_child[0].style.color = "#000"
    women_child[0].style.color = "#000"

    sub_contain6[1].style.display = "none"
    sub_contain6[2].style.display = "none"
    sub_contain6[3].style.display = "none"

}


const hendlewomen = () => {
    // men.style.display='none'
    sub_contain6[1].style.display = "flex"
    sub_contain6[1].style.transition = "1s"

    women_child[0].style.backgroundColor = "#fc636b"
    women_child[0].style.color = "#fff"

    men_child[0].style.backgroundColor = "#fff"
    bag_child[0].style.backgroundColor = "#fff"
    footware_child[0].style.backgroundColor = "#fff"

     men_child[0].style.color = "#000"
    bag_child[0].style.color = "#000"
    footware_child[0].style.color = "#000"


    sub_contain6[0].style.display = "none"
    sub_contain6[2].style.display = "none"
    sub_contain6[3].style.display = "none"

}


const hendlebag = () => {
    sub_contain6[2].style.display = "flex"
    sub_contain6[2].style.transition = "1s"

    bag_child[0].style.backgroundColor = "#fc636b"
    bag_child[0].style.color = "#fff"

    men_child[0].style.backgroundColor = "#fff"
    women_child[0].style.backgroundColor = "#fff"
    footware_child[0].style.backgroundColor = "#fff"

    men_child[0].style.color = "#000"
    women_child[0].style.color = "#000"
    footware_child[0].style.color = "#000"

    sub_contain6[0].style.display = "none"
    sub_contain6[1].style.display = "none"
    sub_contain6[3].style.display = "none"

}


const hendlefootware = () => {
    sub_contain6[3].style.display = "flex"
    sub_contain6[3].style.transition = "1s"

    footware_child[0].style.backgroundColor = "#fc636b"
    footware_child[0].style.color = "#fff"

    men_child[0].style.backgroundColor = "#fff"
    women_child[0].style.backgroundColor = "#fff"
    bag_child[0].style.backgroundColor = "#fff"

    men_child[0].style.color = "#000"
    women_child[0].style.color = "#000"
    bag_child[0].style.color = "#000"


    sub_contain6[0].style.display = "none"
    sub_contain6[1].style.display = "none"
    sub_contain6[2].style.display = "none"

}