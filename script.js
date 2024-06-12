function showToast() {
    var toast = document.getElementById("toast");
    toast.className = "toast show";
    setTimeout(function() {
        toast.className = "toast hide";
    }, 1000); 
}