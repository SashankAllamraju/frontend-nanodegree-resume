var bio = {
    "name": "John Doe",
    "role": "Software Developer",
    "contacts": {
        "mobile": "+XX-XXXXXXXXXX",
        "email": "JohnDoe@example.com",
        "github": "JohnDoe",
        "linkedin": "",
        "location": "Mumbai, India"
    },
    "welcomeMessage": "I am software developer and I love building websites.",
    "skills": ["Software Development", "HTML", "CSS", "JavaScript", "SQL"],
    "biopic": "images/fry.jpg",
    "display": function() {
        var formattedHTMLheaderName = HTMLheaderName.replace("%data%", bio.name);
        var formattedHTMLheaderRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedHTMLmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedHTMLemail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedHTMLgithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedHTMLlocation = HTMLlocation.replace("%data%", bio.contacts.location);

        var formattedHTMLbioPic = HTMLbioPic.replace("%data%", bio.biopic);
        var formattedHTMLwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

        // Header - Name and Role
        $("#header").prepend(formattedHTMLheaderRole);
        $("#header").prepend(formattedHTMLheaderName);

        // Header - Pic and Message
        $("#header").append(formattedHTMLbioPic);
        $("#header").append(formattedHTMLwelcomeMsg);

        // Contact Information above and below
        $("#topContacts, #footerContacts").append(formattedHTMLmobile);
        $("#topContacts, #footerContacts").append(formattedHTMLemail);
        $("#topContacts, #footerContacts").append(formattedHTMLgithub);
        $("#topContacts, #footerContacts").append(formattedHTMLlocation);


        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            for (var i = 0; i < bio.skills.length; i++) {
                var formattedHTMLskills = HTMLskills.replace("%data%", bio.skills[i]);
                $("#skills").append(formattedHTMLskills);
            }
        }
    }
};

var education = {
    "schools": [{
        "name": "School of Planning & Architecture",
        "location": "New Delhi, India",
        "degree": "Bachelors",
        "majors": ["Architectural Design", "Building Construction"],
        "dates": "2012",
        "url": "http://www.spa.ac.in/"
    }],
    "onlineCourses": [{
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "dates": "Nov 2016 - Dec 2016",
        "url": "https://www.udacity.com/course/nd001"
    }],
    "display": function() {
        for (var i = 0; i < education.schools.length; i++) {
            $("#education").append(HTMLschoolStart);

            var formattedHTMLschoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
            var formattedHTMLschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            var formattedHTMLschoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
            var formattedHTMLschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);

            $(".education-entry:last").append(formattedHTMLschoolName + formattedHTMLschoolDegree);
            $(".education-entry:last").append(formattedHTMLschoolDates);
            $(".education-entry:last").append(formattedHTMLschoolLocation);

            for (var j = 0; j < education.schools[i].majors.length; j++) {
                var formattedHTMLschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors[j]);
                $(".education-entry:last").append(formattedHTMLschoolMajor);
            }
        }

        for (i = 0; i < education.onlineCourses.length; i++) {
            $("#education").append(HTMLonlineClasses);
            $("#education").append(HTMLschoolStart);

            var formattedHTMLonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
            var formattedHTMLonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
            var formattedHTMLonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
            var formattedHTMLonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);

            $(".education-entry:last").append(formattedHTMLonlineTitle + formattedHTMLonlineSchool);
            $(".education-entry:last").append(formattedHTMLonlineDates);
            $(".education-entry:last").append(formattedHTMLonlineURL);
        }
    }
};

var work = {
    "jobs": [{
        "employer": "ABC Company",
        "title": "Software Developer",
        "location": "Chennai, India",
        "dates": "Feb 2015 - Sep 2016",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }, {
        "employer": "XYZ Company",
        "title": "Architect",
        "location": "New Delhi, India",
        "dates": "Jun 2012 - Nov 2014",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }, {
        "employer": "Some Company",
        "title": "Designer",
        "location": "New Delhi, India",
        "dates": "Aug 2010 - Apr 2011",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }],
    "display": function() {
        for (var job = 0; job < work.jobs.length; job++) {
            $("#workExperience").append(HTMLworkStart);

            var formattedHTMLworkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            var formattedHTMLworkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            var formattedHTMLworkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            var formattedHTMLworkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
            var formattedHTMLworkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);


            $(".work-entry:last").append(formattedHTMLworkEmployer + formattedHTMLworkTitle);
            $(".work-entry:last").append(formattedHTMLworkDates);
            $(".work-entry:last").append(formattedHTMLworkLocation);
            $(".work-entry:last").append(formattedHTMLworkDescription);
        }
    }
};

var projects = {
    "projects": [{
        "title": "Build a Portfolio Site",
        "dates": "Nov 2016",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "images": ["http://lorempixel.com/200/150/", "http://lorempixel.com/200/150/"]
    }, {
        "title": "Online Resume",
        "dates": "Dec 2016",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "images": ["http://lorempixel.com/200/150/"]
    }],
    "display": function() {
        if (projects.projects.length > 0) {
            projects.projects.forEach(function(project) {
                $("#projects").append(HTMLprojectStart);

                var formattedHTMLprojectTitle = HTMLprojectTitle.replace("%data%", project.title);
                var formattedHTMLprojectDates = HTMLprojectDates.replace("%data%", project.dates);
                var formattedHTMLprojectDescription = HTMLprojectDescription.replace("%data%", project.description);

                $(".project-entry:last").append(formattedHTMLprojectTitle);
                $(".project-entry:last").append(formattedHTMLprojectDates);
                $(".project-entry:last").append(formattedHTMLprojectDescription);

                for (var img = 0; img < project.images.length; img++) {
                    var formattedHTMLprojectImage = HTMLprojectImage.replace("%data%", project.images[img]);
                    $(".project-entry:last").append(formattedHTMLprojectImage);
                }
            });
        }
    }
};

// Display all data
bio.display();
work.display();
projects.display();
education.display();

// Display Google Map
$("#mapDiv").append(googleMap);

// International Name format
function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] + ' ' + name[1];
}

$("#main").append(internationalizeButton);

// log click locations
$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});