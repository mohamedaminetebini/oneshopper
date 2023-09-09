package com.ecommerce.ecommerce.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ecommerce.ecommerce.models.Orders;

public interface OrdersRepo extends JpaRepository<Orders, Long> {
    
}
