package com.web.boat.service;

import com.web.boat.exception.boatnotfound;
import lombok.AllArgsConstructor;
import com.web.boat.model.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import com.web.boat.repo.userrepo;

@Service
@AllArgsConstructor
public class AppUserservice implements UserDetailsService {
    private final userrepo userRepo;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        return userRepo.findByEmail(email).orElseThrow(() -> new boatnotfound("Boat not found with id: " + email)) ;
    }
    public String signUpUser(User appuser){
        boolean userExist = userRepo.findByEmail(appuser.getEmail()).isPresent();
        if (userExist){
            throw new IllegalStateException("email already taken");
        }
        String encodede = bCryptPasswordEncoder.encode(appuser.getPassword());
        appuser.setPassword(encodede);
        userRepo.save(appuser);
        return "t5dem";
    }

}
