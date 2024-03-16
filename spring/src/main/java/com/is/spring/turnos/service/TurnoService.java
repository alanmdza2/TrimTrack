package com.is.spring.turnos.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.is.spring.turnos.model.Turno;
import com.is.spring.turnos.persistence.TurnoRepository;

import java.util.List;

@Service
public class TurnoService {
    @Autowired
    private TurnoRepository turnoRepository;
    
    public List<Turno> getAllTurnos() {
        return turnoRepository.findAll();
    }
    
    public Turno getTurnoById(int id) {
        return turnoRepository.findById(id).orElse(null);
    }
    
    public Turno saveTurno(Turno turno) {
        return turnoRepository.save(turno);
    }
    
    public void deleteTurno(int id) {
        turnoRepository.deleteById(id);
    }
}
