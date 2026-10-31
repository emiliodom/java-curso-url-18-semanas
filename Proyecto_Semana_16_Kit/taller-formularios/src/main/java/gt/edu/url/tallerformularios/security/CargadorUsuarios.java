package gt.edu.url.tallerformularios.security;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import gt.edu.url.tallerformularios.model.Usuario;
import gt.edu.url.tallerformularios.repository.UsuarioRepository;

/**
 * Se ejecuta una vez al arrancar la aplicación. Crea los usuarios iniciales
 * si todavía no existen. Las contraseñas llegan desde variables de entorno:
 * no están escritas en ningún archivo del proyecto.
 */
@Component
public class CargadorUsuarios implements CommandLineRunner {

    private final UsuarioRepository usuarioRepository;
    private final PasswordEncoder passwordEncoder;
    private final String passwordAdmin;
    private final String passwordEntrenador;
    private final String passwordJugador;

    public CargadorUsuarios(UsuarioRepository usuarioRepository,
                            PasswordEncoder passwordEncoder,
                            @Value("${app.admin.password}") String passwordAdmin,
                            @Value("${app.entrenador.password}") String passwordEntrenador,
                            @Value("${app.jugador.password}") String passwordJugador) {
        this.usuarioRepository = usuarioRepository;
        this.passwordEncoder = passwordEncoder;
        this.passwordAdmin = passwordAdmin;
        this.passwordEntrenador = passwordEntrenador;
        this.passwordJugador = passwordJugador;
    }

    @Override
    public void run(String... args) {
        crearSiNoExiste("admin", passwordAdmin, "ADMIN");
        crearSiNoExiste("entrenador", passwordEntrenador, "ENTRENADOR");
        // SEMANA 16: el usuario "jugador" solo se crea si definiste JUGADOR_PASSWORD.
        // Así los despliegues que ya existían (sin esa variable) siguen arrancando igual.
        if (passwordJugador != null && !passwordJugador.isBlank()) {
            crearSiNoExiste("jugador", passwordJugador, "JUGADOR");
        }
    }

    private void crearSiNoExiste(String username, String passwordPlano, String rol) {
        if (usuarioRepository.findByUsername(username).isEmpty()) {
            String hash = passwordEncoder.encode(passwordPlano);
            usuarioRepository.save(new Usuario(username, hash, rol));
        }
    }
}
