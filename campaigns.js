// Function to fetch campaigns from the backend
async function fetchCampaigns() {
    try {
        const response = await fetch('/api/campaigns');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching campaigns:', error);
        return [];
    }
}

// Function to display campaigns on the page
function displayCampaigns(campaigns) {
    const campaignList = document.getElementById('campaigns-list');
    campaignList.innerHTML = '';

    campaigns.forEach(campaign => {
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

// Function to load campaigns on page load
async function loadCampaigns() {
    const campaigns = await fetchCampaigns();
    displayCampaigns(campaigns);
}

// Function to initialize the application
function init() {
    loadCampaigns();
}

// Initialize the application when the DOM is loaded
document.addEventListener('DOMContentLoaded', init);
