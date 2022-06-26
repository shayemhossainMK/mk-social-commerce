import { Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./pages/Contact/Contact";
import AccountSettings from "./pages/Dashboard/AccountSettings/AccountSettings";
import ChangePassword from "./pages/Dashboard/AccountSettings/ChangePassword/ChangePassword";
import PersonalDetails from "./pages/Dashboard/AccountSettings/PersonalDetails/PersonalDetails";
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";
import MakeLink from "./pages/Dashboard/MakeLink/MakeLink";
import MyActivity from "./pages/Dashboard/MyActivity/MyActivity";
import PerformanceReport from "./pages/Dashboard/PerformanceReport/PerformanceReport";
import AtoZ from "./pages/Dashboard/ProfitRates/AtoZ/AtoZ";
import Flatprofit from "./pages/Dashboard/ProfitRates/FlatProfit/FlatProfit";
import Popular from "./pages/Dashboard/ProfitRates/Popular/Popular";
import Profit from "./pages/Dashboard/ProfitRates/Profit/Profit";
import ProfitRates from "./pages/Dashboard/ProfitRates/ProfitRates";
import ReferAndEarn from "./pages/Dashboard/ReferAndEarn/ReferAndEarn";
import Bangla from "./pages/Home/Bangla/Bangla";
import English from "./pages/Home/English/English";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Shared/Login/Login";
import Signup from "./pages/Shared/Signup/Signup";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/bangla" element={<Bangla></Bangla>}></Route>
        <Route path="/english" element={<English></English>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/profitrates" element={<ProfitRates></ProfitRates>}>
          <Route index element={<Popular></Popular>}></Route>
          <Route
            path="/profitrates/popular"
            element={<Popular></Popular>}
          ></Route>
          <Route path="/profitrates/atoz" element={<AtoZ></AtoZ>}></Route>
          <Route path="/profitrates/profit" element={<Profit></Profit>}></Route>
          <Route
            path="/profitrates/flatprofit"
            element={<Flatprofit></Flatprofit>}
          ></Route>
        </Route>
        <Route
          path="/performancereport"
          element={<PerformanceReport></PerformanceReport>}
        ></Route>
        <Route path="/makelink" element={<MakeLink></MakeLink>}></Route>
        <Route
          path="/referandearn"
          element={<ReferAndEarn></ReferAndEarn>}
        ></Route>
        <Route
          path="/accountsettings"
          element={<AccountSettings></AccountSettings>}
        >
          <Route index element={<PersonalDetails></PersonalDetails>}></Route>
          <Route
            path="/accountsettings/personaldetails"
            element={<PersonalDetails></PersonalDetails>}
          ></Route>
          <Route
            path="/accountsettings/changepassword"
            element={<ChangePassword></ChangePassword>}
          ></Route>
        </Route>
        <Route path="/myactivity" element={<MyActivity></MyActivity>}></Route>
      </Routes>
    </div>
  );
}

export default App;
