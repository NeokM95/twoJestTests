const {removeOddMultiplyEven, separateBoysFromGirls} = require('../main')

test( "Remove odd numbers, multiply even numbers by given number", () => {
    //Arrange
    const arrayOfNumbers = [ 16, 3, 21, 4, 12, 9, 24, 51, 17 ]
    const multiplier = 3

    //Act
    const answer = removeOddMultiplyEven( arrayOfNumbers, multiplier )

    //Assert
    expect( answer ).toEqual( [ 48, 12, 36, 72 ] )
} )

test( "Separate boys from girls. Boys in ascending order, girls in descending order", () => {
    //Arrange
    const personDetails = [
        {
            name: 'Sarah',
            age: 24,
            gender: 'W'
        },
        {
            name: 'Bob',
            age: 51,
            gender: 'M'
        },
        {
            name: 'John',
            age: 4,
            gender: 'M'
        },
        {
            name: 'Caroline',
            age: 61,
            gender: 'W'
        },
        {
            name: 'Eva',
            age: 37,
            gender: 'W'
        },
        {
            name: 'Peter',
            age: 17,
            gender: 'M'
        },
        {
            name: 'Scott',
            age: 42,
            gender: 'M'
        },
        {
            name: 'Judith',
            age: 28,
            gender: 'W'
        }
    ]

    //Act
    const ascendingBoys = separateBoysFromGirls( personDetails )[0]
    const descendingGirls = separateBoysFromGirls( personDetails )[1]

    //Assert
    expect( ascendingBoys ).toEqual( [ 'John', 'Peter', 'Scott', 'Bob' ] )
    expect( descendingGirls ).toEqual( [ 'Caroline', 'Eva', 'Judith', 'Sarah' ] )

} )