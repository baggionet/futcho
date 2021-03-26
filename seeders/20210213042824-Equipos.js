module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('equipos', [
      {
        nombre: "Tijuana",
        apodo: "Cholos",
        logo: "/equipo/tijuana.png",
        estadio: "Estadio Caliente",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        nombre: "Toluca",
        apodo: "Toluca",
        logo: "/equipo/toluca.png",
        estadio: "Estadio Nemesio Diez",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        nombre: "Monterrey",
        apodo: "Rayados",
        logo: "/equipo/monterrey.png",
        estadio: "Estadio BBVA",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        nombre: "América",
        apodo: "Aguilas",
        logo: "/equipo/america.png",
        estadio: "Estadio Azteca",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        nombre: "Cruz Azul",
        apodo: "La maquina",
        logo: "/equipo/cruzAzul.png",
        estadio: "Estadio Azteca",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        nombre: "Santos",
        apodo: "Santos Laguna",
        logo: "/equipo/santos.png",
        estadio: "Estadio TSM Corona",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        nombre: "Querétaro",
        apodo: "Gallos Blancos",
        logo: "/equipo/queretaro.png",
        estadio: "Estadio La Corregidora",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        nombre: "Puebla F.C.",
        apodo: "La franja",
        logo: "/equipo/puebla.png",
        estadio: "Estadio Cuauhtémoc",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        nombre: "Tigres",
        apodo: "tigres",
        logo: "/equipo/tigres.png",
        estadio: "Estadio Universitario",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        nombre: "San Luis",
        apodo: "San Luis",
        logo: "/equipo/sanLuis.png",
        estadio: "Estadio Alfonso Lastras Ramírez",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        nombre: "Mazatlán FC",
        apodo: "Mazatlán",
        logo: "/equipo/mazatlan.png",
        estadio: "Estadio Mazatlán",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        nombre: "Pumas",
        apodo: "Pumas",
        logo: "/equipo/pumas.png",
        estadio: "Estadio Olímpico Universitario",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        nombre: "Guadalajara",
        apodo: "Chivas",
        logo: "/equipo/chivas.png",
        estadio: "Estadio AKRON",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        nombre: "FC Juárez",
        apodo: "Juárez",
        logo: "/equipo/juarez.png",
        estadio: "Estadio Olímpico Benito Juárez",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        nombre: "Necaxa",
        apodo: "Necaxa",
        logo: "/equipo/necaxa.png",
        estadio: "Estadio Victoria",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        nombre: "León",
        apodo: "León",
        logo: "/equipo/leon.png",
        estadio: "Estadio Nou Camp",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        nombre: "Pachuca",
        apodo: "Pachuca",
        logo: "/equipo/pachuca.png",
        estadio: "Estadio Hidalgo",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        nombre: "Atlas",
        apodo: "Atlas",
        logo: "/equipo/atlas.png",
        estadio: "Estadio Jalisco",
        createdAt: new Date(), 
        updatedAt: new Date()
      }
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('equipos', null, {});
    
  }
};
