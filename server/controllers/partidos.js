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
                "localGol",
                "visitaId",
                "visitaGol",
                "estadio",
                "resultado"
            ]
        });
        console.log(mostrarReg[3].localId);
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
    const pk = req.params.partidoId;

    const buscarId = await models.partido.findByPk(pk, {
        attributes: [
            "id", 
            "temporada", 
            "torneo", 
            "jornada", 
            "fecha", 
            "hora", 
            "localId",
            "localGol",
            "visitaId",
            "visitaGol",
            "estadio",
            "resultado"
        ]
    });
    if(isEmpty(buscarId)) return res.status(204).send("No se econtro el usuario");
    res.status(201).send(buscarId);
   } catch (error) {
       res.status(500).send(error.message);
   }
};
/*
*
*Se editara por partido buscado
*solicitara solo dos campos localGol y visitaGol
*
*/
const editPartido =  async (req, res) => {
    try {
        
        const pk = req.params.idPartido;
        const body = req.body;
        var findPartidoUpdate =null;
        var bodyResultado = null;
        var partidoUpdate = null;

        // validar que venga el id del partido
        if (isEmpty(pk)) return res.status(400).send('Prtido no seleccionado');
        
        //Buscar partido
        const buscarPartido = models.partido.findByPk(pk);
        if (isEmpty(buscarPartido)) return res.status(400).send('Partido no encontrado');

        //validar si el body.name viene vacio usar el de la base y si no viene vacio usar el body.name
        let bodyTemporada = isEmpty(body.temporada) === true ? buscarPartido.temporada : body.temporada;
        //validar si el body.name viene vacio usar el de la base y si no viene vacio usar el body.name
        let bodyTorneo = isEmpty(body.torneo) === true ? buscarPartido.torneo : body.torneo;
        //validar si el body.name viene vacio usar el de la base y si no viene vacio usar el body.name
        let bodyJornada = isEmpty(body.jornada) === true ? buscarPartido.jornada : body.jornada;
        //validar si el body.name viene vacio usar el de la base y si no viene vacio usar el body.name
        let bodyFecha = isEmpty(body.fecha) === true ? buscarPartido.fecha : body.fecha;
        //validar si el body.name viene vacio usar el de la base y si no viene vacio usar el body.name
        let bodyHora = isEmpty(body.hora) === true ? buscarPartido.hora : body.hora;
        //validar si el body.name viene vacio usar el de la base y si no viene vacio usar el body.name
        let bodyLocalId = isEmpty(body.localId) === true ? buscarPartido.localId : body.localId;
        //validar si el body.name viene vacio usar el de la base y si no viene vacio usar el body.name
        let bodyVisitaId = isEmpty(body.visitaId) === true ? buscarPartido.visitaId : body.visitaId;
        //validar si el body.name viene vacio usar el de la base y si no viene vacio usar el body.name
        let bodyEstadio = isEmpty(body.estadio) === true ? buscarPartido.estadio : body.estadio;
        //Validando el resultado a empate
        if (body.localGol == body.visitaGol) {
            bodyResultado = "E";
        }
        //Validando el resultado a Local
        if (body.localGol  > body.visitaGol) {
            bodyResultado = "L";
        }
         //Validando el resultado a Visitante
         if (body.localGol  < body.visitaGol) {
            bodyResultado = "V";
        }

        const updatePartido = await models.partido.update({
            
            temporada:  bodyTemporada,
            torneo:  bodyTorneo,
            jornada:  bodyJornada,
            fecha:  bodyFecha,
            hora:  bodyHora,
            localId: bodyLocalId,
            localGol: body.localGol,
            visitaId: bodyVisitaId,
            visitaGol: body.visitaGol,
            estadio: bodyEstadio,
            resultado: bodyResultado
            },
            {
                where: { id: pk}
            }
        );

        if (updatePartido == 0) {
            return res.status(204).send('Not content');
          }else{
            findPartidoUpdate = await models.partido.findByPk(pk,{
                attributes:
                [
                    "id", 
                    "temporada", 
                    "torneo", 
                    "jornada", 
                    "fecha", 
                    "hora", 
                    "localId",
                    "localGol",
                    "visitaId",
                    "visitaGol",
                    "estadio",
                    "resultado"
                ]
            });
            partidoUpdate = 'Partido actualizado';
          }
      
        return res.send({partidoUpdate, findPartidoUpdate });

    } catch (error) {
        res.status(500).send(error.message);
    }
}

/*
*
*Se mostrara los registros por jornada
*
*/
const findByJornada = async (req, res) => {
    try {
        
     const pkjornada = req.params.numJornada;

    const findJornada = await models.partido.findAll({
        where: {
            jornada: pkjornada
        },
        attributes: [
            "id", 
            "temporada", 
            "torneo", 
            "jornada", 
            "fecha", 
            "hora", 
            "localId",
            "localGol",
            "visitaId",
            "visitaGol",
            "estadio",
            "resultado"
        ]
      });
    if(isEmpty(findJornada)) return res.status(204).send("No se encontro la Jornada");
    //llamamos a todos los equipo
    const allEquipos = await models.equipo.findAll({
        attributes: [
            "id",
            "nombre"
        ]
    });
var localIdArray = [];
var visitaIdArray = [];
    for (let index = 0; index < findJornada.length; index++) {
        //cambiamos el numero de localId a el nombre del equipo
        allEquipos.forEach(equipo => {
            if (findJornada[index].localId == equipo.id) {
                console.log(findJornada[index].localId, equipo.id);
                findJornada[index].localId = equipo.nombre;
                console.log(findJornada[index].localId);
            }
        });
        //cambiamos el numero de visitaId a el nombre del equipo
        allEquipos.forEach(equipo => {
            if (findJornada[index].visitaId == equipo.id) {
                console.log(findJornada[index].visitaId, equipo.id);
                findJornada[index].visitaId = equipo.nombre;
                console.log(findJornada[index].visitaId);
            }
        });
        
    }
    
     res.status(201).send( findJornada);
    } catch (error) {
        res.status(500).send(error.message);
    }
 };


export { nuevoPartido, listaReg, regById , findByJornada, editPartido };