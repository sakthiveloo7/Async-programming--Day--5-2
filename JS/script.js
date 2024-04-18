// Function to fetch data based on selected option
function fetchData() {
    const selectElement = document.getElementById('data-select');
    const selectedValue = selectElement.value;
    let apiUrl = `https://isro.vercel.app/api/${selectedValue}`;

    fetch(apiUrl)
        .then(response => {
            return response.json();
        })
        .then(data => {
            // Update webpage content with the fetched data
            const dataContainer = document.getElementById('data-container');
            dataContainer.innerHTML = '';
            
            if (selectedValue === 'spacecrafts') 
            {
                if (!data.spacecrafts || !Array.isArray(data.spacecrafts)) 
                {
                    throw new Error('Invalid spacecrafts data');
                }
                data.spacecrafts.forEach(item => {
                    const card = document.createElement('div');
                    card.classList.add('card');

                    const cardContent = document.createElement('div');
                    cardContent.classList.add('card-content');
        
                    const id = document.createElement('p');
                    id.classList.add('spacecraft-content');
                    id.textContent = `ID: ${item.id}`;

                    const sapceCraftName = document.createElement('p');
                    sapceCraftName.classList.add('spacecraft-content');
                    sapceCraftName.textContent = `Spacecraft Name: ${item.name}`;
                    
                    cardContent.appendChild(id);
                    cardContent.appendChild(sapceCraftName);
                    card.appendChild(cardContent);
                    dataContainer.appendChild(card);
                });
            } 
            else if (selectedValue === 'customer_satellites') 
            {
                if (!data.customer_satellites || !Array.isArray(data.customer_satellites)) 
                {
                    throw new Error('Invalid customer satellites data');
                }
                data.customer_satellites.forEach(item => {
                    const card = document.createElement('div');
                    card.classList.add('card');

                    const cardContent = document.createElement('div');
                    cardContent.classList.add('card-content');

                    const id = document.createElement('p');
                    id.classList.add('satellite-content');
                    id.textContent = `ID: ${item.id}`;

                    const country = document.createElement('p');
                    country.classList.add('satellite-content');
                    country.textContent = `Country: ${item.country}`;

                    const launchDate = document.createElement('p');
                    launchDate.classList.add('satellite-content');
                    launchDate.textContent = `Launch Date: ${item.launch_date}`;

                    const mass = document.createElement('p');
                    mass.classList.add('satellite-content');
                    mass.textContent = `Mass: ${item.mass}`;

                    const launcher = document.createElement('p');
                    launcher.classList.add('satellite-content');
                    launcher.textContent = `Launcher: ${item.launcher}`;

                    cardContent.appendChild(id);
                    cardContent.appendChild(country);
                    cardContent.appendChild(launchDate);
                    cardContent.appendChild(mass);
                    cardContent.appendChild(launcher);
                    card.appendChild(cardContent);
                    dataContainer.appendChild(card);
                });
            } 
            else if (selectedValue === 'launchers') 
            {
                if (!data.launchers || !Array.isArray(data.launchers)) 
                {
                    throw new Error('Invalid launchers data');
                }
                data.launchers.forEach(item => {
                    const card = document.createElement('div');
                    card.classList.add('card');

                    const cardContent = document.createElement('div');
                    cardContent.classList.add('card-content');
                    const title = document.createElement('div');
                    title.textContent = `Launcher ID: ${item.id}`;

                    cardContent.appendChild(title);
                    card.appendChild(cardContent);
                    dataContainer.appendChild(card);
                });
            } 
            else if (selectedValue === 'centres') 
            {
                if (!data.centres || !Array.isArray(data.centres)) 
                {
                    throw new Error('Invalid centres data');
                }
                data.centres.forEach(item => {
                    const card = document.createElement('div');
                    card.classList.add('card');

                    const cardContent = document.createElement('div');
                    cardContent.classList.add('card-content');
                    
                    const id = document.createElement('p');
                    id.classList.add('centres-content');
                    id.textContent = `ID: ${item.id}`;

                    const name = document.createElement('p');
                    name.classList.add('centres-content');
                    name.textContent = `Name: ${item.name}`;

                    const place = document.createElement('p');
                    place.classList.add('centres-content');
                    place.textContent = `Place: ${item.Place}`;
                    
                    const state = document.createElement('p');
                    state.classList.add('centres-content');
                    state.textContent = `State: ${item.State}`;

                    cardContent.appendChild(id);
                    cardContent.appendChild(name);
                    cardContent.appendChild(place);
                    cardContent.appendChild(state);
                    card.appendChild(cardContent);
                    dataContainer.appendChild(card);
                });
            }
        })
        .catch(error => {
            console.error('There was a problem fetching the data:', error);
        });
}

// Call the fetchData function when the page loads initially
document.addEventListener('DOMContentLoaded', fetchData);

// Add event listener to select element
document.getElementById('data-select').addEventListener('change', fetchData);