package com.is.spring.turnos;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.is.spring.servicios.Servicio;
import com.is.spring.servicios.ServicioRepository;
import com.is.spring.usuarios.Usuario;
import com.is.spring.usuarios.UsuarioRepository;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/turno")
public class TurnoController {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private ServicioRepository servicioRepository;
    @Autowired
    private TurnoService turnoService;

    @GetMapping
    public ResponseEntity<List<Turno>> obtenerTurnosPorFecha(
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) Date fecha) {
        List<Turno> turnos;
        if (fecha != null) {
            turnos = turnoService.getTurnosByFecha(fecha);
        } else {
            turnos = turnoService.getAllTurnos();
        }
        return new ResponseEntity<>(turnos, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Turno> obtenerTurnoPorId(@PathVariable("id") Integer id) {
        Optional<Turno> turno = turnoService.getTurnoById(id);
        return turno.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public ResponseEntity<Turno> crearTurno(@RequestBody Turno turno) {
        Integer idusuario = turno.getIdusuario();
        Integer idservicio = turno.getIdservicio();

        Usuario usuario = usuarioRepository.findById(idusuario).orElseThrow();
        Servicio servicio = servicioRepository.findById(idservicio).orElseThrow();

        turno.setIdusuario(usuario.getIdusuario());
        turno.setIdservicio(servicio.getIdservicio());

        Turno nuevoTurno = turnoService.saveturno(turno);
        return new ResponseEntity<>(nuevoTurno, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarTurno(@PathVariable("id") Integer id) {
        turnoService.deleteTurno(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}