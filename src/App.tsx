import { Footer } from "./components/Footer/Footer";
import { PageTemplate } from "./components/PageTemplate/PageTemplate";
import { BlogPage } from "./page/BlogPage/BlogPage";
import { PostPage } from "./page/PostPage/PostPage";
import { RegistrationConfirm } from "./page/RegistrationConfirm/RegistrationConfirm";
import { SignUp } from "./page/SignUp/SignUp";
// import { RegistrationConfirm } from "./pages/RegistrationConfirm/RegistrationConfirm";
// import { SignUp } from "./pages/SignUp/SignUp";

export const App = () => {


  return (
    <div>
      <PageTemplate>
        <BlogPage />
        <Footer copirate={"©2022 Blogfolio"} text={"All rights reserved"} />
      </PageTemplate>
    </div>
  );
}