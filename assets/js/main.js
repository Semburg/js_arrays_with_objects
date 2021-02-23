// let product = {
//     productName: "VW Polo AMG",
//     productPrice: "23000",
//     productYear: 2020,
//     productDescription: function () {console.log("The " + this.productName  +  " costs " + this.productPrice + " and was produced " + this.productYear)}
// }

// product.productDescription()

// let grade = {
//     math: 10,
//     sport: 4,
//     english: 8,
//     js: 11,
//     css:2,
// }
// let sum = 0;
// for(let i in grade){
//     sum+=grade[i];
// }
// console.log(sum)


//*   1_1
console.log("%c---1_1---", "color:yellow")

let europäischeUnion = {

    Griechenland: "(EL)",
    Litauen: "(LT)",
    Portugal: "(PT)",
    Bulgarien: "(BG)",
    Spanien: "(ES)",

    Rumänien: "(RO)",
    Tschechien: "(CZ)",
    Frankreich: "(FR)",
    Ungarn: "(HU)",
    Slowenien: "(SI)",
    Dänemark: "(DK)",
    Kroatien: "(HR)",
    Malta: "(MT)",
    Slowakei: "(SK)",
    Deutschland: "(DE)",
    Italien: "(IT)",
    Finnland: "(FI)",
    Estland: "(EE)",
    Zypern: "(CY)",
    Österreich: "(AT)",
    Schweden: "(SE)",
    Irland: "(IE)",
    Lettland: "(LV)",
    Polen: "(PL)",
    VereinigtesKönigreich: "(UK)",
    BeneluxUnion: {
        Belgien: "(BE)",
        Luxemburg: "(LU)",
        Niederlände: "(NL)",

    },
}
console.log(europäischeUnion)
for (let i in europäischeUnion.BeneluxUnion) {
    if (europäischeUnion[i] == "(BE)" || europäischeUnion[i] == "(NL)" || europäischeUnion[i] == "(LU)") {
        console.log(i)
    }
}
console.log(europäischeUnion.BeneluxUnion)


//*   1_2
console.log("%c---1_2---", "color:yellow")

let person = {
    name: "Burghardt",
    alter: 41,
    sagNameAlter() {
        alert(`My name is ${this.name}, I am ${this.alter} years old.`)
    }
}
console.log(person.name)
console.log(person.alter)
// todo:   Uncomment below for pop-up
// person.sagNameAlter();  

//*   1_4
console.log("%c---1_4---", "color:yellow")
var unsereHaustiere = [
    {
        tiertyp: "Katze",

        names: [
            "Gipsy",
            "Nala",
            "Dinky"
        ]
    },
    {
        tiertyp: "Hunde",
        names: [
            "Knöpfchen",
            "Pinselchen",
            "Droopy"
        ],
        changeDogName(oldName, newName) {
            for (let i in unsereHaustiere[1].names) {
                if (oldName == unsereHaustiere[1].names[i]) {

                    unsereHaustiere[1].names[i] = newName;
                }
            }
        },
    }
];
console.log(unsereHaustiere[0].names[2] + " " + unsereHaustiere[1].names[2])
console.log(unsereHaustiere[1].names)
// changeDogName("Knöpfchen", "Butter")
// todo   "coming later to it"

//*   1_5
console.log("%c---1_5---", "color:yellow")

var unserLager = {
    schreibtisch: {
        schublade: "Hefter"
    },
    schrank: {
        "Obere Schublade": {
            Ordner1: "eine Datei",
            Ordner2: "Geheimnisse"
        },
        "Untere Schublade": "Cola"
    }
};
console.log(unserLager.schrank["Obere Schublade"].Ordner2)
console.log(unserLager.schrank["Untere Schublade"])
console.log(unserLager.schreibtisch.schublade)

//*   1_6
console.log("%c---1_6---", "color:yellow")

var myMusic = [
    {
        kunstler: "The Beatles",
        title: "Abbey Road",
        release_jahr: 1969,
        formate: ["LP", "CD", "MC", "Download"],
        gold: true
    },
    {
        kunstler: "Pink Floyd",
        title: "Dark Side of the Moon",
        release_jahr: 1978,
        formate: ["CS", "CD", "LP", "Download"],
        gold: true
    },
    {
        kunstler: "Led Zeppelin",
        title: "Led Zeppelin IV",
        release_jahr: 1971,
        formate: ["CS", "LP", "Download"],
        gold: true
    },
    {
        kunstler: "Metallica",
        title: "Kill ’Em All und Ride the Lightning",
        release_jahr: 1983,
        formate: ["LP", "CD", "MC", "Download"],
        gold: true
    }
];

let newMusic = new Object();
newMusic.kunstler = "Queen"
newMusic.title = "We will rock you",
    newMusic.release_jahr = 1974,
    newMusic.formate = ["LP", "CD", "MC", "Download"],

    newMusic.gold = true;
console.log(newMusic)
console.log(myMusic)
myMusic.push(newMusic)

console.log(myMusic[0].kunstler)
console.log(myMusic[1].formate[3])
console.log(myMusic[2].release_jahr + " und " + myMusic[3].release_jahr)
console.log(myMusic[3].formate[2])
console.log(myMusic[3].title.slice(17, 22))
console.log(myMusic[2].title.slice(13, 15) + ":")
console.log(myMusic[1].kunstler.substr(5, 5))
console.log(myMusic)

//*   1_7
console.log("%c---1_7---", "color:yellow")

//*  objects from line 142! 
const from1_7 = document.getElementById("from1_7")
for (let i in myMusic) {
    console.log(myMusic[i].kunstler)
    from1_7.innerHTML += myMusic[i].kunstler + " - " + myMusic[i].title + "<br>"

}
for (let i in myMusic) {
    console.log(myMusic[i].formate)
    from1_7.innerHTML += myMusic[i].formate + "<br>"
}

for (let i in myMusic) {
    if (myMusic[i].release_jahr > 1975) {
        from1_7.innerHTML += myMusic[i].release_jahr + "  "
    }
}

//*   1_8
console.log("%c---1_8---", "color:yellow")

var studentData = [
    {
        name: "Alex",
        age: 23,
        coop: false,
        address: {
            street: "Don Valley Business Park",
            city: "Toronto",
            postalCode: "ONM3C3E5"
        },
        emails: ["alex69@gmail.com", "alex123@yahoo.com"]
    },
    {
        name: "Sandra",
        age: 22,
        coop: true,
        address: {
            street: "34 Lawrence Ave",
            city: "Toronto",
            postalCode: "ONM3C0E5"
        },
        emails: ["sandra@gmail.com", "sandra@yahoo.com"],
    },

]

function namesOf(someArray) {
    document.getElementById("from1_8").innerHTML += "<br> "

    for (let i in someArray) {
        console.log(studentData[i].name)
        document.getElementById("from1_8").innerHTML += studentData[i].name + " "
    }
}
function coopOf(someArray) {
    document.getElementById("from1_8").innerHTML += "<br> "

    for (let i in someArray) {
        console.log(studentData[i].coop)
        document.getElementById("from1_8").innerHTML += studentData[i].coop + " "
    }
}
coopOf(studentData)

function cityOf(someArray) {
    document.getElementById("from1_8").innerHTML += "<br> "

    for (let i in someArray) {
        console.log(studentData[i].name)
        document.getElementById("from1_8").innerHTML += studentData[i].address.city + " "
    }
}
cityOf(studentData)

function emailsOf(someArray) {
    document.getElementById("from1_8").innerHTML += "<br> "

    for (let i in someArray) {
        document.getElementById("from1_8").innerHTML += studentData[i].emails + "<br> "

    }
}
namesOf(studentData)
emailsOf(studentData)


//*   2_1
console.log("%c---2_1---", "color:yellow")

var edelMetallPreise = [
    { name: "Gold", preiseGramEuro: 42.91, veranderung: "+0.12%" },
    { name: "Silber", preiseGramEuro: 0.51, veranderung: "+1.02%" },
    { name: "Platin", preiseGramEuro: 25.74, veranderung: "+0.41%" },
    { name: "Palladium", preiseGramEuro: 50.93, veranderung: "0.00%" },
    { name: "Rhodium", preiseGramEuro: 160.12, veranderung: "-0.10%" },
    { name: "Iridium", preiseGramEuro: 42.84, veranderung: "0.00%" },
    { name: "Ruthenium", preiseGramEuro: 7.36, veranderung: "0.00%" },
    { name: "Rhenium", preiseGramEuro: 37.22, veranderung: "-0.53%" },
    { name: "Osmium", preiseGramEuro: 11.54, veranderung: "0.00%" }
];

let newArrayStuff = new Array;
for (let i in edelMetallPreise) {
    console.log(edelMetallPreise[i].name)
    newArrayStuff.push(edelMetallPreise[i].name)
}
console.log(newArrayStuff)

let newArrayStuff2 = newArrayStuff.map(x => x + x);
console.log(newArrayStuff2)
console.log(newArrayStuff)
let newArrayStuff3 = edelMetallPreise.map(x => x.name);
console.log(newArrayStuff3)

let newArrayStuff4 = new Array();
for (let i in edelMetallPreise) {
    console.log(edelMetallPreise[i].preiseGramEuro)
    newArrayStuff4.push(edelMetallPreise[i].preiseGramEuro)
}
console.log(newArrayStuff4)

let newArrayStuff5 = edelMetallPreise.map(x => x.preiseGramEuro);
console.log(newArrayStuff5)

let newArrayStuff6 = edelMetallPreise.map(x => x.veranderung);

console.log(newArrayStuff6)

let newArrayStuff7 = new Array();
for (let i in edelMetallPreise) {
    console.log(edelMetallPreise[i].veranderung)
    newArrayStuff4.push(edelMetallPreise[i].veranderung)
}
console.log(newArrayStuff7)



$(document.getElementById("someTable")).ready(function () {
    $("tr:nth-of-type(1), td:nth-of-type(1)").css("background-color", "yellow");
});

//*   2_2
console.log("%c---2_2---", "color:yellow")

const singers = [
    { name: 'The Beatles', country: 'United Kingdom', period_active: { start: 1960, end: 1970 }, genre: "Rock / Pop" },
    { name: 'Elvis Presley', country: 'United States', period_active: { start: 1954, end: 1977 }, genre: "Rock and roll" },
    { name: 'Michael Jackson', country: 'United States', period_active: { start: 1964, end: 2009 }, genre: "Pop / Rock / Dance / Soul / R&B" },
    { name: 'Elton John', country: 'United Kingdom', period_active: { start: 1964, end: "present" }, genre: "Pop / Rock" },
    { name: 'Madonna', country: 'United States', period_active: { start: 1979, end: "present" }, genre: "Pop / Dance / Electronica" },
    { name: 'Led Zeppelin', country: 'United Kingdom', period_active: { start: 1968, end: 1980 }, genre: "Hard rock / Blues rock / Folk rock" },
    { name: 'Rihanna', country: 'United States', period_active: { start: 2005, end: "present" }, genre: "R&B / Pop / Dance / Hip-hop" },
    { name: 'Pink Floyd', country: 'United Kingdom', period_active: { start: 1965, end: 1996, extra: 2014 }, genre: "Progressive rock / Psychedelic rock" },
];

console.log(singers)

function compare(a, b){
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    let comparison = 0;
    if(nameA>nameB){
        comparison = 1;
    } else if(nameA<nameB){
        comparison = -1
    }
    return comparison;
}
console.log(singers.sort(compare))

