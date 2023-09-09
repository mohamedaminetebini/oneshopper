package com.ecommerce.ecommerce.models;

public class customError {
    private String message;

    public customError(String message) {
        this.message = message;
    }
    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;

    }
}
