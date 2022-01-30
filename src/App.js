import './App.css';
import Header from "./components/header-component/Header";
import Main from "./components/main-component/Main";
import Footer from "./components/footer-component/Footer";
import ContactUsSection from "./components/contact-section-component/ContactUsSection";
import FeaturesSection from "./components/features-components/FeaturesSection";

const App = () => {
    return (
        <body>

        <Header/>
        <Main/>
        <FeaturesSection/>
        <ContactUsSection/>
        <Footer/>

        </body>
    );
}

export default App;
