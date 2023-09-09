package com.ecommerce.ecommerce.models;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class UserInfoReq {


    private String email;
    private String address;
    private String phoneNumber;
    private String zipcode;
    private String state;
    private String city;
    private String country;
    private String firstname;
    private String lastname;
 
}
