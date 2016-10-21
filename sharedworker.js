//sharedworker.js
/*assuming we open page  a first, page b second*/
const A = "A";
const B = "B";

let portA;
let portB;
self.addEventListener("connect", function(connectEvent) {

    const port = connectEvent.ports[0];
    port.addEventListener("message", function(event) {
        const data = event.data;
        if (data.start) {
            if (data.from === A) {
                portA = port;
            } else {
                portB = port;
            }
        } else {
            console.log(data);
            portB.postMessage(data);//relay message
        }
        console.log(`Shared worker memory report
portA, portB: ${portA}, ${portB}`);
    });
    
   port.start();
   
}, false);
