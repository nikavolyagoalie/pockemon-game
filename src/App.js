import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import Footer from "./components/Footer/Footer";
import Img from "../src/assets/bg1.jpg";

const App = () => {
    return (
        <>
            <Header
                title="This is title"
                descr="This is Description!"
            />
            <Layout
                urlBg={Img}
                title="This is title"
                descr="This is Description!"
            />
            <Layout
                colorBg={'red'}
                title="This is title"
                descr="This is Description!"
            />
            <Layout
                urlBg={Img}
                title="This is title"
                descr="This is Description!"
            />
            <Footer
            />

        </>
    );
}

export default App
