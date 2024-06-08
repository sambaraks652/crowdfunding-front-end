// Function to handle create campaign form submission
document.getElementById('create-campaign-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const title = formData.get('title');
    const description = formData.get('description');
    const goal = formData.get('goal');

    // Send create campaign request to backend
    try {
        const response = await fetch('/api/create_campaign', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, description, goal })
        });

        if (response.ok) {
            alert('Campaign created successfully!');
            window.location.href = 'campaigns.html'; // Redirect to campaigns page
        } else {
            alert('Failed to create campaign. Please try again.');
        }
    } catch (error) {
        console.error('Create campaign error:', error);
        alert('An error occurred. Please try again later.');
    }
});
