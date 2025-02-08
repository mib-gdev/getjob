import Advantages from '../../components/Advantages/Advantages';
import GetStarted from '../../components/GetStarted/GetStarted';
import Header from '../../components/Header/Header';
import Services from '../../components/Services/Services';
export default function Home() {
    return(
        <>
            <Header />
            <Services />
            <GetStarted />
            <Advantages />
        </>
    );
}