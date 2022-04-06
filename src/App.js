import { MyChart } from "./components/chart/Chart";
import Sidebar from "./components/sidebar/Sidebar";
import AppScreen from "./UI/AppScreen";
import ColumnLeft from "./UI/ColumnLeft";
import ColumnRight from "./UI/ColumnRight";
import CoinTabs from "./components/chart/CoinTabs";

function App() {


  return (
    <AppScreen>
      <ColumnLeft>
        <CoinTabs />
        <MyChart />
      </ColumnLeft>
      <ColumnRight>
        <Sidebar />
      </ColumnRight>
    </AppScreen>
  );
}

export default App;
