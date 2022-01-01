const fn = document.getElementById('FN');
const op = document.getElementById('OP');
const sn = document.getElementById('SN');
const ans = document.getElementById('ans');
const submit = document.getElementById('sub');
const e = document.getElementById('0');
const m = document.getElementById('1');
const h = document.getElementById('2');
const sh = document.getElementById('3');
const sdif = document.getElementById('sdif');
const num = document.getElementById('numd');
const scoreDiv = document.getElementById('scr');
const attDiv = document.getElementById('att');
let score = 0,
        wa = 0,
        attl = 10,
        playable = true;
let easy, medium, difficult, superh, FN, OP, SN, answer;

num.style.display = "none";

e.addEventListener('click', function() {
        easy = true;
        medium = false;
        difficult = false;
        superh = false;
        sdif.style.display = "none";
        num.style.display = "initial";
        scoreDiv.textContent = 'Score: '+score;
        attDiv.textContent = 'Attempts Left: '+attl;
        rnd();
        answerSetter();
})

m.addEventListener('click', function() {
        easy = false;
        medium = true;
        difficult = false;
        superh = false;
        sdif.style.display = "none";
        num.style.display = "initial";
        scoreDiv.textContent = 'Score: '+score;
        attDiv.textContent = 'Attempts Left: '+attl;
        rnd();
        answerSetter();
})

h.addEventListener('click', function() {
        easy = false;
        medium = false;
        difficult = true;
        superh = false;
        sdif.style.display = "none";
        num.style.display = "initial";
        scoreDiv.textContent = 'Score: '+score;
        attDiv.textContent = 'Attempts Left: '+attl;
        rnd();
        answerSetter();
})

sh.addEventListener('click', function() {
        easy = false;
        medium = false;
        difficult = false;
        superh = true;
        sdif.style.display = "none";
        num.style.display = "initial";
        scoreDiv.textContent = 'Score: '+score;
        attDiv.textContent = 'Attempts Left: '+attl;
        rnd();
        answerSetter();
})

function rnd() {
        if (playable === true) {
                if (easy === true && medium === false && difficult === false && superh === false) {
                        OP = Math.ceil(Math.random() * 3);
                        if (OP === 0) {
                                OP = '+';
                        } else if (OP === 2) {
                                OP = '-';
                        } else {
                                OP = '*';
                        }
                        FN = Math.ceil(Math.random() * 30);
                        SN = Math.ceil(Math.random() * 30);

                } else if (easy === false && medium === true && difficult === false && superh === false) {
                        OP = Math.ceil(Math.random() * 3);
                        if (OP === 0) {
                                OP = '+';
                        } else if (OP === 2) {
                                OP = '-';
                        } else {
                                OP = '*';
                        }
                        FN = Math.ceil(Math.random() * 50);
                        SN = Math.ceil(Math.random() * 50);
                } else if (easy === false && medium === false && difficult === true && superh === false) {
                        OP = Math.ceil(Math.random() * 3);
                        if (OP === 0) {
                                OP = '+';
                        } else if (OP === 2) {
                                OP = '-';
                        } else {
                                OP = '*';
                        }
                        FN = Math.ceil(Math.random() * 100);
                        SN = Math.ceil(Math.random() * 100);
                } else if (easy === false && medium === false && difficult === false && superh === true) {
                        OP = Math.ceil(Math.random() * 3);
                        if (OP === 0) {
                                OP = '+';
                        } else if (OP === 2) {
                                OP = '-';
                        } else {
                                OP = '*';
                        }
                        SN = Math.ceil(Math.random() * 500);
                        FN = Math.ceil(Math.random() * 500);
                }
                fn.textContent = FN;
                op.textContent = OP;
                sn.textContent = SN;
        }
}
function answerSetter() {
        if (playable === true) {
                if (OP === '+') {
                        answer = FN + SN;
                } else if (OP === '-') {
                        answer = FN - SN;
                } else if (OP === '*') {
                        answer = FN * SN;
                }
                console.log(FN, OP, SN, '=', answer);
        }
}

function answerChecker() {
        if ( playable === true) {
        ansval = ans.value;
                answers = parseInt(ansval)
                if (answers === answer) {
                        if (easy === true) {
                                score += 50;
                        } else if (medium === true) {
                                score += 100;
                        } else if (difficult === true) {
                                score += 500;
                        } else if (superh === true) {
                                score += 1000;
                        }
                        rnd();
                        answerSetter();
                } else {
                        if (easy === true) {
                                score -= 25;
                                        attl -= 1;

                        } else if (medium === true) {
                                score -= 50;
                                        attl -= 1;

                        } else if (difficult === true) {
                                score -= 250;
                                        attl -= 1;

                        } else if (superh === true) {
                                score -= 500;
                                        attl -= 1;

                        }
}
}
wa += 1;
if(playable===false && attl === 1){
attl -= 1;
scoreDiv.textContent = 'Score: ' + score;
attDiv.textContent = 'Attempts Left: ' + attl;
}

if (wa === 11) {
playable = false;
}
if (attl<0){
        attl = 0;
}
scoreDiv.textContent = 'Score: '+score;
attDiv.textContent = 'Attempts Left: '+attl;
delete(ansval, answers);
}

submit.addEventListener('click', function() {
        answerChecker();
        console.log(score);
})
