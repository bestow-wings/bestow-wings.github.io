var stakeholders = [
    {
      name: "Tim Cook",
      organisations: [
        {
          name: "Apple",
          role: "CEO"
        }
      ],
      relationshipOwner: "A. N. Other",
      email: "tim@apple.com",
      phone: "0412 345 678"
    },
    {
      name: "Mark Zuckerberg",
      organisations: [
        {
          name: "Facebook",
          role: "CEO"
        }
      ],
      relationshipOwner: "A. N. Other",
      email: "mark@facebook.com",
      phone: "0412 345 678"
    },
    {
      name: "Jeff Bezos",
      organisations: [
        {
          name: "Amazon",
          role: "CEO"
        }
      ],
      relationshipOwner: "A. N. Other",
      email: "jeff@amazon.com",
      phone: "0412 345 678"
    },
    {
      name: "Reed Hastings",
      organisations: [
        {
          name: "Netflix",
          role: "CEO"
        }
      ],
      relationshipOwner: "A. N. Other",
      email: "reed@netflix.com",
      phone: "0412 345 678"
    },
    {
      name: "Ted Sarandos",
      organisations: [
        {
          name: "Netflix",
          role: "CEO"
        }
      ],
      relationshipOwner: "A. N. Other",
      email: "ted@netflix.com",
      phone: "0412 345 678"
    },
    {
      name: "Sundar Pichai",
      organisations: [
        {
          name: "Alphabet",
          role: "CEO"
        }
      ],
      relationshipOwner: "A. N. Other",
      email: "sundar@alphabet.com",
      phone: "0412 345 678"
    },
    {
      name: "Elon Musk",
      organisations: [
        {
          name: "Tesla",
          role: "CEO"
        },
        {
          name: "Spacex",
          role: "CEO"
        },
        {
          name: "The Boring Company",
          role: "CEO"
        }
      ],
      relationshipOwner: "A. N. Other",
      email: "elon@tesla.com",
      phone: "0412 345 678"
    }
]

export function generateStakeholderData () {
  for (var index in stakeholders) {
    stakeholders[index].key = index;
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