package com.ecommerce.ecommerce.User;


import java.util.Optional;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.ecommerce.models.OrdersReq;
import com.ecommerce.ecommerce.models.UserInfoReq;

@RestController
@RequestMapping("api/v1/users")
@CrossOrigin(origins = "http://localhost:4200")
public class UserCon {
     private final UserService userService;

    
    public UserCon(UserService userService) {
        this.userService = userService;
    }
    @GetMapping
    public Optional<User> GetUser(@RequestBody long id){
        System.out.println(id);
        return userService.GetUser(id);
    }
    
    @PostMapping("/likes")
    public ResponseEntity<String> addProduct(@RequestBody long id){
        return userService.Like(id);
    }
    @PostMapping("/dislikes")
    public ResponseEntity<String> deleteProduct(@RequestBody long id){
        return userService.Dislike(id);
        
    }
    @PostMapping("/infos")
    public ResponseEntity<String> PostInfo(@RequestBody UserInfoReq userInfoReq){
        return userService.PostInfo(userInfoReq);
    }
    @PostMapping("/orders")
    public ResponseEntity<String> saveOrder(@RequestBody OrdersReq ordersReq){
        return userService.saveOrder(ordersReq);
    }
   
}
