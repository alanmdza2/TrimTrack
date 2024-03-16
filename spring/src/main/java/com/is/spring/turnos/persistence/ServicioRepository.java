package com.is.spring.turnos.persistence;

import org.springframework.data.jpa.repository.JpaRepository;

import com.is.spring.turnos.model.Servicio;


public interface ServicioRepository extends JpaRepository<Servicio, Integer> {
  
}