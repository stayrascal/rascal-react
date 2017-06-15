export default (username, password) => fetch('/login', {
    method: 'POST', data: JSON.stringify({username, password})
}).then(response => {
    "use strict";
    if (response.status >= 400) {
        throw response
    }
    return response.json()
})