import Navbar from "./Navbar";

const Main = (props) => {
    return (
        <>
            <Navbar />
            <div className="container">
                {props.children}
            </div>
        </>
    )
}

export default Main;
