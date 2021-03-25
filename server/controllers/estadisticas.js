import models from '../../models';
import { isEmpty } from '../utils/methods';

/*
*
*Se creara nuevo rgistro de estadisticas
*
*/
const agregarEstadistica = async (req, res) => {
    try {
        const { body } = req;

        if (isEmpty(body.temporada)) return res.status(400).send('El campo temporada es requerido');
        if (isEmpty(body.torneo)) return res.status(400).send('El campo torneo es requerido');
        if (isEmpty(body.jornada)) return res.status(400).send('El campo jornada es requerido');
        if (isEmpty(body.fecha)) return res.status(400).send('El campo Fecha es requerido');
        if (isEmpty(body.nombre)) return res.status(400).send('El campo hora es requerido');
        
        const nuevaEstadistica = await models.estadistica.create({
           equipoId: body.equipoId,
           temporada: body.temporada,
           torneo: body.torneo,
           jornada: body.jornada,
           jj: body.jj,
           jg: body.jg,
           je: body.je,
           jp: body.jp,
           gc: body.gc,
           gf: body.gf,
           gdif: body.gdif,
           puntos: body.puntos,
           posicion: body.posicion 
        });

        return res.status(201).send(nuevaEstadistica);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
/*
*
*Listar todos lo registros
*
*/
const listarReg = async (req, res) => {
    try {
        const mostrarReg = await models.estadistica.findAll();

        return res.status(201).send(mostrarReg);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
/*
*
*listar registro por Id
*
*/
const regById = async (req, res) => {
    try {
        const pk = req.params.eId;
        const busquedaId = await models.estadistica.findByPk(pk, {
            include: {
                model: models.equipo
            }
        });
        return res.status(201).send(busquedaId);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
/*
*
*Se actualizara reg por medio del Id
*
*/
const actualizacionReg = async (req, res) => {
    const { body } =req;
    const pk = req.params.eId;

    const busquedaEId = await models.estadistica.findByPk(pk);

    busquedaEId.jj += body.jj;
    busquedaEId.jg += body.jg;
    var jg = busquedaEId.jg * 3;
    busquedaEId.je += body.je;
    var je = busquedaEId.je * 1;
    busquedaEId.jp += body.jp;
    busquedaEId.gc += body.gc;
    busquedaEId.gf += body.gf;
    busquedaEId.gdif = busquedaEId.gf - busquedaEId.gc;
    busquedaEId.puntos = jg + je;

    const actualizacion = await models.estadistica.update({
        
        temporada: busquedaEId.temporada,
        torneo: busquedaEId.torneo,
        jornada: busquedaEId.jornada,
        jj: busquedaEId.jj,
        jg: busquedaEId.jg,
        je: busquedaEId.je,
        jp: busquedaEId.jp,
        gc: busquedaEId.gc,
        gf: busquedaEId.gc,
        gdif: busquedaEId.gdif,
        puntos: busquedaEId.puntos,
        posicion: 0
    });
};

export {actualizacionReg, regById, listarReg, agregarEstadistica};