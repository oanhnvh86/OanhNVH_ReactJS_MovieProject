import axios, { Axios } from "axios";
import { DOMAIN , TOKEN} from "../utils/config";

export class baseService {
    //PUT json về phía backend
    put = (url, model) => {
        return axios(
            {
                url: `${DOMAIN}/${url}`,
                method: "PUT",
                data: model,
                headers:{'Authorization':'Bearer ' + localStorage.getItem(TOKEN)}
            })
    }

    post = (url, model) => {
        return axios(
            {
                url: `${DOMAIN}/${url}`,
                method: "POST",
                data: model,
                headers:{'Authorization':'Bearer ' + localStorage.getItem(TOKEN)}
            })
    }

    get = (url) => {
        return axios(
            {
                url: `${DOMAIN}/${url}`,
                method: "GET",
                headers:{'Authorization':'Bearer ' + localStorage.getItem(TOKEN)}
            })
    }

    delete = (url) => {
        return axios(
            {
                url: `${DOMAIN}/${url}`,
                method: "DELETE",
                headers:{'Authorization':'Bearer ' + localStorage.getItem(TOKEN)}
            })
    }
}