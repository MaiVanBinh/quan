const getFirstLetterName = (value) => {
    return value.charAt(0);
}

const convertDateTime = (value) => {
    let t = new Date(value);
    let d = t.toLocaleString();
    let date = d.slice(0, d.indexOf(','));
    let time = d.slice(d.indexOf(',') + 2);
    // let hours, minutes, seconds;
    // let parts = time.split(':');
    // if(parseInt(parts[0]) < 10) hours = '0' + hours;
    // if(parseInt(parts[1]) < 10) minutes = '0' + minutes;
    return { date, time }
}

const arrCheckAllValue = (arr, valueCheck) => {
    return arr.every(v => v === valueCheck);
}

const validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(email.trim()).toLowerCase())) {
        return 'incorrect-email';
    }
    return 'ok';
}

const validateEmpty = (str) => {
    if (str.trim().length == 0) {
        return 'empty';
    }
    return 'ok'
}

const validateAllLowercase = (str) => {
    if (str.trim() !== str.trim().toLowerCase()) {
        return 'incorrect';
    }
    return 'ok';
}

const validateLengthSpace = (str) => {
    if ((str.trim().length < 4 || str.trim().length > 64) || /\s/.test(str.trim())) {
        return 'incorrect';
    }
    return 'ok';
}

const validateNumber = (str) => {
    if (/^\d+$/.test(str.trim())) {
        return 'ok';
    }
    return 'incorrect';
}

const validateName = (str) => {
    if (str.trim().length < 1 || str.trim().length > 64) {
        return 'incorrect';
    }
    return 'ok';
}

export {
    getFirstLetterName,
    convertDateTime,
    validateEmpty,
    validateAllLowercase,
    validateEmail,
    validateLengthSpace,
    validateNumber,
    validateName,
    arrCheckAllValue,
}