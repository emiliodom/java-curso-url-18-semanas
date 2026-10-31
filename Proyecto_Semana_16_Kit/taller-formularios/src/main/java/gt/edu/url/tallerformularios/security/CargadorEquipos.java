package gt.edu.url.tallerformularios.security;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import gt.edu.url.tallerformularios.model.Equipo;
import gt.edu.url.tallerformularios.repository.EquipoRepository;

/**
 * Crea los equipos iniciales la primera vez que arranca la aplicación (si la
 * tabla está vacía). Igual que CargadorUsuarios: corre una vez y no duplica.
 */
@Component
public class CargadorEquipos implements CommandLineRunner {

    private final EquipoRepository equipoRepository;

    public CargadorEquipos(EquipoRepository equipoRepository) {
        this.equipoRepository = equipoRepository;
    }

    @Override
    public void run(String... args) {
        if (equipoRepository.count() == 0) {
            equipoRepository.save(new Equipo("Tigres", 5));
            equipoRepository.save(new Equipo("Halcones", 5));
        }
    }
}

