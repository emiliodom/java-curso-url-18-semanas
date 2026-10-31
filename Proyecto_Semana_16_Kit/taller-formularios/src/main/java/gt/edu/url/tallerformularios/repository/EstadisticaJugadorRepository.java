package gt.edu.url.tallerformularios.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import gt.edu.url.tallerformularios.model.EstadisticaJugador;

public interface EstadisticaJugadorRepository extends JpaRepository<EstadisticaJugador, Long> {

    // "Las estadísticas de ESTE jugador", si ya tiene.
    Optional<EstadisticaJugador> findByJugadorId(Long jugadorId);
}

