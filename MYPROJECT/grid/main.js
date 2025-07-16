const getnavbar = document.getElementById("nav-ul")
const getBars = document.getElementsByClassName("fa-bars")[0]
const getclose = document.getElementsByClassName("fa-close")[0]




const activemobilemenu = ()=>{
    getnavbar.style.visibility="visible"
    getclose.style.display="block"
    getBars.style.display="none"
    console.log(getnavbar)

}

const closemobilemenu = ()=>
{
    getnavbar.style.visibility="hidden"
    getBars.style.display="block"
    getclose.style.display="none"
}


function updateWindowWidth() {
  const currentWindowWidth = window.innerWidth;
  console.log("Current window width on resize:", currentWindowWidth);

  if(currentWindowWidth > 930 )
  {
    getclose.style.display="none"
    getBars.style.display="none"
    getnavbar.style.backgroundColor="transparent"
    getnavbar.style.visibility="visible"
    
    // activemobilemenu()
    // closemobilemenu()

  }
  else if(currentWindowWidth < 930)
  {
    // getclose.style.display="block"
    getBars.style.display="block"
    getnavbar.style.backgroundColor="none"
    getnavbar.style.backgroundColor="#000"
    getnavbar.style.visibility="hidden"


    
    // getclose.style.display="block"

  }
}
updateWindowWidth()

// Add event listener when the script loads
window.addEventListener('resize', updateWindowWidth);

// Optional: Remove event listener when no longer needed (e.g., in component unmount)
// window.removeEventListener('resize', updateWindowWidth);
