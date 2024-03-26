import Sidebar from "../components/Sidebar";
import reactDom from "react-dom";
reactDom.render(<Sidebar />, document.getElementById("root"));

const BrowseChurch = () => {
    return(
        <>
            <Sidebar />
        </>
    )
}

export default BrowseChurch;