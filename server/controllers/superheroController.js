const {Superhero} = require('../models/models');
const ApiError = require('../ApiError');
const path = require('path');
const uuid = require('uuid');

class SuperheroController {
    async create(req, res, next) {
        try {
            let {nickname, real_name, origin_description, superpowers, catch_phrase} = req.body
            const {images} = req.files
            let fileName = uuid.v4() + ".jpg"
            images.mv(path.resolve(__dirname, '..', 'static', fileName))

            const superhero = await Superhero.create({
                nickname,
                real_name,
                origin_description,
                superpowers,
                catch_phrase,
                images: fileName
            });
            return res.json(superhero)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async edit(req, res, next) {
        try {
            let {id, nickname, real_name, origin_description, superpowers, catch_phrase} = req.body
            const {images} = req.files
            let fileName = uuid.v4() + ".jpg"
            images.mv(path.resolve(__dirname, '..', 'static', fileName))

            const superhero = await Superhero.update(
                {
                    nickname,
                    real_name,
                    origin_description,
                    superpowers,
                    catch_phrase,
                    images: fileName
                },
                {
                    where: {id}
                }
            );
            return res.json(superhero)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async delete(req, res, next) {
        try {
            const {id} = req.params
            const hero = await Superhero.findOne({ where: {id} });
            await hero.destroy();
            res.redirect('/hero');
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        let {page = 1, limit = 5} = req.query
        page = page || 1
        let offset = page * limit - limit

        let superheroes = await Superhero.findAndCountAll({limit, offset})

        return res.json(superheroes)
    }

    async getOne(req, res) {
        const {id} = req.params
        const superhero = await Superhero.findOne(
            {
                where: {id}
            },
        )
        return res.json(superhero)
    }

}

module.exports = new SuperheroController()
