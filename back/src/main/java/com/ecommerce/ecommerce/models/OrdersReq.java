package com.ecommerce.ecommerce.models;

import com.ecommerce.ecommerce.product.ProductModel;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class OrdersReq {
    private String email;
    private ProductModel[]  products;
    private String type;
    private String cardNumber;
    private String cardHolder;
    private String expiryDate;
    private String cvv;
   

}
