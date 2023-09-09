package com.ecommerce.ecommerce.User;
import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import com.ecommerce.ecommerce.models.Orders;
import com.ecommerce.ecommerce.models.ShippingInfo;
import com.ecommerce.ecommerce.product.ProductModel;
import com.ecommerce.ecommerce.role.Role;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;


@Data
@Builder
@AllArgsConstructor
@Entity
@Getter
@Setter
@Table(name = "user")
public class User implements UserDetails {

    @Id
    @SequenceGenerator(name = "user_sequence", sequenceName = "user_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator = "user_sequence")
    private Long id;
    @Column(name = "email", unique = true, nullable = false, columnDefinition = "text")
    private String email;
    @Column(name = "password", nullable = false, columnDefinition = "text")
    private String password;
     @Column(name = "username", nullable = false, unique = true , columnDefinition = "text")
    private String username;
    @Column(name = "role", nullable = false, columnDefinition = "text")
    @Enumerated(EnumType.STRING)
        private Role role;  
   @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<ShippingInfo> shippingInfos;

@ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(
        name = "user_orders",
        joinColumns = @JoinColumn(name = "user_id"),
        inverseJoinColumns = @JoinColumn(name = "order_id")
    )
    private Set<Orders> orders = new HashSet<>();
    @ManyToMany
    @JoinTable(
        name = "user_liked_products",
        joinColumns = @JoinColumn(name = "user_id"),
        inverseJoinColumns = @JoinColumn(name = "product_id")
    )
    private Set<ProductModel> likedProducts = new HashSet<>();
   

  
    
    
   
    public User(String email, String password ) {
        this.email = email;
        this.password = password;
        
   
    }
    
   public User(String username,String email,String password , Role role ) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = role;
        
    } 
    public User(String username) {
        this.username = username;
    }
    public User() {
        
    }
    public User(Long id, String email, String password) {
        this.id = id;
        this.email = email;
        this.password = password;
      
       
    }

    public void setId(Long id) {
        this.id = id;
    }

   
    public void setEmail(String email) {
        this.email = email;
    }
     public void setUsername(String username) {
        this.username = username;
    }
    

    public void setPassword(String password) {
        this.password = password;
    }

   

  

  

    public Long getId() {
        return id;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }
 public Role getRole() {
        return role;
    }
  

 

 

    @Override
    public String toString() {
        // Provide a meaningful representation of the object
        return "User [id=" + id + ", email=" + email + ", password=" + password + ", role=" + role + ", PhoneNumber="
                + "]";
    }

  

 
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
       
        return List.of(new SimpleGrantedAuthority(role.name()));
    }

    @Override
    public String getUsername() {
        
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
       return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
       return true;
    }
    
}
