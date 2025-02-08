package com.web.boat.service;

import com.web.boat.model.contact;
import com.web.boat.repo.contactRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class contactservice {
    private final contactRepo conatctRepo;
    @Autowired
    public contactservice(contactRepo C){
        this.conatctRepo=C;
    }
    public List<contact> findallboats(){
        return conatctRepo.findAll();
    }
}
