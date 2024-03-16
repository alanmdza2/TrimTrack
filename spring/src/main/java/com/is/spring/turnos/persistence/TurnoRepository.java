package com.is.spring.turnos.persistence;

import org.springframework.data.jpa.repository.JpaRepository;

import com.is.spring.turnos.model.Turno;

public interface TurnoRepository extends JpaRepository<Turno, Integer> {

    
}

