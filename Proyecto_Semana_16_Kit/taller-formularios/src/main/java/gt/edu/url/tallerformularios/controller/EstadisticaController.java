package gt.edu.url.tallerformularios.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import jakarta.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import gt.edu.url.tallerformularios.model.EstadisticaJugador;
import gt.edu.url.tallerformularios.model.Jugador;
import gt.edu.url.tallerformularios.service.EstadisticaService;
import gt.edu.url.tallerformularios.service.JugadorService;

/**
 * Captura de estadísticas (ADMIN y ENTRENADOR). Mismo patrón del formulario de
 * jugadores: @Valid + BindingResult; con errores se devuelve la plantilla.
 */
@Controller
public class EstadisticaController {

    private final JugadorService jugadorService;
    private final EstadisticaService estadisticaService;

    public EstadisticaController(JugadorService jugadorService, EstadisticaService estadisticaService) {
        this.jugadorService = jugadorService;
        this.estadisticaService = estadisticaService;
    }

    /** GET /estadisticas-jugador            -> formulario vacío
     *  GET /estadisticas-jugador?jugadorId=3 -> formulario con lo ya guardado de ese jugador */
    @GetMapping("/estadisticas-jugador")
    public String ver(@RequestParam(required = false) Long jugadorId, Model model) {
        EstadisticaJugador formulario = new EstadisticaJugador();
        if (jugadorId != null) {
            formulario = estadisticaService.buscarPorJugador(jugadorId).orElseGet(() -> {
                EstadisticaJugador nueva = new EstadisticaJugador();
                nueva.setJugadorId(jugadorId);
                nueva.setPartidos(0);
                nueva.setGoles(0);
                nueva.setAsistencias(0);
                return nueva;
            });
        }
        model.addAttribute("estadistica", formulario);
        return cargarPagina(model);
    }

    @PostMapping("/estadisticas-jugador")
    public String guardar(@Valid @ModelAttribute("estadistica") EstadisticaJugador estadistica,
                          BindingResult resultado, Model model) {
        if (resultado.hasErrors()) {
            return cargarPagina(model);
        }
        estadisticaService.guardar(estadistica);
        return "redirect:/estadisticas-jugador?ok";
    }

    private String cargarPagina(Model model) {
        List<Jugador> jugadores = jugadorService.listarTodos();
        Map<Long, String> nombres = new HashMap<>();
        for (Jugador j : jugadores) {
            nombres.put(j.getId(), j.getNombre());
        }
        model.addAttribute("jugadores", jugadores);
        model.addAttribute("nombres", nombres);
        model.addAttribute("estadisticas", estadisticaService.listarTodas());
        return "estadisticas-jugador";
    }
}

