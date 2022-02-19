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
        <li class="list-group-item"></li>
        </ul>
        </div>
    </div>
    `
}