"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function padding(str, numChars = 2, character = "0") {
    numChars =
        typeof numChars === "undefined" || numChars === null
            ? (numChars = 2)
            : numChars;
    while (str.length < padding) {
        str = character + str;
    }
    return str;
}
exports.padding = padding;
function _padding(value, numChar = 2, paddingChar = "0", paddingAt = "right") {
    if (typeof value !== "string") {
        throw new Error("Value must be a valid string");
    }
    if (typeof paddingChar !== "string") {
        throw new Error("paddingChar must be a valid string");
    }
    if (typeof numChar !== "number" || isNaN(numChar)) {
        throw new Error("Invalid `numChar`");
    }
    if (value === null || value === void 0 || numChar <= 0) {
        return value;
    }
    if (value.length >= numChar) {
        return value;
    }
    while (value.length < numChar) {
        if (paddingAt === "right") {
            value = value + paddingChar;
        }
        else {
            value = paddingChar + value;
        }
    }
    return value;
}
function paddingLeft(value, numChar, paddingChar = "0") {
    return _padding(value, numChar, paddingChar, "left");
}
exports.paddingLeft = paddingLeft;
function paddingRight(value, numChar, paddingChar = "0") {
    return _padding(value, numChar, paddingChar, "right");
}
exports.paddingRight = paddingRight;
