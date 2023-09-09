package com.ecommerce.ecommerce.product;



import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;




public interface ProductRep extends JpaRepository<ProductModel, Long> {
   List<ProductModel> findByName(String name);
   List<ProductModel>  findByNameContainingIgnoreCase(String name);
}
