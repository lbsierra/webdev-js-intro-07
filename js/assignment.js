"use strict";

const submissionBtn = document.getElementById("submission-btn");
const remainderElement = document.getElementById("remainder");
const checkIfEvenElement = document.getElementById("check-if-even");
const lostNumbersElement = document.getElementById("lost-numbers");

const lostNumbers = [4, 8, 15, 16, 23, 42];

function returnTheRemainder(a, b) {
    return a % b;
}

function checkIfEven(c) {
    if (c % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function getTheFourthElement() {
    return lostNumbers[3];
}

function getRemainderAnswer() {
    remainderElement.innerHTML = returnTheRemainder(5, 4);
}

function getIfEvenAnswer() {
    checkIfEvenElement.innerHTML = checkIfEven(47);
}

function getLostNumber() {
    lostNumbersElement.innerHTML = getTheFourthElement();
}



function render() {
    getRemainderAnswer();
    getIfEvenAnswer();
    getLostNumber();
}

submissionBtn.addEventListener("click", function () {
    render();
});