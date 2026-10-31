package gt.edu.url.tallerformularios.service;

import java.util.List;

import org.springframework.stereotype.Service;

import gt.edu.url.tallerformularios.model.Equipo;
import gt.edu.url.tallerformularios.model.Jugador;
import gt.edu.url.tallerformularios.repository.EquipoRepository;
import gt.edu.url.tallerformularios.repository.JugadorRepository;

/**
 * Reglas de negocio de los equipos. El controlador NO decide si cabe un
 * jugador: lo decide esta clase (la capa de negocio de la Semana 6).
 */
@Service
public class EquipoService {

    private final EquipoRepository equipoRepository;
    private final JugadorRepository jugadorRepository;

    public EquipoService(EquipoRepository equipoRepository, JugadorRepository jugadorRepository) {
        this.equipoRepository = equipoRepository;
        this.jugadorRepository = jugadorRepository;
    }

    public List<Equipo> listarTodos() {
        return equipoRepository.findAll();
    }

    public Equipo buscarPorId(Long id) {
        return equipoRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("No existe un equipo con id " + id));
    }

    /** Los jugadores de un equipo, leídos de la base en este momento. */
    public List<Jugador> plantilla(Long equipoId) {
        return jugadorRepository.findByEquipoId(equipoId);
    }

    /**
     * Asigna un jugador a un equipo. Si equipoId es null, lo deja "sin equipo".
     *
     * @throws IllegalStateException si el equipo ya no tiene cupo
     */
    public void asignar(Long jugadorId, Long equipoId) {
        Jugador jugador = jugadorRepository.findById(jugadorId)
                .orElseThrow(() -> new IllegalArgumentException("No existe un jugador con id " + jugadorId));

        if (equipoId != null) {
            Equipo equipo = buscarPorId(equipoId);
            boolean yaEstaAhi = equipoId.equals(jugador.getEquipoId());
            long ocupados = jugadorRepository.countByEquipoId(equipoId);
            if (!yaEstaAhi && ocupados >= equipo.getCupo()) {
                throw new IllegalStateException(
                        "El equipo " + equipo.getNombre() + " ya está completo (" + equipo.getCupo() + " jugadores).");
            }
        }
        jugador.setEquipoId(equipoId);
        jugadorRepository.save(jugador);
    }
}

