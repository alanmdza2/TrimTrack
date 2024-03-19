package com.is.spring.servicios;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/servicio")
public class ServicioController {

    @Autowired
    private ServicioService servicioService;

    @GetMapping
    public ResponseEntity<List<Servicio>> obtenerTodosLosServicios() {
        List<Servicio> servicios = servicioService.getAllServicios();
        return new ResponseEntity<>(servicios, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Servicio> obtenerServicioPorId(@PathVariable("id") Integer id) {
        Optional<Servicio> servicio = servicioService.getServicioById(id);
        return servicio.map(value -> new ResponseEntity<>(value, HttpStatus.OK)).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public ResponseEntity<Servicio> crearServicio(@RequestBody Servicio servicio) {
        Servicio nuevoServicio = servicioService.saveServicio(servicio);
        return new ResponseEntity<>(nuevoServicio, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteServicio(@PathVariable("id") Integer id) {
        servicioService.deleteServicio(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
