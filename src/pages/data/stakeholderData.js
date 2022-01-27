var stakeholders = [
    {
      name: "Tim Cook",
      organisations: [
        {
          name: "Apple",
          role: "CEO"
        }
      ],
      relationshipOwner: "A. N. Other"
    },
    {
      name: "Mark Zuckerberg",
      organisations: [
        {
          name: "Facebook",
          role: "CEO"
        }
      ],
      relationshipOwner: "A. N. Other"
    },
    {
      name: "Jeff Bezos",
      organisations: [
        {
          name: "Amazon",
          role: "CEO"
        }
      ],
      relationshipOwner: "A. N. Other"
    },
    {
      name: "Reed Hastings",
      organisations: [
        {
          name: "Netflix",
          role: "CEO"
        }
      ],
      relationshipOwner: "A. N. Other"
    },
    {
      name: "Ted Sarandos",
      organisations: [
        {
          name: "Netflix",
          role: "CEO"
        }
      ],
      relationshipOwner: "A. N. Other"
    },
    {
      name: "Sundar Pichai",
      organisations: [
        {
          name: "Alphabet",
          role: "CEO"
        }
      ],
      relationshipOwner: "A. N. Other"
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
      relationshipOwner: "A. N. Other"
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
    relationshipOwner: ""
  }
}