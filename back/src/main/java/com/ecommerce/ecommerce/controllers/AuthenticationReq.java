package com.ecommerce.ecommerce.controllers;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class AuthenticationReq {
    
    private String email;
    private String password;
}
