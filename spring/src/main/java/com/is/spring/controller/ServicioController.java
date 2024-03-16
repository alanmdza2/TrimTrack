package com.is.spring.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.is.spring.model.Servicio;
import com.is.spring.service.ServicioService;

@RestController
public class ServicioController {

    @Autowired
     private ServicioService servicioService;

    @GetMapping("/servicio")
    public List<Servicio> getAllServicios() {
        return servicioService.getAllServicios();
    }


    @GetMapping("/servicio/{idservicio}")
    public Servicio getServicioById(@PathVariable int id) {
        return servicioService.getServicioById(id);
    }

    @DeleteMapping("/servicio/{idservicio}")
    public void deleteServicio(@PathVariable int id) {
        servicioService.deleteServicio(id);
    }

    @PostMapping("/servicio")
    public Servicio addTurno(@RequestBody Servicio servicio) {
         return servicioService.saveServicio(servicio);
    }

    @PutMapping("/servicio/{idservicio}")
    public Servicio update(@RequestBody Servicio servicio) {
        servicioService.saveServicio(servicio);
        return servicio;
    }
}
