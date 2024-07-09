package Podogonnet.App.controller;

import Podogonnet.App.entity.ServicioPodo;
import Podogonnet.App.entity.Turno;
import Podogonnet.App.servis.ImagenServicio;
import Podogonnet.App.servis.PodoServicio;
import Podogonnet.App.servis.TurnoServicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/adminController")
public class AdminController {
    @Autowired
    private PodoServicio podoServicio;
    @Autowired
    private ImagenServicio imagenServicio;

    @Autowired
    private TurnoServicio turnoServicio;

    @PostMapping("/crearServicio")
    public ResponseEntity<ServicioPodo>crearServicioPodo(ServicioPodo servicioPodo,@RequestParam("file") MultipartFile file){

        try {
            return ResponseEntity.ok(podoServicio.crearServicioPodo(servicioPodo,file));
        }catch (Exception exception){
            exception.printStackTrace();
            System.out.println("hola entro al controlador");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);

        }

    }

    @GetMapping("/listaTurnoAdmin")
    public ResponseEntity<List<Turno>> listaTurno(){
        return ResponseEntity.ok(turnoServicio.findAll());
    }



    @PutMapping("/editar/{id}")
    public void editarServicio(@PathVariable String id){
try {
     podoServicio.AltaBaja(id);
}catch (Exception e){
    e.getStackTrace();
}

    }



//    @PostMapping("/listaTurnos/{idTurno}/{idServicio}")
//    public ResponseEntity<Turno> bookAppointment(@PathVariable String idTurno, @PathVariable String idServicio) {
//
//        return ResponseEntity.ok();
//    }


}
