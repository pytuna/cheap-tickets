const {Trip, Station, sequelize,  } = require("../models")
const {QueryTypes} = require('sequelize')
async function abc(){
    const trip = await Trip.findAll({
        include: [
            {
                model: Station,
                as: 'from'
            }
        ],
    });
    
    console.log(trip)
}

async function test(){
    const data =await sequelize.query('SELECT t.id, s.name as `from`, s2.name as `to` FROM trips t inner join stations s on s.id = t.fromStation inner join stations s2 on s2.id = t.toStation', {raw: true, type: QueryTypes.SELECT})
    console.log(data)
}
abc()