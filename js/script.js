document.addEventListener("DOMContentLoaded", function() {
    const factContainer = document.getElementById('fact-container');
    const loadMoreButton = document.getElementById('load-more');

    async function fetchCatFacts() {
        try {
            const response = await fetch('https://cat-fact.herokuapp.com/facts');
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            const data = await response.json();
            displayCatFacts(data);
        } catch (error) {
            console.error('Error fetching cat facts:', error);
        }
    }

    function displayCatFacts(facts) {
        facts.forEach(fact => {
            const colDiv = document.createElement('div');
            colDiv.classList.add('col-md-4', 'fact-item');

            const factText = document.createElement('p');
            factText.textContent = fact.text;

            colDiv.appendChild(factText);
            factContainer.appendChild(colDiv);
        });
    }

    function loadMoreFacts() {
        fetchCatFacts();
    }

    loadMoreButton.addEventListener('click', loadMoreFacts);

    // Initial load of facts
    loadMoreFacts();
});
