package com.example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
@SpringBootApplication
public class HelloWorld {
    public static void main(String[] args) {
       SpringApplication.run(HelloWorld.class,args);
        System.out.println("Hello World from Main class");
        // SpringApplication app=new SpringApplication(HelloWorld.class);
        // System.out.println("Hello World from Main class");
        // app.setAdditionalProfiles(args.length> 0 ? args[0] : "default");
        // app.run(args);
    }
}
