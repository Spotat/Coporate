function openNav() {
    document.getElementById("sideNav").style.height = "100%"
    document.getElementById("sideNav").style.opacity = "1"
    document.getElementById("sideNav").style.zIndex = "99"
    document.getElementById("sideNav").style.visibility = "visible"
}
function closeNav() {
    document.getElementById("sideNav").style.height = "0%"
    document.getElementById("sideNav").style.opacity = "0"
    document.getElementById("sideNav").style.zIndex = "-99"
    document.getElementById("sideNav").style.visibility = "hidden"
}
let slideIndex = 0;
let brandIndex = 0;

const slides = document.getElementsByClassName("slide");
const brands = document.getElementsByClassName("brand")

// const showSlide = (index) => {
//     for (let i = 0; i<slides.length; i++) {
//         slides[i].style.display = "none"
//     }
//     slides[index].style.display = "block"
// };

const moveSlide = (n) => {
    slideIndex = (slideIndex + n +slides.length) % slides.length;
    showSlide(slideIndex);
};

const autoSlide = () => {
    moveSlide(1);
    setTimeout(autoSlide, 5000);
}

// Brand slider
const showBrand = (index) => {
    const brandSlide = document.querySelector('.brand-slider');
    const totalBrands = brands.length;

    // ensure slide index is within bounds
    if (index >= totalBrands) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = totalBrands - 1;
    } else {
        slideIndex = index;
    }

    // Calculate transform value
    const transformValue = `translateX(-${slideIndex * 5}%)`;
    brandSlide.style.transform = transformValue;
}
const moveBrand = (n) => {
    slideIndex = (slideIndex + n +brands.length) % brands.length;
    showBrand(slideIndex);
};

const autoBrand = () => {
    moveBrand(1);
    setTimeout(autoBrand, 800);
}

// Initialize slider
document.addEventListener('DOMContentLoaded', () => {
    moveBrand(slideIndex)
    moveSlide(slideIndex)
    autoSlide()
    autoBrand()
})

document.addEventListener('DOMContentLoaded', function() {
    const headers = document.querySelectorAll('.accordion-header');

    headers.forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            
            /*if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block"
            }
            headers.forEach(otherHeader => {
                if (otherHeader !== this && otherHeader.nextElementSibling.style.display === "block") {
                    otherHeader.nextElementSibling.style.display = "none"
                }
            })*/

            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                content.style.padding = "0 18px"
            } else {
                headers.forEach(otherHeader => {
                    if (otherHeader !== this) {
                        otherHeader.nextElementSibling.maxHeight = null
                        otherHeader.nextElementSibling.padding = "0 18px"
                    }
                });
                content.style.maxHeight = content.scrollHeight + "px";
                content.style.padding = "18px"
            }

        })
    })
})

