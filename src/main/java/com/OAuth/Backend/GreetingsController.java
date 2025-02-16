package com.OAuth.Backend;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GreetingsController {
    @GetMapping
    public String sayHello(){
        return "Hello";
    }
}
