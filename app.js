const progressFill = document.querySelector("#progressFill");
const item1 =document.querySelectorAll(".item1");
let progBar = 0
item1.forEach((itm) => {
  itm.addEventListener("click", () => {
    const chkbox = itm.querySelector(".chkbox");
    const chkboxBg = chkbox.classList.contains("BgChk")
    if (chkbox && !chkboxBg) {
      progBar +=20
      chkbox.classList.toggle("BgChk");
      progressFill.style.width = `${progBar}%`;
    }
    
   else {
     progBar -=20
      chkbox.classList.toggle("BgChk");
      progressFill.style.width = `${progBar}%`;
    }
    
  });
});




/*

click.addEventListener("click", ()=>{
  progressFill.style.width = "50%";
});
*/