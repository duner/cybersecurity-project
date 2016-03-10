var prompt = document.getElementById('prompt-text');
var instructions = document.getElementById('instructions');
var onion = document.getElementById('onion');

function isOnionSite() {
    return (location.href.indexOf('.onion') > -1);
}

function addClass(el, className) {
    if (el.classList) {
        el.classList.add(className);
    } else {
        el.className += ' ' + className;
    }
}

function toggleClass(el, className) {
    if (el.classList) {
        el.classList.toggle(className);
    } else {
        var classes = el.className.split(' ');
        var existingIndex = classes.indexOf(className);
        if (existingIndex >= 0) {
            classes.splice(existingIndex, 1);
        } else {
            classes.push(className);
        }
        el.className = classes.join(' ');
    }
}

if (isOnionSite()) {
    console.log("IS ONION");
    prompt.textContent = "Congrats! You're on the dark web";
    addClass(prompt, "congrats");
}

prompt.addEventListener('click', function(e) {
    toggleClass(onion, 'active');
})