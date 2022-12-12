const {Trip,Station} = require("../models")
const { Op } = require("sequelize");

class TripController{
    async getAllTrip(req, res, next){
        try {
            const trips = await Trip.findAll({
                attributes: ['startTime', 'price'],
                include: [
                    {
                        model: Station,
                        as: 'from',
                        attributes: ['name', 'province']
                    },
                    {
                        model: Station,
                        as: 'to',
                        attributes: ['name', 'province']
                    }
                ],
            });
            res.status(200).json(trips)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    async createTrip(req, res, next){
        try {
            const { startTime, price, toStation, fromStation } = req.body
            const trip = await Trip.create({ startTime, price, toStation, fromStation });
            res.status(201).json(trip)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = new TripController();