async function loadUsers () {

    const response = await fetch("users.json");
    const users = await response.json();

    return users;
    
};


document.addEventListener("DOMcontentLoaded", async () => {
let users = [];
try {
    users = await loadUsers();

} catch (e) {
    console.log("Error!");
    console.log(e);
    
}
console.log(users);
});