import { Container } from "./components/styles/Container.styled";
import Header from "./components/Header";
import Footer from "./components/Footer";
import content from "./content";
import Card from "./components/Card";

// isReverse = true if index = 0,2,4,6,8

function App() {
  return (
    <div>
      <Header />
      <Container>
        {content.map((item, index) => {
          return <Card key={item.id} {...item} />;
        })}
      </Container>
      <Footer />
    </div>
  );
}

export default App;
