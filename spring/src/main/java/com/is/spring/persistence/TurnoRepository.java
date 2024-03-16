package com.is.spring.persistence;

import org.springframework.data.jpa.repository.JpaRepository;

import com.is.spring.model.Turno;

public interface TurnoRepository extends JpaRepository<Turno, Integer> {

    
}

