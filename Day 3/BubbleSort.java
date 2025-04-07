public class BubbleSort{
    public static void main(String[] args){
        int [] arr = {4,5,6,8,6,8,3,1};

        for(int i = arr.length-1; i >= 0; i--){
            for(int j = 0; j <= i-1; j++){
                if(arr[j] > arr[j+1]){
                    int temp = arr[j+1];
                    arr[j+1] = arr[j];
                    arr[j] = temp;
                }
            }
        }


        for(int i = 0; i < arr.length; i++){
            System.out.println("Array is sorted: " + arr[i]);
        }
    }
}