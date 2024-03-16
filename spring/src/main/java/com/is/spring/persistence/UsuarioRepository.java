package com.is.spring.persistence;

import org.springframework.data.jpa.repository.JpaRepository;


import com.is.spring.model.Usuario;


public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {
  
}
