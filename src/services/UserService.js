const axios = require('axios');

var UserService = {
    getUsers: function(){
        return axios.get('https://randomuser.me/api/?results=25');//
    }
}

export {UserService as default} ; 