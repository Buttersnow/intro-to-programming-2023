//This gives me the my name and current year
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


