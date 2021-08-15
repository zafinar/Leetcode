// In a deck of cards, each card has an integer written on it.

// Return true if and only if you can choose X >= 2 such that it is possible to split the entire deck into 1 or more groups of cards, where:

// Each group has exactly X cards.
// All the cards in each group have the same integer.
 

// Example 1:

// Input: deck = [1,2,3,4,4,3,2,1]
// Output: true
// Explanation: Possible partition [1,1],[2,2],[3,3],[4,4].
// Example 2:

// Input: deck = [1,1,1,2,2,2,3,3]
// Output: false
// Explanation: No possible partition.
// Example 3:

// Input: deck = [1]
// Output: false
// Explanation: No possible partition.
// Example 4:

// Input: deck = [1,1]
// Output: true
// Explanation: Possible partition [1,1].
// Example 5:

// Input: deck = [1,1,2,2,2,2]
// Output: true
// Explanation: Possible partition [1,1],[2,2],[2,2].
 

// Constraints:

// 1 <= deck.length <= 104
// 0 <= deck[i] < 104

/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {

    // sort the input
    var count = {};
    deck.forEach(function(i) { count[i] = (count[i]||0) + 1;});
    let cf = undefined
    for (number in count){
         if (cf == undefined){
             cf = []
            for (let i = count[number] ; i > 1; i-- ){
              if(count[number] % i == 0){
                  cf.push(i)
              }
            }
         }
         else{
            cf = cf.filter(factor => count[number] % factor == 0)
    
         }
    
         if (cf.length == 0){
            return false
         }
    }
    return true
    
    
    
    };