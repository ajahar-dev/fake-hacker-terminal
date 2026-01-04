 const messages= [
            "Initializing Hacking",
            "Reading your Files",
            "Password files Detected",
            "Sending all passwords and personal files to server",
            "Cleaning up"
        ];

        const box = document.querySelector(".box");
 
        const randomDelay = () => {
            return Math.floor(Math.random() * 7 + 1) * 1000;
        }

        const hacker = async () => {
            for (const msg of messages) {
                let p = document.createElement("p");
                p.innerText = msg;

                let dots = document.createElement("span");
                dots.classList.add("dot");
                dots.innerText = "..."

                p.appendChild(dots);
                box.appendChild(p);

                await new Promise(resolve => setTimeout(resolve,randomDelay()));

                dots.remove();
            }
        }

        hacker();

