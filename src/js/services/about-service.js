b2w.service('AboutService', function($http) {
    
    const API = "http://www.mocky.io/v2/57dfec211000009020598073";
    
    this.getData = (cb) => {
        $http.get(API)
        .success(data => {
            if (data) {
                cb(data);
            }
        })
        .error(error => {
            throw new Error(error);
        })
    };

    return this;
})