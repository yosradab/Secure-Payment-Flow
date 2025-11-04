// Data structure containing content for each step
const stepData = {
    'quote': {
        title: 'Quote',
        content: [
            'Tradesperson scopes the work to be done with the customer',
            'Tradesperson adds quote to LOREM and agrees with the customer'
        ],
    },
    'pay-fee': {
        title: 'Pay Fee',
        content: [
            'Customer agrees and accepts the quote',
            'Money is held by LOREM, until the work is completed to a mutual standard.'
        ],
    },
    'complete-work': {
        title: 'Complete Work',
        content: [
            'Tradesperson starts the work within the agreed time frame',
            'Tradesperson completes the work and notifies the customer'
        ],
    },
    'rate': {
        title: 'Rate',
        content: [
            'Customer rates the standard of the Job',
            'A full rating process is completed as per the terms of LOREM'
        ],
    },
    'release-funds': {
        title: 'Release Funds',
        content: [
            'If the Job is rated 4/5 or higher, full payment is released to the Tradesperson',
            'Anything under 4 rating, the work goes into a dispute process, mediated by LOREM'
        ],
    },
};

/**
 * Updates the UI (tab highlight and content panel) when a new step is clicked.
 * @param {string} stepId - The ID of the step to activate (e.g., 'quote').
 */
function activateStep(stepId) {
    // 1. Manage Tab Classes
    const allSteps = document.querySelectorAll('.step-item');
    allSteps.forEach(step => {
        const button = step.querySelector('.step-button');
        if (step.dataset.stepId === stepId) {
            // ACTIVATE: Apply Light Background (The selected state in this design)
            button.classList.add('active');
        } else {
            // DEACTIVATE: Apply Dark Gradient (The completed/default state in this design)
            button.classList.remove('active');
        }
    });

    // 2. Update Content Panel
    const data = stepData[stepId];
    if (data) {
        document.getElementById('content-title').textContent = data.title;
        const contentList = document.getElementById('content-details');
        contentList.innerHTML = ''; // Clear existing content

        data.content.forEach(detail => {
            const listItem = document.createElement('li');
            listItem.className = 'flex items-start mb-3';
            // Using Lucide check circle SVG for bullet point
            // This SVG code is directly embedded for robustness without external library dependencies other than Tailwind
            const checkCircleSvg = `
                <span class="mr-3 text-xl text-blue-600 font-extrabold flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-circle">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                        <path d="m9 11 3 3L22 4"/>
                    </svg>
                </span>
            `;
            
            listItem.innerHTML = `${checkCircleSvg} ${detail}`;
            contentList.appendChild(listItem);
        });
    }
}

// Initialization: Set up listeners and activate the first step
document.addEventListener('DOMContentLoaded', () => {
    const stepItems = document.querySelectorAll('.step-item');
    
    // Attach click listeners to all steps
    stepItems.forEach(item => {
        item.addEventListener('click', () => {
            const stepId = item.dataset.stepId;
            activateStep(stepId);
        });
    });

    // Set the first step ('quote') as active on initial load
    activateStep('quote');
});
