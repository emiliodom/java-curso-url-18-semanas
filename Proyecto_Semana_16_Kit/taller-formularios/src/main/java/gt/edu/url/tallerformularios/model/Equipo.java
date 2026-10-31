package gt.edu.url.tallerformularios.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

/**
 * Un equipo de la escuela. No guarda a sus jugadores: son los jugadores los que
 * guardan el id de su equipo (Jugador.equipoId). Asi el modelo sigue siendo
 * "una tabla = una clase", sin relaciones JPA que aprender todavia.
 */
@Entity
public class Equipo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true, length = 40)
    private String nombre;

    // Cuantos jugadores caben en la plantilla (cuantos circulos se dibujan).
    @Column(nullable = false)
    private Integer cupo;

    public Equipo() {
    }

    public Equipo(String nombre, Integer cupo) {
        this.nombre = nombre;
        this.cupo = cupo;
    }

    public Long getId() { return id; }
    public String getNombre() { return nombre; }
    public Integer getCupo() { return cupo; }
}
