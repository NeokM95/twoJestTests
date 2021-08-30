function removeOddMultiplyEven( arr, n) {

    //Create new array to store wanted values.
    let newArray = []

    //Loop over the array, only push even numbers to new array and multiply them by given multiplier
    for ( let i = 0; i < arr.length; i++ ) {
        if ( arr[i] % 2 === 0 ) {
            newArray.push( arr[i] * n )
        }
    }

    return newArray
}

function separateBoysFromGirls( persons ) {

    //Create an answer array to store the final two arrays in.
    let answer = []

    //Filter boys and girls from persons array and store them in two different arrays.
    let boys = persons.filter( ( person ) => {
        return person.gender === 'M'
    } )

    let girls = persons.filter( ( person ) => {
        return person.gender === 'W'
    } )

    //Sort boys in ascending order and girls in descending order.
    boys.sort( ( a, b ) => a.age - b.age )

    girls.sort( ( a, b ) => b.age - a.age )

    //Change arrays of objects to the wanted arrays of names
    let ascendingBoyNames = boys.map((boy) => boy.name)
    let descendingGirlNames = girls.map((girl) => girl.name)

    //Push both arrays to the answer array so that you can return answer array as outcome of the function
    answer.push(ascendingBoyNames)
    answer.push(descendingGirlNames)

    return answer
}

module.exports = {
    removeOddMultiplyEven,
    separateBoysFromGirls
}