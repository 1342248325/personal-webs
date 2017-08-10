'use strict';
function cav() {
    let cav = document.querySelectorAll('canvas');
    for (let i = 0; i < cav.length; i++) {
        let ctx = cav[i].getContext('2d');
        ctx.lineWidth = 5;
        ctx.strokeStyle = '#000';
        ctx.fillStyle = '#000';
        ctx.font = '40px 苹方';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';




        if (i == 0) {
            fn(80, 200, 200, 80);
        } else if (i == 1) {
            fn(70, 200, 200, 80);
        } else if (i == 2) {
            fn(70, 200, 200, 80);
        } else if (i == 3) {
            fn(70, 200, 200, 80);
        }

        function fn(num, x, y, r){
            let t, n = 0;
            t = setInterval(keyfirm, 15);
            function keyfirm() {
                n++;
                if (n >= num) {
                    clearInterval(t)
                }
                ctx.beginPath();
                ctx.clearRect(0, 0, 500, 500);
                let angle = (n * 360 / 100 - 90) * Math.PI / 180;
                ctx.arc(x, y, r, -Math.PI / 2, angle);
                ctx.stroke();
                ctx.fillText(`${n}%`, x, y);
            }
        }
    }
}