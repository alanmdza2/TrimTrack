package com.is.spring.controller;


import com.is.spring.model.Usuario;

import com.is.spring.service.UsuarioService;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.RestController;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import java.util.List;


// hacer lo mismo queponer servicio controller

@RestController
public class UsuarioController {

    @Autowired
     private UsuarioService userService;

    @GetMapping("/usuario")
    public List<Usuario> getAllUsuarios() {
        
        return userService.getAllUsuarios();
    }

    @GetMapping("/usuario/{idusuario}")
    public Usuario getUsuarioById(@PathVariable int id) {
        return userService.getUsuarioById(id);
    }

    @DeleteMapping("/usuario/{idusuario}")
    public void deleteUsuario(@PathVariable int id) {
        userService.deleteUsuario(id);
    }

    @PostMapping("/usuarios")
    public Usuario addTurno(@RequestBody Usuario usuario) {
         return userService.saveUsuario(usuario);
    }

    @PutMapping("/usuarios")
    public Usuario update(@RequestBody Usuario usuario) {
        userService.saveUsuario(usuario);
        return usuario;
    }
}
