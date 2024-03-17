package com.is.spring.turnos.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "usuario", schema = "TrimTrack_dev")
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private int idusuario;
    @Column
    private String nombreapellido;
    @Column
    private String telefono;
    @Column
    private String email;
    @Column
    private String contrasenia;
    @Column
    private String dni;



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

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getcontrasenia() {
        return contrasenia;
    }

    public void setcontrasenia(String contrasenia) {
        this.contrasenia = contrasenia;
    }

    

    public String getDni() {
        return dni;
    }

    public void setDni(String dni) {
        this.dni = dni;
    }

    public Usuario() {
    }
    
    public Usuario(int idusuario,String nombreapellido,String telefono, String email, String contrasenia,String dni) {

        this.idusuario=idusuario;
        this.nombreapellido=nombreapellido;
        this.telefono=telefono;
        this.email=email;
        this.contrasenia=contrasenia;
        this.dni=dni;

    }

    
}
