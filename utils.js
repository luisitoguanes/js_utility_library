let _ = {
    reduce: (list, reducer, initial) => {
        let accumulator = initial;
        if (Array.isArray(list)) {
            for (let i = 0; i < list.length; i++) {
                if (i === 0 && accumulator === undefined) {
                    accumulator = list[0];
                } else {
                    accumulator = reducer(accumulator, i, list[i]);
                }

            }
        } else {

            for (let key in list) {
                if (accumulator === undefined) {
                    accumulator = {};
                };
                accumulator = reducer(accumulator, key, list[key]);
            }
        }
        return accumulator;
    },
    each(list, callback) {
        if (Array.isArray(list)) {
            for (let i = 0; i < list.length; i++) {
                callback(list[i], i, list);
            }
        } else {
            for (var key in list) {
                callback(list[key], i, list);
            }
        }
    },
    filter(list, callback) {
        let newArray = [];
        if (Array.isArray(list)) {
            for (let i = 0; i < list.length; i++) {
                if (callback(list[i], i, list) === true) {
                    newArray.push(list[i]);
                }
            }
        } else {
            for (var key in list) {
                if (callback(list[key], i, list) === true) {
                    newArray.push(list[key]);
                }
            }
        }
        return newArray;
    },
    map(list, callback) {
        let newArray = [];
        if (Array.isArray(list)) {
            for (let i = 0; i < list.length; i++) {
                newArray.push(callback(list[i], i, list));
            }
        } else {
            for (var key in list) {
                newArray.push(callback(list[key], i, list));
            }
        }
        return newArray;
    },
    eachRight(list, callback) {
        if (Array.isArray(list)) {
            for (let i = list.length - 1; i >= 0; i--) {
                callback(list[i], i, list);
            }
        } else {

            let objKeys = Object.keys(list);
            for (let i = objKeys.length - 1; i >= 0; i--) {
                callback(list[key], i, list);
            }
        }
    }
}

export default _;