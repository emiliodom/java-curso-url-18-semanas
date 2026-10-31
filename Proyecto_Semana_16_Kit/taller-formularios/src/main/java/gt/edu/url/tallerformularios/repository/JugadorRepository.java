package gt.edu.url.tallerformularios.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import gt.edu.url.tallerformularios.model.Jugador;

public interface JugadorRepository extends JpaRepository<Jugador, Long> {

    // Spring Data arma la consulta SOLO a partir del nombre del metodo:
    // "find by equipoId" -> SELECT ... WHERE equipo_id = ?
    List<Jugador> findByEquipoId(Long equipoId);

    long countByEquipoId(Long equipoId);

    // Para el hub: "el jugador que inicio sesion con este usuario".
    Optional<Jugador> findByUsername(String username);
}
