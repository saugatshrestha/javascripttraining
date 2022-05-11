
// App Js
var app = document.getElementById('app');
var header = document.createElement("header");
header.className = 'site-header';

var logo = document.createElement('div');
var logoAnchor = document.createElement('a');
logoAnchor.href = "index.html";
var logoImg = document.createElement('img');
logoImg.src = "images/site-logo@2x.svg";
logo.className = 'site-logo';


var navigation = document.createElement("div");
navigation.className = 'site-navigation';

var content = document.createElement("section");
var container = document.createElement("div");
var leftCol = document.createElement("div");
leftCol.className = "left-col";
content.className = "app__content";
container.className = 'container';

var profileHeading = document.createElement('h2');
var profileHeadingText = document.createTextNode('Saugat Shrestha');
var profileContent = document.createElement('p');
var profileDesignation = document.createElement('span');
profileDesignation.className = "p-designation";
var profileDesignationText = document.createTextNode("- Frontend Developer");
var profileContentText = document.createTextNode('To delve further into this subject, it is important to know the basic differences between front-end development, back-end development and full stack development. Simply put, a front end developer works on the parts / aspects of an app or website that users get to see and interact with. Whereas a back-end developer handles the behind-the-scenes aspects of the said app or website, say the infrastructure and databases. On the other hand, a full-stack developer does both, so it’s someone who deals with the whole design process from start to finish.');
var profilePhoto = document.createElement('img');
profilePhoto.src = "images/profile-photo@2x.jpg";
profilePhoto.className = "user-profile";

// Insert Inside Header
app.appendChild(header);
header.appendChild(logo);
header.appendChild(navigation);
logo.append(logoAnchor);
logoAnchor.appendChild(logoImg);

// Insert Inside Navigation


// Insert Inside Content
app.appendChild(content);
content.appendChild(container);
container.appendChild(leftCol);
leftCol.appendChild(profileHeading);
profileHeading.appendChild(profileHeadingText);
leftCol.appendChild(profileContent);
container.appendChild(profilePhoto);
profileContent.appendChild(profileDesignation);
profileDesignation.appendChild(profileDesignationText);
profileContent.appendChild(profileContentText);


