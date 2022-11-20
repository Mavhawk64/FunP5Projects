let a = [];
let r = [];
let points = 3;
let ticks = 1000;
let rec = 7;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);

    let rw = random(width);
    let rh = random(height);

    for (let i = 0; i < rec; i++) {
        a[i] = [];
        r[i] = createVector(rw, rh);
    }
    strokeWeight(0.5);
    stroke(255, 255, 255, 200);
    point(rw, rh);

    let hp = 0;
    let hc = height;
    let wl = 0;
    let wr = width;
    for (let i = 0; i < rec; i++) {
        if (i % 2 == 0) {
            a[i].push(createVector(width / 2, hp));
            a[i].push(createVector(wl, hc));
            a[i].push(createVector(wr, hc));
        } else {
            a[i].push(createVector(width / 2, hp));
            a[i].push(createVector(wr, hc));
            a[i].push(createVector(wl, hc));
        }

        let n = i + 1;
        wl = parseFloat((Math.pow(2, n + 1) - Math.pow(2, n) - 1)) * width / Math.pow(2, n + 1);
        wr = parseFloat((Math.pow(2, n + 1) - Math.pow(2, n) + 1)) * width / Math.pow(2, n + 1);

        let temp = hp;
        hp = hc;
        hc = (temp + hc) / 2;
    }
}

function draw() {
    for (let j = 0; j < a.length; j++) {
        for (let i = 0; i < ticks; i++) {
            let d = floor(random(0, points));
            r[j] = p5.Vector.lerp(r[j], a[j][d], 0.5);
            if (points == 3) {
                switch (d) {
                    case 0:
                        stroke(255, 0, 255, 200);
                        break;
                    case 1:
                        stroke(0, 255, 255, 200);
                        break;
                    case 2:
                        stroke(255, 255, 0, 200);
                        break;
                }
            }
            point(r[j].x, r[j].y);
        }
    }
}