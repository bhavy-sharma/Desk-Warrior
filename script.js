function showDetails(name, role, description) {
    document.getElementById("modal-name").innerText = name;
    document.getElementById("modal-role").innerText = role;
    document.getElementById("modal-description").innerText = description;
    
    document.getElementById("modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}
