const {faker } = require('@faker-js/faker');
faker.locale = 'en_AU_ocker';

export function generateStakeholderData () {
  var stakeholders = []

  for (let i = 0; i < faker.datatype.number({min: 3, max:10}); i++) {
    let fn = faker.name.firstName();
    let ln = faker.name.lastName();
    let cn = faker.company.companyName();

    let orgs = [{ name: cn, role: faker.name.jobTitle()}];
    for (let i = 0; i < faker.datatype.number(2); i++) {
      orgs.push({
        name: faker.company.companyName(),
        role: faker.name.jobTitle()
      })
    }

    let meetings = [];
    for (let i = 0; i < faker.datatype.number(4); i++) {
      let meetingName = faker.company.bs();
      let meetingNameArr = meetingName.split(" ");
      for (let i = 0; i < meetingNameArr.length; i++) {
        meetingNameArr[i] = meetingNameArr[i].charAt(0).toUpperCase() + meetingNameArr[i].slice(1);
      }
      meetingName = meetingNameArr.join(" ");
      meetings.push({
        title: meetingName,
        owner: faker.name.findName(),
        date: faker.date.future(0.5)
      })
    }
    meetings.sort(function(a,b) {
      return new Date(a.date) - new Date(b.date);
    })

    stakeholders.push({
      key: i,
      name: fn + " " + ln,
      organisations: orgs,
      relationshipOwner: faker.name.firstName() + " " + faker.name.lastName(),
      email: fn + "." + ln + "@" + cn.split(" ")[0].split(",")[0].toLowerCase() + ".com",
      phone: faker.phone.phoneNumber(),
      meetings: meetings,
    })
  }

  return stakeholders;
}

export function blankStakeholder () {
  return {
    key: -1,
    name: "",
    organisations: [
      {
        name: "",
        role: ""
      }
    ],
    relationshipOwner: "",
    email: "",
    phone: ""
  }
}