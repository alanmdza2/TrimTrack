package com.is.spring.turnos.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.is.spring.turnos.model.Turno;
import com.is.spring.turnos.service.TurnoService;

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

    @PostMapping("/turno")
    public Turno addTurno(@RequestBody Turno turno) {
         return turnoService.saveTurno(turno);
    }

    @PutMapping("/turno/{idturno}")
    public Turno update(@RequestBody Turno turno) {
       
        turnoService.saveTurno(turno);
        return turno;
    }

    
}
