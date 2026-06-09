const MATCHES = [

  {
    id: "A1",
    group: "A",
    kickoff: "2026-06-11T21:00:00+02:00",
    home: "Mexico",
    away: "South Africa"
  },

  {
    id: "A2",
    group: "A",
    kickoff: "2026-06-12T04:00:00+02:00",
    home: "South Korea",
    away: "Czech Republic"
  },

  {
    id: "A3",
    group: "A",
    kickoff: "2026-06-18T18:00:00+02:00",
    home: "Czech Republic",
    away: "South Africa"
  },

  {
    id: "A4",
    group: "A",
    kickoff: "2026-06-19T03:00:00+02:00",
    home: "Mexico",
    away: "South Korea"
  },

  {
    id: "A5",
    group: "A",
    kickoff: "2026-06-25T03:00:00+02:00",
    home: "Czech Republic",
    away: "Mexico"
  },

  {
    id: "A6",
    group: "A",
    kickoff: "2026-06-25T03:00:00+02:00",
    home: "South Africa",
    away: "South Korea"
  },

  // Group B

{
  id: "B1",
  group: "B",
  kickoff: "2026-06-12T21:00:00+02:00",
  home: "Canada",
  away: "Bosnia & Herzegovina"
},

{
  id: "B2",
  group: "B",
  kickoff: "2026-06-13T21:00:00+02:00",
  home: "Qatar",
  away: "Switzerland"
},

{
  id: "B3",
  group: "B",
  kickoff: "2026-06-18T21:00:00+02:00",
  home: "Switzerland",
  away: "Bosnia & Herzegovina"
},

{
  id: "B4",
  group: "B",
  kickoff: "2026-06-19T00:00:00+02:00",
  home: "Canada",
  away: "Qatar"
},

{
  id: "B5",
  group: "B",
  kickoff: "2026-06-24T21:00:00+02:00",
  home: "Switzerland",
  away: "Canada"
},

{
  id: "B6",
  group: "B",
  kickoff: "2026-06-24T21:00:00+02:00",
  home: "Bosnia & Herzegovina",
  away: "Qatar"
},

// Group C

{
  id: "C1",
  group: "C",
  kickoff: "2026-06-14T00:00:00+02:00",
  home: "Brazil",
  away: "Morocco"
},

{
  id: "C2",
  group: "C",
  kickoff: "2026-06-14T03:00:00+02:00",
  home: "Haiti",
  away: "Scotland"
},

{
  id: "C3",
  group: "C",
  kickoff: "2026-06-20T00:00:00+02:00",
  home: "Scotland",
  away: "Morocco"
},

{
  id: "C4",
  group: "C",
  kickoff: "2026-06-20T03:00:00+02:00",
  home: "Brazil",
  away: "Haiti"
},

{
  id: "C5",
  group: "C",
  kickoff: "2026-06-25T00:00:00+02:00",
  home: "Scotland",
  away: "Brazil"
},

{
  id: "C6",
  group: "C",
  kickoff: "2026-06-25T00:00:00+02:00",
  home: "Morocco",
  away: "Haiti"
},

// Group D

{
  id: "D1",
  group: "D",
  kickoff: "2026-06-13T03:00:00+02:00",
  home: "USA",
  away: "Paraguay"
},

{
  id: "D2",
  group: "D",
  kickoff: "2026-06-14T06:00:00+02:00",
  home: "Australia",
  away: "Turkey"
},

{
  id: "D3",
  group: "D",
  kickoff: "2026-06-19T21:00:00+02:00",
  home: "USA",
  away: "Australia"
},

{
  id: "D4",
  group: "D",
  kickoff: "2026-06-20T06:00:00+02:00",
  home: "Turkey",
  away: "Paraguay"
},

{
  id: "D5",
  group: "D",
  kickoff: "2026-06-26T04:00:00+02:00",
  home: "Turkey",
  away: "USA"
},

{
  id: "D6",
  group: "D",
  kickoff: "2026-06-26T04:00:00+02:00",
  home: "Paraguay",
  away: "Australia"
},

 // Group E

{
  id: "E1",
  group: "E",
  kickoff: "2026-06-14T19:00:00+02:00",
  home: "Germany",
  away: "Curaçao"
},

{
  id: "E2",
  group: "E",
  kickoff: "2026-06-15T01:00:00+02:00",
  home: "Ivory Coast",
  away: "Ecuador"
},

{
  id: "E3",
  group: "E",
  kickoff: "2026-06-20T22:00:00+02:00",
  home: "Germany",
  away: "Ivory Coast"
},

{
  id: "E4",
  group: "E",
  kickoff: "2026-06-21T02:00:00+02:00",
  home: "Ecuador",
  away: "Curaçao"
},

{
  id: "E5",
  group: "E",
  kickoff: "2026-06-25T22:00:00+02:00",
  home: "Curaçao",
  away: "Ivory Coast"
},

{
  id: "E6",
  group: "E",
  kickoff: "2026-06-25T22:00:00+02:00",
  home: "Ecuador",
  away: "Germany"
},

// Group F

{
  id: "F1",
  group: "F",
  kickoff: "2026-06-14T22:00:00+02:00",
  home: "Netherlands",
  away: "Japan"
},

{
  id: "F2",
  group: "F",
  kickoff: "2026-06-15T04:00:00+02:00",
  home: "Sweden",
  away: "Tunisia"
},

{
  id: "F3",
  group: "F",
  kickoff: "2026-06-20T19:00:00+02:00",
  home: "Netherlands",
  away: "Sweden"
},

{
  id: "F4",
  group: "F",
  kickoff: "2026-06-21T06:00:00+02:00",
  home: "Tunisia",
  away: "Japan"
},

{
  id: "F5",
  group: "F",
  kickoff: "2026-06-26T01:00:00+02:00",
  home: "Japan",
  away: "Sweden"
},

{
  id: "F6",
  group: "F",
  kickoff: "2026-06-26T01:00:00+02:00",
  home: "Tunisia",
  away: "Netherlands"
},

// Group G

{
  id: "G1",
  group: "G",
  kickoff: "2026-06-15T21:00:00+02:00",
  home: "Belgium",
  away: "Egypt"
},

{
  id: "G2",
  group: "G",
  kickoff: "2026-06-16T03:00:00+02:00",
  home: "Iran",
  away: "New Zealand"
},

{
  id: "G3",
  group: "G",
  kickoff: "2026-06-21T21:00:00+02:00",
  home: "Belgium",
  away: "Iran"
},

{
  id: "G4",
  group: "G",
  kickoff: "2026-06-22T03:00:00+02:00",
  home: "New Zealand",
  away: "Egypt"
},

{
  id: "G5",
  group: "G",
  kickoff: "2026-06-27T05:00:00+02:00",
  home: "Egypt",
  away: "Iran"
},

{
  id: "G6",
  group: "G",
  kickoff: "2026-06-27T05:00:00+02:00",
  home: "New Zealand",
  away: "Belgium"
},

// Group H

{
  id: "H1",
  group: "H",
  kickoff: "2026-06-15T18:00:00+02:00",
  home: "Spain",
  away: "Cape Verde"
},

{
  id: "H2",
  group: "H",
  kickoff: "2026-06-16T00:00:00+02:00",
  home: "Saudi Arabia",
  away: "Uruguay"
},

{
  id: "H3",
  group: "H",
  kickoff: "2026-06-21T18:00:00+02:00",
  home: "Spain",
  away: "Saudi Arabia"
},

{
  id: "H4",
  group: "H",
  kickoff: "2026-06-22T00:00:00+02:00",
  home: "Uruguay",
  away: "Cape Verde"
},

{
  id: "H5",
  group: "H",
  kickoff: "2026-06-27T02:00:00+02:00",
  home: "Cape Verde",
  away: "Saudi Arabia"
},

{
  id: "H6",
  group: "H",
  kickoff: "2026-06-27T02:00:00+02:00",
  home: "Uruguay",
  away: "Spain"
},

  // Group I

{
  id: "I1",
  group: "I",
  kickoff: "2026-06-16T21:00:00+02:00",
  home: "France",
  away: "Senegal"
},

{
  id: "I2",
  group: "I",
  kickoff: "2026-06-17T00:00:00+02:00",
  home: "Iraq",
  away: "Norway"
},

{
  id: "I3",
  group: "I",
  kickoff: "2026-06-22T23:00:00+02:00",
  home: "France",
  away: "Iraq"
},

{
  id: "I4",
  group: "I",
  kickoff: "2026-06-23T02:00:00+02:00",
  home: "Norway",
  away: "Senegal"
},

{
  id: "I5",
  group: "I",
  kickoff: "2026-06-26T21:00:00+02:00",
  home: "Norway",
  away: "France"
},

{
  id: "I6",
  group: "I",
  kickoff: "2026-06-26T21:00:00+02:00",
  home: "Senegal",
  away: "Iraq"
},

// Group J

{
  id: "J1",
  group: "J",
  kickoff: "2026-06-17T03:00:00+02:00",
  home: "Argentina",
  away: "Algeria"
},

{
  id: "J2",
  group: "J",
  kickoff: "2026-06-17T06:00:00+02:00",
  home: "Austria",
  away: "Jordan"
},

{
  id: "J3",
  group: "J",
  kickoff: "2026-06-22T19:00:00+02:00",
  home: "Argentina",
  away: "Austria"
},

{
  id: "J4",
  group: "J",
  kickoff: "2026-06-23T05:00:00+02:00",
  home: "Jordan",
  away: "Algeria"
},

{
  id: "J5",
  group: "J",
  kickoff: "2026-06-28T04:00:00+02:00",
  home: "Algeria",
  away: "Austria"
},

{
  id: "J6",
  group: "J",
  kickoff: "2026-06-28T04:00:00+02:00",
  home: "Jordan",
  away: "Argentina"
},

// Group K

{
  id: "K1",
  group: "K",
  kickoff: "2026-06-17T19:00:00+02:00",
  home: "Portugal",
  away: "DR Congo"
},

{
  id: "K2",
  group: "K",
  kickoff: "2026-06-18T04:00:00+02:00",
  home: "Uzbekistan",
  away: "Colombia"
},

{
  id: "K3",
  group: "K",
  kickoff: "2026-06-23T19:00:00+02:00",
  home: "Portugal",
  away: "Uzbekistan"
},

{
  id: "K4",
  group: "K",
  kickoff: "2026-06-24T04:00:00+02:00",
  home: "Colombia",
  away: "DR Congo"
},

{
  id: "K5",
  group: "K",
  kickoff: "2026-06-28T01:30:00+02:00",
  home: "Colombia",
  away: "Portugal"
},

{
  id: "K6",
  group: "K",
  kickoff: "2026-06-28T01:30:00+02:00",
  home: "DR Congo",
  away: "Uzbekistan"
},

// Group L

{
  id: "L1",
  group: "L",
  kickoff: "2026-06-17T22:00:00+02:00",
  home: "England",
  away: "Croatia"
},

{
  id: "L2",
  group: "L",
  kickoff: "2026-06-18T01:00:00+02:00",
  home: "Ghana",
  away: "Panama"
},

{
  id: "L3",
  group: "L",
  kickoff: "2026-06-23T22:00:00+02:00",
  home: "England",
  away: "Ghana"
},

{
  id: "L4",
  group: "L",
  kickoff: "2026-06-24T01:00:00+02:00",
  home: "Panama",
  away: "Croatia"
},

{
  id: "L5",
  group: "L",
  kickoff: "2026-06-27T23:00:00+02:00",
  home: "Panama",
  away: "England"
},

{
  id: "L6",
  group: "L",
  kickoff: "2026-06-27T23:00:00+02:00",
  home: "Croatia",
  away: "Ghana"
}

];
