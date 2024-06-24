package com.example.usermanagementsystem.controller;

import com.example.usermanagementsystem.exception.UserNotFoundException;
import com.example.usermanagementsystem.model.User;
import com.example.usermanagementsystem.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000/")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/users")
    List<User> getAllUsers(){
        return userRepository.findAll();
    }

    @PostMapping("/user")
    User newUser(@RequestBody User user){
        return userRepository.save(user);
    }

    @GetMapping("/user/{id}")
    User getUserById(@PathVariable Long id){
        return userRepository.findById(id).orElseThrow(()->new UserNotFoundException(id));
    }
    @PutMapping("/updateuser/{id}")
    User updateUserById(@RequestBody User NewUser,@PathVariable Long id){
        return userRepository.findById(id).map(user -> {
            user.setUsername(NewUser.getUsername());
            user.setName(NewUser.getName());
            user.setEmail(NewUser.getEmail());
            user.setAge(NewUser.getAge());
            user.setGender(NewUser.getGender());
            user.setPassword(NewUser.getPassword());
            return userRepository.save(user);
        } ).orElseThrow(()->new UserNotFoundException(id));
    }
    @DeleteMapping("/deleteuser/{id}")
    String deleteUserById(@PathVariable Long id){
        if(!userRepository.existsById(id)){
            throw new UserNotFoundException(id);
        }
        userRepository.deleteById(id);
        return "User with id "+id+" is Successfully deleted";
    }
}
