package com.web.boat;


import com.web.boat.service.RegistrationRequest;
import com.web.boat.service.RegistrationService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/boat/signup")
@AllArgsConstructor
public class SignUpController {

    private RegistrationService registrationService;
    @PostMapping("/reg")
    public String register(@RequestBody RegistrationRequest request){
        return  registrationService.register(request);
    }
}
