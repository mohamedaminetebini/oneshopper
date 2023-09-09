package com.ecommerce.ecommerce.controllers;

import com.ecommerce.ecommerce.role.Role;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterReq {

    private String email;
    private String password;
    private String username;
    private Role role;

}
