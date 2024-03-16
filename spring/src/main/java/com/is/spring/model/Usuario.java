package com.is.spring.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "usuario", schema = "TrimTrack_dev")
public class Usuario {

    @Id
    @Column
    private int idusuario;
    @Column
    private String nombreapellido;
    @Column
    private int telefono;
    @Column
    private String email;
    @Column
    private String contraseña;



    public int getIdusuario() {
        return idusuario;
    }

    public void setIdusuario(int idusuario) {
        this.idusuario = idusuario;
    }

    public String getNombreapellido() {
        return nombreapellido;
    }

    public void setNombreapellido(String nombreapellido) {
        this.nombreapellido = nombreapellido;
    }

    public int getTelefono() {
        return telefono;
    }

    public void setTelefono(int telefono) {
        this.telefono = telefono;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getContraseña() {
        return contraseña;
    }

    public void setContraseña(String contraseña) {
        this.contraseña = contraseña;
    }

    public Usuario() {
    }
    
    public Usuario(int idusuario,String nombreapellido,int telefono, String email, String contraseña) {

        this.idusuario=idusuario;
        this.nombreapellido=nombreapellido;
        this.telefono=telefono;
        this.email=email;
        this.contraseña=contraseña;

    }

    
}
