package com.is.spring.model;
import com.google.protobuf.Timestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
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
    @Column
    private int idusuario;
    @Column
    private int idservicio;

    

    public int getIdusuario() {
        return idusuario;
    }

    public void setIdusuario(int idusuario) {
        this.idusuario = idusuario;
    }

    public int getIdServicio() {
        return idservicio;
    }

    public void setIdServicio(int idServicio) {
        this.idservicio = idServicio;
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

    public Turno(int idturno,Timestamp fechahora, String nota, int idusuario,int idservicio) {
        this.idturno=idturno;
        this.fechahora = fechahora;
        this.nota = nota;
        this.idusuario = idusuario;
        this.idservicio=idservicio;
        
    }
}
