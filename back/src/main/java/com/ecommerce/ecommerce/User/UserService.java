package com.ecommerce.ecommerce.User;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.ecommerce.ecommerce.models.OrdersReq;
import com.ecommerce.ecommerce.models.ShippingInfo;
import com.ecommerce.ecommerce.models.UserInfoReq;
//import com.ecommerce.ecommerce.product.productService;
import com.ecommerce.ecommerce.repos.ShippingInfoRepo;
import com.ecommerce.ecommerce.services.OrdersService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class UserService {
	
@Autowired
  private final UserRep userRep;
  private final OrdersService ordersService;
//private final productService ProductService;
private final ShippingInfoRepo shippingInfoRepo;
 
	public Optional<User> GetUser(long id){
		return userRep.findById(id);
	}
	public ResponseEntity<String> AddUser(User userModel){
		Optional<User> userList = userRep.findByEmail(userModel.getEmail());
		if(userList.isEmpty()){
			userRep.save(userModel);
			return ResponseEntity.ok("User added");
		}else{
			return ResponseEntity.status(400).body("User already exists");
		}
		
	}
	public ResponseEntity<String> Like(long id){
		return null;
	}
	public ResponseEntity<String> Dislike(long id) {
		return null;
	}
    public ResponseEntity<String> PostInfo(UserInfoReq userInfoReq) {
        Optional<User> user = userRep.findByEmail(userInfoReq.getEmail());
		if(user.isPresent()){
			var res = new ShippingInfo();
			res.setUser(user.get());
			res.setAddress(userInfoReq.getAddress());
			res.setCity(userInfoReq.getCity());
			res.setCountry(userInfoReq.getCountry());
			res.setState(userInfoReq.getState());
			res.setZipcode(userInfoReq.getZipcode());
			res.setFirstname(userInfoReq.getFirstname());
			res.setLastname(userInfoReq.getLastname());
			res.setPhoneNumber(userInfoReq.getPhoneNumber());
			shippingInfoRepo.save(res);
			return ResponseEntity.ok("info added");
		}
		return ResponseEntity.status(400).body("Invalid Credentials");
    }
	public ResponseEntity<String> saveOrder(OrdersReq ordersReq){
		ordersService.saveOrder(ordersReq);
		return ResponseEntity.ok("Order added");
	}	

}
