// Given a positive integer n, The task is to find the value of Σi F(i) where i is from 1 to n and function F(i) is defined as the sum of all divisors of i.

// Examples:

// Input: n = 4
// Output: 15
// Explanation:
// F(1) = 1
// F(2) = 1 + 2 = 3
// F(3) = 1 + 3 = 4
// F(4) = 1 + 2 + 4 = 7
// So, F(1) + F(2) + F(3) + F(4)
//     = 1 + 3 + 4 + 7 = 15






// public class FindingNDivisors{
//     public static void main(String[] args){

//     }
// }

//Gfg problem solved using bruteforce
// User function Template for Java
class Solution {
    public static int sumOfDivisors(int n) {
        // code here
        int finalAns = 0;
        
        for(int i = 1; i <= n; i++){
            for(int j = 1; j <= i; j++){
                if(i % j == 0){
                    finalAns += j;
                }
            }
        }
        
        return finalAns;
    }
}