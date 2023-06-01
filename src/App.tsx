import { Footer } from "./components/Footer/Footer";
import { PageTemplate } from "./components/PageTemplate/PageTemplate";
import { RegistrationConfirm } from "./page/RegistrationConfirm/RegistrationConfirm";
import { SignUp } from "./page/SignUp/SignUp";
// import { RegistrationConfirm } from "./pages/RegistrationConfirm/RegistrationConfirm";
// import { SignUp } from "./pages/SignUp/SignUp";

export const App = () => {


  return (
    <div>
      <PageTemplate>
        <RegistrationConfirm />
        {/* <RegistrationConfirm /> */}
        <Footer copirate={"©2022 Blogfolio"} text={"All rights reserved"} />
      </PageTemplate>
    </div>
  );
}