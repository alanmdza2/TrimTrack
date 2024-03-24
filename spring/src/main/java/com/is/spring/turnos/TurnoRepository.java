package com.is.spring.turnos;

import java.util.Date;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface TurnoRepository extends JpaRepository<Turno, Integer> {
    @Query("SELECT t FROM Turno t WHERE t.fechahora BETWEEN :startDate AND :endDate")
    List<Turno> findByFechahoraBetween(@Param("startDate") Date startDate, @Param("endDate") Date endDate);
}
