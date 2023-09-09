package com.ecommerce.ecommerce.product;


import java.util.List;
import java.util.Optional;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.ecommerce.models.DeleteProReq;
import com.ecommerce.ecommerce.models.customError;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("api/v1/products")
public class productCon {
    
    private final ProductService ProductService;

    public productCon(ProductService productService) {
        ProductService = productService;
    }
    @GetMapping
    public List<ProductModel> getAllProduct(){
        return ProductService.getAllProduct();
    }
    @GetMapping("/{id}")
    public ResponseEntity<ProductModel> getProduct(@PathVariable("id") long id){
        Optional<ProductModel> product = ProductService.getProduct(id);
        if(product.isPresent()){
            return ResponseEntity.ok(product.get());
        }else{
            return ResponseEntity.notFound().build();
        }
    }
    @PostMapping("/delete/{id}")
    public ResponseEntity<String> deleteProduct(@PathVariable("id") Long id){
        return ProductService.deleteProduct(Long.valueOf(id));
    }
    @PostMapping("/add")
    public ResponseEntity<customError> addProduct(@RequestBody ProductModel ProductModel){
        try {
           ProductService.addProduct(ProductModel);
        
            return ResponseEntity.status(HttpStatus.CREATED).body(new customError("Product added"));
       
        } catch (DataIntegrityViolationException  e) {
            if(e.getMessage().contains("Duplicate entry")){
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new customError("already exists"));
            }
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new customError("Something went wrong"));
        }    
    }
    
    

}