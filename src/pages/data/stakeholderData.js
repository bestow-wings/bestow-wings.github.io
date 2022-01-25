var stakeholders = [
    {
      name: "Tim Cook",
      organisations: [
        {
          name: "Apple",
          role: "CEO"
        }
      ]
    },
    {
      name: "Mark Zuckerberg",
      organisations: [
        {
          name: "Facebook",
          role: "CEO"
        }
      ]
    },
    {
      name: "Jeff Bezos",
      organisations: [
        {
          name: "Amazon",
          role: "CEO"
        }
      ]
    },
    {
      name: "Reed Hastings",
      organisations: [
        {
          name: "Netflix",
          role: "CEO"
        }
      ]
    },
    {
      name: "Ted Sarandos",
      organisations: [
        {
          name: "Netflix",
          role: "CEO"
        }
      ]
    },
    {
      name: "Sundar Pichai",
      organisations: [
        {
          name: "Alphabet",
          role: "CEO"
        }
      ]
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
      ]
    }
]

export function generateStakeholderData () {
  return stakeholders.map((e) => {
    e.relationshipOwner = "A. N. Other";
    return e;
  })
}