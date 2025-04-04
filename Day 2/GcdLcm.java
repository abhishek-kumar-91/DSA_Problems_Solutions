// Given two integers a and b, the task is to compute their LCM and GCD and return an array 
// containing their LCM and GCD.

// Examples:

// Input: a = 5 , b = 10
// Output: [10, 5]
// Explanation: LCM of 5 and 10 is 10, while their GCD is 5.

import java.utils.*;



// leetcode questions solved using bruteforce method
class Solution {
    public static int[] lcmAndGcd(int a, int b) {
        // code here
        int [] result = new int[2];
        int gcdResult = 1;
        
        for(int i = a; i > 0; i--){
            if(a % i == 0 && b % i == 0){
                gcdResult = i;
                break;
            }
        }
        
        int lcmResult = (a * b) / gcdResult;
        result[0] = lcmResult;
        result[1] = gcdResult;
        
        return result;
    }
}
