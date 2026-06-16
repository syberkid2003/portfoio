const profession = () => {
    let data = [
        "Full Stack-Developer",
        "Python-Developer",
        "AI-Enthusiast",
        "Backend-Developer",
        "Web-Developer",
        "Software-Developer",
        "Software-Engineer",
        "Django-Developer",
        "PHP-Developer",
        
    ];

    let place = document.getElementById("profishion");
    let delay = 0;

   data.forEach((word) => {
    setTimeout(() => {
        place.innerText = "";
    }, delay);
    for (let i = 0; i < word.length; i++) {
        setTimeout(() => {
            place.innerText += word[i];
        }, delay + i * 100);
    }
    delay += word.length * 100 + 2000;
});
};

profession();

setInterval(profession , 31000);