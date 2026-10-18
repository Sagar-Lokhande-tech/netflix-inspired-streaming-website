 



const loginForm = document.getElementById("loginForm");

const emailInput = document.getElementById("email");

const emailMessage = document.getElementById("emailMessage");


loginForm.addEventListener("submit", function (event) {

    // Stop page refresh
    event.preventDefault();

    // Get email value
    const email = emailInput.value.trim();


    // IF email is empty
    if (email === "") {

        emailMessage.textContent =
            "Please enter your email.";

        emailMessage.style.color = "red";

    }

    // ELSE IF email is invalid
    else if (!email.includes("@")) {

        emailMessage.textContent =
            "Please enter a valid email.";

        emailMessage.style.color = "red";

    }

    // ELSE email is valid
    else {

        emailMessage.textContent =
            "Email submitted successfully!";

        emailMessage.style.color = "green";

        // Clear input
        emailInput.value = "";
    }

});





 







// ========================================
// MOVIE VIDEO PLAYER
// ========================================

function playMovie(button) {

    // Movie card शोधा
    const movie = button.closest(".movies, .movie, .movie-card");

    if (!movie) {
        console.error("Movie card not found!");
        return;
    }

    // Movie name
    const movieName =
        movie.getAttribute("data-title") || "Movie";

    // Video data
    const videoData =
        movie.getAttribute("data-videos");

    if (!videoData) {
        alert("Video available नाही.");
        return;
    }

    // Multiple videos comma ने separate
    const videos = videoData
        .split(",")
        .map(function (video) {
            return video.trim();
        })
        .filter(function (video) {
            return video !== "";
        });

    if (videos.length === 0) {
        alert("Video available नाही.");
        return;
    }

    // Random video select
    const randomIndex =
        Math.floor(Math.random() * videos.length);

    const randomVideo =
        videos[randomIndex];

    console.log("Movie:", movieName);
    console.log("Playing:", randomVideo);

    // Get modal elements
    const modal =
        document.getElementById("videoModal");

    const video =
        document.getElementById("movieVideo");

    const source =
        document.getElementById("videoSource");

    // Check modal
    if (!modal || !video || !source) {

        console.error(
            "Video modal elements not found!"
        );

        alert(
            "Video player setup missing. " +
            "Please add videoModal, movieVideo and videoSource."
        );

        return;
    }

    // Set video source
    source.src = randomVideo;

    // Load new video
    video.load();

    // Show modal
    modal.style.display = "flex";

    // Play video
    const playPromise = video.play();

    if (playPromise !== undefined) {

        playPromise.catch(function (error) {

            console.log(
                "Autoplay blocked. Click Play in video controls.",
                error
            );

        });

    }

}


// ========================================
// CLOSE VIDEO
// ========================================

function closeVideo() {

    const modal =
        document.getElementById("videoModal");

    const video =
        document.getElementById("movieVideo");

    const source =
        document.getElementById("videoSource");

    if (!modal || !video || !source) {
        return;
    }

    // Stop video
    video.pause();

    // Reset video
    video.currentTime = 0;

    // Hide modal
    modal.style.display = "none";

    // Remove source
    source.src = "";

    // Reload
    video.load();

}


// ========================================
// VIDEO MODAL EVENTS
// ========================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const modal =
            document.getElementById("videoModal");

        // Modal exists आहे का?
        if (modal) {

            // Outside click
            modal.addEventListener(
                "click",
                function (event) {

                    if (event.target === modal) {
                        closeVideo();
                    }

                }
            );

        }

    }
);


// ========================================
// ESC KEY - CLOSE VIDEO
// ========================================

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {
            closeVideo();
        }

    }
);


// ========================================
// NETFLIX SEARCH
// ========================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const searchBox =
            document.getElementById("search");

        if (!searchBox) {

            console.error(
                "Search box not found!"
            );

            return;
        }

        console.log(
            "✅ Search system started"
        );


        // ====================================
        // SEARCH INPUT
        // ====================================

        searchBox.addEventListener(
            "input",
            function () {

                const searchText =
                    searchBox.value
                        .trim()
                        .toLowerCase();

                console.log(
                    "Searching:",
                    searchText
                );


                // ====================================
                // GET ALL MOVIE CARDS
                // ====================================

                const movies =
                    document.querySelectorAll(
                        ".movies, .movie, .movie-card"
                    );

                console.log(
                    "Total movie cards:",
                    movies.length
                );


                // ====================================
                // EMPTY SEARCH
                // ====================================

                if (searchText === "") {

                    movies.forEach(
                        function (movie) {

                            movie.style.display = "";

                        }
                    );

                    return;
                }


                // ====================================
                // SEARCH MOVIES
                // ====================================

    movies.forEach(
        function (movie) {

            let title = "";


 // --------------------------------
 // data-title
// --------------------------------

      const dataTitle =
          movie.getAttribute(
              "data-title"
          );

      if (dataTitle) {

         title = dataTitle;

     }


    

      if (!title) {

          const titleElement =
              movie.querySelector(
                  ".movie-title, .movie-info h3, h3"
             );

         if (titleElement) {

             title =
                 titleElement.textContent;

         }

     }

 

         title =
                 title
                .trim()
                .toLowerCase();

 

           if (
                 title.includes(searchText)
                ) {

               movie.style.display = "";

             } else {

           movie.style.display = "none";

         }

         }
       );

     }
  );
  }
);












 


// ========================================
// LANGUAGE SELECTOR
// ENGLISH / HINDI / MARATHI
// ========================================

document.addEventListener("DOMContentLoaded", function () {

    const languageSelect =
        document.getElementById("languageSelect");

    if (!languageSelect) {
        console.error("Language selector not found!");
        return;
    }
    


    // ========================================
    // TRANSLATION DATA
    // ========================================

    const translations = {

        en: {

            "Unlimited movies,": "Unlimited movies,",
            "shows, and more": "shows, and more",

            "Starts at ₹149. Cancel at any time.":
                "Starts at ₹149. Cancel at any time.",

            "Ready to watch? Enter your email to create or restart your membership.":
                "Ready to watch? Enter your email to create or restart your membership.",

            "Get Started >": "Get Started >",

            "Sign Out>": "Sign Out>",

            "Search Movies...": "Search Movies...",

            "Movies": "Movies",
            "TV Series": "TV Series",
            "Animation": "Animation",
            "All": "All",

            "Streaming Platforms":
                "Streaming Platforms",

            "Trending Now":
                "Trending Now",

            "Recently Added":
                "Recently Added",

            "Popular on Netflix":
                "Popular on Netflix",

            "Bollywood Movies":
                "Bollywood Movies",

            "Popular Marathi Movies":
                "Popular Marathi Movies",

            "Popular Series What to watch":
                "Popular Series What to watch",

            "New South Movies":
                "New South Movies",

            "Top-10 Anime":
                "Top-10 Anime",

            "All About":
                "All About",

            "Frequently Asked Questions":
                "Frequently Asked Questions",

            "What is Netflix?":
                "What is Netflix?",

            "How much does Netflix cost?":
                "How much does Netflix cost?",

            "Where can I watch?":
                "Where can I watch?",

            "How do I cancel?":
                "How do I cancel?",

            "What can I watch on Netflix?":
                "What can I watch on Netflix?",

            "Is Netflix good for kids?":
                "Is Netflix good for kids?",

            "Home": "Home",
            "TV Shows": "TV Shows",
            "Contact": "Contact",

            "Login-Up": "Login-Up",

            "Enter your email":
                "Enter your email",

            "▶ Play":
                "▶ Play"

        },


        hi: {

            "Unlimited movies,":
                "अनलिमिटेड फिल्में,",

            "shows, and more":
                "शो और भी बहुत कुछ",

            "Starts at ₹149. Cancel at any time.":
                "₹149 से शुरू। कभी भी रद्द करें।",

            "Ready to watch? Enter your email to create or restart your membership.":
                "देखने के लिए तैयार हैं? अपनी सदस्यता शुरू या फिर से शुरू करने के लिए अपना ईमेल दर्ज करें।",

            "Get Started >":
                "शुरू करें >",

            "Sign Out>":
                "साइन आउट>",

            "Search Movies...":
                "फिल्में खोजें...",

            "Movies":
                "फिल्में",

            "TV Series":
                "टीवी सीरीज़",

            "Animation":
                "एनीमेशन",

            "All":
                "सभी",

            "Streaming Platforms":
                "स्ट्रीमिंग प्लेटफॉर्म",

            "Trending Now":
                "अभी ट्रेंडिंग में",

            "Recently Added":
                "हाल ही में जोड़े गए",

            "Popular on Netflix":
                "Netflix पर लोकप्रिय",

            "Bollywood Movies":
                "बॉलीवुड फिल्में",

            "Popular Marathi Movies":
                "लोकप्रिय मराठी फिल्में",

            "Popular Series What to watch":
                "लोकप्रिय सीरीज़ क्या देखें",

            "New South Movies":
                "नई साउथ फिल्में",

            "Top-10 Anime":
                "टॉप-10 एनीमे",

            "All About":
                "सभी के बारे में",

            "Frequently Asked Questions":
                "अक्सर पूछे जाने वाले प्रश्न",

            "What is Netflix?":
                "Netflix क्या है?",

            "How much does Netflix cost?":
                "Netflix की कीमत कितनी है?",

            "Where can I watch?":
                "मैं कहाँ देख सकता हूँ?",

            "How do I cancel?":
                "मैं कैसे रद्द कर सकता हूँ?",

            "What can I watch on Netflix?":
                "मैं Netflix पर क्या देख सकता हूँ?",

            "Is Netflix good for kids?":
                "क्या Netflix बच्चों के लिए अच्छा है?",

            "Home":
                "होम",

            "TV Shows":
                "टीवी शो",

            "Contact":
                "संपर्क",

            "Login-Up":
                "लॉगिन",

            "Enter your email":
                "अपना ईमेल दर्ज करें",

            "▶ Play":
                "▶ चलाएँ"

        },


        mr: {

            "Unlimited movies,":
                "अमर्यादित चित्रपट,",

            "shows, and more":
                "शो आणि बरेच काही",

            "Starts at ₹149. Cancel at any time.":
                "₹149 पासून सुरू. कधीही रद्द करा.",

            "Ready to watch? Enter your email to create or restart your membership.":
                "पाहण्यासाठी तयार आहात? तुमचे सदस्यत्व सुरू करण्यासाठी किंवा पुन्हा सुरू करण्यासाठी तुमचा ईमेल टाका.",

            "Get Started >":
                "सुरुवात करा >",

            "Sign Out>":
                "साइन आउट>",

            "Search Movies...":
                "चित्रपट शोधा...",

            "Movies":
                "चित्रपट",

            "TV Series":
                "टीव्ही मालिका",

            "Animation":
                "ॲनिमेशन",

            "All":
                "सर्व",

            "Streaming Platforms":
                "स्ट्रीमिंग प्लॅटफॉर्म",

            "Trending Now":
                "सध्या ट्रेंडिंग",

            "Recently Added":
                "नुकतेच जोडलेले",

            "Popular on Netflix":
                "Netflix वर लोकप्रिय",

            "Bollywood Movies":
                "बॉलिवूड चित्रपट",

            "Popular Marathi Movies":
                "लोकप्रिय मराठी चित्रपट",

            "Popular Series What to watch":
                "लोकप्रिय मालिका काय पाहावे",

            "New South Movies":
                "नवीन साऊथ चित्रपट",

            "Top-10 Anime":
                "टॉप-10 ॲनिमे",

            "All About":
                "सर्व माहिती",

            "Frequently Asked Questions":
                "वारंवार विचारले जाणारे प्रश्न",

            "What is Netflix?":
                "Netflix म्हणजे काय?",

            "How much does Netflix cost?":
                "Netflix ची किंमत किती आहे?",

            "Where can I watch?":
                "मी कुठे पाहू शकतो?",

            "How do I cancel?":
                "मी कसे रद्द करू शकतो?",

            "What can I watch on Netflix?":
                "मी Netflix वर काय पाहू शकतो?",

            "Is Netflix good for kids?":
                "Netflix मुलांसाठी चांगले आहे का?",

            "Home":
                "होम",

            "TV Shows":
                "टीव्ही शो",

            "Contact":
                "संपर्क",

            "Login-Up":
                "लॉगिन",

            "Enter your email":
                "तुमचा ईमेल टाका",

            "▶ Play":
                "▶ प्ले"

        }

    };


    // ========================================
    // SAVE ORIGINAL ENGLISH TEXT
    // ========================================

    const elements = document.querySelectorAll(
        "body *"
    );

    elements.forEach(function (element) {

        if (
            element.children.length === 0 &&
            element.tagName !== "SCRIPT" &&
            element.tagName !== "STYLE"
        ) {

            const text =
                element.textContent.trim();

            if (text !== "") {

                element.dataset.originalText =
                    text;

            }

        }

    });


    // ========================================
    // SAVE ORIGINAL PLACEHOLDERS
    // ========================================

    document
        .querySelectorAll("input[placeholder]")
        .forEach(function (input) {

            input.dataset.originalPlaceholder =
                input.getAttribute("placeholder");

        });


    // ========================================
    // CHANGE LANGUAGE
    // ========================================

    function changeLanguage(language) {

        const selectedLanguage =
            translations[language];

        if (!selectedLanguage) {
            return;
        }


        

        // Unlimited movies,
        // shows, and more

        const heroTitle =
    document.querySelector('[data-translate="hero-title"]');

if (heroTitle) {

    if (language === "en") {
        heroTitle.innerHTML =
            "Unlimited movies,<br>shows, and more";
    }

    else if (language === "hi") {
        heroTitle.innerHTML =
            "अनलिमिटेड फिल्में,<br>शो और भी बहुत कुछ";
    }

    else if (language === "mr") {
        heroTitle.innerHTML =
            "अमर्यादित चित्रपट,<br>शो आणि बरेच काही";
    }
}



// ========================================
// FAQ - QUESTIONS + ANSWERS LANGUAGE
// ========================================

const faqData = {

    en: [
        {
            question: "What is Netflix?",
            answer: "Netflix is a streaming service that offers a wide variety of TV shows, movies, anime, documentaries, and more."
        },
        {
            question: "How much does Netflix cost?",
            answer: "Netflix offers different plans at different prices. Choose the plan that works best for you."
        },
        {
            question: "Where can I watch?",
            answer: "You can watch Netflix on smart TVs, smartphones, tablets, streaming media players, game consoles, and many other devices."
        },
        {
            question: "How do I cancel?",
            answer: "You can easily cancel your Netflix membership online at any time."
        },
        {
            question: "What can I watch on Netflix?",
            answer: "Netflix has a large collection of movies, TV shows, anime, documentaries, and original content."
        },
        {
            question: "Is Netflix good for kids?",
            answer: "Netflix has a dedicated Kids experience with movies and TV shows suitable for children."
        }
    ],

    hi: [
        {
            question: "Netflix क्या है?",
            answer: "Netflix एक स्ट्रीमिंग सेवा है जो विभिन्न प्रकार के टीवी शो, फिल्में, एनीमे, डॉक्यूमेंट्री और बहुत कुछ प्रदान करती है।"
        },
        {
            question: "Netflix की कीमत कितनी है?",
            answer: "Netflix अलग-अलग कीमतों पर अलग-अलग प्लान प्रदान करता है। आप अपनी आवश्यकता के अनुसार प्लान चुन सकते हैं।"
        },
        {
            question: "मैं Netflix कहाँ देख सकता हूँ?",
            answer: "आप Netflix को स्मार्ट टीवी, स्मार्टफोन, टैबलेट, स्ट्रीमिंग डिवाइस, गेम कंसोल और कई अन्य डिवाइस पर देख सकते हैं।"
        },
        {
            question: "मैं Netflix का सदस्यता कैसे रद्द करूँ?",
            answer: "आप किसी भी समय ऑनलाइन आसानी से अपनी Netflix सदस्यता रद्द कर सकते हैं।"
        },
        {
            question: "मैं Netflix पर क्या देख सकता हूँ?",
            answer: "Netflix पर फिल्मों, टीवी शो, एनीमे, डॉक्यूमेंट्री और ओरिजिनल कंटेंट का बड़ा संग्रह उपलब्ध है।"
        },
        {
            question: "क्या Netflix बच्चों के लिए अच्छा है?",
            answer: "Netflix में बच्चों के लिए अलग Kids अनुभव है, जिसमें बच्चों के लिए उपयुक्त फिल्में और टीवी शो उपलब्ध हैं।"
        }
    ],

    mr: [
        {
            question: "Netflix म्हणजे काय?",
            answer: "Netflix ही एक स्ट्रीमिंग सेवा आहे जी विविध प्रकारचे टीव्ही शो, चित्रपट, ॲनिमे, डॉक्युमेंटरी आणि बरेच काही उपलब्ध करून देते."
        },
        {
            question: "Netflix ची किंमत किती आहे?",
            answer: "Netflix वेगवेगळ्या किमतींमध्ये वेगवेगळे प्लॅन उपलब्ध करून देते. तुम्ही तुमच्या गरजेनुसार योग्य प्लॅन निवडू शकता."
        },
        {
            question: "मी Netflix कुठे पाहू शकतो?",
            answer: "तुम्ही Netflix स्मार्ट टीव्ही, स्मार्टफोन, टॅबलेट, स्ट्रीमिंग डिव्हाइस, गेम कन्सोल आणि इतर अनेक डिव्हाइसवर पाहू शकता."
        },
        {
            question: "मी Netflix चे सदस्यत्व कसे रद्द करू?",
            answer: "तुम्ही कोणत्याही वेळी ऑनलाइन तुमचे Netflix सदस्यत्व सहजपणे रद्द करू शकता."
        },
        {
            question: "मी Netflix वर काय पाहू शकतो?",
            answer: "Netflix वर चित्रपट, टीव्ही शो, ॲनिमे, डॉक्युमेंटरी आणि ओरिजिनल कंटेंटचा मोठा संग्रह उपलब्ध आहे."
        },
        {
            question: "Netflix मुलांसाठी चांगले आहे का?",
            answer: "Netflix मध्ये मुलांसाठी स्वतंत्र Kids अनुभव आहे, ज्यामध्ये मुलांसाठी योग्य चित्रपट आणि टीव्ही शो उपलब्ध आहेत."
        }
    ]
};


// ========================================
// SELECT CURRENT FAQ LANGUAGE
// ========================================

const currentFAQ = faqData[language];

if (currentFAQ) {

    const faqItems = document.querySelectorAll(
        ".faq-item, .faq-box, .faq-question"
    );

    // जर प्रत्येक FAQ question/answer वेगळ्या elements मध्ये असतील
    const questions = document.querySelectorAll(
        ".faq-question"
    );

    const answers = document.querySelectorAll(
        ".faq-answer"
    );


    // Questions change करा
    questions.forEach(function (question, index) {

        if (currentFAQ[index]) {

            // जर question मध्ये + / icon असेल
            const textNode = Array.from(
                question.childNodes
            ).find(function (node) {

                return node.nodeType === 3 &&
                       node.textContent.trim() !== "";

            });

            if (textNode) {

                textNode.textContent =
                    currentFAQ[index].question + " ";

            } else {

                question.textContent =
                    currentFAQ[index].question;

            }

        }

    });


    // Answers change करा
    answers.forEach(function (answer, index) {

        if (currentFAQ[index]) {

            answer.textContent =
                currentFAQ[index].answer;

        }

    });

}







        // ------------------------------------
        // TEXT TRANSLATION
        // ------------------------------------

        document
            .querySelectorAll(
                "[data-original-text]"
            )
            .forEach(function (element) {

                const originalText =
                    element.dataset.originalText;

                if (
                    selectedLanguage[
                        originalText
                    ]
                ) {

                    element.textContent =
                        selectedLanguage[
                            originalText
                        ];

                }

            });


        // ------------------------------------
        // PLACEHOLDER TRANSLATION
        // ------------------------------------

        document
            .querySelectorAll(
                "[data-original-placeholder]"
            )
            .forEach(function (input) {

                const originalPlaceholder =
                    input.dataset.originalPlaceholder;

                if (
                    selectedLanguage[
                        originalPlaceholder
                    ]
                ) {

                    input.placeholder =
                        selectedLanguage[
                            originalPlaceholder
                        ];

                }

            });


        // ------------------------------------
        // SAVE LANGUAGE
        // ------------------------------------

        localStorage.setItem(
            "selectedLanguage",
            language
        );

    }


    // ========================================
    // LANGUAGE BUTTON SELECT
    // ========================================

    languageSelect.addEventListener(
        "change",
        function () {

            const selectedLanguage =
                this.value;

            changeLanguage(
                selectedLanguage
            );

        }
    );


    // ========================================
    // DEFAULT LANGUAGE
    // ========================================

    const savedLanguage =
        localStorage.getItem(
            "selectedLanguage"
        );


    if (savedLanguage) {

        languageSelect.value =
            savedLanguage;

        changeLanguage(
            savedLanguage
        );

    } else {

        // Default English
        languageSelect.value = "en";

        changeLanguage("en");

    }

});