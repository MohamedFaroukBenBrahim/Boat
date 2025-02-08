package com.web.boat.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.web.boat.model.BOATS;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface boatRepo extends JpaRepository<BOATS, Long> {
    BOATS deleteById(long id);

    Optional<BOATS> findById(long id);
}
