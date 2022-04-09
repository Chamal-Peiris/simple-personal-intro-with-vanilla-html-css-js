var texts = [
    'Hello Everyone!',
    'I am chamal peiris',
    'A full stack developer',
    'Holding a Bsc(Hons) degree in software engineering',
    'Hailing from moratuwa!'
];
var st = null;
var i = 0;
var j = 0;
var k = 0;
var elmStage = document.getElementById('stage');
var reverse = false;

function animateText(stamp) {

    if (!startingTime) {
        st = stamp;
    }

    var interval = stamp - st;

    if (interval >= 70 && reverse) {
        var text = texts[j];
        elmStage.innerText = text.substring(0, k--);

        if (k === 0) {
            j++;
            reverse = false;

            if (j >= texts.length) j = 0;
        }
    }

    if (interval >= 150 && !reverse) {
        st = stamp;

        var text = texts[j];
        elmStage.innerText = text.substring(0, i++);
        if (i > (text.length + 10)) {
            reverse = true;
            i = 0;
            k = text.length;
        }
    }

    requestAnimationFrame(animateText);

}

requestAnimationFrame(animateText);