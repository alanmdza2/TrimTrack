package com.is.spring.service;


import com.is.spring.model.Usuario;

import com.is.spring.persistence.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;
import java.util.List;


@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;
    
    public List<Usuario> getAllUsuarios() {
        return usuarioRepository.findAll();
    }
    
    public Usuario getUsuarioById(int id) {
        return usuarioRepository.findById(id).orElse(null);
    }
    
    public Usuario saveUsuario(Usuario usuario) {
        return usuarioRepository.save(usuario);
    }
    
    public void deleteUsuario(int id) {
        usuarioRepository.deleteById(id);
    }
}
