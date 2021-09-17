import {$host} from "./index";

export const createHero = async (hero) => {
    const {data} = await $host.post('api/hero', hero)
    return data
}

export const deleteHero = async (id) => {
    const {data} = await $host.post('api/hero/delete/' + id)
    return data
}

export const editHero = async (hero) => {
    console.log(hero)
    const {data} = await $host.post('api/hero/edit/' + hero.id, hero)
    return data
}

export const fetchHeroes = async (page, limit= 5) => {
    const {data} = await $host.get('api/hero', {params: {
            page, limit
        }})
    return data
}

export const fetchOneHero = async (id) => {
    const {data} = await $host.get('api/hero/' + id)
    return data
}
