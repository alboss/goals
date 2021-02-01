/* intention */
var array1 = new Array(
  "I will",
  "I want to",
  "I am going to",
  "I am planning to",
  "I shall",
  "It is my intent to",
  "By my own decree, I shall",
  "With every fiber of my being, I will",
  "Harken unto my pledge; for I pledge to",
  "Hear me, all from mighty to minion, for I am going to",
  "I'm gonna",
  "Hold on to your hat while I",
  "Watch carefully while I",
  "I do solemnly swear to",
  "So, here's the plan: I",
  "Management promised somebody I would",
  "In order to serve our cutomers better, I will",
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
  "boil the ocean",
  "parking-lot",
  "disrupt",
  "drink",
  "smoke",
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
  "goals",
  "a new paradigm",
  "disruption",
  "imaginary hashtags",
  "spores, sporks, spokes, and sparks",
  "things",
  "innuendo",
  "all kinds of stuff",
  "misunderstandings",
  "a loose grip on reality",
  "an impressive array of buzzwords",
  "a Gonkulator"
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
  "surveyed as per",
  "ranked by",
  "enumerated by way of",
  "classified according to",
  "completely misinterpreted because of",
  "mathematicalized using",
  "broken down by",
  "decomposed with the help of",
  "counted using",
  "obfuscated by",
  "made confusing thanks to",
  "clouded with",
  "disguised by",
  "which I will make sound convincing with",
  "dazzing because of",
  "as a computed proportion of"
);

/* method of measurement */
array5 = new Array(
  "alternative data",
  "random numbers",
  "Ouija boards",
  "Agile protocols",
  "some schizophrenic dude outside the Starbucks",
  "factoring bus numbers",
  "a couple of style sheets",
  "a certified tea shaman",
  "binding the peoplehooves data to the snuurgenfluuge",
  "uncoupling the Heisenberg compensators",
  "recalibrating the oscillating Franistadt",
  "a need-to-know scale",
  "dollars",
  "cubits",
  "the PowerPoint slides we already made",
  "adherence to a no-honk guarantee",
  "regret",
  "bitter tears",
  "degrees of suck",
  "counting crows",
  "thread count",
  "drivel",
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
  "it uses as verbs words that are not actual verbs",
  "I'm a little teapot, short and stout",
  "the voices told me so",
  "these boots were made for walking",
  "someone set up us the bomb",
  "I gotta have more cowbell",
  "it's my idea",
  "of a dream I had",
  "...wait, what? Nobody told me it was supposed to be relevant",
  "I think it's what management wants me to think about",
  "it has a logo and a tagline",
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
  "tomorrow",
  "yesterday",
  "when Niagra falls",
  "slightly after the time I cross the border",
  "really something",
  "a point in time",
  "sometime later",
  "not important, really",
  "sometime after everyone forgets that I said I'd do it",
  "every bit as important as the goal itself",
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
  "Hold my beer",
  "All your base are belong to us",
  "We'll always have Paris",
  "We have always been at war with Eastasia",
  "This one goes up to eleven",
  "It's turtles all the way down",
  "I see dead people",
  "You know what? I think life is like a cosmic hamburger, and each of us is just a sesame seed on the middle bun",
  "Be alert. We need more Lerts",
  "It is forbidden to urinate into the wind"
);

function GenerateGoals() {
  strRandomizer =
    "<p>" +
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
    ".</p> </div><div class='suggestions'><p><a href='goals.html' target='vars'>See all the variables</a>.</p><p>Suggestions and additions are welcome. <a href='https://github.com/alboss/goals/discussions/1' target='suggestions'>Send me your ideas here</a>.";
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
