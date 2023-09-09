package com.ecommerce.ecommerce.services;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Optional;
import java.util.Set;
import org.springframework.stereotype.Service;
import com.ecommerce.ecommerce.User.User;
import com.ecommerce.ecommerce.User.UserRep;

import com.ecommerce.ecommerce.models.Orders;
import com.ecommerce.ecommerce.models.OrdersReq;
import com.ecommerce.ecommerce.models.PaymentInfo;
import com.ecommerce.ecommerce.models.ShippingInfo;
//import com.ecommerce.ecommerce.product.ProductRep;
import com.ecommerce.ecommerce.repos.OrdersRepo;
//import com.ecommerce.ecommerce.repos.PaymentInfoRepo;
import com.ecommerce.ecommerce.repos.ShippingInfoRepo;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class OrdersService {
    private  final OrdersRepo ordersRepo;
    private final UserRep userRep;
    //private final ProductRep productRep;
   // private final PaymentInfoRepo paymentInfoRepo;
    private final ShippingInfoRepo shippingInfoRepo;
    public void saveOrder(OrdersReq ordersReq){
        Optional<User> user = userRep.findByEmail(ordersReq.getEmail());
        if(user.isPresent()){
            Optional<ShippingInfo> shippingInfo = shippingInfoRepo.findById(1L);
            PaymentInfo paymentInfo = PaymentInfo.builder()
            .type(ordersReq.getType())
            .cardNumber(ordersReq.getCardNumber())
            .cardHolder(ordersReq.getCardHolder())
            .expiryDate(ordersReq.getExpiryDate())
            .cvv(ordersReq.getCvv())
            .build();
           Orders order = Orders.builder()
            .user(user.get())
            .paymentInfo(paymentInfo)
            .shippingInfoList(Set.of(shippingInfo.get()))
            .products(new HashSet<>(Arrays.asList(ordersReq.getProducts())))
            .build();
            
            ordersRepo.save(order);
        }

    }
}
