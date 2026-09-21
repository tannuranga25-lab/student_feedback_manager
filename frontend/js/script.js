const ratingContainer = document.getElementById("rating");

const ratingButtons = ratingContainer.querySelectorAll("button");

let selectedRating = 0;


// star rating

ratingButtons.forEach((button) => {

    button.addEventListener("click", () => {

        selectedRating = Number(button.dataset.rating);

        ratingButtons.forEach((star) => {

            const starRating = Number(star.dataset.rating);

            if (starRating <= selectedRating) {
                star.classList.add("selected");
            } else {
                star.classList.remove("selected");
            }

        });

    });

});

// form submission

const feedbackForm =
    document.getElementById("feedbackForm");


feedbackForm.addEventListener("submit", async (event) => {

    event.preventDefault();


    // Get current values from the form

    const studentName =
        document.getElementById("studentName").value;

    const message =
        document.getElementById("message").value;


    // Make sure user selected a rating

    if (selectedRating === 0) {

        alert("Please select a rating.");

        return;
    }


    // Create data at submit time

    const feedbackData = {
        studentName: studentName,
        rating: selectedRating,
        message: message
    };


    console.log("Sending feedback:", feedbackData);


    try {

        const response = await fetch(
            "https://student-feedback-manager-3-1n55.onrender.com",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(feedbackData)
            }
        );


        if (!response.ok) {

            throw new Error(
                "Failed to submit feedback"
            );

        }


        // Success

        window.location.href =
            "./feedback.html";


    } catch (error) {

        console.error(
            "Error submitting feedback:",
            error
        );

        alert(
            "Unable to submit feedback. Please try again."
        );

    }

});