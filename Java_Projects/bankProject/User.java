package bankProject;

public class User {
    
    private int id;
    private String password;
    private String mobileNum;
    private double balance;

    User(int id, String password){
        this.id = id;
        this.password = password;
        this.balance = 500;
    }

    public int getId(){
        return this.id;
    }

    public void setMobileNum(String mobileNum){
        this.mobileNum = mobileNum;
    }

    public String getMobileNum(){
        return this.mobileNum;
    }

    public void setBalance(double balance){
        this.balance = balance;
    }

    public double getBalance(){
        return this.balance;
    }

    public boolean verifyPassword(String password){
        return this.password.equals(password);
    }

}
