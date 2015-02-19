(function(){
Template.body.addContent((function() {
  var view = this;
  return HTML.DIV({
    "class": "container"
  }, HTML.Raw('\n    <header>\n        <h1>Media list</h1>\n        <!-- add a form below the h1 -->\n        <form class="new-task">\n            <input type="text" name="firstName" placeholder="First name">\n            <input type="text" name="lastName" placeholder="Last name">\n            <input type="submit" name="submit">\n        </form>\n    </header>\n\n    '), HTML.TABLE({
    "class": "table"
  }, "\n        ", HTML.CAPTION("Journalists writing about [insert keyword search]"), "\n        ", HTML.THEAD("\n        ", HTML.TR("\n            ", HTML.TH("First Name"), "\n            ", HTML.TH("Last Name"), "\n            ", HTML.TH("Publication"), "\n            ", HTML.TH("Title"), "\n            ", HTML.TH("Email"), "\n            ", HTML.TH("Phone"), "\n        "), "\n        "), "\n        ", HTML.TBODY("\n            ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("journalists"));
  }, function() {
    return [ "\n                ", Spacebars.include(view.lookupTemplate("journalist")), "\n            " ];
  }), "\n        "), "\n    "), "\n\n\n    ", HTML.TABLE({
    "class": "table"
  }, "\n        ", HTML.CAPTION("Events for [insert keyword search]"), "\n        ", HTML.THEAD("\n        ", HTML.TR("\n            ", HTML.TH("Name"), "\n            ", HTML.TH("Date"), "\n            ", HTML.TH("Month"), "\n            ", HTML.TH("Deadline"), "\n            ", HTML.TH("Website"), "\n            ", HTML.TH("City"), "\n            ", HTML.TH("County"), "\n            ", HTML.TH("Continent"), "\n            ", HTML.TH("Description"), "\n            ", HTML.TH("Contact"), "\n        "), "\n        "), "\n        ", HTML.TBODY("\n        ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("industryEvents"));
  }, function() {
    return [ "\n            ", Spacebars.include(view.lookupTemplate("industryEvent")), "\n        " ];
  }), "\n        "), "\n        "), "\n");
}));
Meteor.startup(Template.body.renderToDocument);

Template.__checkName("journalist");
Template["journalist"] = new Template("Template.journalist", (function() {
  var view = this;
  return HTML.TR("\n        ", HTML.TD(Blaze.View(function() {
    return Spacebars.mustache(view.lookup("firstName"));
  })), "\n        ", HTML.TD(Blaze.View(function() {
    return Spacebars.mustache(view.lookup("lastName"));
  })), "\n        ", HTML.TD(Blaze.View(function() {
    return Spacebars.mustache(view.lookup("publication"));
  })), "\n        ", HTML.TD(Blaze.View(function() {
    return Spacebars.mustache(view.lookup("title"));
  })), "\n        ", HTML.TD(Blaze.View(function() {
    return Spacebars.mustache(view.lookup("email"));
  })), "\n        ", HTML.TD(Blaze.View(function() {
    return Spacebars.mustache(view.lookup("phone"));
  })), "\n    ");
}));

Template.__checkName("industryEvent");
Template["industryEvent"] = new Template("Template.industryEvent", (function() {
  var view = this;
  return HTML.TR("\n        ", HTML.TD(Blaze.View(function() {
    return Spacebars.mustache(view.lookup("name"));
  })), "\n        ", HTML.TD(Blaze.View(function() {
    return Spacebars.mustache(view.lookup("date"));
  })), "\n        ", HTML.TD(Blaze.View(function() {
    return Spacebars.mustache(view.lookup("month"));
  })), "\n        ", HTML.TD(Blaze.View(function() {
    return Spacebars.mustache(view.lookup("deadline"));
  })), "\n        ", HTML.TD(Blaze.View(function() {
    return Spacebars.mustache(view.lookup("city"));
  })), "\n        ", HTML.TD(Blaze.View(function() {
    return Spacebars.mustache(view.lookup("country"));
  })), "\n        ", HTML.TD(Blaze.View(function() {
    return Spacebars.mustache(view.lookup("continent"));
  })), "\n        ", HTML.TD(Blaze.View(function() {
    return Spacebars.mustache(view.lookup("details"));
  })), "\n        ", HTML.TD(Blaze.View(function() {
    return Spacebars.mustache(view.lookup("contact"));
  })), "\n    ");
}));

Template.__checkName("task");
Template["task"] = new Template("Template.task", (function() {
  var view = this;
  return HTML.LI(Blaze.View(function() {
    return Spacebars.mustache(view.lookup("text"));
  }));
}));

})();
