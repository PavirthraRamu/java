document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('surveyForm');
    const popup = document.getElementById('popup');
    const popupResults = document.getElementById('popupResults');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form values
        const firstName = form.elements.firstName.value;
        const lastName = form.elements.lastName.value;
        const dob = form.elements.dob.value;
        const country = form.elements.country.value;
        const genderElements = form.querySelectorAll('input[name="gender"]:checked');
        const gender = [...genderElements].map(item => item.value).join(', ');
        const profession = form.elements.profession.value;
        const email = form.elements.email.value;
        const mobile = form.elements.mobile.value;

        // Display results in the popup
        const resultsHTML = `
            <p><strong>First Name:</strong> ${firstName}</p>
            <p><strong>Last Name:</strong> ${lastName}</p>
            <p><strong>Date of Birth:</strong> ${dob}</p>
            <p><strong>Country:</strong> ${country}</p>
            <p><strong>Gender:</strong> ${gender}</p>
            <p><strong>Profession:</strong> ${profession}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mobile Number:</strong> ${mobile}</p>
        `;

        popupResults.innerHTML = resultsHTML;
        popup.style.display = 'block';

        // Reset the form
        form.reset();
    });

    // Close popup when the close button is clicked
    const closeBtn = document.querySelector('.close');
    closeBtn.addEventListener('click', function () {
        popup.style.display = 'none';
        popupResults.innerHTML = '';
    });
});
``
