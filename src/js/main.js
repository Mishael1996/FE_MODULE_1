//nav
function isActive (currentId) {
    let element = document.getElementById(currentId);
    for (let i = 1; i <= 6; i++) {
        document.getElementById('nav-' + i).classList.remove('active');
    }
    element.setAttribute("class", "active");
}

//slider
const slides = document.getElementsByClassName('slide');
const lastSlide = slides.length - 1;
const switchSlideTime = 1000;

let isSliding = false;
let oldSlide = lastSlide;
let currentSlide = 0;

// slides start position
for (let i = 0; i < lastSlide;i++) {
    slides[i].style.zIndex = slides.length - i;
}

function nextSlide () {
    if (isSliding || slides.length < 2) return;
    oldSlide = currentSlide;
    currentSlide++;
    if (currentSlide > lastSlide) {
        currentSlide = 0;
    }
    switchSlide (oldSlide, currentSlide, 'next')
}

function prevSlide () {
    if (isSliding || slides.length < 2) return;
    oldSlide = currentSlide;
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = lastSlide;
    }
    switchSlide (oldSlide, currentSlide, 'prev')
}

function switchSlide (oldIndex, newIndex, type) {
    isSliding = true;
    slides[newIndex].style.zIndex = lastSlide;
    slides[oldIndex].style.zIndex = lastSlide + 1;
    if (type === 'next') {
        slides[newIndex].style.display = "block";
        slides[oldIndex].style.left = '-100%';
        setTimeout(() => {
            slides[oldIndex].style.display = "none";
            slides[oldIndex].style.left = '0';
            isSliding = false;
        }, switchSlideTime);
    }
    if (type === 'prev') {
        slides[newIndex].style.display = "block";
        slides[oldIndex].style.left = '100%';
        setTimeout(() => {
            slides[oldIndex].style.left = '0';
            slides[oldIndex].style.display = "none";
            isSliding = false;
        }, switchSlideTime);
    }
}
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

