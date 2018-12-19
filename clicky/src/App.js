import React from "react";
// import characters from "./characters.json";
import Wrapper from "./components/Wrapper";
// import Navbar from "./components/Navbar";
import Header from "./components/Header";
import CharacterCard from "./components/CharacterCard";
import Footer from "./components/Footer";



const App = () => (
  <Wrapper>
    {/* <Navbar clickCount={clickCount} totalScore={totalScore} /> */}
    <Header />
    <CharacterCard characters={characters} />
    <Footer />
  </Wrapper>
);

const characters = [
  {
    "id": 1,
    "name": "Barney",
    "image": "./images/barney.jpeg"
  },
  {
    "id": 2,
    "name": "Bart",
    "image": "./images/bart.png"
  },
  {
    "id": 3,
    "name": "Comic Book Guy",
    "image": "./images/comic-book-guy.jpeg"
  },
  {
    "id": 4,
    "name": "Hans Moleman",
    "image": "./images/hans-moleman.jpeg"
  },
  {
    "id": 5,
    "name": "Homer",
    "image": "./images/homer.png"
  },
  {
    "id": 6,
    "name": "Krusty",
    "image": "./images/krusty.png"
  },
  {
    "id": 7,
    "name": "Lisa",
    "image": "./images/lisa.png"
  },
  {
    "id": 8,
    "name": "Marge",
    "image": "./images/marge.png"
  },
  {
    "id": 9,
    "name": "Milhouse",
    "image": "./images/milhouse.png"
  },
  {
    "id": 10,
    "name": "Willie",
    "image": "./images/willie.jpeg"
  },
  {
    "id": 11,
    "name": "Maggie",
    "image": "./images/maggie.jpeg"
  },
  {
    "id": 12,
    "name": "Ralph",
    "image": "./images/ralph.jpeg"
  },
  {
    "id": 13,
    "name": "Apu",
    "image": "./images/apu.png"
  },
  {
    "id": 14,
    "name": "Grandpa",
    "image": "./images/grandpa.png"
  },
  {
    "id": 15,
    "name": "Moe",
    "image": "./images/moe.jpeg"
  },
  {
    "id": 16,
    "name": "Principal Skinner",
    "image": "./images/skinner.jpeg"
  }
];

export default App;
