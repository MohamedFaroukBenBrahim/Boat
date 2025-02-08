package com.web.boat.service;
import com.web.boat.exception.boatnotfound;
import com.web.boat.model.BOATS;
import com.web.boat.repo.boatRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class boatservice {
    private final boatRepo BoatRepo;
    @Autowired
    public boatservice(boatRepo B){
        this.BoatRepo=B;
    }
    public BOATS addboat(BOATS B){
        return BoatRepo.save (B);
    }
    public List<BOATS> findallboats(){
        return BoatRepo.findAll();
    }
    public BOATS deleteboat(Long id){
//        return BoatRepo.deleteById(id);
        BOATS boat = BoatRepo.findById(id).orElseThrow(() -> new boatnotfound("Boat not found with id: " + id));
        BoatRepo.deleteById(id);
        return boat;
    }
    public BOATS findBoat(long id){
        return BoatRepo.findById(id).orElseThrow(()->new boatnotfound("boat by id "+id+"was not found"));
    }
    public BOATS updateboat(BOATS B){
        return BoatRepo.save(B);
    }
}
