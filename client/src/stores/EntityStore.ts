import {defineStore} from "pinia";
import {ref} from "vue";
import {HeaderConfig, URL} from "../config/config";
import axios from "axios"

interface ActiveEntityType {
    name: string,
    type: string
}
interface CreatedEntityType {
    id: number,
    name: string
}

export const useEntityStore = defineStore('entityStore', () => {
    const entities = ref<string[]>(["Не выбрано", "Сделка", "Контакт", "Компания"])
    const createdEntities = ref<CreatedEntityType[]>([])
    const activeEntity = ref<ActiveEntityType>({
        name: "Не выбрано",
        type: ""
    })
    const loader = ref<boolean>(false)

    const setActiveEntity = (entity: string) => {
        activeEntity.value.name = entity
        switch (entity) {
            case "Сделка":
                activeEntity.value.type = "leads";
                break;
            case "Контакт":
                activeEntity.value.type = "contacts";
                break;
            case "Компания":
                activeEntity.value.type = "companies";
                break;
            default:
                activeEntity.value.type = "";
                break;
        }
    }

    const createEntity = async () => {
        loader.value = true
        const {data} = await axios.post(`${URL}/create`, {type: activeEntity.value.type}, HeaderConfig)
        setTimeout(() => { // таймаут для демонстрации работы лоадера
            if (!data.message) createdEntities.value.push({id: data, name: activeEntity.value.name})
            loader.value = false;
        }, 1000)
    }

    return {
        entities,
        createdEntities,
        activeEntity,
        loader,
        setActiveEntity,
        createEntity
    }
})