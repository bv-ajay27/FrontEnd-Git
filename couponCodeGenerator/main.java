package couponCodeGenerator;
import java.util.*;
import java.io.*;
import java.util.Random;

/* Name of the class has to be "Main" only if the class is public. */

class Main
{
    static Scanner sc = new Scanner(System.in);

    static boolean verfication(){
        String Name = sc.next();
        String phNum = sc.next();
        if(phNum.length() != 10)
        {
            System.out.println("Please Enter a Valid Name & Mobile Number");
            verfication(); 
        }
        HashMap<String,String> map = new HashMap<>();
        if(map.containsKey(phNum))
        {
            System.out.println("Member already claimed the copoun :(");
            return false;
        }
        else
        {
           map.put(phNum,Name); 
        }
        return true;
    }
    
    static int couponWorth(String coup,int n)
    {
        int discount=0;
        int len=coup.length();
        for(int i=0;i<len;i++)
        {
            discount+=(int)coup.charAt(i);
        }
        
        if(n==1)
        {
            discount*=5;
        }
        else if(n==3)
        {
            discount*=18;
        }
        return discount;
    }
    
    static String getCoupon()
    {
         String AlphaNumericString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                                    + "0123456789";
  
        StringBuilder sb = new StringBuilder(6);
  
        for (int i = 0; i < 6; i++) 
        {
            int index = (int)(AlphaNumericString.length() * Math.random());
            sb.append(AlphaNumericString.charAt(index));
        }
  
        return sb.toString();
    }
    
    static int Electronics()
    {
        System.out.println("1. LG UP77 UHD4K Price = Rs.43000/-");
        System.out.println("2. LG Split AC 1.5T 5 Star Price = Rs.42500/-");
        System.out.println("3. LG Washing Machine 5 Star Price = Rs.27000/-");
        int selectProduct = sc.nextInt();
        return selectProduct;
    }
    
    static int Watches()
    {
        System.out.println("Press key from 1 - 3");
        System.out.println("1. Titan Digital watch for men Price = Rs.3150/-");
        System.out.println("2. Casio G-Shock Price = Rs.4250/-");
        System.out.println("3. Apple Watch 5 Price = Rs.42500/-");
        int selectProduct = sc.nextInt();
        return selectProduct;
    }
    
    static int Bikes()
    {
        System.out.println("Press key from 1 - 3");
        System.out.println("1. RE Continental GT650 Price = Rs.350000/-");
        System.out.println("2. KTM Duke 200 Price = Rs.225000/-");
        System.out.println("3. Apache 310cc Price = Rs.192500/-");
        int selectProduct = sc.nextInt();
        return selectProduct;
    }
    
    static void getCategeories(int n)
    {
        
        switch(n){
            
            case 1:
                System.out.println("products we offer");
                int HomeProduct = Electronics();
                if(HomeProduct>0 && HomeProduct<=3)
                {
                    System.out.println("Enter you Name and Mob Number");
                    boolean isValid = verfication();
                    if(isValid)
                    {
                        System.out.println("press 1 to generate coupon code");
                        int Homecoupon = sc.nextInt();
                        String coupon = getCoupon();
                        int HomeCouponWorth = couponWorth(coupon,n);
                        System.out.println("Your coupon code is " + coupon);
                        System.out.println("You got a discount of Rs. " +HomeCouponWorth);
                        System.out.println();
                        System.out.println("Thank you");
                    }
                    else{
                        System.out.println("Please Enter a vald details");
                        verfication();
                    }
                }
                else{
                    getCategeories(n);
                }
                break;
                
            case 2:
                System.out.println("products we offer");
                int WatchProduct = Watches();
                if(WatchProduct > 0 && WatchProduct <= 3)
                {
                    System.out.println("Enter you Name and Mob Number");
                    boolean isValid = verfication();
                    if(isValid)
                    {
                        System.out.println("press --> 1 to generate coupon code");
                        int Watchcoupon = sc.nextInt();
                        String coupon = getCoupon();
                        int WatchCouponWorth = couponWorth(coupon,n);
                        System.out.println("Your coupon code is " + coupon);
                        System.out.println("You got a discount of Rs. " +WatchCouponWorth);
                        System.out.println();
                        System.out.println("Thank you");
                    }
                    else{
                        System.out.println("Please Enter a vald details");
                        verfication();
                    }
                }
                else{
                    getCategeories(n);
                }
                break;
                
            case 3:
                System.out.println("Products we offer");
                int bikes=Bikes();
                if(bikes>0 && bikes <= 3)
                {
                    System.out.println("Enter you Name and Mob Number");
                    boolean isValid = verfication();
                    if(isValid){
                    System.out.println("press --> 1 to generate coupon code");
                    int bikecoupon = sc.nextInt();
                    String coupon = getCoupon();
                    int bikeCouponWorth = couponWorth(coupon,n);
                    System.out.println("Your coupon code is " + coupon);
                    System.out.println("You got a discount of Rs. " +bikeCouponWorth);
                    System.out.println();
                    System.out.println("Thank you");
                    System.out.println();
                    }
                    else{
                        System.out.println("Please Enter a vald details");
                        verfication();
                    }
                }
                else{
                    getCategeories(n);
                }
                break;
        }
    }
    
    // static void getMenu()
    // {
    //     // Scanner sc = new Scanner(System.in);
	// 	System.out.println("Select from below Catageories");
	// 	System.out.println("Press 1 -> Home Appliances");
	// 	System.out.println("Press 2 -> Watches");
	// 	System.out.println("Press 3 -> Bikes");
	// 	System.out.println("Press 0 to Exit");
		
	// 	opt = sc.nextInt();
	// 	if(opt > 0 && opt<=3)
	// 	{
	// 	   getCategeories(opt); 
	// 	}
	// 	else if(opt>3)
	// 	{
	// 	   System.out.println("Please press from the given options");
	// 	   System.out.println();
	// 	   getMenu();
	// 	}
	// 	else
	// 	{
	// 	    System.out.println("Thank you visit again");
	// 	}
    // }
    
	public static void main (String[] args) throws java.lang.Exception
	{
        int opt;
        do{
            System.out.println();
            System.out.println("Choose from Below Catageories..:)");
            System.out.println("Press 1 -> Home Appliances");
            System.out.println("Press 2 -> Watches");
            System.out.println("Press 3 -> Bikes");
            System.out.println("Press 0 to Exit");

            opt = sc.nextInt();

            if(opt > 0 && opt < 5)
            {
                getCategeories(opt);
            }
            else if(opt > 4)
            {
                System.out.println("Please choose from the given options :(");
            }
            else{
                System.out.println("ThankYou visit again :)");
            }
        }
        while(opt != 0);
		
	}
}
