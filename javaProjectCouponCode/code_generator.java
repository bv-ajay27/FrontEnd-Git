package javaProjectCouponCode;
import java.util.HashMap;

public class code_generator {
    public static HashMap<String,user> customer;

    code_generator(){
        customer = new HashMap<>();
    }
    public boolean codeGenerator(String phNum,String name){
        user newUser = new user(phNum,name);
        if(phNum.length() < 10 && phNum.length() > 10)
        {
            System.out.println("Enter valid 10 digits mobile Number");
            return false;
        }
        if(customer.containsKey(phNum)){
            System.out.println();
            System.out.println(name +":("+ "sorry you have already claimed the coupon :(");
            System.out.println();
            return false;
        }
        else
        {
            customer.put(phNum,newUser);
        }
       return true;
    }
    public String getCoupon()
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
    public int getCouponWorth(String coup,int n)
    {
        int discount=0;
        int len=coup.length();
        for(int i=0;i<len;i++)
        {
            discount+=(int)coup.charAt(i);
        }
        
        if(n == 1)
        {
            discount*=5;
        }
        else if(n == 4)
        {
            discount*=15;
        }
        return discount*7;
    }
}
