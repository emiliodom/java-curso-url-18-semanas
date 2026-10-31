package gt.edu.url.tallerformularios.controller;

import jakarta.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import gt.edu.url.tallerformularios.model.Jugador;
import gt.edu.url.tallerformularios.service.JugadorService;

@Controller
public class JugadorController {

    private final JugadorService jugadorService;

    public JugadorController(JugadorService jugadorService) {
        this.jugadorService = jugadorService;
    }

    @GetMapping({"/", "/jugadores"})
    public String listar(Model model) {
        model.addAttribute("jugadores", jugadorService.listarTodos());
        model.addAttribute("total", jugadorService.contar());
        return "lista";
    }

    @GetMapping("/jugadores/nuevo")
    public String nuevo(Model model) {
        model.addAttribute("jugador", new Jugador());
        return "formulario";
    }

    @GetMapping("/jugadores/{id}/editar")
    public String editar(@PathVariable Long id, Model model) {
        model.addAttribute("jugador", jugadorService.buscarPorId(id));
        return "formulario";
    }

    @PostMapping("/jugadores")
    public String guardar(@Valid @ModelAttribute("jugador") Jugador jugador,
                          BindingResult resultado) {
        if (resultado.hasErrors()) {
            return "formulario";
        }
        // Un campo de texto vacío llega como "" y no como null: lo normalizamos.
        if (jugador.getUsername() != null && jugador.getUsername().isBlank()) {
            jugador.setUsername(null);
        }
        jugadorService.guardar(jugador);
        return "redirect:/jugadores";
    }

    @PostMapping("/jugadores/{id}/eliminar")
    public String eliminar(@PathVariable Long id) {
        jugadorService.eliminar(id);
        return "redirect:/jugadores";
    }
}
