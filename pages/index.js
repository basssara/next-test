import Link from "next/link";
import Head from "next/head";
import A from "../components/A"
import MainContainer from "../components/MainContainer";

const Main = () => {
    return (
        <MainContainer keywords={"Main page"}>
            <div>
                <h1>
                    Main
                </h1>
            </div>
        </MainContainer>
    )
}

export default Main;