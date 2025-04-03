// 9. Palindrome Number
// Solved
// Easy
// Topics
// Companies
// Hint
// Given an integer x, return true if x is a palindrome, and false otherwise.

 

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

// Constraints:

// -231 <= x <= 231 - 1




/* import java.util.*;

############################# Solution by Abhishek #############
class PalindromCheck{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        System.out.print("Please enter the number for checking palindrom: ");
        int x = sc.nextInt();
        int reverseNumber = 0;
        int isPalindrom = x;

        while(x > 0){
            int digit = x % 10;
            reverseNumber = reverseNumber * 10 + digit;
            x /= 10;
        }

        if(isPalindrom == reverseNumber){
            System.out.println("Palindrom correct: " + isPalindrom);
        }else{
            System.out.println("Palindrom incorrect ");
        }

    }
}

*/


// Leetcode Solution by me

class Solution {
    public boolean isPalindrome(int x) {
        int isPalindrom = x;
        int reverseNumber = 0;

        while(x > 0){
            int digit = x % 10;
            reverseNumber = reverseNumber * 10 + digit;
            x /= 10;
        }

        return isPalindrom == reverseNumber ? true: false;
    }
}