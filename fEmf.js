//first
let arr = ["a", "b", "c", "d"];
let vowels = "aeiou";

function doubleValues(arr) {
    let newArr = [];
    arr.forEach(function (val) {
        newArr.push(val * 2);
    });
    return newArr;
};

//second
function onlyEvenValues(arr) {
    let newArr = [];
    arr.forEach(function (val) {
        if (val % 2 === 0) {
            newArr.push(val);
        }
    });
    return newArr;
}

//third
function showFirstAndLast(arr) {
    let newArr = []
    arr.forEach(function (words) {
        newArr.push(words.charAt(0) + (words.charAt(words.length - 1)));
    });
    return newArr;
} 

//fourth
function addKeyAndValue(arr, key, value) {
    arr.forEach(function (val) {
        val[key] = value;
    });
    return arr;
}

//fifth
function vowelCount(str) {
    let splitArr = str.split("");
    let obj = {};

    splitArr.forEach(function (letter) {
        let lowerCasedLetter = letter.toLowerCase();
        if (vowels.indexOf(lowerCasedLetter) !== -1) {
            if (obj[lowerCasedLetter]) {
                obj[lowerCasedLetter]++;
            } else {
                obj[lowerCasedLetter] = 1;
            }
        }
    });
    return obj;
}

//sixth
function doubleValuesWithMap(arr) {
    return arr.map(function (doubleValuesWithMap) {
        return doubleValuesWithMap * 2;
    });
};

//seventh
function valTimesIndex(arr) {
    return arr.map(function (val, index) {
        return val * index;
    });
}

//eighth
function extractKey(arr, key) {
    return arr.map(function (obj) {
        return obj[key];
    });
}

//ninth
function extractFullName(arr) {
    return arr.map(function (val) {
        return val.first + " " + val.last;
    });
}

//tenth
function filterByValue(arr, key) {
    return arr.filter(function (val) {
        return val[key] !== undefined;
    });
}

//eleventh
function find(arr, searchValue) {
    return arr.filter(function (val) {
        return val === searchValue;
    })[0];
}

//twelveth
function findInObj(arr, key, searchValue) {
    return arr.filter(function (val) {
        return val[key] === searchValue;
    })[0];
}

//thirteenth
function removeVowels(str) {
    return str
        .toLowerCase()
        .split("")
        .filter(function (val) {
            return vowels.indexOf(val) === -1;
        })
        .join("");
}

//fourthteenth 
function doubleOddNumbers(arr) {
    return arr
        .filter(function (val) {
            return val % 2 !== 0;
        })
        .map(function (val) {
            return val * 2;
        });
};