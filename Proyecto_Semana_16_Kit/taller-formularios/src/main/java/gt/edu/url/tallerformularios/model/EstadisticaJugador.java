package gt.edu.url.tallerformularios.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;

/**
 * Estadísticas acumuladas de UN jugador (una fila por jugador).
 * Guarda el id del jugador, igual que Jugador guarda el id de su equipo.
 */
@Entity
public class EstadisticaJugador {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull(message = "Elige un jugador.")
    @Column(nullable = false, unique = true)
    private Long jugadorId;

    @NotNull(message = "Los partidos son obligatorios.")
    @Min(value = 0, message = "No puede ser negativo.")
    @Max(value = 200, message = "El máximo es 200.")
    @Column(nullable = false)
    private Integer partidos;

    @NotNull(message = "Los goles son obligatorios.")
    @Min(value = 0, message = "No puede ser negativo.")
    @Max(value = 500, message = "El máximo es 500.")
    @Column(nullable = false)
    private Integer goles;

    @NotNull(message = "Las asistencias son obligatorias.")
    @Min(value = 0, message = "No puede ser negativo.")
    @Max(value = 500, message = "El máximo es 500.")
    @Column(nullable = false)
    private Integer asistencias;

    public EstadisticaJugador() {
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public Long getJugadorId() { return jugadorId; }
    public void setJugadorId(Long jugadorId) { this.jugadorId = jugadorId; }
    public Integer getPartidos() { return partidos; }
    public void setPartidos(Integer partidos) { this.partidos = partidos; }
    public Integer getGoles() { return goles; }
    public void setGoles(Integer goles) { this.goles = goles; }
    public Integer getAsistencias() { return asistencias; }
    public void setAsistencias(Integer asistencias) { this.asistencias = asistencias; }
}

