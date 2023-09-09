package com.ecommerce.ecommerce.product;

 
import java.util.List;
import java.util.Optional;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ecommerce.ecommerce.models.DeleteProReq;

@Service
public class ProductService {
    private final ProductRep productRepository;

    
     ProductService(ProductRep productRepository) {
        this.productRepository = productRepository;
    }

    Optional<ProductModel> getProduct(long id){
        Optional<ProductModel> product = productRepository.findById(id);
        if(product.isPresent()){
            return product;
        }else{
            return Optional.empty();
        }
    }
    Optional<ProductModel> addProduct(ProductModel productModel) throws DataIntegrityViolationException {
        productRepository.save(productModel);
        return Optional.of(productModel);
    }
   public  ResponseEntity<String> deleteProduct( Long id){
    System.out.println();
        productRepository.deleteById(id);
        
        return  ResponseEntity.ok("deleted");
    }
    List<ProductModel> getAllProduct(){
        return productRepository.findAll();
    }

    public List<ProductModel> searchProduct(String searchQuery)  {       
            List<ProductModel> product = productRepository.findByNameContainingIgnoreCase(searchQuery);    
            if(product.isEmpty()){
                return List.of();
            }
            return product;
    }
}
