package com.is.spring.turnos.model;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name = "servicio", schema = "TrimTrack_dev")
public class Servicio {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private int idservicio;
    @Column
    private String descripcion;
    @Column
    private int precio;



    public int getIdservicio() {
        return idservicio;
    }
    public void setIdservicio(int idservicio) {
        this.idservicio = idservicio;
    }
    public String getDescripcion() {
        return descripcion;
    }
    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }
    public int getPrecio() {
        return precio;
    }
    public void setPrecio(int precio) {
        this.precio = precio;
    }

    public Servicio() {
    }


    public Servicio(int idservicio, String descripcion, int precio) {
        this.idservicio = idservicio;
        this.descripcion = descripcion;
        this.precio = precio;
    }

    
    

}
