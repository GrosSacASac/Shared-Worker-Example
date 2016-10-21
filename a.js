(function () {
    const ME = "A";
    if (!window.SharedWorker) {
        console.log("window.SharedWorker not available");
        return;
    }
    const playButtonElement = document.getElementById("play");
    const pauseButtonElement = document.getElementById("pause");
    
    const sharedWorker = new SharedWorker("sharedworker.js", "audio");
    
    playButtonElement.addEventListener("click", function (event) {
        sharedWorker.port.postMessage({
            from: ME,
            play: true
        });
    }, false);

    pauseButtonElement.addEventListener("click", function (event) {
        sharedWorker.port.postMessage({
            from: ME,
            play: false
        });
    }, false);
    
    sharedWorker.port.onmessage = function(event) {
        ;//do nothing here
    };
    
    sharedWorker.port.start();
    
    sharedWorker.port.postMessage({
        from: ME,
        start: true
    });
}());
