
Journalists = new Mongo.Collection("journalists");
IndustryEvents = new Mongo.Collection("industryEvents");
IndustryAwards = new Mongo.Collection("industryAwards");

if (Meteor.isClient) {
  // This code only runs on the client

  Template.body.helpers({
    journalists: function () {
      return Journalists.find({});
    }
    //journalistCount: function () {
      //return "journalistCount";
      //return Journalists.count({});
    });

  Template.body.helpers({
    industryEvents: function () {
      return IndustryEvents.find({});
    }
  });

  Template.body.events({
    "submit .new-task": function (event) {
      // This function is called when the new task form is submitted
      //var text = event.target.text.value;
      console.log('submit new journalist');
      var firstName = event.target.firstName.value;
      var lastName = event.target.lastName.value;
      var publication = event.target.publication.value;

      Journalists.insert({
        firstName: firstName,
        lastName: lastName,
        publication: publication,
        createdAt: new Date() // current time
      });

      // Clear form
      event.target.firstName.value = "";
      event.target.lastName.value = "";
      event.target.publication.value = "";

      // Prevent default form submit
      return false;
    }
  });

  Template.body.helpers({
      industryAwards: function () {
          return industryAwards.find({});
      }
  });
}

var GoogleSpreadsheet = Meteor.npmRequire("google-spreadsheet");

var my_sheet = new GoogleSpreadsheet('1MoChJJULwcTAQ37zxPBHACCcCTi5svXDCp1mTfjWLQ8');

console.log('getSheetData ', getSheetData);

var sheetData = getSheetData();
Journalists.insert({
    firstName: row.first,
    lastName: row.last,
    publication: row.publication,
    createdAt: new Date()
});

//var getRows = Meteor.wrapAsync(getSheetData);

/*
IndustryEvents.insert({
        name: "TechCrunch Disrupt",
        date: new Date(),
        deadline: new Date(),
        website: "www.techcrunchdisrupt.com",
        city: "London",
        country: "UK",
        continent: "Europe",
        description: "Big startup pitching event and conference. Very Silicon Valley",
        contact: "Mike@mbites.com",
        createdAt: new Date()
  });
*/

IndustryAwards.insert({
    name: "British Media Awards",
    date: new Date(),
    deadline: new Date(),
    website: "www.britishmediaawards.co.uk",
    city: "London",
    country: "UK",
    continent: 'Europe',
    description: "Leading media awards in the UK",
    createdAt: new Date()
  });


})