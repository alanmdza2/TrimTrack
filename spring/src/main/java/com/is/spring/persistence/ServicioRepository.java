package com.is.spring.persistence;

import org.springframework.data.jpa.repository.JpaRepository;


import com.is.spring.model.Servicio;


public interface ServicioRepository extends JpaRepository<Servicio, Integer> {
  
}