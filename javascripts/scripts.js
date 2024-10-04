document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.getElementById('animated-text');
    const texts = [
        "50% of students regret choosing the wrong career path.",
        "Only 25% of people secure a job directly related to their field of study.",
        "KUCC provides essential networking opportunities to connect with industry professionals.",
        "80% of job seekers find networking through career clubs significantly improves their job prospects.",
        "75% of students who engage in career clubs report feeling more confident about their career choices."
    ];
    
    let index = 0;
    function typeText() {
        if (index >= texts.length) { index = 0; }
        let text = texts[index];
        let charIndex = 0;
        textElement.innerHTML = ''; 
        function typeChar() {
            if (charIndex < text.length) {
                textElement.innerHTML += text.charAt(charIndex);
                charIndex++;
                setTimeout(typeChar, 50); 
            } else {
                setTimeout(() => {
                    textElement.innerHTML = ''; 
                    index++;
                    typeText(); 
                }, 2000); 
            }
        }
        typeChar();
    }

    typeText(); 
});
