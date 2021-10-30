import { useHistory } from "react-router";
import { Container } from "react-bootstrap";
import { Header } from "../components/Header";
import { Title } from "../components/Title";
import { SearchForm } from "../components/SearchForm";

export function SearchHero() {
  const history = useHistory();

  return (
    <Container className="p-0 w-auto">
      <Header />
      <Title text="Buscar heroe" />
      <Container className="p-0 mt-3">
        <SearchForm history={history} />
      </Container>
    </Container>
  );
}
