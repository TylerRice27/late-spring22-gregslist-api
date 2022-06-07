import { BadRequest } from "@bcwdev/auth0provider/lib/Errors";
import { dbContext } from "../db/DbContext";
import { logger } from "../utils/Logger";


class HousesService {

    async getAll() {
        return await dbContext.Houses.find()

    }


    async getById(id) {
        const house = await dbContext.Houses.findById(id)
        logger.log(id)
        if (!house) {
            throw new BadRequest('this is not the correct house')
        }
        return house
    }

    async create(body) {
        const house = await dbContext.Houses.create(body)
        return house


    }

    async edit(update) {
        let original = await this.getById(update.id)
        original.address = update.address || original.address
        original.floors = update.floors || original.floors
        original.color = update.color || original.color

        await original.save()

        return original

    }

    async remove(id) {

        const house = await this.getById(id)

        await house.remove()

    }


}


export const housesService = new HousesService()