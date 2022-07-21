import java.util.*;
import javax.swing.text.html.HTMLDocument.Iterator;
import java.io.*;

public class virSoft {
    
    class Node{
        int val;
        int count;
        Node next;
        Node(int val,int count){
            this.val = val;
            this.count = count;
            next = null;
        }
    }
    /**
     * @param args
     */
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int[] arr = {1,1,2,2,3,3,4,4,4,5,6,7,8};
        int n = arr.length;
        HashMap<Integer,Integer> freq = new HashMap<>();
        for(int i=0;i<n;i++)
        {
            freq.put(arr[i],freq.getOrDefault(arr[i],0)+1);
        }
        Node head = null,curr = null;
        Iterator<Integer> it = freq.keySet().iterator();
        while(it.hasNext())
        {
            int val = it.hasNext();
            
            if(head == null)
            {
                head = new Node(val,it.get(val));
                curr = head;
            }
            else
            {
                curr.next = new Node(val,it.get(val));
                curr = curr.next;
            }
        }
        while(head != null)
        {
            System.out.println(head.val +" "+head.count);
            head = head.next;
        }
        // ArrayList<ArrayList<Integer>> ans = new ArrayList<>();
        // Node tail = head;
        // while(tail != null)
        // {
        //     new ArrayList<>();
        //     int val = tail.count;
        //     while(val-- >= 0)
        //     {
        //         ans.get(tail.val).add(tail.val);
        //     }
        //     tail = tail.next;
        // }
        // int arrayListSize = ans.size();
        // // getfunction
        // int getVal(int index){
        //     if(index > arrayListSize){
        //         return -1;
        //     }
        //     return ans.get(index);
        // }
        // //input value
        // int ind = sc.nextInt();
        // int output = getVal(ind);
        // System.out.println(output);
    }
}