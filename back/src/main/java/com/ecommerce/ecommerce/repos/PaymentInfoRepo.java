package com.ecommerce.ecommerce.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ecommerce.ecommerce.models.PaymentInfo;

public interface PaymentInfoRepo extends JpaRepository<PaymentInfo, Long> {
    
}
