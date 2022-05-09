package bankProject;
import java.util.*;
import java.io.*;

public class BankRunner {
    public static void main(String[] args) {

        Bank bank = new Bank();
        
        System.out.println("Welcome to My Bank");

        int optionNumber;

        do{
            System.out.println("Choose the option");
            System.out.println("1. Create an account");
            System.out.println("2. Send Money");
            System.out.println("8. Exit");

            Scanner sc = new Scanner(System.in);
            int id;
            String password;

            optionNumber = sc.nextInt();
            switch (optionNumber) {
                case 1:
                    System.out.print("Enter id: ");
                    id = sc.nextInt();
                    System.out.print("Enter password: ");
                    password = sc.next();
                    bank.addUser(id, password);
                    break;

                case 2:
                    System.out.print("Enter your id: ");
                    int senderId = sc.nextInt();
                    System.out.print("Enter password: ");
                    password = sc.next();
                    boolean loggedIn = bank.verifyCredentials(senderId, password);
                    if(loggedIn){
                        System.out.print("Enter receiver id: ");
                        int receiverId = sc.nextInt();
                        System.out.print("Enter amount to transfer: ");
                        double amountToTransfer = sc.nextDouble();
                        bank.sendMoney(senderId, receiverId, amountToTransfer);
                    }
                    else{
                        System.out.println("Bad Credentials :(");
                    }
                    break;
                case 8:
                    System.out.println("Bye :(");
                    break;

                default:
                    break;
            }
        }
        while(optionNumber!=8);

    }
}
