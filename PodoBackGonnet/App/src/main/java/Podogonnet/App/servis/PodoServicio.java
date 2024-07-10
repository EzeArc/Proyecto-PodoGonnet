package Podogonnet.App.servis;

import Podogonnet.App.entity.Imagen;
import Podogonnet.App.entity.ServicioPodo;
import Podogonnet.App.repository.ImagenRepo;
import Podogonnet.App.repository.PodoRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;

@Service
public class PodoServicio {

    @Autowired
    private PodoRepository podoRepository;
    @Autowired
    private  ImagenServicio imagenServicio;


    public List<ServicioPodo> findAll() {

        return podoRepository.findAll();

    }

    @Transactional
    public ServicioPodo crearServicioPodo(ServicioPodo servicioPodo,MultipartFile file) throws Exception {

        try {
            ServicioPodo servicioPodoDb = new ServicioPodo();
            Imagen imagen=imagenServicio.crearImagen(file);
            servicioPodoDb.setNombre(servicioPodo.getNombre());
            servicioPodoDb.setDescripcion(servicioPodo.getDescripcion());
            servicioPodoDb.setCosto(servicioPodo.getCosto());
            servicioPodoDb.setImagen(imagen);
            podoRepository.save(servicioPodoDb);
            return servicioPodoDb;
        } catch (Exception e) {
            System.out.println(e.getMessage());

            return null;
        }


    }

    public List<ServicioPodo> listaServicios() {
        try {
            return podoRepository.findAll();
        }catch (Exception e){

            System.out.println(e.getStackTrace());
            return null;
        }



    }

    public ServicioPodo findById(String id) {

           return podoRepository.findById(id).orElseThrow(null);

    }

    public void AltaBaja(String id) {
Optional<ServicioPodo>servicioPodoOptional=podoRepository.findById(id);
if (servicioPodoOptional.isPresent()){
    ServicioPodo servicioPodo=servicioPodoOptional.get();
    servicioPodo.setEstado(!servicioPodo.isEstado());
    podoRepository.save(servicioPodo);
}
    }
}
