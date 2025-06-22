import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function seedPersonell() {
    await prisma.personnel.createMany({
        data: [
            {
              "name": "Christian Robertson",
              "baseId": 4
            },
            {
              "name": "Jane Jones",
              "baseId": 2
            },
            {
              "name": "Wendy Howe",
              "baseId": 2
            },
            {
              "name": "Kara Parrish",
              "baseId": 2
            },
            {
              "name": "DavbaseId Spencer",
              "baseId": 3
            },
            {
              "name": "Ryan Wilson",
              "baseId": 2
            },
            {
              "name": "Alexander Rodriguez",
              "baseId": 4
            },
            {
              "name": "Barbara Long",
              "baseId": 4
            },
            {
              "name": "Duane Tucker",
              "baseId": 3
            },
            {
              "name": "Henry Davis",
              "baseId": 1
            },
            {
              "name": "Kayla Vasquez",
              "baseId": 2
            },
            {
              "name": "Robert Henry",
              "baseId": 1
            },
            {
              "name": "Anthony Davis",
              "baseId": 3
            },
            {
              "name": "Yvonne Martinez",
              "baseId": 2
            },
            {
              "name": "Mr. Joseph Lowe MD",
              "baseId": 3
            },
            {
              "name": "Nicole York",
              "baseId": 2
            },
            {
              "name": "Andrew Freeman",
              "baseId": 1
            },
            {
              "name": "Leon Fleming",
              "baseId": 3
            },
            {
              "name": "Andre Graves",
              "baseId": 1
            },
            {
              "name": "James Sanders",
              "baseId": 4
            },
            {
              "name": "Bob Horne",
              "baseId": 3
            },
            {
              "name": "Mrs. Mary Wilson DVM",
              "baseId": 1
            },
            {
              "name": "Matthew Miles Jr.",
              "baseId": 4
            },
            {
              "name": "Valerie Greene",
              "baseId": 2
            },
            {
              "name": "Tracy Thompson",
              "baseId": 2
            },
            {
              "name": "Justin West",
              "baseId": 2
            },
            {
              "name": "Nicole Dunn",
              "baseId": 3
            },
            {
              "name": "Kathryn Ortiz",
              "baseId": 4
            },
            {
              "name": "Ashley White",
              "baseId": 1
            },
            {
              "name": "Ashley Davis",
              "baseId": 1
            },
            {
              "name": "Elizabeth Kelley",
              "baseId": 1
            },
            {
              "name": "Rebecca Crawford",
              "baseId": 2
            },
            {
              "name": "Timothy Gonzalez",
              "baseId": 2
            },
            {
              "name": "Crystal Vasquez",
              "baseId": 4
            },
            {
              "name": "Jonathan Kim",
              "baseId": 1
            },
            {
              "name": "Kenneth Gonzales",
              "baseId": 2
            },
            {
              "name": "Cristina Hunt",
              "baseId": 3
            },
            {
              "name": "Jesse Wilson",
              "baseId": 3
            },
            {
              "name": "Jennifer Williams",
              "baseId": 3
            },
            {
              "name": "Megan Nolan",
              "baseId": 2
            },
            {
              "name": "Nicole Price",
              "baseId": 1
            },
            {
              "name": "Monique Alexander",
              "baseId": 1
            },
            {
              "name": "Bryan Mcknight",
              "baseId": 2
            },
            {
              "name": "Ryan Boyd",
              "baseId": 3
            },
            {
              "name": "Lindsey Welch",
              "baseId": 1
            },
            {
              "name": "Carl Price",
              "baseId": 3
            },
            {
              "name": "Cheryl Cooper",
              "baseId": 1
            },
            {
              "name": "Mark Camacho",
              "baseId": 3
            },
            {
              "name": "Rachel DavbaseIdson",
              "baseId": 3
            },
            {
              "name": "Jason Bush",
              "baseId": 2
            },
            {
              "name": "Brittany Horn",
              "baseId": 3
            },
            {
              "name": "Joshua Watson Jr.",
              "baseId": 4
            },
            {
              "name": "Meredith Finley DDS",
              "baseId": 3
            },
            {
              "name": "Dennis Allen",
              "baseId": 2
            },
            {
              "name": "Charles DavbaseIdson",
              "baseId": 3
            },
            {
              "name": "Lori Adams",
              "baseId": 4
            },
            {
              "name": "Randall Campbell",
              "baseId": 2
            },
            {
              "name": "Henry Cochran",
              "baseId": 4
            },
            {
              "name": "Jeffery Jenkins",
              "baseId": 2
            },
            {
              "name": "Christopher Hobbs",
              "baseId": 2
            },
            {
              "name": "Destiny Sanford",
              "baseId": 4
            },
            {
              "name": "Kevin Alvarez",
              "baseId": 3
            },
            {
              "name": "Philip Cooper",
              "baseId": 3
            },
            {
              "name": "Johnny Roberson",
              "baseId": 2
            },
            {
              "name": "Dustin Gonzalez",
              "baseId": 2
            },
            {
              "name": "Marcia Russell",
              "baseId": 3
            },
            {
              "name": "Jose Rasmussen",
              "baseId": 3
            },
            {
              "name": "Austin Herrera",
              "baseId": 2
            },
            {
              "name": "Patricia Raymond",
              "baseId": 1
            },
            {
              "name": "Judy Adkins",
              "baseId": 1
            },
            {
              "name": "Carol Harrell",
              "baseId": 4
            },
            {
              "name": "Brian Mclaughlin",
              "baseId": 2
            },
            {
              "name": "Penny Aguilar",
              "baseId": 4
            },
            {
              "name": "Julian Shannon",
              "baseId": 4
            },
            {
              "name": "Glen King",
              "baseId": 1
            },
            {
              "name": "Jacob Macdonald",
              "baseId": 4
            },
            {
              "name": "Kelly Grimes",
              "baseId": 1
            },
            {
              "name": "Michelle Alexander",
              "baseId": 1
            },
            {
              "name": "Jade Navarro",
              "baseId": 3
            },
            {
              "name": "Audrey Daugherty",
              "baseId": 1
            },
            {
              "name": "Karen Stevenson",
              "baseId": 4
            },
            {
              "name": "Margaret Curtis",
              "baseId": 3
            },
            {
              "name": "Richard Green",
              "baseId": 2
            },
            {
              "name": "Sabrina Meza",
              "baseId": 3
            },
            {
              "name": "Eddie Peters",
              "baseId": 3
            },
            {
              "name": "Stephen Young",
              "baseId": 3
            },
            {
              "name": "Kayla Jacobs",
              "baseId": 1
            },
            {
              "name": "Elizabeth Smith",
              "baseId": 2
            },
            {
              "name": "DavbaseId Fields",
              "baseId": 2
            },
            {
              "name": "Yvonne James",
              "baseId": 1
            },
            {
              "name": "Suzanne Morrison",
              "baseId": 4
            },
            {
              "name": "Alan Anderson",
              "baseId": 2
            },
            {
              "name": "Laura Stewart",
              "baseId": 2
            },
            {
              "name": "Andrew Odonnell",
              "baseId": 3
            },
            {
              "name": "Alison Pearson",
              "baseId": 2
            },
            {
              "name": "Joshua Greene",
              "baseId": 4
            },
            {
              "name": "Brandy Barnes",
              "baseId": 2
            },
            {
              "name": "Julie Benson",
              "baseId": 2
            },
            {
              "name": "Jonathan Sanchez",
              "baseId": 3
            },
            {
              "name": "Sarah Mccoy",
              "baseId": 2
            },
            {
              "name": "Danny Morales PhD",
              "baseId": 2
            },
            {
              "name": "Donna Brock",
              "baseId": 3
            },
            {
              "name": "Matthew Flores",
              "baseId": 4
            },
            {
              "name": "Holly Santos",
              "baseId": 3
            },
            {
              "name": "Robert Velazquez",
              "baseId": 2
            },
            {
              "name": "Christopher Strong",
              "baseId": 4
            },
            {
              "name": "Mark Martin",
              "baseId": 3
            },
            {
              "name": "John Morgan",
              "baseId": 2
            },
            {
              "name": "Danny Hurst",
              "baseId": 3
            },
            {
              "name": "Justin Coleman",
              "baseId": 2
            },
            {
              "name": "Tamara Porter",
              "baseId": 2
            },
            {
              "name": "Charles Sexton",
              "baseId": 4
            },
            {
              "name": "Brooke Price",
              "baseId": 4
            },
            {
              "name": "Joseph Ortiz",
              "baseId": 3
            },
            {
              "name": "Kelly Higgins",
              "baseId": 4
            },
            {
              "name": "Lori Wilson",
              "baseId": 4
            },
            {
              "name": "Willie Hall",
              "baseId": 2
            },
            {
              "name": "Heather George",
              "baseId": 2
            },
            {
              "name": "Jaime Jennings",
              "baseId": 1
            },
            {
              "name": "John Gregory",
              "baseId": 4
            },
            {
              "name": "Aimee Brown",
              "baseId": 4
            },
            {
              "name": "Paige Howell",
              "baseId": 4
            },
            {
              "name": "Brian Conway",
              "baseId": 2
            },
            {
              "name": "Jessica Wilson",
              "baseId": 1
            },
            {
              "name": "Candice Gates",
              "baseId": 2
            },
            {
              "name": "Andrea Galloway",
              "baseId": 4
            },
            {
              "name": "Cynthia Good",
              "baseId": 3
            },
            {
              "name": "Joel Hardy",
              "baseId": 4
            },
            {
              "name": "DavbaseId Taylor",
              "baseId": 1
            },
            {
              "name": "Jeffery Ortega",
              "baseId": 4
            },
            {
              "name": "Becky Farmer",
              "baseId": 4
            },
            {
              "name": "Cheryl Obrien",
              "baseId": 3
            },
            {
              "name": "Cindy Guerrero",
              "baseId": 1
            },
            {
              "name": "Monica Pittman",
              "baseId": 2
            },
            {
              "name": "Lindsey Brock",
              "baseId": 3
            },
            {
              "name": "Jamie Davis",
              "baseId": 3
            },
            {
              "name": "Nicholas Beasley",
              "baseId": 3
            },
            {
              "name": "Manuel Monroe",
              "baseId": 4
            },
            {
              "name": "Ronnie Maldonado",
              "baseId": 1
            },
            {
              "name": "Adrian Levy",
              "baseId": 2
            },
            {
              "name": "Samantha Henry",
              "baseId": 4
            },
            {
              "name": "Alyssa Bauer",
              "baseId": 3
            },
            {
              "name": "Gabrielle Jones",
              "baseId": 2
            },
            {
              "name": "Allison Hunter",
              "baseId": 3
            },
            {
              "name": "Brandy Gonzales",
              "baseId": 2
            },
            {
              "name": "Michael Moore",
              "baseId": 4
            },
            {
              "name": "Dalton Fields",
              "baseId": 1
            },
            {
              "name": "Ernest Lewis",
              "baseId": 4
            },
            {
              "name": "Mary Bell",
              "baseId": 1
            },
            {
              "name": "Gregory Wong",
              "baseId": 3
            }
          ]
    })
    console.log("Personell seeded")
}

seedPersonell().catch((e) => {
    console.error(e)
    process.exit(1)
}).finally(async () => {
    await prisma.$disconnect()
});