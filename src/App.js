import { MyChart } from "./components/chart/Chart";
import Sidebar from "./components/sidebar/Sidebar";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 1000px;
  height: 700px;
  background-color: #fff;
  box-shadow: 0px 0px 12px 4px rgba(34, 60, 80, 0.2);
  margin: 50px auto;
  border-radius: 10px;
  display: flex;
  align-items: center;
`;

function App() {
  return (
    <Wrapper>
      <MyChart />
      <Sidebar />
    </Wrapper>
  );
}

export default App;
