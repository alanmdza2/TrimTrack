package com.is.spring.model;

public class User {
    private String name;
    private String email;
    private String status;

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getStatus() {
        return this.status;
    }

    public void setStatus(String status) {
        this.status = status;
    }


    public User() {
    }
    
    public User(String name, String email, String status) {
        this.name = name;
        this.email = email;
        this.status = status;
    }

    
}
