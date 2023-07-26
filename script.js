/* 
Given a string, find the length of the longest substring without repeating characters.
*/

const str1 = "abcabcbb";
const expected1 = 3;
// Explanation: The answer is "abc", with the length of 3.

const str2 = "bbbbb";
const expected2 = 1;
// Explanation: The answer is "b", with the length of 1.

const str3 = "pwwkew";
const expected3 = 3;
/* Explanation: The answer is "wke", with the length of 3. 
  Note that the answer must be a substring, "pwke" is a subsequence and not a substring. */

const str4 = "dvadf";
const expected4 = 4;
// Explanation: "vadf"

const str5 = "elwanfel"
const expected5 = 6;

/**
 * Determines the length of the longest substring in the given str.
 * @param {string} str
 * @returns {number} Length of the longest substring from the given str.
 * - Time: O(?).
 * - Space: O(?).
 */
function lengthOfLongestSubString(str) {

    let longestSubStr = 0;

    for (let i = 0; i < str.length; i++) {
        let obj = new Set();
        for (let j = i; j < str.length; j++) {
            if (obj.has(str[j])) {
                break;
            } else {
                obj.add(str[j])
            }
        }
        longestSubStr = Math.max(longestSubStr, obj.size);

    }

    return longestSubStr;

}

console.log(lengthOfLongestSubString(str1));
console.log("===============")
console.log(lengthOfLongestSubString(str2));
console.log("===============")
console.log(lengthOfLongestSubString(str3));
console.log("===============")
console.log(lengthOfLongestSubString(str4));
console.log("===============")
console.log(lengthOfLongestSubString(str5));
console.log("===============")



/****************************************************************************/