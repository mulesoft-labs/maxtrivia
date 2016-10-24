package com.qa.hackaton;

import java.util.Random;
import com.qa.hackaton.Operations;
import com.qa.hackaton.OptionAPI;


public class MainClass {


    public static void main(String[] args) {

        Random random = new Random();
        int i = random.nextInt(6) + 1;
        switch (i) {
                case 1:
                    System.out.println("RM option");

                    break;
                case 2:
                    System.out.println("CH option");
                    break;
                case 3:
                    System.out.println("Exchange option");
                    break;
                case 4:
                    System.out.println("API Mgmt option");
                    break;
                case 5:
                    System.out.println("Studio option");
                    break;
                case 6:
                    System.out.println("Access Management option");
                    break;
                default:
                    System.out.println("No more options!");

        }
    }


}
