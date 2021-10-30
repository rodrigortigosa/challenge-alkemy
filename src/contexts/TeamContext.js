import React, { createContext, useEffect, useState } from "react";
import { HOME } from "../config/router/paths";

const TeamContext = createContext();

const initialTeam = [
  {
    id: 70,
    name: "Batman",
    powerstats: {
      intelligence: 100,
      strength: 26,
      speed: 27,
      durability: 50,
      power: 47,
      combat: 100,
    },
    alignment: "good",
    image: "https://www.superherodb.com/pictures2/portraits/10/100/639.jpg",
  },
  {
    id: 620,
    name: "Spider-Man",
    powerstats: {
      intelligence: 90,
      strength: 55,
      speed: 67,
      durability: 75,
      power: 74,
      combat: 85,
    },
    alignment: "good",
    image: "https://www.superherodb.com/pictures2/portraits/10/100/133.jpg",
  },
  {
    id: 687,
    name: "Venom",
    powerstats: {
      intelligence: 75,
      strength: 57,
      speed: 65,
      durability: 84,
      power: 86,
      combat: 84,
    },
    alignment: "bad",
    image: "https://www.superherodb.com/pictures2/portraits/10/100/22.jpg",
  },
  {
    id: 370,
    name: "Joker",
    powerstats: {
      intelligence: 100,
      strength: 10,
      speed: 12,
      durability: 60,
      power: 43,
      combat: 70,
    },
    alignment: "bad",
    image: "https://www.superherodb.com/pictures2/portraits/10/100/719.jpg",
  },
  {
    id: 208,
    name: "Darth Vader",
    powerstats: {
      intelligence: 69,
      strength: 48,
      speed: 33,
      durability: 35,
      power: 100,
      combat: 100,
    },
    alignment: "bad",
    image: "https://www.superherodb.com/pictures2/portraits/10/100/10444.jpg",
  },
  {
    id: 644,
    name: "Superman",
    powerstats: {
      intelligence: 94,
      strength: 100,
      speed: 100,
      durability: 100,
      power: 100,
      combat: 85,
    },
    alignment: "good",
    image: "https://www.superherodb.com/pictures2/portraits/10/100/791.jpg",
  },
];

export const TeamProvider = ({ children }) => {
  const [team, setTeam] = useState([]);

  let alignmentGood = 0;
  let alignmentBad = 0;

  if (team.length !== 0) {
    for (let i = 0; i < team.length; i++) {
      if (team[i].alignment === "good" || team[i].alignment === "neutral")
        alignmentGood += 1;
      else alignmentBad += 1;
    }
  }

  function handleAdd(hero, history) {
    if (team.length === 6) alert("El equipo está completo");
    else if (team.find((heroInTeam) => heroInTeam.id === hero.id))
      alert(`${hero.name} ya se encuentra en el equipo`);
    else if (alignmentGood === 3 && hero.alignment === "good")
      alert("Debes agrear un villano");
    else if (alignmentBad === 3 && hero.alignment === "bad")
      alert("Debes agregar un heroe");
    else {
      let array = [hero];
      setTeam(team.concat(array));
      history.push(`${HOME}`);
    }
  }

  function handleDelete(id) {
    setTeam(
      (prevTeam) => (prevTeam = prevTeam.filter((hero) => hero.id !== id))
    );
  }

  useEffect(() => {
    let data = localStorage.getItem("team");
    if (data != null) {
      setTeam(JSON.parse(data));
    } else {
      setTeam(initialTeam);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("team", JSON.stringify(team));
  }, [team]);

  return (
    <TeamContext.Provider value={{ team, setTeam, handleAdd, handleDelete }}>
      {children}
    </TeamContext.Provider>
  );
};

export default TeamContext;
