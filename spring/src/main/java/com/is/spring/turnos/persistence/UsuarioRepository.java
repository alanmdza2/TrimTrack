package com.is.spring.turnos.persistence;

import org.springframework.data.jpa.repository.JpaRepository;

import com.is.spring.turnos.model.Usuario;


public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {
  
}
