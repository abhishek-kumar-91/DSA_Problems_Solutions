// 7. Reverse Integer
// Solved
// Medium
// Topics
// Companies
// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21
 

// Constraints:

// -231 <= x <= 231 - 1






/* import java.util.*;
########################################   Solution by Abhishek     ######################################
public class ReverseInteger{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        System.out.println("Please enter the number that you want to reverse: ");
        int x = sc.nextInt();
        boolean isNegative = x < 0;
        x = Math.abs(x);
        long reverseNumber = 0;

        while(x > 0){
            int digit = x % 10;
            reverseNumber = reverseNumber * 10 + digit;

            if(reverseNumber > Integer.MAX_VALUE || reverseNumber < Integer.MIN_VALUE){
                reverseNumber = 0;
                break;
            }
            x /= 10;
        }

        System.out.println("ReverseNumber: "+ (isNegative ? -reverseNumber: reverseNumber));
        
    }
}

*/


// Leetcode SOlutions


class Solution {
    public int reverse(int x) {
        long reverseNumber = 0;
        boolean negativeNumber = x < 0;
        x = Math.abs(x);
        while(x > 0){
            int digit = x % 10;
            reverseNumber = reverseNumber * 10 + digit;
            if(reverseNumber > Integer.MAX_VALUE || reverseNumber < Integer.MIN_VALUE){
                return 0;
            }
            x /= 10;    
        }

        return negativeNumber ? (int)-reverseNumber: (int)reverseNumber;
    }
}
