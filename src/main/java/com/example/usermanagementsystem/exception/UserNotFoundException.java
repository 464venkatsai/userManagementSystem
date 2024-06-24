package com.example.usermanagementsystem.exception;

public class UserNotFoundException extends RuntimeException{
    public UserNotFoundException(Long id){
        super("Could not find with id "+id);
    }
}
