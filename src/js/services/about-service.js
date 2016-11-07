b2w.service('AboutService', function($http) {
    
    const API = "http://www.mocky.io/v2/57dfec211000009020598073";
    
    this.getData = (cb) => {
        $http.get(API)
        .success(data => {
            if (data) {
                var objs = [];                
                for (let x in data.personalSkill) {
                    if (x.toUpperCase() != "TITLE") {
                        var obj = {};
                        obj['toolName'] = x.toUpperCase();
                        obj['toolSkill'] = data.personalSkill[x];
                        objs.push(obj);
                        //TODO: remove current value
                    }
                }
                data.personalSkill.skills = objs;
                cb(data);
            }
        })
        .error(error => {
            throw new Error(error);
        })
    };

    return this;
})