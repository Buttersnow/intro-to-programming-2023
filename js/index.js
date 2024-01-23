//This gives me the my name and curreAssignment 4.2nt year at the botton of the page 4.2
    var today = new Date();
    var thisYear = today.getFullYear();
    var footer = document.querySelector('footer');
    var copyright = document.createElement('p');
    copyright.innerHTML = `Tilla ${thisYear}`;
    footer.appendChild(copyright);

// Adding list of my skillset.
var Skills = ["HTML", "Badminton", "Cricket"];
var skillsSection = document.getElementById('Skills');
var skillsList = skillsSection.querySelector('ul');
for (var i = 0; i < Skills.length; i++) {
    var skill = document.createElement('li');
    skill.innerText = Skills[i];
    skillsList.appendChild(skill);
}
// Selecting the form by name attribute to leave message, show on the page and delete button. Assignment 4.3
const messageForm = document.querySelector('form[name="leave_message"]');

messageForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const usersName = event.target.usersName.value;
  const usersEmail = event.target.usersEmail.value;
  const usersMessage = event.target.usersMessage.value;

  console.log(usersName);
  console.log(usersMessage);
  console.log(usersEmail);


  event.target.reset();

  const messageSection = document.querySelector('#messages');
  const messageList = messageSection.querySelector('ul');

  const newMessage = document.createElement('li');
  newMessage.innerHTML = `
    <a href="mailto:${usersEmail}">${usersName}</a>
    <span>${usersMessage}</span>
  `;

  const removeButton = document.createElement('button');
  removeButton.innerText = 'Remove';
  removeButton.type = 'button';

  removeButton.addEventListener('click', function() {
    const entry = removeButton.parentNode;
    entry.remove();
  });

  newMessage.appendChild(removeButton);

  messageList.appendChild(newMessage);
});

//AJAX request:: lessson 6.1


/*  const githubRequest = new XMLHttpRequest();
  const link = "https://api.github.com/users/Buttersnow/repos";
  githubRequest.open('GET', link);
 console.log(githubRequest.responseText);
  githubRequest.send();


githubRequest.addEventListener('load', function(event) {
  const repositories = JSON.parse(githubRequest.response);
  console.log(repositories, repositories[0]);

  const projectSection = document.getElementById('projects');
  const projectList = projectSection.querySelector('ul');

  for (var i = 0; i < repositories.length; i++) {
    const project = document.createElement('li');
    
    project.innerText = `${repositories[i].name} \n
     Description: ${repositories[i].description} \n
     ${repositories[i].updated_at} \n
    `;
    
        projectList.appendChild(project);
  }
});
githubRequest.send(open); */

 // Fetch API : Assignment 6.2
 const url = "https://api.github.com/users/Buttersnow/repos";

fetch(url)
  .then(response => response.json())

  .then(repositories => {
    console.log(repositories, repositories[0]);

    const projectSection = document.getElementById('projects');
    const projectList = projectSection.querySelector('ul');

    for (let i = 0; i < repositories.length; i++) {
      const project = document.createElement('li');
      
      project.innerText = `${repositories[i].name} \n
        Description: ${repositories[i].description} \n
        
        ${repositories[i].updated_at} \n
      `;
      
      projectList.appendChild(project);
    }
  })
  .catch(err => console.error(err));
  // I could locate the date object in the JSON file.
  //I used updated_at object instead (for loop above)