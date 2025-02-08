package com.web.boat;

import com.web.boat.model.BOATS;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.web.boat.service.boatservice;

import java.util.List;

@RestController
@RequestMapping("/BOATS")
public class boatController {
    private final boatservice boatService;

    public boatController(boatservice BS){
        this.boatService=BS;
    }
    @GetMapping("/all")
    public ResponseEntity<List<BOATS>> ALLBOATS(){
        List<BOATS> boats = boatService.findallboats();
        return new ResponseEntity<>(boats, HttpStatus.OK);
    }
    @GetMapping("/find/{id}")
    public ResponseEntity<BOATS> BOATSbyId(@PathVariable("id") Long id){
        BOATS boat = boatService.findBoat(id);
        return new ResponseEntity<>(boat, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<BOATS> addboat(@RequestBody BOATS boat){
        BOATS newboat = boatService.addboat(boat);
        return new ResponseEntity<>(newboat,HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<BOATS> updateboat(@RequestBody BOATS boat){
        BOATS updatedboat = boatService.updateboat(boat);
        return new ResponseEntity<>(updatedboat,HttpStatus.OK);
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteboat(@PathVariable("id") Long id){
        BOATS boats = boatService.deleteboat(id);
        return new ResponseEntity<>(boats, HttpStatus.OK);
    }
}
