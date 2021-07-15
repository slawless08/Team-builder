


function generateHtml(data) {
    let teamHtml = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <title>Our Team</title>
</head>

<body>
    <header class="m-2 d-flex justify-content-center bg-primary text-light p-3 fs-1 fw-bold">Our Team</header>
    <div class="container">
        <div class="row">`;

    data.forEach(element => {
        if (element.github === undefined && element.school === undefined) {
            //manager
            let temp = `
            <div class="card m-3 justify-content-center d-flex" style="width: 18rem;">
            <div class="card-header">
                ${element.empName}
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Employee ID: ${element.empId}</li>
                <li class="list-group-item">Email: ${element.empEmail}</li>
                <li class="list-group-item">${element.officeNumber}</li>
            </ul>
        </div>`;
            teamHtml = teamHtml.concat(temp);
        } else if (element.office === undefined && element.school === undefined) {
            //engineer

            let temp = `
            <div class="card m-3 justify-content-center d-flex" style="width: 18rem;">
            <div class="card-header">
                ${element.empName}
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Employee ID: ${element.empId}</li>
                <li class="list-group-item">Email: ${element.empEmail}</li>
                <li class="list-group-item">${element.github}</li>
            </ul>
        </div>`;
            teamHtml = teamHtml.concat(temp);
        } else {
            //intern
            let temp = `<div class="card m-3 justify-content-center d-flex" style="width: 18rem;">
            <div class="card-header">
                ${element.empName}
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Employee ID: ${element.empId}</li>
                <li class="list-group-item">Email: ${element.empEmail}</li>
                <li class="list-group-item">${element.school}</li>
            </ul>
        </div>`;
            teamHtml = teamHtml.concat(temp);
        };
    })

    let temp = `
    </div>
    </div>
</body>

</html>`;

    teamHtml = teamHtml.concat(temp);

    return teamHtml
};

module.exports = generateHtml;