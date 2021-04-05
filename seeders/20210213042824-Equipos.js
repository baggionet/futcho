module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('equipos', [
      {//1
        nombre: "Tijuana",
        apodo: "Cholos",
        logo: "https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos64x64/5/5.png",
        estadio: "Estadio Caliente",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {//2
        nombre: "Toluca",
        apodo: "Toluca",
        logo: "https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos64x64/17/17.png",
        estadio: "Estadio Nemesio Diez",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {//3
        nombre: "Monterrey",
        apodo: "Rayados",
        logo: "https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos64x64/14/14.png",
        estadio: "Estadio BBVA",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {//4
        nombre: "América",
        apodo: "Aguilas",
        logo: "https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos64x64/1/1.png",
        estadio: "Estadio Azteca",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {//5
        nombre: "Cruz Azul",
        apodo: "La maquina",
        logo: "https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos64x64/6/6.png",
        estadio: "Estadio Azteca",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {//6
        nombre: "Santos",
        apodo: "Santos Laguna",
        logo: "https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos64x64/15/15.png",
        estadio: "Estadio TSM Corona",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {//7
        nombre: "Querétaro",
        apodo: "Gallos Blancos",
        logo: "https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos64x64/12037/12037.png",
        estadio: "Estadio La Corregidora",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {//8
        nombre: "Puebla F.C.",
        apodo: "La franja",
        logo: "https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos64x64/11550/11550.png",
        estadio: "Estadio Cuauhtémoc",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {//9
        nombre: "Tigres",
        apodo: "tigres",
        logo: "https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos64x64/16/16.png",
        estadio: "Estadio Universitario",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {//10
        nombre: "San Luis",
        apodo: "San Luis",
        logo: "https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos64x64/11220/11220.png",
        estadio: "Estadio Alfonso Lastras Ramírez",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {//11
        nombre: "Mazatlán FC",
        apodo: "Mazatlán",
        logo: "https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos64x64/12043/12043.png",
        estadio: "Estadio Mazatlán",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {//12
        nombre: "Pumas",
        apodo: "Pumas",
        logo: "https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos64x64/18/18.png",
        estadio: "Estadio Olímpico Universitario",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {//13
        nombre: "Guadalajara",
        apodo: "Chivas",
        logo: "https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos64x64/7/7.png",
        estadio: "Estadio AKRON",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {//14
        nombre: "FC Juárez",
        apodo: "Juárez",
        logo: "https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos64x64/11790/11790.png",
        estadio: "Estadio Olímpico Benito Juárez",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {//15
        nombre: "Necaxa",
        apodo: "Necaxa",
        logo: "https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos64x64/29/29.png",
        estadio: "Estadio Victoria",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {//16
        nombre: "León",
        apodo: "León",
        logo: "https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos64x64/9/9.png",
        estadio: "Estadio Nou Camp",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {//17
        nombre: "Pachuca",
        apodo: "Pachuca",
        logo: "https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos64x64/11/11.png",
        estadio: "Estadio Hidalgo",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {//18
        nombre: "Atlas",
        apodo: "Atlas",
        logo: "https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos64x64/10445/10445.png",
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
