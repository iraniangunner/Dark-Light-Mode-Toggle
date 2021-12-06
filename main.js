let darkMode = localStorage.getItem("darkMode");

const darkModeToggle = document.querySelector("#dark-mode-toggle");



const enableDarkMode = () => {
    document.body.classList.add("darkmode");
    localStorage.setItem("darkMode" , "enabled");
}

const disabledDarkMode = () => {
    document.body.classList.remove("darkmode");
    localStorage.setItem("darkMode" , null);
}


if(darkMode === "enabled"){
    enableDarkMode();
}


darkModeToggle.addEventListener("click" , () => {
    darkMode = localStorage.getItem("darkMode");
    darkMode !== "enabled" ? enableDarkMode() : disabledDarkMode();
})
