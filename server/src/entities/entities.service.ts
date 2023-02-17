import {Injectable} from '@nestjs/common';
import axios from "axios";


@Injectable()
export class EntitiesService {
    async createEntity(data: any) {
        try {
            const {type} = data
            const oauth = await axios.get("https://test.gnzs.ru/oauth/get-token.php", {
                headers: {
                    "X-Client-Id": 30878566
                }
            })
            const {access_token, base_domain} = oauth.data
            if (access_token && base_domain) {
                const url = `https://${base_domain}/api/v4/${type}`
                const headers = {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${access_token}`
                }
                const name = "example " + type

                const req = await axios.post(url, [{
                    name: name
                }], {
                    headers
                })
                switch (type) {
                    case "leads":
                        return req.data._embedded.leads[0].id

                    case "contacts":
                        return req.data._embedded.contacts[0].id

                    case "companies":
                        return req.data._embedded.companies[0].id
                }
            }
            return {message: "Ошибка"}
        } catch (e) {
            console.log(e)
            return {message: "Ошибка"}
        }
    }
}
