package bankProject;
import bankProject.User;
import java.util.*;
import java.io.*;
/**
 * Create Account
 * Send Money -> user, password, amount, destinationAccountNumber
 * Add Balance -> user, password, amount
 * Check Balance -> user, password
 * Withdraw Money -> user, password, amount
 * Delete Account -> user, password
 */

public class Bank {

    private HashMap<Integer, User> users;
    
    Bank(){
        users = new HashMap<>();
    }

    public void addUser(int id, String password){
        User newUser = new User(id,password);
        if(users.containsKey(id)){
            System.out.println("User already exists");
        }
        else{
            users.put(id, newUser);
            System.out.println("Successfully created Account :)");
        }
    }

    public void sendMoney(int senderId, int receiverId, double amount){
        User sender = users.get(senderId);
        if(sender.getBalance() >= amount){
            System.out.println("Transferring the money :)");
            User receiver = users.get(receiverId);

            sender.setBalance(sender.getBalance() - amount);
            receiver.setBalance(receiver.getBalance() + amount);

            System.out.println("Transferred money Successfully");
            System.out.println("Your new balance is : " + sender.getBalance());
        }
        else{
            System.out.println("Bank balance low. Can't send money :(");
        }
    }

    public boolean verifyCredentials(int id, String password){
        User user = users.get(id);
        return user.verifyPassword(password);
    }
}
