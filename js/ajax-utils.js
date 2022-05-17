(function (global) {

    var ajaxUtils = {};

    //Funzione che ritorna un HTTP request object
    function getRequestObject() {
        if (window.XMLHttpRequest) {
            return (new XMLHttpRequest());
        } else {
            global.alert("ajax non è supportato!");
            return (null);
        };

    };

    // fa una richiesta GET in ajax su requestUrl
    ajaxUtils.sendGetRequest =
        function (requestUrl, responseHandler) {
            var request = getRequestObject();
            request.onreadystatechange =
                function () {
                    handleResponse(request, responseHandler);
                };
            request.open("GET", requestUrl, true);
            request.send(null); //FOR POST ONLY
        };

    function handleResponse(request, responseHandler) {
        if ((request.readyState == 4) && (request.status == 200)) {

            responseHandler(request.responseText);

        }
    };

    //Esponiamo l'utility al global object
    global.$ajaxUtils = ajaxUtils;


})(window);