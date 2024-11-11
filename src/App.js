import Header from "./components/Header";
import Main from "./components/Main";
import Slider from "./components/Slider";
import Watch from "./components/Watch";
import Stories from "./components/Stories";
import Tarifs from "./components/Tarifs";
import Download from "./components/Download";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="relative">
            <Header />
            <Main />
            <Slider />
            <Watch />
            <Stories />
            <Tarifs />
            <Download />
            <Footer />
        </div>
    );
}

export default App;
