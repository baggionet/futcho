'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('teams', [
      {//1
        name: "Tijuana",
        nickName: "Cholos",
        logo: "https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos64x64/5/5.png",
        stadium: "Estadio Caliente",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {//2
        name: "Toluca",
        nickName: "Toluca",
        logo: "https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos64x64/17/17.png",
        stadium: "Estadio Nemesio Diez",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {//3
        name: "Monterrey",
        nickName: "Rayados",
        logo: "https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos64x64/14/14.png",
        stadium: "Estadio BBVA",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {//4
        name: "América",
        nickName: "Aguilas",
        logo: "https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos64x64/1/1.png",
        stadium: "Estadio Azteca",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {//5
        name: "Cruz Azul",
        nickName: "La maquina",
        logo: "https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos64x64/6/6.png",
        stadium: "Estadio Azteca",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {//6
        name: "Santos",
        nickName: "Santos Laguna",
        logo: "https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos64x64/15/15.png",
        stadium: "Estadio TSM Corona",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {//7
        name: "Querétaro",
        nickName: "Gallos Blancos",
        logo: "https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos64x64/12037/12037.png",
        stadium: "Estadio La Corregidora",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {//8
        name: "Puebla F.C.",
        nickName: "La franja",
        logo: "https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos64x64/11550/11550.png",
        stadium: "Estadio Cuauhtémoc",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {//9
        name: "Tigres",
        nickName: "tigres",
        logo: "https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos64x64/16/16.png",
        stadium: "Estadio Universitario",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {//10
        name: "San Luis",
        nickName: "San Luis",
        logo: "https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos64x64/11220/11220.png",
        stadium: "Estadio Alfonso Lastras Ramírez",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {//11
        name: "Mazatlán FC",
        nickName: "Mazatlán",
        logo: "https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos64x64/12043/12043.png",
        stadium: "Estadio Mazatlán",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {//12
        name: "Pumas",
        nickName: "Pumas",
        logo: "https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos64x64/18/18.png",
        stadium: "Estadio Olímpico Universitario",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {//13
        name: "Guadalajara",
        nickName: "Chivas",
        logo: "https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos64x64/7/7.png",
        stadium: "Estadio AKRON",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {//14
        name: "FC Juárez",
        nickName: "Juárez",
        logo: "https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos64x64/11790/11790.png",
        stadium: "Estadio Olímpico Benito Juárez",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {//15
        name: "Necaxa",
        nickName: "Necaxa",
        logo: "https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos64x64/29/29.png",
        stadium: "Estadio Victoria",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {//16
        name: "León",
        nickName: "León",
        logo: "https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos64x64/9/9.png",
        stadium: "Estadio Nou Camp",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {//17
        name: "Pachuca",
        nickName: "Pachuca",
        logo: "https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos64x64/11/11.png",
        stadium: "Estadio Hidalgo",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {//18
        name: "Atlas",
        nickName: "Atlas",
        logo: "https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos64x64/10445/10445.png",
        stadium: "Estadio Jalisco",
        createdAt: new Date(), 
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('teams', null, {});
  }
};
