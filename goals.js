/* intention */
var array1 = new Array(
  "I will",
  "I want to",
  "I am going to",
  "I shall",
  "It is my intent to",
  "I do solemnly swear to",
  "By Grapthar's hammer, by the suns of Worvan, I shall",
  "Among my SMART goals for the coming year is to"
);

/* verb */
array2 = new Array(
  "pretend to care about",
  "comply with this requirement by using",
  "program",
  "implement",
  "document",
  "improve",
  "excel at",
  "equitably bind",
  "seemlessly diverifest",
  "cogno-intellectualize",
  "convert",
  "proselytize",
  "evangelize",
  "interpret",
  "put a pin in",
  "unpack",
  "parking-lot",
  "impact"
);

/* means */
array3 = new Array(
  "nanobots",
  "arbitrary goals",
  "Javascript and SASS",
  "obscene amounts of coffee",
  "as much alcohol as necessary",
  "artificial intelligence",
  "maps",
  "Sitecore",
  "nothing",
  "alternative facts",
  "technolographs",
  "accessibility",
  "process enhancements",
  "goals"
);

/* as measured by */
array4 = new Array(
  "as measured by",
  "whose success will be evaluated via",
  "quantified with",
  "assessed by",
  "guaged under the auspices of",
  "judged according to",
  "calculated by means of",
  "determined relative to",
  "appraised commensurate with",
  "surveyed and ranked as per",
  "as a calculated proportion of"
);

/* method of measurement */
array5 = new Array(
  "alternative data",
  "random numbers",
  "Ouija board",
  "Agile protocols",
  "some schizophrenic dude outside the Starbucks",
  "factoring bus numbers",
  "a couple of style sheets",
  "a certified tea shaman",
  "binding the peoplehooves data to the snuurgenfluuge",
  "uncoupling the Heisenberg compensators",
  "recalibrating the oscillating Franistadt",
  "my mood"
);

/* this is relevant because */
array6 = new Array(
  "I said so",
  "relevance is a little tweeting bird chirping in a meadow. <em>Relevant</em> is a wreath of pretty flowers that smell bad",
  "it's data-driven",
  "it's the Sitecore way",
  "Microsoft said so",
  "of reasons",
  "I'm required to fill out this form",
  "the Angels have the Phone Box",
  "I saw it on a t-shirt",
  "I have to believe it is; if it wasn't, then my life would be a meaningless cascade of pointless... oh, shit",
  "...oh, look! A chicken",
  "it will help me get a job somewhere that doesn't make me do this goals exercise every year",
  "with three I get egg rolls",
  "I talked my boss into thinking it is",
  "someone higher up thinks it's their idea",
  "I heard it through the grapevine"
);

/* completion date */
array7 = new Array(
  "February 31",
  "complicated",
  "somewhere in Azure DevOps",
  "classified",
  "Judgment Day",
  "the 12th of Never",
  "Unification Day",
  "some Tuesday",
  "2525",
  "retirement",
  "one of my birthdays",
  "by the time the US has meaningful gun control",
  "the time the Seattle Mariners win the Super Bowl",
  "the End of Days",
  "the midnight hour, when my love comes tumbling down"
);

/* summary */
array8 = new Array(
  "And so it goes",
  "Good night and good luck",
  "And that's the way it is",
  "Close cover before striking",
  "Considered objectionable by parents of children under sixteen",
  "And they all lived happily ever after",
  "All's well that ends",
  "Engage",
  "Thanks for all the fish",
  "I can't believe you are still reading this",
  "And so it goes",
  "I'm outta here",
  "Please tell me we are done here",
  "Don't forget to drink your Ovaltine",
  "Floss regularly",
  "Don't run with scissors",
  "It is forbidden to urinate into the wind"
);

function GenerateGoals() {
  strRandomizer =
    array1[Math.floor(Math.random() * array1.length)] +
    " " +
    array2[Math.floor(Math.random() * array2.length)] +
    " " +
    array3[Math.floor(Math.random() * array3.length)] +
    ", " +
    array4[Math.floor(Math.random() * array4.length)] +
    " " +
    array5[Math.floor(Math.random() * array5.length)] +
    ".</p> <p>This is relevant because " +
    array6[Math.floor(Math.random() * array6.length)] +
    ".</p> <p>The target completion date for this effort is " +
    array7[Math.floor(Math.random() * array7.length)] +
    ".</p> <p class='fin'>" +
    array8[Math.floor(Math.random() * array8.length)] +
    ".</p> <p class='suggestions'><a href="goals.html" target="vars">See all the variables</a>.</p><p>Suggestions and additions are welcome. <a href='https://github.com/alboss/goals/discussions/1' target='suggestions'>Send me your ideas here</a>.";
  document.getElementById("result").innerHTML = strRandomizer;
}

function listIntent(item) {
  document.getElementById("intention").innerHTML += "<li>" + item + "...</li>";
}
function listVerb(item) {
  document.getElementById("verb").innerHTML += "<li>" + item + "</li>";
}
function listMeans(item) {
  document.getElementById("means").innerHTML += "<li>" + item + "</li>";
}
function listAsMeasuredBy(item) {
  document.getElementById("as-measured-by").innerHTML +=
    "<li>" + item + "</li>";
}
function listMethodOfMeasurement(item) {
  document.getElementById("method-of-measurement").innerHTML +=
    "<li>" + item + "</li>";
}
function listRelevantBecause(item) {
  document.getElementById("relevant-because").innerHTML +=
    "<li>" + item + ".</li>";
}
function listCompletionDate(item) {
  document.getElementById("completion-date").innerHTML +=
    "<li>" + item + "</li>";
}
function listSummary(item) {
  document.getElementById("summary").innerHTML += "<li>" + item + ".</li>";
}