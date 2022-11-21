function startNotif() {
    document.getElementById("urgOne").style.display = "none";
    //document.getElementById("lateOne").style.display = "none";
    alert("Order #102 status updated to start!");
    document.getElementById("urgOneB").style.display = "block";
    //location.href = 'openorders.html?product=1';
}

function delayNotif() {
    alert("Customer and wait staff were notified of a 5 min delay!");
}

function alertNotif() {
    document.getElementById("urgTwo").style.display = "none"; 
    alert("Order #16 status update to done and waiter was notified to pick up order!");
}

function alertNotifB() {
    document.getElementById("urgOneB").style.display = "none"; 
    alert("Order #102 status update to done and waiter was notified to pick up order!");
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("urgOneB").style.display = "none";
 }, false);