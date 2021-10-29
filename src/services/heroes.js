import axios from "axios";

const baseUrl = "https://superheroapi.com/api/10223121061088645";

const getHeroes = (query) => {
  const request = axios.get(`${baseUrl}/search/${query}`);
  return request.then((response) => {
    let heroesToShow = [];
    if (response.data.response === "error") return [];
    else {
      heroesToShow = response.data.results.map((heroToShow) => {
        let hero = {
          id: heroToShow.id,
          name: heroToShow.name,
          powerstats: {
            intelligence: heroToShow.powerstats.intelligence,
            strength: heroToShow.powerstats.strength,
            speed: heroToShow.powerstats.speed,
            durability: heroToShow.powerstats.durability,
            power: heroToShow.powerstats.power,
            combat: heroToShow.powerstats.combat,
          },
          image: heroToShow.image.url,
        };
        return hero;
      });
    }
    return heroesToShow;
  });
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getHeroes };
