(function () {
    const ME = "B";
    if (!window.SharedWorker) {
        console.log("window.SharedWorker not available");
        return;
    }

    const audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'audio.mp3');
    audioElement.setAttribute('autoplay', 'autoplay');
    // audioElement.load()
    document.body.appendChild(audioElement); // useful ?


    audioElement.addEventListener("load", function() {
        audioElement.play();
    }, true);

    
    const sharedWorker = new SharedWorker("sharedworker.js", "audio");
    sharedWorker.port.onmessage = function(event) {
        const messageObject = event.data
        console.log("received", messageObject);
        if (messageObject.hasOwnProperty("play")) {
            if (messageObject.play) {
                audioElement.play();
            } else {
                audioElement.pause();
            }
        }
    };
    
    sharedWorker.port.start();
    
    sharedWorker.port.postMessage({
        from: ME,
        start: true
    });
}());
