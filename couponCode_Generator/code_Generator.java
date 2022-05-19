package couponCode_Generator;
import java.util.*;
import java.io.*;
import couponCode_Generator.products;
// import couponCode_Generator.user_Credentials;

public class code_Generator{
    // global declaring scanner class
    static Scanner sc = new Scanner(System.in);

    public static void Catageories(int opt){
        int productOpt;
        switch (opt) {
            case 1:
                product.HomeAppliances();
                productOpt = sc.nextInt();
                // user.getUserInput();
                break;
            case 2:
                product.ComputerAccessories();
                productOpt = sc.nextInt();
                break;
            case 3:
                product.watches();
                productOpt = sc.nextInt();
                break;
            case 4:
                product.Bikes();
                productOpt = sc.nextInt();
                break;
            default:
                break;
        }
    }
    public static void main(String[] args) {

        products product = new products();

        user_Credentials user = new user_Credentials();

        System.out.println("Welcome");

        int opt;
        
        do{
            System.out.println("Choose from Below Catageories..:)");
            System.out.println("Press 1 -> Home Appliances");
            System.out.println("Press 2 -> ComputerAccessories");
            System.out.println("Press 3 -> Watches");
            System.out.println("Press 4 -> Bikes");
            System.out.println("Press 0 to Exit");

            opt = sc.nextInt();

            if(opt > 0 && opt < 5)
            {
                Catageories(opt);
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