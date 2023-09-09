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
public class AuthenticationResponse {


    private String token;
    private String username;
    private String email;
    private String message;
    private Role role;
}
