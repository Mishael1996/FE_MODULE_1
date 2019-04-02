//nav
function isActive (currentId) {
    let element = document.getElementById(currentId);
    for (let i = 1; i <= 6; i++) {
        document.getElementById('nav-' + i).classList.remove('active');
    }
    element.setAttribute("class", "active");
}

//slider
let slider = document.getElementsByClassName('slides');
const slides = document.getElementsByClassName('slide');
let activeElement = document.querySelector('.current');
for(let i = 0; i < slides.length; i++) {
    slides[i].style.zIndex = slides.length - i;
}


function next() {
    console.log(slides);
    if (activeElement.nextElementSibling) {
        console.log(activeElement.nextElementSibling);
        activeElement.style.left = "-100%";
        activeElement.classList.remove('current');
        activeElement.nextElementSibling.classList.add('current');
        activeElement =  activeElement.nextElementSibling;
    }
        // else {
    //     activeElement.classList.remove('current');
    //     activeElement =  slides[0];
    //     activeElement.classList.add('current');
    // }
}
function prev() {
    if (activeElement.previousElementSibling) {
        activeElement.previousElementSibling.style.left = "0%";
        activeElement.classList.remove('current');
        activeElement.previousElementSibling.classList.add('current');
        activeElement = activeElement.previousElementSibling;
    }
}
//     else {
//         activeElement.classList.remove('current');
//         activeElement = slides[slides.length -1];
//         activeElement.style.left = "0%";
//         activeElement.classList.add('current');
//         for(let i = 0; i < slides.length; i++) {
//             slides[i].style.zIndex = slides.length - i;
//         }
//     }
// }

// activeElement.onmousedown = function () {
//     const clickPosition = event.clientX;
//     document.onmousemove = function () {
//         if(event.clientX > clickPosition) {
//             console.log(event.client);
//             activeElement.style.left = `${event.clientX}px`;
//         }
//         else if(event.clientX < clickPosition){
//             console.log(event.client);
//             activeElement.style.right = `${-(event.client}px`;
//         }
//     }
//     console.log(clickPosition);
//     document.onmouseup = function () {
//         console.log('here')
//     };
// };

