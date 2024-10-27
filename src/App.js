import { Container } from "react-bootstrap";
import { Navbare } from "./Compenents/Navbare";
import { Header } from "./Compenents/Header";
import { Categories } from "./Compenents/Categories";
import { Cardes } from "./Compenents/Cardes";
import { useState } from "react";
import { Data } from "./Datacardes";
function App() {
  const newArray = (cat) => {
    const filters = Data.filter((items) => items.title === cat);
    useadta(filters);
  };
  const Allarray = () => {
    useadta([...Data]);
  };
  const Alltitle = [...new Set(Data.map((i) => i.title))];
  const searche = (title) => {
    if (title != "") {
      const searches = Data.filter((item) => item.title === title);
      if (searches.length != 0) {
        useadta(searches);
      } else {
        useadta(searches);
      }
    }
  };
  const [data, useadta] = useState(Data);

  return (
    <div>
      <Navbare searche={searche} />
      <Container>
        <Header />
        <Categories
          Allarray={Allarray}
          newArray={newArray}
          Alltitle={Alltitle}
        />
        <Cardes Datacardes={data} />
      </Container>
    </div>
  );
}

export default App;
