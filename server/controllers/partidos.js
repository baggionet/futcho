import models from "../../models";
import { isEmpty } from "../utils/methods";

/*
*
*Se creara un nuevo partido
*
*/
const nuevoPartido = async (req, res) => {
    try {
        const { body } = req;

        if (isEmpty(body.temporada)) return res.status(400).send('El campo temporada es requerido');
        if (isEmpty(body.torneo)) return res.status(400).send('El campo torneo es requerido');
        if (isEmpty(body.jornada)) return res.status(400).send('El campo jornada es requerido');
        if (isEmpty(body.fecha)) return res.status(400).send('El campo Fecha es requerido');
        if (isEmpty(body.nombre)) return res.status(400).send('El campo hora es requerido');

        const crearPartido = await models.partido.create({
            temporada: body.temporada,
            torneo: body.torneo,
            jornada: body.jornada,
            fecha: body.fecha,
            hora: body.hora,
            localId: body.localId,
            visitaId: body.visitaId,
            localGol: body.localGol,
            visitaGol: body.visitaGol,
            resultado: body.resultado
        });

        return res.status(201).send(crearPartido)
    } catch (error) {
        res.status(500).send(error.message);
    }
};

/*
*Se mostrara todos los registos creados
*
*/
const listaReg = async (req, res) =>{
    try {
        const mostrarReg = await models.partido.findAll({
            attributes: [
                "id", 
                "temporada", 
                "torneo", 
                "jornada", 
                "fecha", 
                "hora", 
                "localId",
                "visitaId",
                "localGol",
                "visitaGol",
                "resultado"
            ]
        });
        console.log(mostrarReg);
        return res.status(201).send(mostrarReg);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
/*
*
*Se mostrara el registro por id
*
*/
const regById = async (req, res) => {
   try {
    const pk = body.params.partidoId;

    const buscarId = await models.partido.findByPk(pk, {
        attributes: [
            "id", 
            "temporada", 
            "torneo", 
            "jornada", 
            "fecha", 
            "hora", 
            "localId",
            "visitaId",
            "localGol",
            "visitaGol",
            "resultado"
        ]
    });
    if(isEmpty(buscarId)) return res.status(204).send("No se econtro el usuario");
    res.status(201).send(buscarId);
   } catch (error) {
       res.status(500).send(error.message);
   }
};


export { nuevoPartido, listaReg, regById };