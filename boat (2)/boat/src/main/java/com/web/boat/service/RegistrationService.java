package com.web.boat.service;

import com.web.boat.model.AppUserRole;
import lombok.AllArgsConstructor;
//import org.springframework.security.core.userdetails.User;
import com.web.boat.model.User;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class RegistrationService {
    private final AppUserservice appUserservice;
    private EmailValidator emailValidator;

    public String register(RegistrationRequest R){
        boolean isvalid= emailValidator.test(R.getEmail());
        if (!isvalid){
            throw new IllegalStateException("email not valid");
        }
        return appUserservice.signUpUser(new User(
                R.getFirstname(),
                R.getLastname(),
                R.getPassword(),
                R.getEmail(),
                AppUserRole.user
                )
        );
    }
}
