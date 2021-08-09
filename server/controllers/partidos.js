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

        if (isEmpty(body.season)) return res.status(400).send('El campo temporada es requerido');
        if (isEmpty(body.tournament)) return res.status(400).send('El campo torneo es requerido');
        if (isEmpty(body.journey)) return res.status(400).send('El campo jornada es requerido');
        if (isEmpty(body.date)) return res.status(400).send('El campo Fecha es requerido');

        const crearPartido = await models.game.create({
            season: body.season,
            tournament: body.tournament,
            journey: body.journey,
            date: body.date,
            time: body.time,
            localId: body.localId,
            visitorId: body.visitorId,
            localGol: body.localGol,
            visitorGol: body.visitorGol,
            stadium: body.stadium,
            result: body.result
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
        const mostrarReg = await models.game.findAll({
            attributes: [
                "id", 
                "season",
                "tournament",
                "journey",
                "date",
                "time",
                "localId",
                "visitorId",
                "localGol",
                "visitorGol",
                "stadium",
                "result",
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

    const buscarId = await models.game.findByPk(pk, {
        attributes: [
            "id", 
            "season", 
            "tournament", 
            "journey", 
            "date", 
            "time", 
            "localId",
            "visitorId",
            "localGol",
            "visitorGol",
            "stadium",
            "result"
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
*y realizara la comparacion entre el resultado LocalGol y VisitaGol
*y dependiendo del resultado mostrara E= empate, L = local o V = visitante
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
        if (isEmpty(pk)) return res.status(400).send('Partido no seleccionado');
        
        //Buscar partido
        const buscarPartido = models.game.findByPk(pk);
        if (isEmpty(buscarPartido)) return res.status(400).send('Partido no encontrado');

        //validar si el body.name viene vacio usar el de la base y si no viene vacio usar el body.name
        let bodyTemporada = isEmpty(body.season) === true ? buscarPartido.season : body.season;
        //validar si el body.name viene vacio usar el de la base y si no viene vacio usar el body.name
        let bodyTorneo = isEmpty(body.tournament) === true ? buscarPartido.tournament : body.tournament;
        //validar si el body.name viene vacio usar el de la base y si no viene vacio usar el body.name
        let bodyJornada = isEmpty(body.journey) === true ? buscarPartido.journey : body.journey;
        //validar si el body.name viene vacio usar el de la base y si no viene vacio usar el body.name
        let bodyFecha = isEmpty(body.date) === true ? buscarPartido.date : body.date;
        //validar si el body.name viene vacio usar el de la base y si no viene vacio usar el body.name
        let bodyHora = isEmpty(body.time) === true ? buscarPartido.time : body.time;
        //validar si el body.name viene vacio usar el de la base y si no viene vacio usar el body.name
        let bodyLocalId = isEmpty(body.localId) === true ? buscarPartido.localId : body.localId;
        //validar si el body.name viene vacio usar el de la base y si no viene vacio usar el body.name
        let bodyVisitaId = isEmpty(body.visitorId) === true ? buscarPartido.visitorId : body.visitorId;
        //validar si el body.name viene vacio usar el de la base y si no viene vacio usar el body.name
        let bodyEstadio = isEmpty(body.stadium) === true ? buscarPartido.stadium : body.stadium;
        //Validando el resultado a empate
        if (body.localGol == body.visitorGol) {
            bodyResultado = "E";
        }
        //Validando el resultado a Local
        if (body.localGol  > body.visitorGol) {
            bodyResultado = "L";
        }
         //Validando el resultado a Visitante
         if (body.localGol  < body.visitorGol) {
            bodyResultado = "V";
        }

        const updatePartido = await models.game.update({
            
            season:  bodyTemporada,
            tournament:  bodyTorneo,
            journey:  bodyJornada,
            date:  bodyFecha,
            time:  bodytime,
            localId: bodyLocalId,
            visitorId: body.localGol,
            localGol: bodyVisitaId,
            visitorGol: body.visitaGol,
            stadium: bodyEstadio,
            result: bodyResultado
            },
            {
                where: { id: pk}
            }
        );

        if (updatePartido == 0) {
            return res.status(204).send('Not content');
          }else{
            findPartidoUpdate = await models.game.findByPk(pk,{
                attributes:
                [
                    "id", 
                    "season", 
                    "tournament", 
                    "journey", 
                    "date", 
                    "time", 
                    "localId",
                    "visitorId",
                    "localGol",
                    "visitorGol",
                    "stadium",
                    "result"
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

    const findJornada = await models.game.findAll({
        where: {
            journey: pkjornada
        },
        attributes: [
            "id", 
            "season", 
            "tournament", 
            "journey", 
            "date", 
            "time", 
            "localId",
            "visitorId",
            "stadium"
        ]
      });
    if(isEmpty(findJornada)) return res.status(204).send("No se encontro la Jornada");
    //llamamos a todos los equipo
    const allEquipos = await models.team.findAll({
       attributes:["id", "name", "logo"]
    });
    //console.log(allEquipos)
    var jornada = [];
    jornada = findJornada;
   
    for (let index = 0; index < jornada.length; index++) {
        for (let i = 0; i < allEquipos.length; i++) {
            if(jornada[index].localId == allEquipos[i].id) {
                jornada[index].localId = [allEquipos[i].name, allEquipos[i].logo]
            }
            if(jornada[index].visitorId == allEquipos[i].id) {
                jornada[index].visitorId = [allEquipos[i].name, allEquipos[i].logo]
            }
        }
    }
     res.status(201).send(jornada);
    } catch (error) {
        res.status(500).send(error.message);
    }
 };


export { nuevoPartido, listaReg, regById , findByJornada, editPartido };