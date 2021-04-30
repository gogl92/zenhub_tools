var callback = function (error, data) {
    console.log(error);
    console.log(data);
}

var ZenHub = require('node-zenhub'),
    api = new ZenHub('[token]', [zenhub_api_url]);

api.boards.getBoard('[repoId]', callback);

