import * as API from '@/api/index';
import Cookies from 'js-cookie';
import baseApi from '@/api/baseApi';
const baseUrl = 'tobacco/api/tfarm/processAttr';

export class apiProcessAttr extends baseApi {
    constructor() {
        super(baseUrl);
    }

    getProcessAttrList(id: String) {
        return API.GET(
            baseUrl +
                '/process/{id}/list'.format({
                    id: id
                })
        );
    }
}

export default new apiProcessAttr();
