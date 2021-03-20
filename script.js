var btns = document.getElementsByClassName('shortcut-btn');
var sections = document.getElementsByClassName('section-heading');

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function(event) {
        event.preventDefault();
        var interval1 = setInterval(() => {
                if (sections[i].getBoundingClientRect().y > 0) {
                    window.scrollBy(0,10);
                } else {
                    clearInterval(interval1);
                }
            }, 1);
    })
}

// about.onclick = function (params) {
//     var interval1 = setInterval(() => {
//         if (eduSec.getBoundingClientRect().y > 0) {
//             window.scrollBy(0,10);
//         } else {
//             clearInterval(interval1);
//         }
//     }, 1);
// }