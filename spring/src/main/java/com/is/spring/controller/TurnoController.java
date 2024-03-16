package com.is.spring.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.is.spring.model.Turno;
import com.is.spring.service.TurnoService;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;


@RestController

public class TurnoController {
    @Autowired
    private TurnoService turnoService;

    @GetMapping("/turno")
    public List<Turno> getAllTurnos() {
        return turnoService.getAllTurnos();
    }

    @GetMapping("/turno/{idturno}")
    public Turno getTurnoById(@PathVariable int id) {
        return turnoService.getTurnoById(id);
    }

    @DeleteMapping("/turno/{idturno}")
    public void deleteTurno(@PathVariable int id) {
        turnoService.deleteTurno(id);
    }

    @PostMapping("/turnos")
    public Turno addTurno(@RequestBody Turno turno) {
         return turnoService.saveTurno(turno);
    }

    @PutMapping("/turnos")
    public Turno update(@RequestBody Turno turno) {
       
        turnoService.saveTurno(turno);
        return turno;
    }

    
}
