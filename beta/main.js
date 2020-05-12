const clap = document.getElementById("clap");
const clapIcon = document.getElementById("clap--icon");
const clapCount = document.getElementById("clap--count");
const clapTotalCount = document.getElementById("clap--count-total");
const initialNumberOfClaps = generateRandomNumber(500, 10000);
const btnDimension = 80;
const tlDuration = 300;
let numberOfClaps = 0;
let clapHold;
const countAnimation = new mojs.Html({
    el: "#clap--count",
    isShowStart: false,
    isShowEnd: true,
    y: {
        0: -30
    },
    opacity: {
        0: 1
    },
    duration: tlDuration
}).then({
    opacity: {
        1: 0
    },
    y: -80,
    delay: tlDuration / 2
});
const countTotalAnimation = new mojs.Html({
    el: "#clap--count-total",
    isShowStart: false,
    isShowEnd: true,
    opacity: {
        0: 1
    },
    delay: (3 * tlDuration) / 2,
    duration: tlDuration,
    y: {
        0: -3
    }
});
clap.addEventListener("click", function () {
    repeatClapping();
});

function repeatClapping() {
    updateNumberOfClaps();
    animationTimeline.replay();
    clapIcon.classList.add("checked");
}

function updateNumberOfClaps() {
    numberOfClaps < 10 ? numberOfClaps++ : null;
    clapCount.innerHTML = "+" + numberOfClaps;
    clapTotalCount.innerHTML = initialNumberOfClaps + numberOfClaps;
}

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
