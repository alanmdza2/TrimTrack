package com.is.spring.turnos.model;
import com.google.protobuf.Timestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;

import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "Turno", schema = "TrimTrack_dev")
public class Turno {

    @Id
    @Column
    private int idturno;
    @Column
    private Timestamp fechahora;
    @Column
    private String nota;
  

    @ManyToOne
    @JoinColumn(name = "idusuario")
    private Usuario usuario;

    @ManyToOne
    @JoinColumn(name = "idservicio")
    private Servicio servicio;
     

    

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public Servicio getServicio() {
        return servicio;
    }

    public void setServicio(Servicio servicio) {
        this.servicio = servicio;
    }

    public int getIdturno() {
        return idturno;
    }

    public void setIdturno(int idturno) {
        this.idturno = idturno;
    }

    

    public Timestamp getFechahora() {
        return fechahora;
    }

    public void setFechahora(Timestamp fechahora) {
        this.fechahora = fechahora;
    }

    public String getNota() {
        return nota;
    }

    public void setNota(String nota) {
        this.nota = nota;
    }

    
    public Turno() {
    }

    public Turno(int idturno,Timestamp fechahora, String nota, Usuario usuario,Servicio servicio) {
        this.idturno=idturno;
        this.fechahora = fechahora;
        this.nota = nota;
        this.usuario = usuario;
        this.servicio=servicio;
        
    }
}
