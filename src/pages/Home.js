import "../styles/App.css";
import { Header } from "../components/Header";
import { Title } from "../components/Title";
import { Heroes } from "../components/Heroes";
import { Container } from "react-bootstrap";

export function Home() {
  const team = [
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
      image: "https://www.superherodb.com/pictures2/portraits/10/100/22.jpg",
    },
    {
      id: 213,
      name: "Deadpool",
      powerstats: {
        intelligence: 69,
        strength: 32,
        speed: 50,
        durability: 100,
        power: 100,
        combat: 100,
      },
      image: "https://www.superherodb.com/pictures2/portraits/10/100/835.jpg",
    },
    {
      id: 263,
      name: "Flash",
      powerstats: {
        intelligence: 63,
        strength: 10,
        speed: 100,
        durability: 50,
        power: 68,
        combat: 32,
      },
      image: "https://www.superherodb.com/pictures2/portraits/10/100/891.jpg",
    },
    {
      id: 332,
      name: "Hulk",
      powerstats: {
        intelligence: 88,
        strength: 100,
        speed: 63,
        durability: 100,
        power: 98,
        combat: 85,
      },
      image: "https://www.superherodb.com/pictures2/portraits/10/100/83.jpg",
    },
  ];

  return (
    <Container className="w-auto">
      <Header />
      <Title text="Equipo" />
      <Heroes heroes={team} />
    </Container>
  );
}
