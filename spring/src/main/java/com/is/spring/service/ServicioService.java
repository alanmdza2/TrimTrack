package com.is.spring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.is.spring.model.Servicio;

import com.is.spring.persistence.ServicioRepository;

@Service
public class ServicioService {

    @Autowired
    private ServicioRepository servicioRepository;
    
    public List<Servicio> getAllServicios() {
        return servicioRepository.findAll();
    }
    
    public Servicio getServicioById(int id) {
        return servicioRepository.findById(id).orElse(null);
    }
    
    public Servicio saveServicio(Servicio servicio) {
        return servicioRepository.save(servicio);
    }
    
    public void deleteServicio(int id) {
        servicioRepository.deleteById(id);
    }
}
