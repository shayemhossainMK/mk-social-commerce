import { Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./pages/Contact/Contact";
import AccountSettings from "./pages/Dashboard/AccountSettings/AccountSettings";
import ChangePassword from "./pages/Dashboard/AccountSettings/ChangePassword/ChangePassword";
import PersonalDetails from "./pages/Dashboard/AccountSettings/PersonalDetails/PersonalDetails";
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";
import GetSupport from "./pages/Dashboard/GetSupport/GetSupport";
import MakeLink from "./pages/Dashboard/MakeLink/MakeLink";
import MyActivity from "./pages/Dashboard/MyActivity/MyActivity";
import MyEarning from "./pages/Dashboard/MyEarning/MyEarning";
import PaymentHistory from "./pages/Dashboard/PaymentHistory/PaymentHistory";
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
import NotFound from "./pages/NotFound/NotFound";
import Login from "./pages/Shared/Login/Login";
import RequireAuth from "./pages/Shared/RequireAuth/RequireAuth";
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
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/profitrates"
          element={
            <RequireAuth>
              <ProfitRates></ProfitRates>
            </RequireAuth>
          }
        >
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
          element={
            <RequireAuth>
              <PerformanceReport></PerformanceReport>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/makelink"
          element={
            <RequireAuth>
              <MakeLink></MakeLink>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/referandearn"
          element={
            <RequireAuth>
              <ReferAndEarn></ReferAndEarn>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/accountsettings"
          element={
            <RequireAuth>
              <AccountSettings></AccountSettings>
            </RequireAuth>
          }
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
        <Route
          path="/myactivity"
          element={
            <RequireAuth>
              <MyActivity></MyActivity>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/getsupport"
          element={
            <RequireAuth>
              <GetSupport></GetSupport>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/paymenthistory"
          element={
            <RequireAuth>
              <PaymentHistory></PaymentHistory>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/myearning"
          element={
            <RequireAuth>
              <MyEarning></MyEarning>
            </RequireAuth>
          }
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
