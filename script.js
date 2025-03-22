
const navBar = document.getElementById("navBar");
function toggleBtn() {
    navBar.classList.toggle("hide-menu");
}

document.getElementById("searchForm").addEventListener("submit", (e) => {
    e.preventDefault(); 
    const location = document.getElementById("location").value;
    const checkIn = document.getElementById("checkIn").value;
    const checkOut = document.getElementById("checkOut").value;
    const guest = document.getElementById("guest").value;

    alert(`Searching for:\nLocation: ${location}\nCheck-in: ${checkIn}\nCheck-out: ${checkOut}\nGuests: ${guest}`);
});

// Button functionality
document.getElementById("registerBtn").addEventListener("click", () => {
    alert("Redirecting to the registration page...");
});

// document.getElementById("popularPlacesBtn").addEventListener("click", () => {
//     alert("Displaying popular places...");
// });

// document.getElementById("travelOutsideBtn").addEventListener("click", () => {
//     alert("Displaying travel outside packages...");
// });

// document.getElementById("onlinePackagesBtn").addEventListener("click", () => {
//     alert("Displaying online packages...");
// });

document.getElementById("knowMoreBtn").addEventListener("click", () => {
    alert("Redirecting to 'Know More' page...");
});

document.getElementById("startBtn").addEventListener("click", () => {
    alert("Redirecting to the 'Start Making Money' page...");
});
