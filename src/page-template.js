const generateTeam = team => {

 const managerProfile = manager => {
     return `
     <div class="card mb-3" style="width: 18rem;">
    
     <div class="card-body">
       <h4 class="card-title">${manager.getName()}</h4>
       <h6 class="card-subtitle mb-2 text-muted">${manager.getRole()}</h6>
       <p class="card-text">ID :${manager.getId()}</p>
       <p class="card-text">Email :<a href="mailto:${manager.getEmail()}" class="card-link">${manager.getEmail()}</a></p>
       <p class="card-text">Office Number :${manager.getOfficeNumber()}</p>
     </div>
   </div>
     `
 }

 const engineerProfile = engineer =>{
     return `
     <div class="card mb-3" style="width: 18rem;">
     <div class="card-body">
       <h4 class="card-title">${engineer.getName()}</h4>
       <h6 class="card-subtitle mb-2 text-muted">${engineer.getRole()}</h6>
       <p class="card-text">ID :${engineer.getId()}</p>
       <p class="card-text">Email :<a href="mailto:${engineer.getEmail()}" class="card-link">${engineer.getEmail()}</a></p>
       <p class="card-text">Github :${engineer.getGithub()}</p>
     </div>
   </div>
     `
 }
 const internProfile = intern =>{
   return `
   <div class="card mb-3" style="width: 18rem;">
   <div class="card-body">
     <h4 class="card-title">${intern.getName()}</h4>
     <h6 class="card-subtitle mb-2 text-muted">${intern.getRole()}</h6>
     <p class="card-text">ID :${intern.getId()}</p>
     <p class="card-text">Email :<a href="mailto:${intern.getEmail()}" class="card-link">${intern.getEmail()}</a></p>
     <p class="card-text">School :${intern.getSchool()}</p>
   </div>
 </div>
   `
}

 const html = [];
  //create a filter by manager

 html.push(team.filter( employee=> employee.getRole() === 'Manager')
     .map( manager => managerProfile(manager))
     .join("") 
 )
 //create a filter by engineer
 html.push(team.filter( employee=> employee.getRole() === 'Engineer')
 .map( engineer => engineerProfile(engineer))
 .join("") 
 )

 //create a filter by intern
 html.push(team.filter( employee=> employee.getRole() === 'Intern')
 .map( intern => internProfile(intern))
 .join("") 
 )

 return html.join("")
}

module.exports = team=>{
 return `
 <!DOCTYPE html>
 <html lang="en">
 <head>
 <meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <meta http-equiv="X-UA-Compatible" content="ie=edge">
 <meta name="Generator"/>
 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.0-beta1/css/bootstrap.min.css">
 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css">
 <link rel="stylesheet" href="assets/css/style.css">
 <title>Team</title>
 </head>
 <body>
 <div class= 'pt-4 pb-4 page-header text-center text-light bg-danger'>
   <h1 class="display-1 ">My Team</h1>
 </div>
 <div class ='container'>
   <div class= 'row p-3 d-flex justify-content-around'>
   ${generateTeam(team)}
   </div>
 </div>
 <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.5.4/umd/popper.min.js"></script>
 <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.0-beta1/js/bootstrap.min.js"></script>
 </body>
 </html>
 `
}