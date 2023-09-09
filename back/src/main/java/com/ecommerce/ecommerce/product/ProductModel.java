package com.ecommerce.ecommerce.product;



import java.util.HashSet;
import java.util.Set;

import com.ecommerce.ecommerce.User.User;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;




@Table(name = "product")
@Entity
public class ProductModel {
    @Id
    @SequenceGenerator(name = "product_sequence", sequenceName = "product_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator = "product_sequence")
    private Long id;
    @Column(name = "name", nullable = false, columnDefinition = "text")
    private String name;
    @Column(name = "description", nullable = false, columnDefinition = "text")
    private String description;
    @Column(name = "price", nullable = false, columnDefinition = "float")
    private Float price;
    @Column(name = "image", nullable = false, columnDefinition = "text")
    private String image;
    @Column(name="quantity", nullable = false, columnDefinition = "int")
    private Integer quantity;
    @Column(name="starts", columnDefinition = "int")
    private Integer starts;
     @ManyToMany(mappedBy = "likedProducts")
    private Set<User> likedByUsers = new HashSet<>();
    ProductModel() {
        
    }

    
    
    public ProductModel(String name, String description, Float price, String image, Integer quantity, Integer starts) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.image = image;
        this.quantity = quantity;
        this.starts = starts;
    }



    public ProductModel(Long id, String name, String description, Float price, String image, Integer quantity,
            Integer starts) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.image = image;
        this.quantity = quantity;
        this.starts = starts;
    }

   
    
    public Integer getQuantity() {
        return quantity;
    }



    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }



    public Integer getStarts() {
        return starts;
    }



    public void setStarts(Integer starts) {
        this.starts = starts;
    }



    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public Float getPrice() {
        return price;
    }
    public void setPrice(Float price) {
        this.price = price;
    }
    public Long getId() {
        return id;
    }
   public void setId(Long id) {
       this.id = id;
   }
    public String getImage() {
        return image;
    }
    public void setImage(String image) {
        this.image = image;
    }
}