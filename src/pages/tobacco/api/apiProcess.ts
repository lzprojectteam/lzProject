import * as API from '@/api/index';
import Cookies from 'js-cookie';
import baseApi from '@/api/baseApi';
const baseUrl = 'tobacco/api/tfarm/process';

export class apiProcess extends baseApi {
    constructor() {
        super(baseUrl);
    }

    showIndexList(orgId: String) {
        return API.GET(
            baseUrl +
                '/getMobileList/{orgId}'.format({
                    orgId: orgId
                })
        );
    }
}

export default new apiProcess();
