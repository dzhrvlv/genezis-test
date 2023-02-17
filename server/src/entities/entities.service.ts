import {Injectable} from '@nestjs/common';
import {URL} from "../config/config";
import axios from "axios";


@Injectable()
export class EntitiesService {


    async createEntity(data: any, headers: any) {
        try {
            const {type} = data
            const url = `${URL}/${type}`
            const name = "example " + type
            const reqData = []
            reqData.push({
                name: name
            })
            const req = await axios.post(url, [{
                name: name
            }], {
                headers: {
                    'content-type': headers['content-type'],
                    'authorization': headers['authorization']
                }
            })
            switch (type) {
                case "leads":
                    return req.data._embedded.leads[0].id

                case "contacts":
                    return req.data._embedded.contacts[0].id

                case "companies":
                    return req.data._embedded.companies[0].id
            }
        } catch (e) {
            console.log(e)
            return {message: "Ошибка"}
        }
    }
}
