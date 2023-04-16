
let wishList = [ 
  'Love', 'Freedom', 'Much money', 'Perfect day', 'Win', 'Fantastic music', 'Good health'
]
let t = document.querySelector(".text");
function getWish(wishList) {
  for (let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(Math.random() * wishList.length);
    const newDiv = document.createElement("div");
    newDiv.innerHTML = wishList[randomIndex];
    t.after(newDiv)
  }  
}

 window.onload = function () {
   getWish(wishList);
 };


