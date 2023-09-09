package com.ecommerce.ecommerce.controllers;




import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.ecommerce.product.ProductModel;
import com.ecommerce.ecommerce.product.ProductService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("api/v1/search")
public class SearchCon {
   private final ProductService ProductService;

    public SearchCon(ProductService ProductService) {
        this.ProductService = ProductService;
    }
    @GetMapping
    public ResponseEntity<List<ProductModel>> search(@RequestParam("query") String searchQuery) {
            List<ProductModel> product = ProductService.searchProduct(searchQuery);
            if(product.isEmpty()){
                return ResponseEntity.status(404).body(List.of());
            }
            return ResponseEntity.ok(product);
    }
}


