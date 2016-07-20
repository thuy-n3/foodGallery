//STEP 6 (CREATE ACTIONS MODULE)

import {User} from './models/models'

const ACTIONS = {
    registerUser: function(userObj) { //input name doesn't actually matter, we just named it the same as the object that is getting passsed in for our own peace of mind
        User.register(userObj)

    }
}

export default ACTIONS