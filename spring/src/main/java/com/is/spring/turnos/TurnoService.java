package com.is.spring.turnos;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class TurnoService {

    @Autowired
    private TurnoRepository turnoRepository;

    public List<Turno> getAllTurnos() {
        return turnoRepository.findAll();
    }

    public Optional<Turno> getTurnoById(Integer id) {
        return turnoRepository.findById(id);
    }

    public Turno saveturno(Turno turno) {
        return turnoRepository.save(turno);
    }

    public void deleteTurno(Integer id) {
        turnoRepository.deleteById(id);
    }
}
