//Class FacebookUser gives the Full Name of the User.
    class FacebookUser{
        constructor(public firstName: string, public lastName: string){
            this.firstName = firstName;
            this.lastName = lastName;
        }

        //getter method for full name of the user
        getFullName = ():string =>{
            return `${this.firstName} ${this.lastName}`;
        }

        //setter method for setting the full name of the user
        setFullName = (firstName:string, lastName:string) =>{
            this.firstName = firstName;
            this.lastName = lastName;
            //console.log(`${this.firstName} ${this.lastName}`);
        }
    }
    //An object of class FacebookUser
        let userOne = new FacebookUser("Himanshu", "Dwivedi");
    
    //trying to manipulate the properties of the object
        console.log(`User Name: ${userOne.getFullName()}`);
        userOne.setFullName("Anshu", "Dwivedi")
        console.log(`Updated User Name: ${userOne.getFullName()}`);
//Class FacebookUser ends



//Class Overview gives an overview of the User's Basic Details
    class Overview{
        //constructor starts
        constructor(
            public worksAt: string[], 
            public studiedAt: string [], 
            public livesIn: string[], 
            public NumberOfFamilyMembers: number, 
            public contactNumber: number[],
            public dateOfBirth: string
        ){        
            this.worksAt = worksAt;
            this.studiedAt = studiedAt;
            this.livesIn = livesIn;
            this.NumberOfFamilyMembers = NumberOfFamilyMembers;
            this.contactNumber = contactNumber;
            this.dateOfBirth = dateOfBirth;
        }
        //constructor ends

        //getter methods
        getWorksAt = ():string[] =>{
            return this.worksAt;
        }
        getStudiedAt = ():string[] =>{
            return this.studiedAt;
        }
        getLivesIn = ():string[] =>{
            return this.livesIn;
        }
        getNoOfFamilyMembers= ():number =>{
            return this.NumberOfFamilyMembers;
        }
        getContactNumber = ():number[] =>{
            return this.contactNumber;
        }
        getDateOfBirth = ():string =>{
            return this.dateOfBirth;
        }   
    }
    //An Object of the class Overview
        let userOneOverview = new Overview(["Student","NSN"], ["JSSS","PIEMR"], ["Rewa","Indore","Pune"], 7, [8989469469], "28/05/1992")
    
    //trying to manipulate the properties of the object
        console.log(`Worked At: ${userOneOverview.getWorksAt()}`);
        console.log(`Lived In: ${userOneOverview.getLivesIn()}`);
        console.log(`Contact Number: ${userOneOverview.getContactNumber()}`);
//Class Overview ends



//Class WorkAndEducation gives the info about the User's Work and Education Experiences
    class WorkAndEducation extends Overview{
        //constructor starts
        constructor(
            public worksAt:string[], 
            public studiedAt:string[], 
            public livesIn:string[], 
            public NumberOfFamilyMembers:number, 
            public contactNumber:number[], 
            public dateOfBirth:string,
            protected professionalSkills: string[],
            protected university: string[],
            protected highSchool: string[]
        ){
            super(worksAt, studiedAt, livesIn, NumberOfFamilyMembers, contactNumber, dateOfBirth)
            this.professionalSkills = professionalSkills;
            this.university = university;
            this.highSchool = highSchool;
        }
        //constructor ends

        //getter methods
        getProfessionalSkills = ():string[] =>{
            return this.professionalSkills;
        }
        getUniversity = ():string[] =>{
            return this.university;
        }
        getHighSchool = ():string[] =>{
            return this.highSchool;
        }

        //setter methods
        setWorksAt = (...works_At:string[]) =>{
            this.worksAt = this.worksAt.concat(works_At);
        }
        setStudiedAt = (...studies:string[]) =>{
            this.studiedAt = this.studiedAt.concat(studies);
        }
        setLivesIn = (place:string[]) =>{
            this.livesIn = place;
        }
        setNoOfFamilyMembers = (members:number) =>{
            this.NumberOfFamilyMembers = members;
        }
        setContactNumber = (...contact:number[]) =>{
            this.contactNumber = userOneOverview.contactNumber.concat(contact);
        }
        setDateOfBirth = (dateOfBirth:string) =>{
            this.dateOfBirth = dateOfBirth;
        }

        setProfessionalSkills = (...skills:string[]) =>{
            this.professionalSkills = this.professionalSkills.concat(skills);
        }
        setHighSchool = (...schools:string[]) =>{
            this.highSchool = this.highSchool.concat(schools);
        }
        setUniversity = (...universities:string[]) =>{
            this.university = this.university.concat(universities);
        }
    }
    //An Object of the class WOrkAndEducation
        let userOneWorkAndEducation = new WorkAndEducation(
            userOneOverview.worksAt, 
            userOneOverview.studiedAt, 
            userOneOverview.livesIn, 
            userOneOverview.NumberOfFamilyMembers, 
            userOneOverview.contactNumber, 
            "28/05/1992", 
            ["HTML", "CSS", "JS", "Bootstrap 4", "jQuery", "AJAX"], 
            [], 
            ["JSSS"]
        )
    //trying to manipulate the properties of the object    
        console.log(`Professional Skills: ${userOneWorkAndEducation.getProfessionalSkills()}`);

        userOneWorkAndEducation.setUniversity("RGTU");
        userOneWorkAndEducation.setContactNumber(8788301459);
        userOneWorkAndEducation.setWorksAt("Bharti Airtel", "Vodafone");

        console.log(`Worked At: ${userOneWorkAndEducation.getWorksAt()}`);
        console.log(`University: ${userOneWorkAndEducation.getUniversity()}`);
        console.log(`Contact Number: ${userOneWorkAndEducation.getContactNumber()}`);
//Class WorkAndEducation ends



//Class PlacesLived shows the info about the places that user has lived in
    class PlacesLived extends Overview{
        //constructor starts
        constructor(
            public worksAt:string[], 
            public studiedAt:string[], 
            public livesIn:string[], 
            public NumberOfFamilyMembers:number, 
            public contactNumber:number[], 
            public dateOfBirth:string
        ){
            super(worksAt, studiedAt, livesIn, NumberOfFamilyMembers, contactNumber, dateOfBirth)
        }
        //constructor ends

        //getter method to get the places lived in
        getLivedIn = ():string[] =>{
            return this.livesIn;
        }

        //setter method to set new values to places lived in
        setLivedIn = (...places:string[]) =>{
            this.livesIn = userOneOverview.livesIn.concat(places);
        }
    }
    //An object of the class PlacesLived
        let userOnePlaces  = new PlacesLived(
            userOneOverview.worksAt,
            userOneOverview.studiedAt,
            userOneOverview.livesIn,
            userOneOverview.NumberOfFamilyMembers,
            userOneOverview.contactNumber,
            userOneOverview.dateOfBirth
        )
    //trying to manipulate the properties of the object    
        console.log(`Lived In: ${userOnePlaces.getLivedIn()}`);
        userOnePlaces.setLivedIn("Bangalore", "Cochin");
        console.log(`Lived In: ${userOnePlaces.getLivedIn()}`);
//Class PlacesLived Ends



//class ContactInfo shows Contact Details of the user
    class ContactInfo extends Overview{
        //constructor starts
        constructor(
            public worksAt:string[], 
            public studiedAt:string[], 
            public livesIn:string[], 
            public NumberOfFamilyMembers:number, 
            public contactNumber:number[], 
            public dateOfBirth:string,
            protected email: string[],
            protected websiteLink: string[],
            protected socialLink: string[],
            protected gender: string,
            protected interestedIn: string,
            protected poloiticalViews: string,
            protected languages: string[],
            protected religiousViews: string
        ){
            super(worksAt, studiedAt, livesIn, NumberOfFamilyMembers, contactNumber, dateOfBirth)
            this.email = email;
            this.websiteLink = websiteLink;
            this.socialLink = socialLink;
            this.gender = gender;
            this.interestedIn = interestedIn;
            this.poloiticalViews = poloiticalViews;
            this.languages = languages;
            this.religiousViews = religiousViews;
        }
        //constructor ends

        //getters
        getEmail = ():string[] =>{
            return this.email;
        }
        getWebsiteLink = ():string[] =>{
            return this.websiteLink;
        }
        getSocialLink = ():string[] =>{
            return this.socialLink;
        }
        getGender = ():string =>{
            return this.gender;
        }
        getInterestedIn = ():string =>{
            return this.interestedIn;
        }
        getPoliticalViews = ():string =>{
            return this.poloiticalViews;
        }
        getLanguages = ():string[] =>{
            return this.languages;
        }
        getReligiousViews = ():string =>{
            return this.religiousViews;
        }

        //setters
        setEmail = (...emailId:string[]) =>{
            this.email = this.email.concat(emailId);
        }
        setWebsiteLink = (...websiteLink:string[]) =>{
            this.websiteLink = this.websiteLink.concat( websiteLink);
        }
        setSocialLink = (...socialLink:string[]) =>{
            this.socialLink = this.socialLink.concat(socialLink);
        }
        setGender = (gender:string) =>{
            this.gender = gender;
        }
        setInterestedIn = (interestedIn:string) =>{
            this.interestedIn = interestedIn;
        }
        setPoliticalViews = (poloiticalViews:string) =>{
            this.poloiticalViews = poloiticalViews;
        }
        setLanguages = (...languages:string[]) =>{
            this.languages = languages;
        }
        setReligiousViews = (religiousViews:string) =>{
            this.religiousViews = religiousViews;
        }
    }
    //An object of the class ContactInfo
        let userOneContact = new ContactInfo(
            userOneOverview.worksAt,
            userOneOverview.studiedAt,
            userOneOverview.livesIn,
            userOneOverview.NumberOfFamilyMembers,
            userOneOverview.contactNumber,
            userOneOverview.dateOfBirth,
            ["himanshudwivediec2014@gmail.com"],
            ["www.somelink.com"],
            ["www.facebook.com"],
            "Male",
            "Women",
            "None",
            ["English", "Hindi"],
            "Humanity"
        )
    //trying to manipulate the properties of the object    
        console.log(`Languages: ${userOneContact.getLanguages()}`);
        console.log(`Website Links: ${userOneContact.getWebsiteLink()}`);

        userOneContact.setWebsiteLink("www.someotherwebsite.com", "www.someanotherwebsite.com");
        console.log(`Website Links: ${userOneContact.getWebsiteLink()}`);

        userOneContact.setEmail("someotheremail@something.com")
        console.log(`email: ${userOneContact.getEmail()}`);
//Class ContactInfo and its use ends



//Class FamilyAndRelationships refers to the Relationship status and Family Members present on FB
    class FamilyAndRelationships{
        constructor(private relationship:boolean){
            this.relationship = relationship;
        }
        /* */
        isSingle = (relationship:boolean) =>{
            if(relationship == true){
                console.log("In a Relationship");
            } else{
                console.log("Single");
            }
        }
        /* */
        addFamilyMember = () =>{
            console.log("New Family Member Added.");
        }
    }
//Class FamilyAndRelationships ends



//Class DetailsAboutUser
    class DetailsAboutUser{
        constructor(private details:string, private nickNames:string[], private favouriteQuotes:string[]){
            this.details = details;
            this.nickNames = nickNames;
            this.favouriteQuotes = favouriteQuotes;
        }

        //getter methods
        getDetails = ():string =>{
            return this.details;
        }
        getNickNames = ():string[] =>{
            return this.nickNames;
        }
        getFavouriteQuotes = ():string[] =>{
            return this.favouriteQuotes;
        }

        //setters
        setDetails = (details:string) =>{
            this.details = details;
        }
        setNickNames = (...nickNames:string[]) =>{
            this.nickNames = this.nickNames.concat(nickNames);
        }
        setFavouriteQuotes = (...quotes:string[]) =>{
            this.favouriteQuotes = this.favouriteQuotes.concat(quotes);
        }
    }
    //An Object of class DetailsABoutUser
        let userOneDetails = new DetailsAboutUser("", ["Anshu"], ["Perseverance and Optimism Lead my way to SUCCESS !!"])
    
        //trying to manipulate the properties of the object    
        console.log(`Nick Names: ${userOneDetails.getNickNames()}`);
         userOneDetails.setNickNames("Himanshu");
         console.log(`Nick Names: ${userOneDetails.getNickNames()}`);
//Class DetailsAboutUser ends



//Class LifeEvents shows Life Events(if any) of the user
    class LifeEvents extends Overview{
        constructor(
            public worksAt:string[], 
            public studiedAt:string[], 
            public livesIn:string[], 
            public NumberOfFamilyMembers:number, 
            public contactNumber:number[], 
            public dateOfBirth:string,
        ){
             super(worksAt, studiedAt, livesIn, NumberOfFamilyMembers, contactNumber, dateOfBirth)
        }
        
        getBirthEvent = ():string =>{
            return (`Born On: ${this.dateOfBirth}`);
        }
        getGraduationEvent = ():string[1] =>{
            return this.studiedAt[1];
        }
    }
    //An Object of the class LifeEvents 
        let lifeEvents = new LifeEvents(
            userOneOverview.worksAt,
            userOneOverview.studiedAt,
            userOneOverview.livesIn,
            userOneOverview.NumberOfFamilyMembers,
            userOneOverview.contactNumber,
            userOneOverview.dateOfBirth
        )
    //trying to manipulate the properties of the object        
        console.log(lifeEvents.getBirthEvent());
        console.log(`Graduated from: ${lifeEvents.getGraduationEvent()}`);
//Class LifeEvents  ends   