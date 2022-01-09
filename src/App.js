import styled from "styled-components";
import List from "./components/list";
import GlobalStyles from "./globalStyles";
import { StoreProvider } from "./context";
import { reducer, initialState } from "./reducers";

function App() {
  return (
    <Container>
      <StoreProvider reducer={reducer} initialState={initialState}>
        <GlobalStyles />
        <List />
      </StoreProvider>
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
