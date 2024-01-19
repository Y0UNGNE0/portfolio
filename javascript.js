// Sample data for demonstration

var data = [
  { role: "DevOps Engineer", years: "6 Years" },
  // Add more data as needed
];
var imageData = {
  imageUrl:
    "https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH",
  imageAlt: "Dynamic Image",
};

var personalInfo = {
  name: "Nileena Ramesh ",
  description:
    "Diligent, adaptable professional with proven skills in collaboration and problem-solving. Achieved success in project management and consistently meets deadlines. Excellent communication and leadership abilities.",
};

var skillsets = [
  { skill: "Python", experience: "5 Years" },
  { skill: "Java", experience: "4 Years" },
  { skill: "AWS", experience: "3 Years" },
  { skill: "CI and CD", experience: "3 Years" },
];
var vettedSkillsData = {
  numberOfSkills: 3,
};

var professionalSummaryData = {
  yearsOfExperience: 6,
};

var majorProjectsData = {
  numberOfProjects: 3,
};

var rowData = [
  {
    imageUrl: "https://avatars3.githubusercontent.com/aws-ia",
    skillName: "Terraform",
    progressImage: "progress'.png",
    progressPercentage: "73%",
    detailsText: "View Assessments",
  },
  {
    imageUrl: "https://avatars3.githubusercontent.com/aws-ia",
    skillName: "Ngnix",
    progressImage: "progress'.png",
    progressPercentage: "73%",
    detailsText: "View Assessments",
  },
  {
    imageUrl: "https://avatars3.githubusercontent.com/aws-ia",
    skillName: "AWS Cloud",
    progressImage: "progress'.png",
    progressPercentage: "73%",
    detailsText: "View Assessments",
  },
  {
    imageUrl: "https://avatars3.githubusercontent.com/aws-ia",
    skillName: "CI/CD",
    progressImage: "progress'.png",
    progressPercentage: "73%",
    detailsText: "View Assessments",
  },
];

var experienceData = [
  {
    startDate: "Jan 2022",
    endDate: "Present",
    duration: "1yr 5 months",
    role: "DevOps Engineer",
    company: "Neoito Technologies",
  },
  {
    startDate: "Jan 2022",
    endDate: "Present",
    duration: "1yr 5 months",
    role: "Consultant",
    company: "Deloitte",
  },
  // Add more data as needed
];

var cardDataArray = [
  {
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/AWS_Simple_Icons_AWS_Cloud.svg/2560px-AWS_Simple_Icons_AWS_Cloud.svg.png",
    imageAlt: "AWS Cloud",
    title: "AWS (Amazon Web Services)",
  },
  {
    imageUrl:
      "data:image/png;base64,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",
    imageAlt: "AWS CloudWatch",
    title: "AWS CloudWatch",
  },

  // Add more card data objects as needed
];

// Function to create dynamic table
function createDynamicTable(data) {
  var tableHtml = "<table>";
  tableHtml += "<tr>";
  tableHtml +=
    '<td style="padding-right: 60px;"><p class="text-xl">Role</p></td>';
  tableHtml +=
    '<td style="padding-left: 60px;"><p class="text-xl">Years</p></td>';
  tableHtml += "</tr>";

  for (var i = 0; i < data.length; i++) {
    tableHtml += "<tr>";
    tableHtml +=
      '<td style="padding-right: 60px;"><h1 class="text-2xl font-bold">' +
      data[i].role +
      "</h1></td>";
    tableHtml +=
      '<td style="padding-left: 60px;"><h1 class="text-2xl font-bold">' +
      data[i].years +
      "</h1></td>";
    tableHtml += "</tr>";
  }

  tableHtml += "</table>";

  // Insert the dynamic table content into the container
  document.getElementById("dynamicTableContainer").innerHTML = tableHtml;
}

// Function to create dynamic image
function createDynamicImage(imageData) {
  var imageHtml = '<div class="image1">';
  imageHtml +=
    '<img style="width: 18cqw;" src="' +
    imageData.imageUrl +
    '" alt="' +
    imageData.imageAlt +
    '">';
  imageHtml += '<div class="overlay"></div>';
  imageHtml += "</div>";

  // Insert the dynamic image content into the container
  document.getElementById("dynamicImageContainer").innerHTML = imageHtml;
}

function createDynamicContent(personalInfo) {
  var contentHtml = "<div>";
  contentHtml +=
    '<h1 class="font-bold text-2xl pb-8">' + personalInfo.name + "</h1>";
  contentHtml += "</div>";
  contentHtml += '<div class="pb-8">';
  contentHtml += '<p class="text-base">' + personalInfo.description + "</p>";
  contentHtml += "</div>";

  // Insert the dynamic content into the container
  document.getElementById("dynamicContentContainer").innerHTML = contentHtml;
}

// Function to create dynamic skillsets
function createDynamicSkillsets(skillsets) {
  var skillsetsHtml = "<div>";
  skillsetsHtml += "<div>";
  skillsetsHtml += '<p class="text-xl">Skillsets</p>';
  skillsetsHtml += "</div>";
  skillsetsHtml += '<div class="skillset pb-16">';

  for (var i = 0; i < skillsets.length; i++) {
    skillsetsHtml += "<div>";
    skillsetsHtml +=
      '<button class="disabled-button" disabled>' +
      skillsets[i].skill +
      " - " +
      skillsets[i].experience +
      "</button>";
    skillsetsHtml += "</div>";
  }

  skillsetsHtml += "</div>";
  skillsetsHtml += "</div>";

  // Insert the dynamic skillsets into the container
  document.getElementById("dynamicSkillsetsContainer").innerHTML =
    skillsetsHtml;
}

// Call the function with the sample data

// Function to create dynamic vetted skills section
function createDynamicSkillsSection(data) {
  var skillsContainer = document.getElementById("dynamicSkillsContainer");

  // Clear any existing content in the container
  skillsContainer.innerHTML = "";

  // Create the outer div with a border
  var outerDiv = document.createElement("div");
  outerDiv.style.borderBottom = "1px solid rgb(0, 0, 0)";
  outerDiv.classList.add("w-48");

  // Create the text element for "Vetted Skills"
  var textElement = document.createElement("p");
  textElement.classList.add("text-2xl");
  textElement.textContent = "Vetted Skills";

  // Append textElement to outerDiv
  outerDiv.appendChild(textElement);

  // Create the flex container
  var flexContainer = document.createElement("div");
  flexContainer.style.display = "flex";

  // Create the left flex item
  var leftFlexItem = document.createElement("div");
  leftFlexItem.style.flex = "1";

  // Create the dynamic number element
  var dynamicNumberElement = document.createElement("p");
  dynamicNumberElement.style.fontSize = "6vw";
  dynamicNumberElement.style.padding = "0";
  dynamicNumberElement.style.margin = "0";
  dynamicNumberElement.textContent = data.numberOfSkills;

  // Append dynamicNumberElement to leftFlexItem
  leftFlexItem.appendChild(dynamicNumberElement);

  // Create the right flex item
  var rightFlexItem = document.createElement("div");
  rightFlexItem.style.flex = "6";
  rightFlexItem.style.marginTop = "20px";
  rightFlexItem.classList.add("mt-8");

  // Create the "Skills" text element
  var skillsTextElement = document.createElement("p");
  skillsTextElement.style.fontSize = "2vw";
  skillsTextElement.classList.add("mt-8");
  skillsTextElement.textContent = "Skills";

  // Append skillsTextElement to rightFlexItem
  rightFlexItem.appendChild(skillsTextElement);

  // Append leftFlexItem and rightFlexItem to flexContainer
  flexContainer.appendChild(leftFlexItem);
  flexContainer.appendChild(rightFlexItem);

  // Append outerDiv and flexContainer to skillsContainer
  skillsContainer.appendChild(outerDiv);
  skillsContainer.appendChild(flexContainer);
}

// Function to create dynamic professional summary section
function createDynamicProfessionalSummarySection(data) {
  var professionalSummaryContainer = document.getElementById(
    "dynamicProfessionalSummaryContainer"
  );

  // Clear any existing content in the container
  professionalSummaryContainer.innerHTML = "";

  // Create the outer div with a border
  var outerDiv = document.createElement("div");
  outerDiv.style.borderBottom = "1px solid rgb(0, 0, 0)";
  outerDiv.classList.add("w-48");

  // Create the text element for "Professional Summary"
  var textElement = document.createElement("p");
  textElement.style.fontSize = "2vw";
  textElement.textContent = "Professional Summary";

  // Append textElement to outerDiv
  outerDiv.appendChild(textElement);

  // Create the flex container
  var flexContainer = document.createElement("div");
  flexContainer.style.display = "flex";

  // Create the left flex item
  var leftFlexItem = document.createElement("div");
  leftFlexItem.style.flex = "1";

  // Create the dynamic number element
  var dynamicNumberElement = document.createElement("p");
  dynamicNumberElement.style.fontSize = "6vw";
  dynamicNumberElement.style.padding = "0";
  dynamicNumberElement.style.margin = "0";
  dynamicNumberElement.textContent = data.yearsOfExperience;

  // Append dynamicNumberElement to leftFlexItem
  leftFlexItem.appendChild(dynamicNumberElement);

  // Create the right flex item
  var rightFlexItem = document.createElement("div");
  rightFlexItem.style.flex = "6";
  rightFlexItem.style.marginTop = "20px";
  rightFlexItem.classList.add("mt-8");

  // Create the "Years" text element
  var yearsTextElement = document.createElement("p");
  yearsTextElement.style.fontSize = "2vw";
  yearsTextElement.classList.add("mt-8");
  yearsTextElement.textContent = "Years";

  // Append yearsTextElement to rightFlexItem
  rightFlexItem.appendChild(yearsTextElement);

  // Append leftFlexItem and rightFlexItem to flexContainer
  flexContainer.appendChild(leftFlexItem);
  flexContainer.appendChild(rightFlexItem);

  // Append outerDiv and flexContainer to professionalSummaryContainer
  professionalSummaryContainer.appendChild(outerDiv);
  professionalSummaryContainer.appendChild(flexContainer);
}

// Function to create dynamic Major Projects section
function createDynamicMajorProjectsSection(data) {
  var majorProjectsContainer = document.getElementById(
    "dynamicMajorProjectsContainer"
  );

  // Clear any existing content in the container
  majorProjectsContainer.innerHTML = "";

  // Create the outer div with a border
  var outerDiv = document.createElement("div");
  outerDiv.style.borderBottom = "1px solid rgb(0, 0, 0)";
  outerDiv.classList.add("w-48");

  // Create the text element for "Major Projects"
  var textElement = document.createElement("p");
  textElement.style.fontSize = "2vw";
  textElement.textContent = "Major Projects";

  // Append textElement to outerDiv
  outerDiv.appendChild(textElement);

  // Create the flex container
  var flexContainer = document.createElement("div");
  flexContainer.style.display = "flex";

  // Create the left flex item
  var leftFlexItem = document.createElement("div");
  leftFlexItem.style.flex = "1";

  // Create the dynamic number element
  var dynamicNumberElement = document.createElement("p");
  dynamicNumberElement.style.fontSize = "6vw";
  dynamicNumberElement.style.padding = "0";
  dynamicNumberElement.style.margin = "0";
  dynamicNumberElement.textContent = data.numberOfProjects;

  // Append dynamicNumberElement to leftFlexItem
  leftFlexItem.appendChild(dynamicNumberElement);

  // Create the right flex item
  var rightFlexItem = document.createElement("div");
  rightFlexItem.style.flex = "6";
  rightFlexItem.style.marginTop = "20px";
  rightFlexItem.classList.add("mt-8");

  // Create the "Projects" text element
  var projectsTextElement = document.createElement("p");
  projectsTextElement.style.fontSize = "2vw";
  projectsTextElement.classList.add("mt-8");
  projectsTextElement.textContent = "Projects";

  // Append projectsTextElement to rightFlexItem
  rightFlexItem.appendChild(projectsTextElement);

  // Append leftFlexItem and rightFlexItem to flexContainer
  flexContainer.appendChild(leftFlexItem);
  flexContainer.appendChild(rightFlexItem);

  // Append outerDiv and flexContainer to majorProjectsContainer
  majorProjectsContainer.appendChild(outerDiv);
  majorProjectsContainer.appendChild(flexContainer);
}

function createDynamicTableRows(data) {
  var row = document.createElement("tr");
  row.classList.add("border-b", "border-gray-600");

  // Create Skill column
  var skillColumn = document.createElement("td");
  skillColumn.setAttribute("scope", "row");
  skillColumn.classList.add("flex", "items-center", "px-6", "py-4");

  var skillImage = document.createElement("img");
  skillImage.classList.add("w-10", "h-10", "rounded-full");
  skillImage.src = data.imageUrl;
  skillImage.alt = "Skill Image";

  var skillTextDiv = document.createElement("div");
  skillTextDiv.classList.add("ps-3");

  var skillName = document.createElement("div");
  skillName.classList.add("text-base", "font-semibold", "pr-3");
  skillName.textContent = data.skillName;

  skillTextDiv.appendChild(skillName);

  skillColumn.appendChild(skillImage);
  skillColumn.appendChild(skillTextDiv);

  row.appendChild(skillColumn);

  // Create Results column
  var resultsColumn = document.createElement("td");
  resultsColumn.classList.add("px-6", "py-4");

  var resultsFlexDiv = document.createElement("div");
  resultsFlexDiv.classList.add("flex");

  var resultsImage = document.createElement("img");
  resultsImage.classList.add("w-20", "h-8", "rounded-full");
  resultsImage.src = data.progressImage;
  resultsImage.alt = "Progress Image";

  var resultsTextDiv = document.createElement("div");
  resultsTextDiv.classList.add("pt-1", "pl-2");

  var resultsPercentage = document.createElement("div");
  resultsPercentage.classList.add("text-base", "font-bold", "pr-3");
  resultsPercentage.textContent = data.progressPercentage;

  resultsTextDiv.appendChild(resultsPercentage);

  resultsFlexDiv.appendChild(resultsImage);
  resultsFlexDiv.appendChild(resultsTextDiv);

  resultsColumn.appendChild(resultsFlexDiv);

  row.appendChild(resultsColumn);

  // Create Details column
  var detailsColumn = document.createElement("td");
  detailsColumn.classList.add("px-6", "py-4");

  var detailsFlexDiv = document.createElement("div");
  detailsFlexDiv.classList.add("pt-2", "flex", "flex-row");

  var detailsText = document.createElement("div");
  detailsText.classList.add("text-base", "font-bold");
  detailsText.textContent = data.detailsText;

  var detailsImage = document.createElement("img");
  detailsImage.src = "arrow-narrow-down-svgrepo-com.svg";
  detailsImage.classList.add("w-10", "h-6", "mr-8");

  detailsFlexDiv.appendChild(detailsText);
  detailsFlexDiv.appendChild(detailsImage);

  detailsColumn.appendChild(detailsFlexDiv);

  row.appendChild(detailsColumn);

  return row;
}

// Get the table body element
var tableBody = document.getElementById("yourTableBodyId");

// Loop through your data and create rows
for (var i = 0; i < rowData.length; i++) {
  var dynamicRow = createDynamicTableRows(rowData[i]);
  tableBody.appendChild(dynamicRow);
}

function createDynamicExperienceSection(experienceData) {
  var container = document.createElement("div");
  container.classList.add(
    "grid",
    "grid-rows-1",
    "grid-flow-col",
    "gap-1",
    "mt-24",
    "pt-10"
  );

  for (var i = 0; i < experienceData.length; i++) {
    var experience = experienceData[i];

    var itemContainer = document.createElement("div");

    var dateDiv = document.createElement("div");
    dateDiv.classList.add(
      "border-b",
      "border-gray-500",
      "w-64",
      "dot-div-front"
    );

    var dateText1 = document.createElement("p");
    dateText1.classList.add("text-xl");
    dateText1.textContent =
      experience.startDate + " - " + (experience.endDate || "Present");

    var dateText2 = document.createElement("p");
    dateText2.classList.add("text-sm", "pbFor-4");
    dateText2.textContent = experience.duration;

    dateDiv.appendChild(dateText1);
    dateDiv.appendChild(dateText2);

    var roleDiv = document.createElement("div");
    roleDiv.classList.add("w-48", "pt-2", "dot-before", "dot-div");

    var roleText1 = document.createElement("p");
    roleText1.classList.add("text-xl");
    roleText1.textContent = experience.role;

    var roleText2 = document.createElement("p");
    roleText2.classList.add("text-sm", "pbFor-4");
    roleText2.textContent = experience.company;

    roleDiv.appendChild(roleText1);
    roleDiv.appendChild(roleText2);

    itemContainer.appendChild(dateDiv);
    itemContainer.appendChild(roleDiv);

    container.appendChild(itemContainer);
  }

  return container;
}

var dynamicExperienceSection = createDynamicExperienceSection(experienceData);
document
  .getElementById("experienceCompnay")
  .appendChild(dynamicExperienceSection);

function createDynamicExperienceSection(experienceData) {
  var container = document.createElement("div");
  container.classList.add(
    "grid",
    "grid-rows-1",
    "grid-flow-col",
    "gap-1",
    "mt-24",
    "pt-10"
  );

  for (var i = 0; i < experienceData.length; i++) {
    var experience = experienceData[i];

    var itemContainer = document.createElement("div");

    var dateDiv = document.createElement("div");
    dateDiv.classList.add(
      "border-b",
      "border-gray-500",
      "w-64",
      "dot-div-front"
    );

    var dateText1 = document.createElement("p");
    dateText1.classList.add("text-xl");
    dateText1.textContent =
      experience.startDate + " - " + (experience.endDate || "Present");

    var dateText2 = document.createElement("p");
    dateText2.classList.add("text-sm", "pbFor-4");
    dateText2.textContent = experience.duration;

    dateDiv.appendChild(dateText1);
    dateDiv.appendChild(dateText2);

    var roleDiv = document.createElement("div");
    roleDiv.classList.add("w-48", "pt-2", "dot-before", "dot-div");

    var roleText1 = document.createElement("p");
    roleText1.classList.add("text-xl");
    roleText1.textContent = experience.role;

    var roleText2 = document.createElement("p");
    roleText2.classList.add("text-sm", "pbFor-4");
    roleText2.textContent = experience.company;

    roleDiv.appendChild(roleText1);
    roleDiv.appendChild(roleText2);

    itemContainer.appendChild(dateDiv);
    itemContainer.appendChild(roleDiv);

    container.appendChild(itemContainer);
  }

  return container;
}

function createDynamicTechnologyCard(data) {
  var cardContainer = document.createElement("div");
  cardContainer.className = "mt-24 pt-4 flex flex-row gap-6";

  for (var i = 0; i < data.length; i++) {
    var cardData = data[i];

    var card = document.createElement("div");
    card.className =
      "flex flex-col justify-center max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700";

    var imageContainer = document.createElement("div");
    imageContainer.className = "justify-center justify-self-center self-center";

    var image = document.createElement("img");
    image.src = cardData.imageUrl;
    image.alt = cardData.imageAlt;
    image.className = "w-14";

    var textContainer = document.createElement("div");

    var text = document.createElement("p");
    text.className = "font-normal text-gray-700 dark:text-gray-400";
    text.textContent = cardData.title;

    imageContainer.appendChild(image);
    textContainer.appendChild(text);
    card.appendChild(imageContainer);
    card.appendChild(textContainer);
    cardContainer.appendChild(card);
  }

  return cardContainer;
}

// Call the function with the array of card data
var dynamicCardContainer = createDynamicTechnologyCard(cardDataArray);

// Append the dynamically generated card container to the document
var cardContainer = document.getElementById("cardContainer");
cardContainer.appendChild(dynamicCardContainer);

// Call the function with the sample data
createDynamicMajorProjectsSection(majorProjectsData);

// Call the function with the sample data
createDynamicProfessionalSummarySection(professionalSummaryData);

// Call the function with the sample data
createDynamicSkillsSection(vettedSkillsData);
createDynamicSkillsets(skillsets);

// Call the function with the sample data
createDynamicImage(imageData);
// Call the function with the sample data
createDynamicTable(data);

// Function to create dynamic content

// Call the function with the sample data
createDynamicContent(personalInfo);
