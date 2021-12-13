function myEach(collection, cbFunction){
    Object.values(collection).forEach(function(element){
        return cbFunction(element)
    })
    return collection
}

function myMap(collection, cbFunction){
    return Object.values(collection).map(function(element){
        return cbFunction(element)})
}

function myReduce(collection, cbFunction, accu){
    return Object.values(collection).reduce(function(accu, value){
        return value + cbFunction(accu)
}, 0)
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

function myFirst(array, num){
    return array.slice(num, -1)
}
function myLast(array, num){
    return array.slice(-1, num)
}

function myKeys(object){
    return Object.keys(object)
}

function myValues(object){
    return Object.values(object)
}