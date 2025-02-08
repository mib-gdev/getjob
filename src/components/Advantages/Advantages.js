import {
    Container,
    Row,
    Col,
    Image,
    Button,
    Stack,
    Card
} from "react-bootstrap";
import './style.css';
import AdvantageCard from "./AdvantageCard";
import MainAdvantageCard from "./MainAdvantageCard";
import { useMemo } from "react";
import {
    faDiagramProject,
    faUserGear,
    faLayerGroup,
    faUserPlus,
    faPeopleGroup,
    faChartLine,
    faGlobe,
    faComputer,
    faCalendarDays
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Advantages() {
    const advantages = useMemo(() => [
        {
            header: 'Niyə bizim platformadan istifadə etməlisiniz?',
            description: 'Bu platforma sizin üçün ən yaxşı freelancerləri təqdim edim',
            headerIcon: faLayerGroup,
            desIcon: faUserPlus
        },
        {
            header: 'Sizə uyğun reelancerlərlə ideal layihələr yaradın',
            description: 'Həm layihə, həm də işçi baxımından mükəmməl nəticə əldə edin.',
            headerIcon: faDiagramProject,
            desIcon: faPeopleGroup
        },
        {
            header: 'Yaradıcılığınızı göstərmək və uğur qazanmaq üçün ideal layihələr',
            description: 'Bacarıqlarınızı işəgötürənlərə göstərin, uğur qazanmağa başlayın.',
            headerIcon: faChartLine,
            desIcon: faUserGear
        },
    ], []);
    const mainAdv = useMemo(() => [
        {
            icon: faGlobe,
            header: 'Uzaqdan əlaqə'
        },
        {
            icon: faComputer,
            header: 'Evdən iş'
        },
        {
            icon: faCalendarDays,
            header: 'Çevik işlər'
        },
    ], []);
    const rowStyle = useMemo(() => "g-4 g-lg-5 justify-content-center justify-content-lg-start", []);
    return(
        <Container>
            <Row className={rowStyle}>
                <h4 className="fs_xl fw-bold text-center pt-4 mb-4 mt-xxl-auto">
                    Platformanın üstünlükləri
                </h4>
                {advantages.map((el,index) => (
                    <Col xs={12} md={6} lg={4} key={index}>
                        <AdvantageCard 
                            header={el.header}
                            description={el.description}
                            headerIcon={el.headerIcon}
                            desIcon={el.desIcon} />
                    </Col>
                ))}
            </Row>
            <Row className={`${rowStyle} mt-4 mt-lg-5`}>
                {mainAdv.map((el, index) => (
                    <Col xs={12} md={6} lg={4} key={index}>
                        <MainAdvantageCard
                            header={el.header}
                            icon={el.icon} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}