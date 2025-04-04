import java.util.*;

public class ArmstrongCheck{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        System.out.print("Please enter the number for checking is Armstrong or not?: ");
        int x = sc.nextInt();
        int dx = x;
        int compareNumber = 0;
        while(x > 0){
            int digit = x % 10;
            compareNumber +=digit * digit * digit;
            x /= 10;
        }

        if(dx == compareNumber){
            System.out.print("Armstrong Number corrected" );
        }else{
            System.out.print("Not Armstrong number:");
        }
        
    }
} 