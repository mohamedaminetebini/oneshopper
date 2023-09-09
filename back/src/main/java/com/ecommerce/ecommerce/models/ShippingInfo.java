package com.ecommerce.ecommerce.models;

import com.ecommerce.ecommerce.User.User;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "shipping_info")
@Entity
public class ShippingInfo {
    @Id
    @SequenceGenerator(name = "shipping_sequence", sequenceName = "shipping_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator = "shipping_sequence")
    private Long id;
    private String address;
    private String phoneNumber;
    private String zipcode;
    private String state;
    private String city;
    private String country;
    private String firstname;
    private String lastname;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    private User user;
    @ManyToOne
    @JoinColumn(name = "order_id")
    private Orders order;
}
