// script.js
function generateResume() {
    // Capture form values
    const fullName = document.getElementById('full-name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const objective = document.getElementById('objective').value;
    const degree = document.getElementById('degree').value;
    const institution = document.getElementById('institution').value;
    const gradYear = document.getElementById('grad-year').value;
    const grade = document.getElementById('grade').value;
    const jobTitle = document.getElementById('job-title').value;
    const companyName = document.getElementById('company-name').value;
    const duration = document.getElementById('duration').value;
    const jobDescription = document.getElementById('job-description').value;
    const skills = document.getElementById('skills').value;
    const hobbies = document.getElementById('hobbies').value;
    const languages = document.getElementById('languages').value;

    // Create Resume content
    let resumeContent = `
        <h1>${fullName}</h1>
        <p><strong>Email:</strong> ${email} | <strong>Phone:</strong> ${phone} | <strong>Address:</strong> ${address}</p>
        <h3>Career Objective</h3>
        <p>${objective}</p>
        
        <h3>Education</h3>
        <p><strong>${degree}</strong>, ${institution} (${gradYear}) - ${grade}</p>
        
        <h3>Work Experience</h3>
        <p><strong>${jobTitle}</strong> at ${companyName} (${duration})</p>
        <p>${jobDescription}</p>
        
        <h3>Skills</h3>
        <p>${skills}</p>
        
        ${hobbies ? `<h3>Hobbies</h3><p>${hobbies}</p>` : ''}
        ${languages ? `<h3>Languages</h3><p>${languages}</p>` : ''}
    `;

    // Display resume
    document.getElementById('resume').innerHTML = resumeContent;
}
