const colleague = {
  name: "Alice",
  occupation: "Software Developer",
  company: "Dedalus",
  team: "OneED",
};
function newJob(colleague, occupation, company, team) {
  let originalColleague = { ...colleague };
  colleague.occupation = occupation;
  colleague.company = company;
  colleague.team = team === "OneED" ? "Best Team Ever!" : "not OneED!!! :o";
  if (
    colleague.company === originalColleague.company &&
    colleague.team === "Best Team Ever!"
  ) {
    alert("Business as usual");
  } else {
    alert("We will miss you!");
  }
}
newJob(colleague, "Software Developer £££", "Sky", "?");
// Expected: "We will miss you!"
