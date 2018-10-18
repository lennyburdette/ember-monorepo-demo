/* eslint-env node */
'use strict';

const DB = [
  {
    "id": "cGVvcGxlOjE=",
    "name": "Luke Skywalker",
    "role": "Manager"
  },
  {
    "id": "cGVvcGxlOjI=",
    "name": "C-3PO",
    "role": "Manager"
  },
  {
    "id": "cGVvcGxlOjM=",
    "name": "R2-D2",
    "role": "Manager"
  },
  {
    "id": "cGVvcGxlOjQ=",
    "name": "Darth Vader",
    "role": "Manager"
  },
  {
    "id": "cGVvcGxlOjU=",
    "name": "Leia Organa",
    "role": "Manager"
  },
  {
    "id": "cGVvcGxlOjY=",
    "name": "Owen Lars",
    "role": "Manager"
  },
  {
    "id": "cGVvcGxlOjc=",
    "name": "Beru Whitesun lars",
    "role": "Manager"
  },
  {
    "id": "cGVvcGxlOjg=",
    "name": "R5-D4",
    "role": "Manager"
  },
  {
    "id": "cGVvcGxlOjk=",
    "name": "Biggs Darklighter",
    "role": "Manager"
  },
  {
    "id": "cGVvcGxlOjEw",
    "name": "Obi-Wan Kenobi",
    "role": "Manager"
  },
  {
    "id": "cGVvcGxlOjEx",
    "name": "Anakin Skywalker",
    "role": "Manager"
  },
  {
    "id": "cGVvcGxlOjEy",
    "name": "Wilhuff Tarkin",
    "role": "Manager"
  },
  {
    "id": "cGVvcGxlOjEz",
    "name": "Chewbacca",
    "role": "Manager"
  },
  {
    "id": "cGVvcGxlOjE0",
    "name": "Han Solo",
    "role": "Manager"
  },
  {
    "id": "cGVvcGxlOjE1",
    "name": "Greedo",
    "role": "Manager"
  },
  {
    "id": "cGVvcGxlOjE2",
    "name": "Jabba Desilijic Tiure",
    "role": "Manager"
  },
  {
    "id": "cGVvcGxlOjE4",
    "name": "Wedge Antilles",
    "role": "Manager"
  },
  {
    "id": "cGVvcGxlOjE5",
    "name": "Jek Tono Porkins",
    "role": "Manager"
  },
  {
    "id": "cGVvcGxlOjIw",
    "name": "Yoda",
    "role": "Manager"
  },
  {
    "id": "cGVvcGxlOjIx",
    "name": "Palpatine",
    "role": "Manager"
  },
  {
    "id": "cGVvcGxlOjIy",
    "name": "Boba Fett",
    "role": "Manager"
  },
  {
    "id": "cGVvcGxlOjIz",
    "name": "IG-88",
    "role": "Manager"
  },
  {
    "id": "cGVvcGxlOjI0",
    "name": "Bossk",
    "role": "Manager"
  },
  {
    "id": "cGVvcGxlOjI1",
    "name": "Lando Calrissian",
    "role": "Manager"
  },
  {
    "id": "cGVvcGxlOjI2",
    "name": "Lobot",
    "role": "Manager"
  },
  {
    "id": "cGVvcGxlOjI3",
    "name": "Ackbar",
    "role": "Manager"
  },
  {
    "id": "cGVvcGxlOjI4",
    "name": "Mon Mothma",
    "role": "Manager"
  },
  {
    "id": "cGVvcGxlOjI5",
    "name": "Arvel Crynyd",
    "role": "Manager"
  },
  {
    "id": "cGVvcGxlOjMw",
    "name": "Wicket Systri Warrick",
    "role": "Manager"
  },
  {
    "id": "cGVvcGxlOjMx",
    "name": "Nien Nunb",
    "role": "Manager"
  },
  {
    "id": "cGVvcGxlOjMy",
    "name": "Qui-Gon Jinn",
    "role": "Manager"
  },
  {
    "id": "cGVvcGxlOjMz",
    "name": "Nute Gunray",
    "role": "Manager"
  },
  {
    "id": "cGVvcGxlOjM0",
    "name": "Finis Valorum",
    "role": "Manager"
  },
  {
    "id": "cGVvcGxlOjM1",
    "name": "Padmé Amidala",
    "role": "Manager"
  },
  {
    "id": "cGVvcGxlOjM2",
    "name": "Jar Jar Binks",
    "role": "Manager"
  },
  {
    "id": "cGVvcGxlOjM3",
    "name": "Roos Tarpals",
    "role": "Manager"
  },
  {
    "id": "cGVvcGxlOjM4",
    "name": "Rugor Nass",
    "role": "Manager"
  },
  {
    "id": "cGVvcGxlOjM5",
    "name": "Ric Olié",
    "role": "Manager"
  },
  {
    "id": "cGVvcGxlOjQw",
    "name": "Watto",
    "role": "Manager"
  },
  {
    "id": "cGVvcGxlOjQx",
    "name": "Sebulba",
    "role": "Manager"
  },
  {
    "id": "cGVvcGxlOjQy",
    "name": "Quarsh Panaka",
    "role": "Manager"
  },
  {
    "id": "cGVvcGxlOjQz",
    "name": "Shmi Skywalker",
    "role": "Manager"
  },
  {
    "id": "cGVvcGxlOjQ0",
    "name": "Darth Maul",
    "role": "Manager"
  },
  {
    "id": "cGVvcGxlOjQ1",
    "name": "Bib Fortuna",
    "role": "Manager"
  },
  {
    "id": "cGVvcGxlOjQ2",
    "name": "Ayla Secura",
    "role": "Manager"
  },
  {
    "id": "cGVvcGxlOjQ3",
    "name": "Ratts Tyerell",
    "role": "Manager"
  },
  {
    "id": "cGVvcGxlOjQ4",
    "name": "Dud Bolt",
    "role": "Manager"
  },
  {
    "id": "cGVvcGxlOjQ5",
    "name": "Gasgano",
    "role": "Manager"
  },
  {
    "id": "cGVvcGxlOjUw",
    "name": "Ben Quadinaros",
    "role": "Manager"
  },
  {
    "id": "cGVvcGxlOjUx",
    "name": "Mace Windu",
    "role": "Manager"
  },
  {
    "id": "cGVvcGxlOjUy",
    "name": "Ki-Adi-Mundi",
    "role": "Manager"
  },
  {
    "id": "cGVvcGxlOjUz",
    "name": "Kit Fisto",
    "role": "Manager"
  },
  {
    "id": "cGVvcGxlOjU0",
    "name": "Eeth Koth",
    "role": "Manager"
  },
  {
    "id": "cGVvcGxlOjU1",
    "name": "Adi Gallia",
    "role": "Manager"
  },
  {
    "id": "cGVvcGxlOjU2",
    "name": "Saesee Tiin",
    "role": "Manager"
  },
  {
    "id": "cGVvcGxlOjU3",
    "name": "Yarael Poof",
    "role": "Manager"
  },
  {
    "id": "cGVvcGxlOjU4",
    "name": "Plo Koon",
    "role": "Manager"
  },
  {
    "id": "cGVvcGxlOjU5",
    "name": "Mas Amedda",
    "role": "Manager"
  },
  {
    "id": "cGVvcGxlOjYw",
    "name": "Gregar Typho",
    "role": "Manager"
  },
  {
    "id": "cGVvcGxlOjYx",
    "name": "Cordé",
    "role": "Manager"
  },
  {
    "id": "cGVvcGxlOjYy",
    "name": "Cliegg Lars",
    "role": "Manager"
  },
  {
    "id": "cGVvcGxlOjYz",
    "name": "Poggle the Lesser",
    "role": "Manager"
  },
  {
    "id": "cGVvcGxlOjY0",
    "name": "Luminara Unduli",
    "role": "Manager"
  },
  {
    "id": "cGVvcGxlOjY1",
    "name": "Barriss Offee",
    "role": "Manager"
  },
  {
    "id": "cGVvcGxlOjY2",
    "name": "Dormé",
    "role": "Manager"
  },
  {
    "id": "cGVvcGxlOjY3",
    "name": "Dooku",
    "role": "Manager"
  },
  {
    "id": "cGVvcGxlOjY4",
    "name": "Bail Prestor Organa",
    "role": "Manager"
  },
  {
    "id": "cGVvcGxlOjY5",
    "name": "Jango Fett",
    "role": "Manager"
  },
  {
    "id": "cGVvcGxlOjcw",
    "name": "Zam Wesell",
    "role": "Manager"
  },
  {
    "id": "cGVvcGxlOjcx",
    "name": "Dexter Jettster",
    "role": "Manager"
  },
  {
    "id": "cGVvcGxlOjcy",
    "name": "Lama Su",
    "role": "Manager"
  },
  {
    "id": "cGVvcGxlOjcz",
    "name": "Taun We",
    "role": "Manager"
  },
  {
    "id": "cGVvcGxlOjc0",
    "name": "Jocasta Nu",
    "role": "Manager"
  },
  {
    "id": "cGVvcGxlOjc1",
    "name": "R4-P17",
    "role": "Manager"
  },
  {
    "id": "cGVvcGxlOjc2",
    "name": "Wat Tambor",
    "role": "Manager"
  },
  {
    "id": "cGVvcGxlOjc3",
    "name": "San Hill",
    "role": "Manager"
  },
  {
    "id": "cGVvcGxlOjc4",
    "name": "Shaak Ti",
    "role": "Manager"
  },
  {
    "id": "cGVvcGxlOjc5",
    "name": "Grievous",
    "role": "Manager"
  },
  {
    "id": "cGVvcGxlOjgw",
    "name": "Tarfful",
    "role": "Manager"
  },
  {
    "id": "cGVvcGxlOjgx",
    "name": "Raymus Antilles",
    "role": "Manager"
  },
  {
    "id": "cGVvcGxlOjgy",
    "name": "Sly Moore",
    "role": "Manager"
  },
  {
    "id": "cGVvcGxlOjgz",
    "name": "Tion Medon",
    "role": "Manager"
  },
  {
    "id": "cGVvcGxlOjg0",
    "name": "Finn",
    "role": "Manager"
  },
  {
    "id": "cGVvcGxlOjg1",
    "name": "Rey",
    "role": "Manager"
  },
  {
    "id": "cGVvcGxlOjg2",
    "name": "Poe Dameron",
    "role": "Manager"
  },
  {
    "id": "cGVvcGxlOjg3",
    "name": "BB8",
    "role": "Manager"
  },
  {
    "id": "cGVvcGxlOjg4",
    "name": "Captain Phasma",
    "role": "Manager"
  }
];

module.exports = function(app) {
  const express = require('express');
  let employeesRouter = express.Router();

  employeesRouter.get('/', function(req, res) {
    res.send({
      'employees': DB
    });
  });

  employeesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  employeesRouter.get('/:id', function(req, res) {
    res.send({
      'employee': DB.find(e => e.id === req.params.id)
    });
  });

  employeesRouter.put('/:id', function(req, res) {
    res.send({
      'employees': {
        id: req.params.id
      }
    });
  });

  employeesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/employees', require('body-parser').json());
  app.use('/api/employees', employeesRouter);
};
