package com.rana.service;

import com.rana.model.User;
import com.rana.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        User user = userRepository.findByEmail(username);

        if (user == null) {
            throw new UsernameNotFoundException("User not found with email: " + username);
        }

        List<GrantedAuthority> authorityList= new ArrayList<>();


//        return new CustomUserDetails(user);
        return new org.springframework.security.core.userdetails.User(user.getEmail() ,user.getPassword() , authorityList);
    }
}















//package com.rana.service;
//
//import com.rana.model.User;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//
//public class CustomUserDetailsServices implements UserDetailsService {
//
//    private UserRespository userRespository1;
//
//    @Override
//    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException()
//
//    User user = userRespository.findByEmail(username)
//
//            return null
//
//}