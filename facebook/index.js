var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Class FacebookUser gives the Full Name of the User.
var FacebookUser = /** @class */ (function () {
    function FacebookUser(firstName, lastName) {
        var _this = this;
        this.firstName = firstName;
        this.lastName = lastName;
        //getter method for full name of the user
        this.getFullName = function () {
            return _this.firstName + " " + _this.lastName;
        };
        //setter method for setting the full name of the user
        this.setFullName = function (firstName, lastName) {
            _this.firstName = firstName;
            _this.lastName = lastName;
            //console.log(`${this.firstName} ${this.lastName}`);
        };
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return FacebookUser;
}());
//An object of class FacebookUser
var userOne = new FacebookUser("Himanshu", "Dwivedi");
//trying to manipulate the properties of the object
console.log("User Name: " + userOne.getFullName());
userOne.setFullName("Anshu", "Dwivedi");
console.log("Updated User Name: " + userOne.getFullName());
//Class FacebookUser ends
//Class Overview gives an overview of the User's Basic Details
var Overview = /** @class */ (function () {
    //constructor starts
    function Overview(worksAt, studiedAt, livesIn, NumberOfFamilyMembers, contactNumber, dateOfBirth) {
        var _this = this;
        this.worksAt = worksAt;
        this.studiedAt = studiedAt;
        this.livesIn = livesIn;
        this.NumberOfFamilyMembers = NumberOfFamilyMembers;
        this.contactNumber = contactNumber;
        this.dateOfBirth = dateOfBirth;
        //constructor ends
        //getter methods
        this.getWorksAt = function () {
            return _this.worksAt;
        };
        this.getStudiedAt = function () {
            return _this.studiedAt;
        };
        this.getLivesIn = function () {
            return _this.livesIn;
        };
        this.getNoOfFamilyMembers = function () {
            return _this.NumberOfFamilyMembers;
        };
        this.getContactNumber = function () {
            return _this.contactNumber;
        };
        this.getDateOfBirth = function () {
            return _this.dateOfBirth;
        };
        this.worksAt = worksAt;
        this.studiedAt = studiedAt;
        this.livesIn = livesIn;
        this.NumberOfFamilyMembers = NumberOfFamilyMembers;
        this.contactNumber = contactNumber;
        this.dateOfBirth = dateOfBirth;
    }
    return Overview;
}());
//An Object of the class Overview
var userOneOverview = new Overview(["Student", "NSN"], ["JSSS", "PIEMR"], ["Rewa", "Indore", "Pune"], 7, [8989469469], "28/05/1992");
//trying to manipulate the properties of the object
console.log("Worked At: " + userOneOverview.getWorksAt());
console.log("Lived In: " + userOneOverview.getLivesIn());
console.log("Contact Number: " + userOneOverview.getContactNumber());
//Class Overview ends
//Class WorkAndEducation gives the info about the User's Work and Education Experiences
var WorkAndEducation = /** @class */ (function (_super) {
    __extends(WorkAndEducation, _super);
    //constructor starts
    function WorkAndEducation(worksAt, studiedAt, livesIn, NumberOfFamilyMembers, contactNumber, dateOfBirth, professionalSkills, university, highSchool) {
        var _this = _super.call(this, worksAt, studiedAt, livesIn, NumberOfFamilyMembers, contactNumber, dateOfBirth) || this;
        _this.worksAt = worksAt;
        _this.studiedAt = studiedAt;
        _this.livesIn = livesIn;
        _this.NumberOfFamilyMembers = NumberOfFamilyMembers;
        _this.contactNumber = contactNumber;
        _this.dateOfBirth = dateOfBirth;
        _this.professionalSkills = professionalSkills;
        _this.university = university;
        _this.highSchool = highSchool;
        //constructor ends
        //getter methods
        _this.getProfessionalSkills = function () {
            return _this.professionalSkills;
        };
        _this.getUniversity = function () {
            return _this.university;
        };
        _this.getHighSchool = function () {
            return _this.highSchool;
        };
        //setter methods
        _this.setWorksAt = function () {
            var works_At = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                works_At[_i] = arguments[_i];
            }
            _this.worksAt = _this.worksAt.concat(works_At);
        };
        _this.setStudiedAt = function () {
            var studies = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                studies[_i] = arguments[_i];
            }
            _this.studiedAt = _this.studiedAt.concat(studies);
        };
        _this.setLivesIn = function (place) {
            _this.livesIn = place;
        };
        _this.setNoOfFamilyMembers = function (members) {
            _this.NumberOfFamilyMembers = members;
        };
        _this.setContactNumber = function () {
            var contact = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                contact[_i] = arguments[_i];
            }
            _this.contactNumber = userOneOverview.contactNumber.concat(contact);
        };
        _this.setDateOfBirth = function (dateOfBirth) {
            _this.dateOfBirth = dateOfBirth;
        };
        _this.setProfessionalSkills = function () {
            var skills = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                skills[_i] = arguments[_i];
            }
            _this.professionalSkills = _this.professionalSkills.concat(skills);
        };
        _this.setHighSchool = function () {
            var schools = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                schools[_i] = arguments[_i];
            }
            _this.highSchool = _this.highSchool.concat(schools);
        };
        _this.setUniversity = function () {
            var universities = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                universities[_i] = arguments[_i];
            }
            _this.university = _this.university.concat(universities);
        };
        _this.professionalSkills = professionalSkills;
        _this.university = university;
        _this.highSchool = highSchool;
        return _this;
    }
    return WorkAndEducation;
}(Overview));
//An Object of the class WOrkAndEducation
var userOneWorkAndEducation = new WorkAndEducation(userOneOverview.worksAt, userOneOverview.studiedAt, userOneOverview.livesIn, userOneOverview.NumberOfFamilyMembers, userOneOverview.contactNumber, "28/05/1992", ["HTML", "CSS", "JS", "Bootstrap 4", "jQuery", "AJAX"], [], ["JSSS"]);
//trying to manipulate the properties of the object    
console.log("Professional Skills: " + userOneWorkAndEducation.getProfessionalSkills());
userOneWorkAndEducation.setUniversity("RGTU");
userOneWorkAndEducation.setContactNumber(8788301459);
userOneWorkAndEducation.setWorksAt("Bharti Airtel", "Vodafone");
console.log("Worked At: " + userOneWorkAndEducation.getWorksAt());
console.log("University: " + userOneWorkAndEducation.getUniversity());
console.log("Contact Number: " + userOneWorkAndEducation.getContactNumber());
//Class WorkAndEducation ends
//Class PlacesLived shows the info about the places that user has lived in
var PlacesLived = /** @class */ (function (_super) {
    __extends(PlacesLived, _super);
    //constructor starts
    function PlacesLived(worksAt, studiedAt, livesIn, NumberOfFamilyMembers, contactNumber, dateOfBirth) {
        var _this = _super.call(this, worksAt, studiedAt, livesIn, NumberOfFamilyMembers, contactNumber, dateOfBirth) || this;
        _this.worksAt = worksAt;
        _this.studiedAt = studiedAt;
        _this.livesIn = livesIn;
        _this.NumberOfFamilyMembers = NumberOfFamilyMembers;
        _this.contactNumber = contactNumber;
        _this.dateOfBirth = dateOfBirth;
        //constructor ends
        //getter method to get the places lived in
        _this.getLivedIn = function () {
            return _this.livesIn;
        };
        //setter method to set new values to places lived in
        _this.setLivedIn = function () {
            var places = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                places[_i] = arguments[_i];
            }
            _this.livesIn = userOneOverview.livesIn.concat(places);
        };
        return _this;
    }
    return PlacesLived;
}(Overview));
//An object of the class PlacesLived
var userOnePlaces = new PlacesLived(userOneOverview.worksAt, userOneOverview.studiedAt, userOneOverview.livesIn, userOneOverview.NumberOfFamilyMembers, userOneOverview.contactNumber, userOneOverview.dateOfBirth);
//trying to manipulate the properties of the object    
console.log("Lived In: " + userOnePlaces.getLivedIn());
userOnePlaces.setLivedIn("Bangalore", "Cochin");
console.log("Lived In: " + userOnePlaces.getLivedIn());
//Class PlacesLived Ends
//class ContactInfo shows Contact Details of the user
var ContactInfo = /** @class */ (function (_super) {
    __extends(ContactInfo, _super);
    //constructor starts
    function ContactInfo(worksAt, studiedAt, livesIn, NumberOfFamilyMembers, contactNumber, dateOfBirth, email, websiteLink, socialLink, gender, interestedIn, poloiticalViews, languages, religiousViews) {
        var _this = _super.call(this, worksAt, studiedAt, livesIn, NumberOfFamilyMembers, contactNumber, dateOfBirth) || this;
        _this.worksAt = worksAt;
        _this.studiedAt = studiedAt;
        _this.livesIn = livesIn;
        _this.NumberOfFamilyMembers = NumberOfFamilyMembers;
        _this.contactNumber = contactNumber;
        _this.dateOfBirth = dateOfBirth;
        _this.email = email;
        _this.websiteLink = websiteLink;
        _this.socialLink = socialLink;
        _this.gender = gender;
        _this.interestedIn = interestedIn;
        _this.poloiticalViews = poloiticalViews;
        _this.languages = languages;
        _this.religiousViews = religiousViews;
        //constructor ends
        //getters
        _this.getEmail = function () {
            return _this.email;
        };
        _this.getWebsiteLink = function () {
            return _this.websiteLink;
        };
        _this.getSocialLink = function () {
            return _this.socialLink;
        };
        _this.getGender = function () {
            return _this.gender;
        };
        _this.getInterestedIn = function () {
            return _this.interestedIn;
        };
        _this.getPoliticalViews = function () {
            return _this.poloiticalViews;
        };
        _this.getLanguages = function () {
            return _this.languages;
        };
        _this.getReligiousViews = function () {
            return _this.religiousViews;
        };
        //setters
        _this.setEmail = function () {
            var emailId = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                emailId[_i] = arguments[_i];
            }
            _this.email = _this.email.concat(emailId);
        };
        _this.setWebsiteLink = function () {
            var websiteLink = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                websiteLink[_i] = arguments[_i];
            }
            _this.websiteLink = _this.websiteLink.concat(websiteLink);
        };
        _this.setSocialLink = function () {
            var socialLink = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                socialLink[_i] = arguments[_i];
            }
            _this.socialLink = _this.socialLink.concat(socialLink);
        };
        _this.setGender = function (gender) {
            _this.gender = gender;
        };
        _this.setInterestedIn = function (interestedIn) {
            _this.interestedIn = interestedIn;
        };
        _this.setPoliticalViews = function (poloiticalViews) {
            _this.poloiticalViews = poloiticalViews;
        };
        _this.setLanguages = function () {
            var languages = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                languages[_i] = arguments[_i];
            }
            _this.languages = languages;
        };
        _this.setReligiousViews = function (religiousViews) {
            _this.religiousViews = religiousViews;
        };
        _this.email = email;
        _this.websiteLink = websiteLink;
        _this.socialLink = socialLink;
        _this.gender = gender;
        _this.interestedIn = interestedIn;
        _this.poloiticalViews = poloiticalViews;
        _this.languages = languages;
        _this.religiousViews = religiousViews;
        return _this;
    }
    return ContactInfo;
}(Overview));
//An object of the class ContactInfo
var userOneContact = new ContactInfo(userOneOverview.worksAt, userOneOverview.studiedAt, userOneOverview.livesIn, userOneOverview.NumberOfFamilyMembers, userOneOverview.contactNumber, userOneOverview.dateOfBirth, ["himanshudwivediec2014@gmail.com"], ["www.somelink.com"], ["www.facebook.com"], "Male", "Women", "None", ["English", "Hindi"], "Humanity");
//trying to manipulate the properties of the object    
console.log("Languages: " + userOneContact.getLanguages());
console.log("Website Links: " + userOneContact.getWebsiteLink());
userOneContact.setWebsiteLink("www.someotherwebsite.com", "www.someanotherwebsite.com");
console.log("Website Links: " + userOneContact.getWebsiteLink());
userOneContact.setEmail("someotheremail@something.com");
console.log("email: " + userOneContact.getEmail());
//Class ContactInfo and its use ends
//Class FamilyAndRelationships refers to the Relationship status and Family Members present on FB
var FamilyAndRelationships = /** @class */ (function () {
    function FamilyAndRelationships(relationship) {
        this.relationship = relationship;
        /* */
        this.isSingle = function (relationship) {
            if (relationship == true) {
                console.log("In a Relationship");
            }
            else {
                console.log("Single");
            }
        };
        /* */
        this.addFamilyMember = function () {
            console.log("New Family Member Added.");
        };
        this.relationship = relationship;
    }
    return FamilyAndRelationships;
}());
//Class FamilyAndRelationships ends
//Class DetailsAboutUser
var DetailsAboutUser = /** @class */ (function () {
    function DetailsAboutUser(details, nickNames, favouriteQuotes) {
        var _this = this;
        this.details = details;
        this.nickNames = nickNames;
        this.favouriteQuotes = favouriteQuotes;
        //getter methods
        this.getDetails = function () {
            return _this.details;
        };
        this.getNickNames = function () {
            return _this.nickNames;
        };
        this.getFavouriteQuotes = function () {
            return _this.favouriteQuotes;
        };
        //setters
        this.setDetails = function (details) {
            _this.details = details;
        };
        this.setNickNames = function () {
            var nickNames = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                nickNames[_i] = arguments[_i];
            }
            _this.nickNames = _this.nickNames.concat(nickNames);
        };
        this.setFavouriteQuotes = function () {
            var quotes = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                quotes[_i] = arguments[_i];
            }
            _this.favouriteQuotes = _this.favouriteQuotes.concat(quotes);
        };
        this.details = details;
        this.nickNames = nickNames;
        this.favouriteQuotes = favouriteQuotes;
    }
    return DetailsAboutUser;
}());
//An Object of class DetailsABoutUser
var userOneDetails = new DetailsAboutUser("", ["Anshu"], ["Perseverance and Optimism Lead my way to SUCCESS !!"]);
//trying to manipulate the properties of the object    
console.log("Nick Names: " + userOneDetails.getNickNames());
userOneDetails.setNickNames("Himanshu");
console.log("Nick Names: " + userOneDetails.getNickNames());
//Class DetailsAboutUser ends
//Class LifeEvents shows Life Events(if any) of the user
var LifeEvents = /** @class */ (function (_super) {
    __extends(LifeEvents, _super);
    function LifeEvents(worksAt, studiedAt, livesIn, NumberOfFamilyMembers, contactNumber, dateOfBirth) {
        var _this = _super.call(this, worksAt, studiedAt, livesIn, NumberOfFamilyMembers, contactNumber, dateOfBirth) || this;
        _this.worksAt = worksAt;
        _this.studiedAt = studiedAt;
        _this.livesIn = livesIn;
        _this.NumberOfFamilyMembers = NumberOfFamilyMembers;
        _this.contactNumber = contactNumber;
        _this.dateOfBirth = dateOfBirth;
        _this.getBirthEvent = function () {
            return ("Born On: " + _this.dateOfBirth);
        };
        _this.getGraduationEvent = function () {
            return _this.studiedAt[1];
        };
        return _this;
    }
    return LifeEvents;
}(Overview));
//An Object of the class LifeEvents 
var lifeEvents = new LifeEvents(userOneOverview.worksAt, userOneOverview.studiedAt, userOneOverview.livesIn, userOneOverview.NumberOfFamilyMembers, userOneOverview.contactNumber, userOneOverview.dateOfBirth);
//trying to manipulate the properties of the object        
console.log(lifeEvents.getBirthEvent());
console.log("Graduated from: " + lifeEvents.getGraduationEvent());
//Class LifeEvents  ends   
