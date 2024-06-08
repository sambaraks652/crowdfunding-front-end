document.getElementById('donate-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const campaignId = formData.get('campaignId');
    const amount = formData.get('amount');

    // Send donation request to backend
    try {
        const response = await fetch('/api/donate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ campaignId, amount })
        });

        if (response.ok) {
            alert('Donation successful! Thank you for your support.');
            window.location.href = 'campaigns.html'; // Redirect to campaigns page
        } else {
            alert('Failed to donate. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to donate. Please try again.');
    }
});
