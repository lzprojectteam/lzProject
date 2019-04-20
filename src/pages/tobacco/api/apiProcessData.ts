import * as API from '@/api/index';
import Cookies from 'js-cookie';
import baseApi from '@/api/baseApi';
const baseUrl = 'tobacco/api/tfarm/processData';

export class apiProcessData extends baseApi {
    constructor() {
        super(baseUrl);
    }
}

export default new apiProcessData();
