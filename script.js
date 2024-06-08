// Simulated data for campaigns (replace with actual data from backend)
const campaignsData = [
    { title: 'Campaign 1', description: 'Description for Campaign 1', goal: 1000, currentAmount: 500 },
    { title: 'Campaign 2', description: 'Description for Campaign 2', goal: 2000, currentAmount: 1500 },
    { title: 'Campaign 3', description: 'Description for Campaign 3', goal: 3000, currentAmount: 2000 },
];

// Function to display campaigns on the page
function displayCampaigns() {
    const campaignList = document.getElementById('campaigns-list');
    campaignList.innerHTML = '';

    campaignsData.forEach(campaign => {
        const campaignItem = document.createElement('div');
        campaignItem.classList.add('campaign-item');
        campaignItem.innerHTML = `
            <h3>${campaign.title}</h3>
            <p>${campaign.description}</p>
            <p>Goal: $${campaign.goal}</p>
            <p>Current Amount: $${campaign.currentAmount}</p>
            <button>Contribute</button>
        `;
        campaignList.appendChild(campaignItem);
    });
}

// Function to show/hide sections based on navigation links
function showSection(sectionId) {
    const sections = document.querySelectorAll('main section');
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
}

// Event listeners for navigation links
document.addEventListener('DOMContentLoaded', () => {
    const homeLink = document.getElementById('home-link');
    const campaignsLink = document.getElementById('campaigns-link');
    const createLink = document.getElementById('create-link');
    const loginLink = document.getElementById('login-link');
    const registerLink = document.getElementById('register-link');

    homeLink.addEventListener('click', (e) => {
        e.preventDefault();
        showSection('campaigns-section');
    });

    campaignsLink.addEventListener('click', (e) => {
        e.preventDefault();
        showSection('campaigns-section');
    });

    createLink.addEventListener('click', (e) => {
        e.preventDefault();
        showSection('create-section');
    });

    loginLink.addEventListener('click', (e) => {
        e.preventDefault();
        showSection('login-section');
    });

    registerLink.addEventListener('click', (e) => {
        e.preventDefault();
        showSection('register-section');
    });

    // Display campaigns section by default
    showSection('campaigns-section');

    // Display campaigns on page load
    displayCampaigns();
});
// JavaScript code to extract email from URL query parameter
function getEmailFromUrl() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get('email');
}

// JavaScript code to pre-fill email field with retrieved email
document.addEventListener('DOMContentLoaded', () => {
    const emailField = document.querySelector('input[name="email"]');
    const email = getEmailFromUrl();
    if (email) {
        emailField.value = email;
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const progressBar = document.querySelector('.progress');
    updateProgressBar(progressBar, 50);  // Update with actual progress value
});

function updateProgressBar(progressElement, percentage) {
    progressElement.style.width = percentage + '%';
}
document.addEventListener('DOMContentLoaded', function() {
    const progressBar = document.querySelector('.progress');
    updateProgressBar(progressBar, 50);  // Update with actual progress value
});

function updateProgressBar(progressElement, percentage) {
    progressElement.style.width = percentage + '%';
}

// Handle create campaign form submission
document.getElementById('create-campaign-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Campaign submitted!');
    // Add code to handle form data and submit to backend
});

// Handle donate form submission
document.getElementById('donate-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Donation submitted!');
    // Add code to handle donation processing
});
