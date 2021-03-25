import { Router } from 'express';
import { usuario, partido, equipo, estadistica } from '../controllers';

const router = Router();
/*  Rutas de usuario */
router.route('/usuario').post(usuario.agregarUsuario);
router.route('/usuario').get(usuario.listarUsuarios);
router.route('/usuario/:usuarioId').get(usuario.usuarioXId);

/* Ruta de partidos  */ 
router.route('/partido').post(partido.nuevoPartido);
router.route('/partido').get(partido.listaReg);
router.route('/partido/:partidoId').get(partido.regById);

/* Rutas de equipos  */
router.route('/equipo').get(equipo.listaReg);
router.route('/equipo/:equipoId').get(equipo.regId);

/*  Rutas deestadisticas   */
router.route('/estadistica').post(estadistica.agregarEstadistica);
router.route('/estadistica').get(estadistica.listarReg);
router.route('/estadistica/:eId').get(estadistica.regById);
router.route('/estadistica').put(estadistica.actualizacionReg);
export default router;
