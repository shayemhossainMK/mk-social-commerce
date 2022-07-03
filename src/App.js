import { useAuthState } from "react-firebase-hooks/auth";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import auth from "./firebase.init";
import useAdmin from "./hooks/useAdmin";
import Contact from "./pages/Contact/Contact";
import ContactBangla from "./pages/Contact/ContactBangla";
import AccountSettings from "./pages/Dashboard/AccountSettings/AccountSettings";
import AccountSettingsBangla from "./pages/Dashboard/AccountSettings/AccountSettingsBangla";
import ChangePassword from "./pages/Dashboard/AccountSettings/ChangePassword/ChangePassword";
import ChangePasswordBangla from "./pages/Dashboard/AccountSettings/ChangePassword/ChangePasswordBangla";
import PersonalDetails from "./pages/Dashboard/AccountSettings/PersonalDetails/PersonalDetails";
import PersonalDetailsBangla from "./pages/Dashboard/AccountSettings/PersonalDetails/PersonalDetailsBangla";
import AllUserBangla from "./pages/Dashboard/AllUser/AllUserBangla";
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";
import GetSupport from "./pages/Dashboard/GetSupport/GetSupport";
import GetSupportBangla from "./pages/Dashboard/GetSupport/GetSupportBangla";
import MakeLink from "./pages/Dashboard/MakeLink/MakeLink";
import MakeLinkBangla from "./pages/Dashboard/MakeLink/MakeLinkBangla";
import MyActivity from "./pages/Dashboard/MyActivity/MyActivity";
import MyActivityBangla from "./pages/Dashboard/MyActivity/MyActivitybangla";
import MyEarning from "./pages/Dashboard/MyEarning/MyEarning";
import MyEarningBangla from "./pages/Dashboard/MyEarning/MyEarningBangla";
import PaymentHistory from "./pages/Dashboard/PaymentHistory/PaymentHistory";
import PaymentHistoryBangla from "./pages/Dashboard/PaymentHistory/PaymentHistoryBangla";
import PerformanceReport from "./pages/Dashboard/PerformanceReport/PerformanceReport";
import PerformanceReportBangla from "./pages/Dashboard/PerformanceReport/PerformanceReportBangla";
import PersonalInfoBangla from "./pages/Dashboard/PersonalInfo/PersonalInfoBangla";
import AtoZ from "./pages/Dashboard/ProfitRates/AtoZ/AtoZ";
import AtoZBangla from "./pages/Dashboard/ProfitRates/AtoZ/AtoZBangla";
import Flatprofit from "./pages/Dashboard/ProfitRates/FlatProfit/FlatProfit";
import FlatprofitBangla from "./pages/Dashboard/ProfitRates/FlatProfit/FlatProfitBangla";
import Popular from "./pages/Dashboard/ProfitRates/Popular/Popular";
import PopularBangla from "./pages/Dashboard/ProfitRates/Popular/PopularBangla";
import Profit from "./pages/Dashboard/ProfitRates/Profit/Profit";
import ProfitBangla from "./pages/Dashboard/ProfitRates/Profit/ProfitBangla";
import ProfitRates from "./pages/Dashboard/ProfitRates/ProfitRates";
import ProfitRatesBangla from "./pages/Dashboard/ProfitRates/ProfitRatesBangla";
import ReferAndEarn from "./pages/Dashboard/ReferAndEarn/ReferAndEarn";
import ReferAndEarnBangla from "./pages/Dashboard/ReferAndEarn/ReferAndEarnBangla";
import Bangla from "./pages/Home/Bangla/Bangla";
import English from "./pages/Home/English/English";
import Home from "./pages/Home/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Login from "./pages/Shared/Login/Login";
import LoginBangla from "./pages/Shared/Login/LoginBangla";
import RequireAdmin from "./pages/Shared/RequireAdmin/RequireAdmin";
import RequireAuth from "./pages/Shared/RequireAuth/RequireAuth";
import Signup from "./pages/Shared/Signup/Signup";
import SignupBangla from "./pages/Shared/Signup/SignupBangla";

function App() {
  return (
    <div>
      <Routes>
        {/* This is for english version */}
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
          path="/performancereport"
          element={
            <RequireAuth>
              <PerformanceReport></PerformanceReport>
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
        {/* English version routes end */}

        {/* This is for Bangla version */}
        <Route
          path="/contactbangla"
          element={<ContactBangla></ContactBangla>}
        ></Route>
        <Route
          path="/signupbangla"
          element={<SignupBangla></SignupBangla>}
        ></Route>
        <Route
          path="/loginbangla"
          element={<LoginBangla></LoginBangla>}
        ></Route>

        <Route
          path="/performancereportbangla"
          element={
            <RequireAuth>
              <PerformanceReportBangla></PerformanceReportBangla>
            </RequireAuth>
          }
        ></Route>

        <Route
          path="/profitratesbangla"
          element={
            <RequireAuth>
              <ProfitRatesBangla></ProfitRatesBangla>
            </RequireAuth>
          }
        >
          <Route index element={<AtoZBangla></AtoZBangla>}></Route>
          <Route
            path="/profitratesbangla/popularbangla"
            element={<PopularBangla></PopularBangla>}
          ></Route>
          <Route
            path="/profitratesbangla/atozbangla"
            element={<AtoZBangla></AtoZBangla>}
          ></Route>
          <Route
            path="/profitratesbangla/profitbangla"
            element={<ProfitBangla></ProfitBangla>}
          ></Route>
          <Route
            path="/profitratesbangla/flatprofitbangla"
            element={<FlatprofitBangla></FlatprofitBangla>}
          ></Route>
        </Route>
        <Route
          path="/myearningbangla"
          element={
            <RequireAuth>
              <MyEarningBangla></MyEarningBangla>
            </RequireAuth>
          }
        ></Route>

        <Route
          path="/paymenthistorybangla"
          element={
            <RequireAuth>
              <PaymentHistoryBangla></PaymentHistoryBangla>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/getsupportbangla"
          element={
            <RequireAuth>
              <GetSupportBangla></GetSupportBangla>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/accountsettingsbangla"
          element={
            <RequireAuth>
              <AccountSettingsBangla></AccountSettingsBangla>
            </RequireAuth>
          }
        >
          <Route
            index
            element={<PersonalDetailsBangla></PersonalDetailsBangla>}
          ></Route>
          <Route
            path="/accountsettingsbangla/personaldetailsbangla"
            element={<PersonalDetailsBangla></PersonalDetailsBangla>}
          ></Route>
          <Route
            path="/accountsettingsbangla/changepasswordbangla"
            element={<ChangePasswordBangla></ChangePasswordBangla>}
          ></Route>
        </Route>
        <Route
          path="/myactivitybangla"
          element={
            <RequireAuth>
              <MyActivityBangla></MyActivityBangla>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/referandearnbangla"
          element={
            <RequireAuth>
              <ReferAndEarnBangla></ReferAndEarnBangla>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/makelinkbangla"
          element={
            <RequireAuth>
              <MakeLinkBangla></MakeLinkBangla>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/personalinfo"
          element={
            <RequireAuth>
              <PersonalInfoBangla></PersonalInfoBangla>
            </RequireAuth>
          }
        ></Route>

        <Route
          path="/alluserbangla"
          element={
            <RequireAdmin>
              <AllUserBangla></AllUserBangla>
            </RequireAdmin>
          }
        ></Route>

        {/* Bangla route finish */}

        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
