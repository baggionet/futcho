import models from '../../models';
import { isEmpty } from '../utils/methods';


/*
*
*Se listara todos los registros creados
*
*/
const listaReg = async (req, res) => {
    try {
        const mostrarReg = await models.equipo.findAll({
            attributes:["id", "nombre", "apodo", "logo", "estadio" ]
        });

        return res.status(201).send(mostrarReg);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
/*
*
*Se listara por id el registros solicitado
*
*/
const regId = async (req, res) => {
try {
    const pk  = req.params.equipoId;
    const busquedaId = await models.equipo.findByPk(pk, {
        attributes: ["id", "nombre", "apodo", "estadio"],
        include: models.estadistica, 
        
    })
    if (isEmpty(busquedaId)) return res.status(204).send("No se encontro el equipo");
    return res.status(201).send(busquedaId);
    
} catch (error) {
    res.status(500).send(error.message);
}
};

export { listaReg, regId };