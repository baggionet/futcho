module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('partidos', [
// ========================  Jornada 1  =============================
      {
        temporada: "2020-2021",
        torneo: "clausura",
        jornada: 1,
        fecha: "8 Enero 2021",
        hora: "19:30 hrs",
        localId: 8,
        visitaId: 13,
        localGol: 1,
        visitaGol: 1,
        resultado: "Empate",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        temporada: "2020-2021",
        torneo: "clausura",
        jornada: 1,
        fecha: "8 Enero 2021",
        hora: "19:06 hrs",
        localId: 1,
        visitaId: 12,
        localGol: 0,
        visitaGol: 0,
        resultado: "Empate",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        temporada: "2020-2021",
        torneo: "clausura",
        jornada: 1,
        fecha: "8 Enero 2021",
        hora: "20:30 hrs",
        localId: 11,
        visitaId: 15,
        localGol: 3,
        visitaGol: 2,
        resultado: "Local",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        temporada: "2020-2021",
        torneo: "clausura",
        jornada: 1,
        fecha: "9 Enero 2021",
        hora: "17:00 hrs",
        localId: 18,
        visitaId: 3,
        localGol: 0,
        visitaGol: 2,
        resultado: "Visitante",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        temporada: "2020-2021",
        torneo: "clausura",
        jornada: 1,
        fecha: "9 Enero 2021",
        hora: "19:00 hrs",
        localId: 9,
        visitaId: 16,
        localGol: 2,
        visitaGol: 0,
        resultado: "Local",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        temporada: "2020-2021",
        torneo: "clausura",
        jornada: 1,
        fecha: "9 Enero 2021",
        hora: "21:00 hrs",
        localId: 4,
        visitaId: 10,
        localGol: 2,
        visitaGol: 1,
        resultado: "Visitante",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        temporada: "2020-2021",
        torneo: "clausura",
        jornada: 1,
        fecha: "10 Enero 2021",
        hora: "12:00 hrs",
        localId: 2,
        visitaId: 7,
        localGol: 3,
        visitaGol: 1,
        resultado: "Local",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        temporada: "2020-2021",
        torneo: "clausura",
        jornada: 1,
        fecha: "10 Enero 2021",
        hora: "19:06 hrs",
        localId: 6,
        visitaId: 5,
        localGol: 1,
        visitaGol: 0,
        resultado: "Local",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        temporada: "2020-2021",
        torneo: "clausura",
        jornada: 1,
        fecha: "11 Enero 2021",
        hora: "21:00 hrs",
        localId: 17,
        visitaId: 14,
        localGol: 1,
        visitaGol: 1,
        resultado: "Empate",
        createdAt: new Date(), 
        updatedAt: new Date()
      },

// ======================== Jornada 2 ===============================

      {
        temporada: "2020-2021",
        torneo: "clausura",
        jornada: 2,
        fecha: "15 Enero 2021",
        hora: "19:30 hrs",
        localId: ,
        visitaId: ,
        localGol: 0,
        visitaGol: 0,
        resultado: "",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        temporada: "2020-2021",
        torneo: "clausura",
        jornada: 2,
        fecha: "",
        hora: "",
        localId: ,
        visitaId: ,
        localGol: 0,
        visitaGol: 0,
        resultado: "",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        temporada: "2020-2021",
        torneo: "clausura",
        jornada: 2,
        fecha: "",
        hora: "",
        localId: ,
        visitaId: ,
        localGol: 0,
        visitaGol: 0,
        resultado: "",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        temporada: "2020-2021",
        torneo: "clausura",
        jornada: 2,
        fecha: "",
        hora: "",
        localId: ,
        visitaId: ,
        localGol: 0,
        visitaGol: 0,
        resultado: "",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        temporada: "2020-2021",
        torneo: "clausura",
        jornada: 2,
        fecha: "",
        hora: "",
        localId: ,
        visitaId: ,
        localGol: 0,
        visitaGol: 0,
        resultado: "",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        temporada: "2020-2021",
        torneo: "clausura",
        jornada: 2,
        fecha: "",
        hora: "",
        localId: ,
        visitaId: ,
        localGol: 0,
        visitaGol: 0,
        resultado: "",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        temporada: "2020-2021",
        torneo: "clausura",
        jornada: 2,
        fecha: "",
        hora: "",
        localId: ,
        visitaId: ,
        localGol: 0,
        visitaGol: 0,
        resultado: "",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        temporada: "2020-2021",
        torneo: "clausura",
        jornada: 2,
        fecha: "",
        hora: "",
        localId: ,
        visitaId: ,
        localGol: 0,
        visitaGol: 0,
        resultado: "",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        temporada: "2020-2021",
        torneo: "clausura",
        jornada: 2,
        fecha: "",
        hora: "",
        localId: ,
        visitaId: ,
        localGol: 0,
        visitaGol: 0,
        resultado: "",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
// ======================== Jornada 3 ===============================

      
      
], {});
    
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkDelete('partidos', null, {});
    
  }
};

var partidos[10]
