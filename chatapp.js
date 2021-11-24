function addUser()
{
    window.location = "chatapp_rooms.html";
    username = document.getElementById("username_input");
    localStorage.setItem("Username: ", username);
}