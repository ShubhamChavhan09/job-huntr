import styled from "styled-components";
import List from "./components/list";
import GlobalStyles from "./globalStyles";

function App() {
  return (
    <Container>
      <GlobalStyles />
      <List />
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;
