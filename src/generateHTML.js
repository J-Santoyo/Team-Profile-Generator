function generateHTML(data) {
    console.log(data)
    return generateTeamPage
};

// create manager card for HTML page
const generateManager = function (manager) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100 shadow p-3 mb-5 bg-body rounded">
        <div class="card-header p-2 mb-1 bg-success text-white">
        <h3>${manager.name}</h3>
        <h4>Manager</h4><i class="fas fa-mug-hot></i>
        </div>
        <div class="card-body">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${manager.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
            <li class="list-group-item">Office Number: ${manager.officeNumber}</a></li>
        </ul>
        </div>
        </div>
    </div>
    `
}

// Engineer card for HTML page
const generateEngineer = function (engineer) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100 shadow p-3 mb-5 bg-body rounded">
            <div class="card-header p-2 mb-1 bg-success text-white">
                <h3>${engineer.name}</h3>
                <h4>Engineer</h4><i class="fas fa-laptop"></i>
            </div>
            <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${engineer.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                <li class="list-group-item">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
            </ul>
            </div>
        </div>
    </div>
    `
}

// Intern card for HTML page
const generateIntern = function (intern) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100 shadow p-3 mb-5 bg-body rounded'>
        <div class="card-header p-2 mb-1 bg-success text-white">
        <h3>${intern.name}</h3>
        <h4>Intern</h4><i class="fas fa-user-graduate"></i>
        </div>
        <div class="card-body">
        <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${intern.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
        <li class="list-group-item">School: ${intern.school}</li>
        </ul>
        </div>
    </div>
    `
}

// Pushed data from index to create HTML page
generateHTML = data => {
    // created empty array for storing info to page
    pageArray = []

    for (let i = 0; i < data.length; i++) {
        const employee = data[i]
        const role = employee.getRole()

        // calling manager function to create card
        if (role === 'Manager') {
            const managerCard = generateManager(employee)
            // Pushing data to create cards
            pageArray.push(managerCard)
        }

        // Calling engineer function to create card
        if (rold === 'Engineer') {
            const engineerCard = generateEngineer(employee)
            // Pushing data to create cards
            pageArray.push(engineerCard)
        }

        // calling intern function to created card
        if (role === 'Intern') {
            const internCard = generateIntern(employee)
            // Pushing data to create cards
            pageArray.push(internCard)
        }
    }

    // combined string to create employee cards
    const employeeCards = pageArray.join('')

    // Created team variable to generate team page with employee card data
    const generateTeam = generateTeamPage(employeeCards)
    return generateTeam
}

// Generating My Team Page