package com.is.spring.servicios;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ServicioService {

    @Autowired
    private ServicioRepository servicioRepository;

    public List<Servicio> getAllServicios() {
        return servicioRepository.findAll();
    }

    public Optional<Servicio> getServicioById(Integer id) {
        return servicioRepository.findById(id);
    }

    public Servicio saveServicio(Servicio servicio) {
        return servicioRepository.save(servicio);
    }

    public void deleteServicio(Integer id) {
        servicioRepository.deleteById(id);
    }
}
