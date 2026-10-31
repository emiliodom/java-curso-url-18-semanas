package gt.edu.url.tallerformularios.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

@Entity
public class Jugador {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "El nombre es obligatorio.")
    @Column(nullable = false, length = 40)
    private String nombre;

    @NotNull(message = "La edad es obligatoria.")
    @Min(value = 5, message = "La edad mínima es 5 años.")
    @Max(value = 17, message = "La edad máxima es 17 años.")
    @Column(nullable = false)
    private Integer edad;

    @Column(nullable = false)
    private String posicion;

    // SEMANA 16 (nuevo): id del equipo al que pertenece. null = "sin equipo".
    // Es un Long normal, no una relación JPA: guardamos solo el número.
    private Long equipoId;

    // SEMANA 16 (nuevo): usuario con el que este jugador inicia sesión (opcional).
    // Es lo que permite al hub saber "quién eres" cuando entras.
    @Column(length = 40)
    private String username;

    public Jugador() {
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getNombre() { return nombre; }
    public void setNombre(String nombre) { this.nombre = nombre; }
    public Integer getEdad() { return edad; }
    public void setEdad(Integer edad) { this.edad = edad; }
    public String getPosicion() { return posicion; }
    public void setPosicion(String posicion) { this.posicion = posicion; }
    public Long getEquipoId() { return equipoId; }
    public void setEquipoId(Long equipoId) { this.equipoId = equipoId; }
    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }
}
