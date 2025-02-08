package com.web.boat;

import com.web.boat.repo.contactRepo;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import com.web.boat.model.contact;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/contact")
public class contactController {
    private final contactRepo contactRepository;
    public contactController(contactRepo contactRepository) {
        this.contactRepository = contactRepository;
    }
    @PostMapping("/send")
    public ResponseEntity<contact> submitContact(@RequestBody contact contactRequest) {
        if (contactRequest.getName() == null || contactRequest.getEmail() == null || contactRequest.getMessage() == null) {
            return ResponseEntity.badRequest().body(contactRequest);
        }
        contact savedContact = contactRepository.save(contactRequest);
        return new ResponseEntity<>(savedContact, HttpStatus.CREATED);
    }
    @GetMapping("/message")
    public ResponseEntity<List<contact>> getContact(){
        List<contact> messages= contactRepository.findAll();
        return new ResponseEntity<>(messages,HttpStatus.OK);
    }
}