TabularTables = {};

Meteor.isClient && Template.registerHelper('TabularTables', TabularTables);

Books.attachSchema(new SimpleSchema({
  student: {
    type: String,
    label: "Student",
    max: 200
  },
  activity: {
    type: String,
    label: "Activity"
  },
  activityPhoto: {
    type: String,
    label: "Upload Picture",
    autoform: {
    afFieldInput: {
      type: "fileUpload",
      collection: "Images"
    }
  }
  },

  activityDate: {
    type: Date,
    label: "Activity Date",
    optional: true
  },
  summary: {
    type: String,
    label: "Brief summary",
    optional: true,
    max: 1000,
    autoform: {
    afFieldInput: {
      type: "textarea",
      rows: 10,
      class: "foo"
    }
  }
  }
}));

TabularTables.Messages = new Tabular.Table({
  name: "MessageList",
  collection: Messages,
  columns: [
    {data: "name", title: "Name"},
    {data: "message", title: "Message"},

  ]
});

TabularTables.Books = new Tabular.Table({
  name: "BookList",
  collection: Books,
  columns: [
    {data: "student", title: "Student"},
    {data: "activity", title: "Activity"},
    {data: "activityDate", title: "Activity Date"},

    {data: "summary", title: "Summary"},
    {
      tmpl: Meteor.isClient && Template.bookCheckOutCell
    }
  ]
});
