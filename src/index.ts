export function padding(str, padding = 2, character = '0') {
    padding = typeof (padding) === "undefined" || padding === null ? padding = 2 : padding;
    while (str.length < padding) {
        str = character + str;
    }
    return str;
}
export function _padding(value: string, numChar:number = 2, paddingChar = '0', paddingAt:('right'|'left') = 'right'){
    if (typeof value != 'string'){
        throw new Error('Value must be a valid string');
    }
    if (typeof paddingChar != 'string'){
        throw new Error('paddingChar must be a valid string')
    }
    if (typeof numChar !== 'number' || isNaN(numChar)){
        throw new Error('Invalid `numChar`');
    }

    if (value === null || value === void 0 || numChar <= 0){
        return value;
    }
    if (value.length >= numChar){
        return value;
    }
    while(value.length < numChar){
        if (paddingAt === 'right'){
            value = value + paddingChar;
        } else {
            value = paddingChar + value;
        }
    }
    return value;
}

export function paddingLeft(value: string, numChar:number, paddingChar = '0'){
    return _padding(value, numChar, paddingChar, 'left')
}
export function paddingRight(value: string, numChar:number, paddingChar = '0'){
    return _padding(value, numChar, paddingChar, 'right')
}