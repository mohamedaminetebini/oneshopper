package com.ecommerce.ecommerce.services;



import com.ecommerce.ecommerce.User.User;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.ecommerce.ecommerce.User.UserRep;
import com.ecommerce.ecommerce.configuration.JwtUtil;
import com.ecommerce.ecommerce.controllers.AuthenticationReq;
import com.ecommerce.ecommerce.controllers.AuthenticationResponse;
import com.ecommerce.ecommerce.controllers.RegisterReq;
import com.ecommerce.ecommerce.role.Role;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthService {

    @Autowired
    private final UserRep userRep;
    private final JwtUtil jwtUtil;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;

public AuthenticationResponse register(RegisterReq registerReq){
    var user =  User.builder().email(registerReq.getEmail()).password(passwordEncoder.encode(registerReq.getPassword())).username(registerReq.getUsername()).role(Role.USER).build();
       Optional<User> userOptional = userRep.findByEmail(user.getEmail());
    if(userOptional.isPresent()){
        return AuthenticationResponse.builder().message("User already exists").build();
    }
    userRep.save(user);
    var jwtToken = jwtUtil.generateToken(user); 
    return AuthenticationResponse.builder().message("user created").token(jwtToken).username(registerReq.getUsername()).email(registerReq.getEmail()).role(user.getRole()).build();

}
public AuthenticationResponse login(AuthenticationReq registerReq){
    authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(registerReq.getEmail(), registerReq.getPassword()));
    Optional<User> user = userRep.findByEmail(registerReq.getEmail());
    if(user.isPresent()){
        var jwtToken = jwtUtil.generateToken(user.get());
        return AuthenticationResponse.builder().message("Valid Credentials").token(jwtToken).username(user.get().getUsername()).email(user.get().getEmail()).role(user.get().getRole()).build();
    }
   return AuthenticationResponse.builder().message("Invalid Credentials").build();

}

    



}
