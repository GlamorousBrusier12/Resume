var btns = document.getElementsByClassName('shortcut-btn');
var sections = document.getElementsByClassName('section-heading');
var interval1;
/* Smooth Scroll  */
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function(event) {
        event.preventDefault();
        interval1 = setInterval(function () {
            if (sections[i].getBoundingClientRect().y > 0) {
                window.scrollBy(0,10);
            } else {
                clearInterval(interval1);
                return;
            }
        }, 1);
    })
}


/* Auto Filling Bars */

var skillsSection = sections[1];
var skillBars = document.querySelectorAll('.skill-progress > div');

// function to initializeBars

function initializeBar(bar) {
    bar.style.width = "0%" ;
} 
// function to fill bars

function fillBar(bar){
    let barWidth = bar.getAttribute('data-value');
        let curWid = 0;
        let fillInterval = setInterval(() => {
            if (curWid > barWidth ) {
                clearInterval(fillInterval);
            } else {
                bar.style.width = curWid + '%';
                curWid++;
            }
        }, 10);
}
window.addEventListener('scroll',CheckScroll);
var isAni = [false, false, false, false, false, false];
function CheckScroll(params) {
    for (let i = 0; i< skillBars.length ; i++) {
        let sectionLen = skillBars[i].getBoundingClientRect().y;
        if (sectionLen > window.innerHeight) {
            initializeBar(skillBars[i]);
            isAni[i] = false;
        } else if(!isAni[i] && sectionLen <= window.innerHeight){
                fillBar(skillBars[i]);
                isAni[i] = true ;
            }
    }
}



/* optional Nav bar */
var hamburger = document.getElementById('hamburger');
var optionalNavbar = document.getElementById('optional-nav-bar');
var isVisible = false;
hamburger.onclick = function (params) {
    if (isVisible) {
        optionalNavbar.style.display = 'none' ;
        isVisible = false;
    } else {
        optionalNavbar.style.display = 'block' ;
        isVisible = true;
        
    }
} 