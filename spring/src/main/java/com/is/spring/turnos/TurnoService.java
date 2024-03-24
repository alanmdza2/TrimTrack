package com.is.spring.turnos;

import java.util.List;
import java.util.Date;

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
    public List<Turno> getTurnosByFecha(Date fecha) {
        return turnoRepository.findByFechahoraBetween(fecha, new Date(fecha.getTime() + 86400000L)); // Busca turnos en un rango de 24 horas a partir de la fecha dada
    }
}
