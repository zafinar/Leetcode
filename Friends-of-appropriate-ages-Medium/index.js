// There are n persons on a social media website. You are given an integer array ages where ages[i] is the age of the ith person.

// A Person x will not send a friend request to a person y (x != y) if any of the following conditions is true:

// age[y] <= 0.5 * age[x] + 7
// age[y] > age[x]
// age[y] > 100 && age[x] < 100
// Otherwise, x will send a friend request to y.

// Note that if x sends a request to y, y will not necessarily send a request to x. Also, a person will not send a friend request to themself.

// Return the total number of friend requests made.

 

// Example 1:

// Input: ages = [16,16]
// Output: 2
// Explanation: 2 people friend request each other.
// Example 2:

// Input: ages = [16,17,18]
// Output: 2
// Explanation: Friend requests are made 17 -> 16, 18 -> 17.
// Example 3:

// Input: ages = [20,30,100,110,120]
// Output: 3
// Explanation: Friend requests are made 110 -> 100, 120 -> 110, 120 -> 100.
 

// Constraints:

// n == ages.length
// 1 <= n <= 2 * 104
// 1 <= ages[i] <= 120
/**
 * @param {number[]} ages
 * @return {number}
 */
var numFriendRequests = function(ages) {
    let requests = 0

    const counts = {};
    function sortfunction(a, b){ //causes an array to be sorted numerically and ascending
        return (a - b) 
    }
    ages.sort(sortfunction)
    ages.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
    let uniqueAges = [...new Set(ages)]
    debugger;
    for (let i = (uniqueAges.length - 1) ; i > -1 ; i --){
        let age = uniqueAges[i]
        if (age <= 0.5 * age + 7){break;}
        else if (counts[age] > 1) {
            let add = counts[age] * (counts[age] - 1)
            requests += add 
        }
            for(let e = i - 1; e > -1; e --){
                if (uniqueAges[e]  <= 0.5 * age + 7){ break;}
                if (uniqueAges[e] > 100 && age < 100){continue}
                else {
                    let add = counts[age] * counts[uniqueAges[e]]
                    requests += add
                }
            }
    }
    return requests

   
    }