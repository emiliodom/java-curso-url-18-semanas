package gt.edu.url.tallerformularios.controller;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import gt.edu.url.tallerformularios.model.Equipo;
import gt.edu.url.tallerformularios.model.Jugador;
import gt.edu.url.tallerformularios.service.EquipoService;
import gt.edu.url.tallerformularios.service.EstadisticaService;
import gt.edu.url.tallerformularios.service.JugadorService;

/**
 * El "pequeño hub" del jugador: su equipo, la plantilla y sus estadísticas.
 * Todo se LEE de la base en cada visita: si el admin cambia algo, aparece al recargar.
 */
@Controller
public class HubJugadorController {

    private final JugadorService jugadorService;
    private final EquipoService equipoService;
    private final EstadisticaService estadisticaService;

    public HubJugadorController(JugadorService jugadorService, EquipoService equipoService,
                                EstadisticaService estadisticaService) {
        this.jugadorService = jugadorService;
        this.equipoService = equipoService;
        this.estadisticaService = estadisticaService;
    }

    // Principal = "quién inició sesión". getName() es el username del login.
    @GetMapping("/mi-hub")
    public String hub(Principal principal, Model model) {
        // 1) ¿Qué jugador es este usuario?
        Jugador yo = jugadorService.buscarPorUsername(principal.getName()).orElse(null);
        model.addAttribute("yo", yo);
        if (yo == null) {
            return "hub-jugador"; // la vista muestra "tu usuario aún no está vinculado"
        }

        // 2) Sus estadísticas (puede no tener todavía).
        model.addAttribute("estadistica", estadisticaService.buscarPorJugador(yo.getId()).orElse(null));

        // 3) Su equipo y la plantilla con "Vacante" para los lugares libres.
        if (yo.getEquipoId() != null) {
            Equipo equipo = equipoService.buscarPorId(yo.getEquipoId());
            List<Jugador> casillas = new ArrayList<>(equipoService.plantilla(equipo.getId()));
            while (casillas.size() < equipo.getCupo()) {
                casillas.add(null); // null = lugar libre = círculo "Vacante"
            }
            model.addAttribute("equipo", equipo);
            model.addAttribute("casillas", casillas);
        }
        return "hub-jugador";
    }
}

