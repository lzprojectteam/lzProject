import * as API from '@/api/index';
import Cookies from 'js-cookie';
import baseApi from '@/api/baseApi';
const baseUrl = 'user/rbac/ssoUser';

export class apiSsoUser extends baseApi {
    constructor() {
        super(baseUrl);
    }
    getSsoUserByDingId(authCode: String) {
        return API.GET(
            baseUrl +
                '/dingTalk/{authCode}'.format({
                    authCode: authCode
                })
        );
    }

    binding(userId: String, authCode: String) {
        return API.POST(
            baseUrl +
                '/binding/{userId}/{authCode}'.format({
                    userId: userId,
                    authCode: authCode
                })
        );
    }
    unBind(userId: String) {
        return API.POST(
            baseUrl +
                '/unbind/{userId}'.format({
                    userId: userId
                })
        );
    }
}

export default new apiSsoUser();
