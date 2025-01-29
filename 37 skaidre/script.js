"use strict";
 
document.addEventListener("DOMContentLoaded", () => {
    const hearts = document.querySelectorAll(".heart");

    hearts.forEach((hearthNode, i) => {
        const likedKey = `liked-${i}`;
        const isLiked = localStorage.getItem(likedKey);

        // Restore previous state from localStorage
        if (isLiked === "true") {
            hearthNode.classList.add("liked");
            hearthNode.innerText = "❤️";
        } else {
            hearthNode.classList.add("not-liked");
            hearthNode.innerText = "💔";
        }

        hearthNode.addEventListener("click", () => {
            hearthNode.classList.toggle("liked");
            hearthNode.classList.toggle("not-liked");
            
            if (hearthNode.classList.contains("liked")) {
                localStorage.setItem(likedKey, "true");
                hearthNode.innerText = "❤️";
            } else {
                localStorage.removeItem(likedKey);
                hearthNode.innerText = "💔";
            }
        });
    });
});
