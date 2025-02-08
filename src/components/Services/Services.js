import { Col, Container, Row } from "react-bootstrap";
import './style.css';
import ServiceCard from "./ServiceCard";
import { useEffect, useMemo, useState } from "react";
import { ServiceCardProvider } from "../../context/ServiceCardContext";

export default function Services() {
    const [longestHeaderIndex, setLongestHeaderIndex] = useState(0);
    const services = useMemo(() => [
        {
            order: 1,
            header: 'Hesabı qeydiyyatdan keçirin',
            text: 'Əvvəlcə bir hesab yaratmalısınız'
        },
        {
            order: 2,
            header: 'Cv yükləyin',
            text: 'İş üçün cv-nizi yükləməlisiniz'
        },
        {
            order: 3,
            header: 'İş tapmaq',
            text: 'Uyğun iş atarmağa davam edin'
        },
        {
            order: 4,
            header: 'İşə müraciət edin',
            text: 'Nəhayət iş üçün müraciət edə bilərsiniz'
        }
    ], []);
    useEffect(() => {
        findLognestHeader();
        window.addEventListener('resize', findLognestHeader);
        return () => {
            window.removeEventListener('resize', findLognestHeader);
        };
    }, [services]);
    const findLognestHeader = () => {
        let longestHeader = services[0].header;

        for (let i = 1; i < services.length; i++) {
            if (services[i].header.length > longestHeader.length) {
                setLongestHeaderIndex = services[i].header;
            }
        }
    }
    useEffect(() => {
        
    }, []);
    return(
        <Container fluid="xxl"
            className="py-3 py-lg-4">
            <Row className="bg_service">
                <Col xs={12}>
                    <h4 className="fs_xl fw-bold text-center mb-4 mb-lg-5">
                        Platforma necə işləyir
                    </h4>
                    <Container fluid>
                        <ServiceCardProvider>
                            <Row className="g-3 g-lg-0">
                                {services.map((el, index) => (
                                    <Col 
                                        xs={12} md={6} lg={3}
                                        key={index} >
                                        <ServiceCard 
                                            order={el.order}
                                            header={el.header}
                                            text={el.text}
                                            longestHeaderIndex={longestHeaderIndex} />
                                    </Col>
                                ))}
                            </Row>
                        </ServiceCardProvider>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
}