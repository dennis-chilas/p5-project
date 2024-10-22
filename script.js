function showToast() {
    var toast = document.getElementById("toast");
    toast.className = "toast show";
    setTimeout(function() {
        toast.className = "toast hide";
    }, 1000); 
}


document.addEventListener("DOMContentLoaded", (e) => {
    console.log(e)
    fetch('/ws-port')
    .then(response => response.json())
    .then(data => {
      const wsPort = data.wsPort;
      const ws = new WebSocket(`ws://localhost:${wsPort}`);

      ws.onopen = () => {
        console.log('Connected to WebSocket server');
      };

      ws.onmessage = (event) => {
        console.log(`Received message: ${event.data}`);
        if(event.data == "reload")
            window.location.reload()
      };

      ws.onclose = () => {
        console.log('Disconnected from WebSocket server');
      };
    })
    .catch(error => {
      console.error('Error fetching WebSocket port:', error);
    });
});
