const {Station} = require("../models")
const { Op } = require("sequelize");
class StationController{
    async createStation(req, res, next){
        try {
            const {name, address, province} = req.body;
            const station = await Station.create({name, address, province});
            res.status(201).json(station)
        } catch (error) {
            const e = error["errors"].map(v => {
                return v.message
            })
            res.status(403).send(e)
        }
    }
    async getAllStations(req, res, next){
        try {
            const {name} = req.query
            
            const stations = await Station.findAll(
                {
                    where:{
                        name: {[Op.substring]: name??""}
                    }
                }
            );
            res.status(201).json(stations)
        } catch (error) {
            next()
        }
    }

    async getOneStationById(req, res, next){
        try {
            const {id} = req.params
            if(id == undefined){
                throw new Error()
            }
            const station = await Station.findOne({ where: { id } });
            res.status(201).json(station)
        } catch (error) {
            res.json("error")
            // next()
        }
    }

    async updateOneStationById(req, res, next){
        try {
            const {name, address, province} = req.body;
            const {id} = req.params;
            const station = await Station.update({name, address, province}, {
                where: {
                  id
                }
              });
              res.redirect(`/api/v1/stations/search/${id}`);
        } catch (error) {
            res.send("error")
        }
    }

    async deleteOneStationById(req, res, next){
        try {
            const {id} = req.params;
            await Station.destroy({
                where: {
                  id
                }
              });
            res.status(200).send("Xóa thành công");
        } catch (error) {
            res.send("error")
        }
    }

}

module.exports =  new StationController();