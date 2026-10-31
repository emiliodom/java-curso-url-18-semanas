package gt.edu.url.tallerformularios.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import gt.edu.url.tallerformularios.model.EstadisticaJugador;
import gt.edu.url.tallerformularios.repository.EstadisticaJugadorRepository;

@Service
public class EstadisticaService {

    private final EstadisticaJugadorRepository repositorio;

    public EstadisticaService(EstadisticaJugadorRepository repositorio) {
        this.repositorio = repositorio;
    }

    public List<EstadisticaJugador> listarTodas() {
        return repositorio.findAll();
    }

    public Optional<EstadisticaJugador> buscarPorJugador(Long jugadorId) {
        return repositorio.findByJugadorId(jugadorId);
    }

    /**
     * "Guardar o actualizar": si el jugador ya tiene fila, se reutiliza su id
     * (así save() hace UPDATE); si no, se crea una nueva (INSERT).
     * Sin esto, la columna única jugadorId rechazaría el segundo guardado.
     */
    public EstadisticaJugador guardar(EstadisticaJugador datos) {
        repositorio.findByJugadorId(datos.getJugadorId())
                .ifPresent(existente -> datos.setId(existente.getId()));
        return repositorio.save(datos);
    }
}

