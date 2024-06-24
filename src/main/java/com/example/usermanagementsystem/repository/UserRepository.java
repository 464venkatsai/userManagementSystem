package com.example.usermanagementsystem.repository;

import com.example.usermanagementsystem.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository <User,Long> {


}
