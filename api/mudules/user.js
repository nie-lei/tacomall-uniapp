<<<<<<< HEAD
import {request} from '../../libs/request'

export default {
    miniAppLogin: (data) => {
        return request.post('portal/user/miniAppLogin', data)
    },
    synopsis: (data) => {
        return request.post('portal/user/synopsis', data)
    }
}
=======
import {request} from '../../libs/request'

export default {
    miniAppLogin: (data) => {
        return request.post('portal/user/miniAppLogin', data)
    },
    synopsis: (data) => {
        return request.post('portal/user/synopsis', data)
    }
}
>>>>>>> b91c49eff5514b9c4f77ed2f16338bc86fcaa1e9
