

const feedbackContainer = document.getElementById("feedbackContainer")

async function loadFeedback(){
    try {
        const response = await fetch("http://localhost:7000/api/feedback");

        if(!response.ok){
            throw new Error("failed to load feedback");
        }

        const data = await response.json();

        feedbackContainer.innerHTML = "";

        data.feedbacks.forEach((feedback)=>{
        const card = document.createElement('article');
        card.classList.add("feedback-card");

        card.innerHTML = 

        `<div class="feedback-card-header">
            <h2>${feedback.studentName}</h2>
            <div>
                ${"★".repeat(feedback.rating)}
                ${"☆".repeat(5 - feedback.rating)}
            </div>
        </div>

        <p class="feedback.message">
            ${feedback.message}
        </p>
        
        `;

        feedbackContainer.appendChild(card);
        });

        
    } catch (error) {
        console.error(
            "Error loading feedback",
            error
        );


        feedbackContainer.innerHTML=`
            <p class="error-message">
                Unable to load feedback.
                Please try again later

            <p/>

        ;
        `

        
    }
}

loadFeedback();