package gt.edu.url.tallerformularios.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import gt.edu.url.tallerformularios.model.Equipo;
import gt.edu.url.tallerformularios.model.Jugador;
import gt.edu.url.tallerformularios.service.EquipoService;
import gt.edu.url.tallerformularios.service.JugadorService;

/**
 * Pantalla del ADMIN para asignar jugadores a equipos. Los dos desplegables del
 * formulario NO están escritos en el HTML: se llenan con lo que hay guardado.
 */
@Controller
public class AsignacionController {

    private final JugadorService jugadorService;
    private final EquipoService equipoService;

    public AsignacionController(JugadorService jugadorService, EquipoService equipoService) {
        this.jugadorService = jugadorService;
        this.equipoService = equipoService;
    }

    @GetMapping("/asignacion-equipo")
    public String ver(Model model) {
        return cargarPagina(model);
    }

    @PostMapping("/asignacion-equipo")
    public String asignar(@RequestParam Long jugadorId,
                          @RequestParam(required = false) Long equipoId,
                          Model model) {
        try {
            equipoService.asignar(jugadorId, equipoId);
        } catch (IllegalStateException | IllegalArgumentException e) {
            // Con error NO se redirige: el redirect borraría el mensaje (regla de la Semana 11).
            model.addAttribute("error", e.getMessage());
            return cargarPagina(model);
        }
        return "redirect:/asignacion-equipo?ok";
    }

    /** Reúne lo que necesita la vista: jugadores, equipos y dos diccionarios id -> dato. */
    private String cargarPagina(Model model) {
        List<Jugador> jugadores = jugadorService.listarTodos();
        List<Equipo> equipos = equipoService.listarTodos();

        Map<Long, String> nombresEquipo = new HashMap<>();
        Map<Long, Integer> ocupacion = new HashMap<>();
        for (Equipo e : equipos) {
            nombresEquipo.put(e.getId(), e.getNombre());
            ocupacion.put(e.getId(), 0);
        }
        for (Jugador j : jugadores) {
            if (j.getEquipoId() != null && ocupacion.containsKey(j.getEquipoId())) {
                ocupacion.merge(j.getEquipoId(), 1, Integer::sum);
            }
        }

        model.addAttribute("jugadores", jugadores);
        model.addAttribute("equipos", equipos);
        model.addAttribute("nombresEquipo", nombresEquipo);
        model.addAttribute("ocupacion", ocupacion);
        return "asignacion-equipo";
    }
}
