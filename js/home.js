'use strict';

window.onload = getAge;

let currentClouds = 0;
const numberOfMaximumClouds = 5;

function createCloud() {

    if (numberOfMaximumClouds <= currentClouds) return;

    const cloudContainer = document.getElementById("top-cover");
    const imageNode = new Image()
    imageNode.src = './resources/cloud.png';
    const cloudAnimationDurationMinimum = 8;
    const cloudAnimationDurationMaximum = 12;
    const cloudAnimationDuration = getRandomNumberInRange(cloudAnimationDurationMinimum, cloudAnimationDurationMaximum);

    imageNode.style.pointerEvents = "none";
    imageNode.style.userSelect = "none";
    imageNode.style.position = 'absolute';
    imageNode.style.animation= 'moveRightToLeft'
    imageNode.style.animationTimingFunction = "linear"

    imageNode.onanimationend = function () {
        if (currentClouds > 0) currentClouds--;
        imageNode.remove();
    }
    imageNode.style.left = '100%';
    imageNode.style.top =
        `${getRandomNumberInRange(imageNode.height, (cloudContainer.getBoundingClientRect().height - imageNode.height))}px`
    imageNode.style.animationDuration = cloudAnimationDuration + 's';
    currentClouds++;

    cloudContainer.appendChild(imageNode);
}

function getAge() {
    const birthday = new Date("2004-05-12");
    document.getElementById('age').innerHTML = ((new Date().getFullYear() - birthday.getFullYear())).toString();
}

function getRandomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}