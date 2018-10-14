const jserl = (() => {
    let userConfig;

    const defaults = {
        url: null,
        fetchParameters: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
        },
        successCallback: null,
        errorCallback: null,
    };

    const createDetailedErrorObject = (errorEvent) => {
        const detailedErrorObject = {
            userAgent: navigator.userAgent || window.navigator.userAgent,
            error: errorEvent,
            datetime: new Date().toString(),
        };
        return detailedErrorObject;
    };

    const postError = (errorEvent) => {
        const detailedError = createDetailedErrorObject(errorEvent);
        const httpRequest = new XMLHttpRequest();
        httpRequest.open('POST', userConfig.url);
        httpRequest.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
        httpRequest.send(JSON.stringify(detailedError));
    };

    const init = (options) => {
        // Create user customized config
        userConfig = Object.assign(defaults, options);

        // Remove listener to avoid redundant attach
        window.removeEventListener('error', postError);
        // Listen window to js errors
        window.addEventListener('error', postError);
    };

    return {
        init,
    };
})();
