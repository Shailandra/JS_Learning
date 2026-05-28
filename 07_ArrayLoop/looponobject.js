const books = [
    {
        title: "The Rise of Ancient Civilizations",
        genre: "History",
        publishYear: 1998,
        additionYear: 2020
    },
    {
        title: "English Literature Basics",
        genre: "Education",
        publishYear: 2005,
        additionYear: 2021
    },
    {
        title: "World War Chronicles",
        genre: "History",
        publishYear: 2010,
        additionYear: 2022
    },
    {
        title: "Modern English Grammar",
        genre: "Education",
        publishYear: 2015,
        additionYear: 2023
    },
    {
        title: "The Medieval Kingdoms",
        genre: "History",
        publishYear: 2001,
        additionYear: 2019
    },
    {
        title: "Shakespeare for Beginners",
        genre: "English",
        publishYear: 2008,
        additionYear: 2020
    },
    {
        title: "Ancient Roman Empire",
        genre: "History",
        publishYear: 1995,
        additionYear: 2018
    },
    {
        title: "Advanced English Writing",
        genre: "English",
        publishYear: 2018,
        additionYear: 2024
    },
    {
        title: "History of Asian Cultures",
        genre: "History",
        publishYear: 2012,
        additionYear: 2021
    },
    {
        title: "English Vocabulary Mastery",
        genre: "English",
        publishYear: 2016,
        additionYear: 2022
    },
    {
        title: "The Great Kings and Queens",
        genre: "History",
        publishYear: 2003,
        additionYear: 2020
    },
    {
        title: "Creative English Essays",
        genre: "English",
        publishYear: 2019,
        additionYear: 2024
    },
    {
        title: "Historical Monuments of Europe",
        genre: "History",
        publishYear: 2007,
        additionYear: 2023
    },
    {
        title: "English Communication Skills",
        genre: "English",
        publishYear: 2011,
        additionYear: 2021
    },
    {
        title: "History of Freedom Movements",
        genre: "History",
        publishYear: 2014,
        additionYear: 2022
    }
];

const userBooks = books.filter((bk)=>{ return bk.publishYear >2000  && bk.genre == "History"})
console.log(userBooks)