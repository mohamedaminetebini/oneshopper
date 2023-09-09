package com.ecommerce.ecommerce.models;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class ApiRes {
    private Object data;
    public ApiRes(Object data){
        this.data = data;
    }
   
}
