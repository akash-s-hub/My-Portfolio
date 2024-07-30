let hamburger = document.querySelector("#menuBar");
let cross = document.querySelector("#cross");
let navItems = document.querySelector(".navItems");
let aTags = document.querySelectorAll(".navItems a")
let sun = document.querySelector("#sun")
let moon = document.querySelector("#moon")


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



let codingSkills = document.querySelector(".skillLeft .codingSkills i")
let professionalSkills = document.querySelector(".skillLeft .professionalSkills i")
let softSkills = document.querySelector(".skillLeft .softSkills i")


let percentageFilled = [
    [["codingSkills"], ["HTML", "95%"], ["CSS", "60%"], ["JAVASCRIPT", "50%"], ["GSAP","40%"], ["C", "50%"]],
    [["professionalSkills"], ["Web Development", "60%"], ["App Development", "10%"], ["Freelancing", "2%"], [], []],
    [["softSkills"], ["Problem Solving", "70%"], ["Mathematics", "95%"], ["Time Management", "70%"], ["communication", "80%"], []]
];
let skillRight = document.querySelector(".skillRight");
let filledRectangle = document.querySelectorAll(".skillRight .filledRectangle")


function skillsDataShow() {
    for (let i = 0; i <= percentageFilled.length - 1; i++) {
        let outerDiv = document.createElement("div");
        outerDiv.className = percentageFilled[i][0];
        skillRight.append(outerDiv)


        for (let j = 1; j <= percentageFilled[i].length - 1; j++) {
            let h2 = document.createElement("h2");
            outerDiv.append(h2);

            let span = document.createElement("span");
            let innerDiv = document.createElement("div");
            let filledDiv = document.createElement("div");
            let percent = document.createElement("div");


            for (let k = 0; k <= percentageFilled[i][j].length - 1; k++) {
                span.className = ""
                innerDiv.className = "rectangle"
                percent.className = "percent"

                span.innerText = percentageFilled[i][j][0];
                percent.innerText = percentageFilled[i][j][1]
                
                filledDiv.className = "filledRectangle"
                filledDiv.style.width =  percentageFilled[i][j][1]
            }
            h2.append(span);
            h2.append(innerDiv);
            h2.append(percent);
            innerDiv.append(filledDiv)
        }
    }
    document.querySelector(".skillRight .professionalSkills").classList.add("hidden")
    document.querySelector(".skillRight .softSkills").classList.add("hidden")
    
}
skillsDataShow()


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
        src.pause();
        leftsrc.play();
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
        src.play();
        leftsrc.pause();
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
        src.pause();
        rightsrc.play();
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
        src.play();
        rightsrc.pause();
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
        let navLinks = document.querySelectorAll('.tags a, .navItems a');

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
    document.querySelectorAll('nav a, a.aboutBtn, .navItems a').forEach(anchor => {
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



function hamburgerFn() {
    hamburger.addEventListener("click", () => {
        hamburger.style.display = "none"
        cross.style.display = "inline-block"
        navItems.style.display = "flex"
        gsap.to(".navItems a", { opacity: 1, stagger: 0.05, duration: 0.4, width: "95%" })
    })

    cross.addEventListener("click", () => {
        cross.style.display = "none"
        hamburger.style.display = "inline-block"
        navItems.style.display = "none"
        gsap.to(".navItems a", { opacity: 0, width: "0%" })
    })

    aTags.forEach(a => {
        a.onclick = () => {
            cross.style.display = "none"
            navItems.style.display = "none"
            hamburger.style.display = "inline-block"
        }
    });
}
hamburgerFn();


function toggleMode() {
    sun.addEventListener("click", () => {
        moon.classList.toggle("hidden");
        sun.classList.toggle("hidden");
        // window.location.reload();
        document.body.classList.toggle("darkMode");
    })
    moon.addEventListener("click", () => {
        moon.classList.toggle("hidden");
        sun.classList.toggle("hidden");
        // window.location.reload()
        document.body.classList.toggle("darkMode");
    })
}
toggleMode()


function showSkills() {
    codingSkills.addEventListener("click", () => {
        codingSkills.classList.replace("fa-circle", "fa-circle-dot")
        professionalSkills.classList.replace("fa-circle-dot", "fa-circle")
        softSkills.classList.replace("fa-circle-dot", "fa-circle")

        document.querySelector(".skillRight .codingSkills").classList.remove("hidden")
        document.querySelector(".skillRight .professionalSkills").classList.add("hidden")
        document.querySelector(".skillRight .softSkills").classList.add("hidden")
    })
    professionalSkills.addEventListener("click", () => {
        codingSkills.classList.replace("fa-circle-dot", "fa-circle")
        professionalSkills.classList.replace("fa-circle", "fa-circle-dot")
        softSkills.classList.replace("fa-circle-dot", "fa-circle")

        document.querySelector(".skillRight .codingSkills").classList.add("hidden")
        document.querySelector(".skillRight .professionalSkills").classList.remove("hidden")
        document.querySelector(".skillRight .softSkills").classList.add("hidden")
    })
    softSkills.addEventListener("click", () => {
        codingSkills.classList.replace("fa-circle-dot", "fa-circle")
        professionalSkills.classList.replace("fa-circle-dot", "fa-circle")
        softSkills.classList.replace("fa-circle", "fa-circle-dot")

        document.querySelector(".skillRight .codingSkills").classList.add("hidden")
        document.querySelector(".skillRight .professionalSkills").classList.add("hidden")
        document.querySelector(".skillRight .softSkills").classList.remove("hidden")
    })
}
showSkills();