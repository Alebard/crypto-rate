import { MyChart } from "./components/chart/Chart";
import Sidebar from "./components/sidebar/Sidebar";
import AppScreen from "./UI/AppScreen";
import ColumnLeft from "./UI/ColumnLeft";
import ColumnRight from "./UI/ColumnRight";
import CoinTabs from "./components/chart/CoinTabs";
import {useEffect} from "react";
import {startChart} from "./API/api";
import {useDispatch} from "react-redux";

function App() {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(startChart());
    },[])

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
