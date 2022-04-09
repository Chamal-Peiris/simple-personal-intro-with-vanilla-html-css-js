var elemCircle = document.createElement('div');
elemCircle.classList.add('pointer');
elemCircle.classList.add('hide');
document.body.append(elemCircle);

var tmrId = null;

window.addEventListener('mousemove', function(e) {
    /*  console.log(e); */

    if (tmrId) {
        this.clearTimeout(tmrId);
        tmrId = null;
    }
    tmrId = this.setTimeout(function() {
        console.log('IDLE');


        elemCircle.classList.add('hide');

    }, 2000);

    if (elemCircle.classList.contains('hide')) {
        elemCircle.classList.remove('hide');
    }
    var xPos = e.pageX
    var yPos = e.pageY;

    elemCircle.style.left = xPos + "px";
    elemCircle.style.top = yPos + "px";

});