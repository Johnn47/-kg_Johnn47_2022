# Kargo coding accessment

##### Applicant: Yu Jiang
##### Date: 05/03/2021

## Description: 
Convert an array of integers into an array of strings representing the phonetic equivalent of the integer.

For example:

Given an array: [3, 25, 209], print “Three,TwoFive,TwoZeroNine” into stdout.

Given an array: [10, 300, 5], print “OneZero,ThreeZeroZero,Five” into stdout.

## Idea of Implementaion:

The program has a function named numsToWords. The function has a predefined array that contains the phonetic equivalent of an integer. Then the function will split the input number into an array. For example, 325 will be ['3', '2', '5']. Later, the function loops through the array and converts each element to its phonetic equivalent. Lastly, the function combines the elements in the array and returns a string.

Then program will take the command line arguments and converts them to an array. It will then loops through the array and convert the elements to its phonetic equivalent and print out the result to stdout.

## To run the program:
$node main.js 2 35 897 02 0
