// 
// window.addEventListener("scroll", function(event) {
//     var top = this.scrollY,
//         left =this.scrollX;
//
//     let obj = getPos(document.getElementById("header"));
//     if (top > 500) {
//
//       document.getElementById("header").style.zIndex = "1";
//       document.getElementById("header").style.position = "fixed";
//       document.getElementById("header").style.top = 100;
//       document.getElementById("header").style.left = obj.y;
//       document.getElementById("header").style.backgroundColor = "white";
//       // console.log(document.getElementById("header").style.backgrounColor);
//     } else {
//       document.getElementById("header").style.position = "relative";
//       document.getElementById("header").style.backgroundColor = "#FFC762";
//     }
// }, false);
//
// function getPos(el) {
//     // yay readability
//     for (var lx=0, ly=0; el != null; lx += el.offsetLeft, ly += el.offsetTop, el = el.offsetParent);
//     return {x: lx,y: ly};
// }
