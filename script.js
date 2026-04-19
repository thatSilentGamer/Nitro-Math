const image_list = [
    "images/main_menu.png",
    "images/mode.png",
    "images/grade_selection.png",
    "images/1player-game.png",
    "images/fact-check-status-true.gif",
    
];
const dot_list = [
    document.getElementById("dot1"),
    document.getElementById("dot2"),
    document.getElementById("dot3"),
    document.getElementById("dot4"),
    document.getElementById("dot5"),
];

const text_list = [
    "On the home page, you can click 'PLAY' to start the game or 'INSTRUCTIONS' to learn how to play.",
    "On the mode page, you can choose to play solo or with a friend.",
    "On the grade selection page, you can choose the grade level you want to play.",
    "On the single player game page, you can answer the questions by clicking the buttons.",
];

let index = 0;

// Init Carousel
if (dot_list[0]) {
    dot_list[index].style.backgroundColor = "#3b82f6";
    document.getElementById("image").src = image_list[index];
    document.getElementById("instructions-text").textContent =
        'On the home page, you can click "PLAY" to start the game or "INSTRUCTIONS" to learn how to play.';
}

function right_button_clicked() {
    if (!dot_list[0]) return;
    dot_list[index].style.backgroundColor = "#444c56";
    index = index + 1 >= image_list.length ? image_list.length - 1 : index + 1;
    document.getElementById("image").src = image_list[index];
    dot_list[index].style.backgroundColor = "#3b82f6";
    document.getElementById("instructions-text").textContent = text_list[index];
}

function left_button_clicked() {
    if (!dot_list[0]) return;
    dot_list[index].style.backgroundColor = "#444c56";
    index = index - 1 < 0 ? 0 : index - 1;
    document.getElementById("image").src = image_list[index];
    dot_list[index].style.backgroundColor = "#3b82f6";
}

// Navigation with Transitions
function navigateTo(url) {
    document.body.classList.add("page-exit");
    setTimeout(() => {
        window.location.href = url;
    }, 400);
}

function play_clicked() {
    navigateTo("selection.html");
}
function instructions_clicked() {
    navigateTo("instructions.html");
}
function go_back() {
    navigateTo("index.html");
}

// Keyboard Support
document.addEventListener("keydown", function (event) {
    const navButtons = document.querySelectorAll(".nav_button");
    if (event.key === "ArrowRight") {
        if (navButtons[1]) {
            navButtons[1].classList.add("button-active-flash");
            setTimeout(
                () => navButtons[1].classList.remove("button-active-flash"),
                100,
            );
        }
        right_button_clicked();
    } else if (event.key === "ArrowLeft") {
        if (navButtons[0]) {
            navButtons[0].classList.add("button-active-flash");
            setTimeout(
                () => navButtons[0].classList.remove("button-active-flash"),
                100,
            );
        }
        left_button_clicked();
    }
});
