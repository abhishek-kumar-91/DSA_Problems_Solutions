import java.util.*;

public class SelectionSort{

  public static void swap(int []arr, int i, int j){
       int temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    }

    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        int [] arr = new int[6];
        int sizeArr = arr.length;

        for(int i = 0; i < sizeArr; i++){
            System.out.println("Enter the array element: " + i);
            arr[i] = sc.nextInt();
        }

        for(int i = 0; i <= sizeArr-2; i++){
            int minimum = i;
            for(int j = i; j <= sizeArr-1; j++){
                if(arr[j] < arr[minimum]){
                    minimum = j;
                }
            }

            swap(arr, minimum, i);
        }


        for(int i = 0; i < sizeArr; i++){
            System.out.println("After swap the array element: " + arr[i]);
           
        }
    }
}