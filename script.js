let projectsData = [
    ["./assets/Spotify - Google Chrome 2024-02-14 11-39-44.mp4", "Spotify"],
    ["./assets/Portfolio - Google Chrome 2024-07-18 19-36-50.mp4", "Portfolio"],
    ["./assets/SignUp Page - Google Chrome 2024-04-11 09-34-38.mp4", "Pinterest"]
];
let src = document.querySelector(".projectHolder .videoHolder video.mainVideo");
let leftsrc = document.querySelector(".projectHolder .videoHolder video.leftbg");
let rightsrc = document.querySelector(".projectHolder .videoHolder video.rightbg");
let title = document.querySelector(".projectDescription .title")
let left = document.querySelector(".left-arrow i");
let right = document.querySelector(".right-arrow i");



let i = 0;
let j = i + 2; //left
let k = i + 1; //right
src.src = projectsData[i][0];
leftsrc.src = projectsData[j][0]
rightsrc.src = projectsData[k][0]

title.textContent = projectsData[i][1]



function projectHover() {
    leftsrc.addEventListener("mouseover", () => {
        src.style.zIndex = "7";
        leftsrc.style.zIndex = "8";
        src.style.opacity = "25%";
        leftsrc.style.opacity = "100%";
        src.style.transform = "scale3d(0.8,0.8,0.8)";
        leftsrc.style.transform = "scale3d(1.2,1.2,1.2)";
        src.style.transition = "ease-in-out 0.3s"
        leftsrc.style.transition = "ease-in-out 0.3s"
    });
    leftsrc.addEventListener("mouseout", () => {
        src.style.zIndex = "8";
        leftsrc.style.zIndex = "7";
        src.style.opacity = "100%";
        leftsrc.style.opacity = "25%";
        src.style.transform = "scale3d(1,1,1)";
        leftsrc.style.transform = "scale3d(1,1,1)";
        src.style.transition = "ease-in-out 0.3s"
        leftsrc.style.transition = "ease-in-out 0.3s"
    });
    src.addEventListener("mouseover", () => {
        src.style.transform = "scale3d(1.1,1.1,1.1)"
        src.style.transition = "ease-in-out 0.3s"
    })
    src.addEventListener("mouseout", () => {
        src.style.transform = "scale3d(1,1,1)"
        src.style.transition = "ease-in-out 0.3s"
    })
    rightsrc.addEventListener("mouseover", () => {
        src.style.zIndex = "7";
        rightsrc.style.zIndex = "8";
        src.style.opacity = "25%";
        rightsrc.style.opacity = "100%";
        src.style.transform = "scale3d(0.8,0.8,0.8)";
        rightsrc.style.transform = "scale3d(1.2,1.2,1.2)";
        src.style.transition = "ease-in-out 0.3s"
        rightsrc.style.transition = "ease-in-out 0.3s"
    });
    rightsrc.addEventListener("mouseout", () => {
        src.style.zIndex = "8";
        rightsrc.style.zIndex = "7";
        src.style.opacity = "100%";
        rightsrc.style.opacity = "25%";
        src.style.transform = "scale3d(1,1,1)";
        rightsrc.style.transform = "scale3d(1,1,1)";
        src.style.transition = "ease-in-out 0.3s"
        rightsrc.style.transition = "ease-in-out 0.3s"
    });
}
projectHover();



function projectClick() {
    leftsrc.addEventListener("click", () => {
        i--; j--; k--;
        if (i == -1) {
            i = 2;
        }
        if (j == -1) {
            j = 2;
        }
        if (k == -1) {
            k = 2;
        }
        src.style.zIndex = "8";
        src.style.opacity = "1";
        src.style.transform = "scale3d(1.1,1.1,1.1)";
        src.style.transition = "ease-in-out 0.3s"
        leftsrc.style.transition = "ease-in-out 0.3s"
        leftsrc.style.transform = "scale3d(1,1,1)";
        leftsrc.style.opacity = "25%";

        src.src = projectsData[i][0];
        leftsrc.src = projectsData[j][0]
        rightsrc.src = projectsData[k][0]
        title.textContent = projectsData[i][1];
    })
    rightsrc.addEventListener("click", () => {
        i++; j++; k++;
        if (i == 3) {
            i = 0;
        }
        if (j == 3) {
            j = 0;
        }
        if (k == 3) {
            k = 0;
        }
        src.style.zIndex = "9";
        src.style.opacity = "1";
        src.style.transform = "scale3d(1.1,1.1,1.1)";
        src.style.transition = "ease-in-out 0.3s"
        rightsrc.style.transition = "ease-in-out 0.3s"
        rightsrc.style.transform = "scale3d(1,1,1)";
        rightsrc.style.opacity = "25%";

        src.src = projectsData[i][0];
        leftsrc.src = projectsData[j][0]
        rightsrc.src = projectsData[k][0]
        title.textContent = projectsData[i][1];
    })
}
projectClick();
// i,j,k hai upar toh update it


function arrowClick() {
    left.addEventListener("click", () => {
        i--;
        j--;
        k--;
        if (i == -1) {
            i = 2;
        }
        if (j == -1) {
            j = 2;
        }
        if (k == -1) {
            k = 2;
        }
        src.src = projectsData[i][0];
        leftsrc.src = projectsData[j][0]
        rightsrc.src = projectsData[k][0]
        title.textContent = projectsData[i][1];

    })
    right.addEventListener("click", () => {
        i++;
        j++;
        k++;
        if (i == 3) {
            i = 0;
        }
        if (j == 3) {
            j = 0;
        }
        if (k == 3) {
            k = 0;
        }
        src.src = projectsData[i][0];
        leftsrc.src = projectsData[j][0]
        rightsrc.src = projectsData[k][0]
        title.textContent = projectsData[i][1]
        console.log(j, i, k);
    })
}
arrowClick();


function changeActive() {
    document.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.tags a');

        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.scrollY >= sectionTop - sectionHeight / 2) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === currentSection) {
                link.classList.add('active');
            }
        });
    });
}
changeActive();




function smoothScroll() {
    document.querySelectorAll('nav a, .buttonHolder a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - document.querySelector('nav').offsetHeight, // Adjust the offset if needed
                behavior: 'smooth'
            });
        });
    });
}
smoothScroll();




