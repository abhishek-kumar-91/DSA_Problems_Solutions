import java.util.*;


public class CheckPrimeNumber{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the number for checking prime or not: ");
        int x = sc.nextInt();

        for(int i = 1; i < x; i++){
            if(x % i != 0){
                System.out.print("Print all number of divisor for prime: " + i);
            }
        }
    }
}