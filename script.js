document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".toggle-btn");

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            const certBox = btn.nextElementSibling;

            // Toggle the clicked one
            certBox.classList.toggle("open");

            // Toggle active style
            btn.classList.toggle("active");
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const masterBtn = document.querySelector(".master-toggle");
    const certBoxes = document.querySelectorAll(".cert-box");
    let allOpen = false;

    masterBtn.addEventListener("click", () => {
        allOpen = !allOpen;

        certBoxes.forEach(box => {
            if (allOpen) {
                box.classList.add("open");
            } else {
                box.classList.remove("open");
            }
        });

        masterBtn.textContent = allOpen ? "Close All Certifications" : "Open All Certifications";
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const terminal = document.getElementById("terminal");

    const lines = [
        `┌──(notalive㉿kali)-[~] 
└─$ whoami    
    Not Alive
┌──(notalive㉿kali)-[~]
└─$ goal   
    Become a Pentester/Red Teamer`
    ];

    let text = lines[0];
    let charIndex = 0;

    const cursor = document.createElement("span");
    cursor.classList.add("cursor");
    cursor.textContent = "|";
    terminal.appendChild(cursor);

    function type() {
        if (charIndex < text.length) {
            terminal.insertBefore(
                document.createTextNode(text[charIndex]),
                cursor
            );
            charIndex++;
            setTimeout(type, 50);
        }
    }

    type();
});

function checkOrientation() {
    if (/Mobi|Android/i.test(navigator.userAgent)) {  
        if (window.innerHeight > window.innerWidth) {
            
        }
    }
}

// Run on load
window.addEventListener("load", checkOrientation);

// Run on resize (in case they rotate after load)
window.addEventListener("resize", checkOrientation);
