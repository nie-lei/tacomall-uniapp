import {request} from '../../libs/request'

export default {
    miniAppLogin: (data) => {
        return request.post('portal/user/miniAppLogin', data)
    },
    synopsis: (data) => {
        return request.post('portal/user/synopsis', data)
    }
}
