function standardizeInput(collection){
    return (collection instanceof Array) ? collection.slice() : Object.values(collection)
}
// standardizeInput is a helper function to use with the functions that need to
// work with either objects or arrays
// It checks whether the input is an array and, if so, returns a copy of it;
// otherwise, it uses JavaScript's Object.values method to return an array that
// contains the values of the object's propertie

function myEach(collection, cbFunction){
    let values = standardizeInput(collection)
    for(let i = 0; i < values.length; i++){
         cbFunction(values[i])
    }
    return collection;
}

function myMap(collection, cbFunction){
    let newCollection = standardizeInput(collection)
    let newArray = [];
    for(let i = 0; i < newCollection.length; i++){
        newArray.push(cbFunction(newCollection[i]))
       /* let results = cbFunction(newCollection[i])
        newArray.push(results)*/
    }
    return newArray;
}

function myReduce(collection, cbFunction, acc){
    let newCollection = standardizeInput(collection)
    for(let i = 0; i < newCollection.length; i++){
        let val = 0
        cbFunction(acc, val, newCollection[i])
    }
}

function myFind(collection, predicate){
    return Object.values(collection).find(function(element){
        return predicate(element)
    })
}

function myFilter(collection, predicate){
    return Object.values(collection).filter(function(element){
        return predicate(element);
    })
}

function mySize(collection){
    return Object.values(collection).length;
}

function myFirst(array, stop = false){
    //return array.slice(0, num)
    return stop ? array.slice(0, stop): array[0]; 
}
function myLast(array, start = false){
    return start ? array.slice(array.length - start, array.length): array[array.length - 1];
}

function myKeys(object){
    return Object.keys(object)
}

function myValues(object){
    return Object.values(object)
}