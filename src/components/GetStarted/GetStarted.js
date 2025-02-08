import {
    Container,
    Row,
    Col,
    Image,
    Button,
    Stack
} from "react-bootstrap";
import './style.css';

export default function GetStarted() {
    return(
        <section className="bg_getStarted">
            <Container fluid="xxl">
                <Row>
                    <Col xs={12} md={6}>
                        <Stack className="py-lg-4">
                            <Image 
                                src="/bg_getStarted.png"
                                alt="making meeting"
                                className="mx-auto mx-md-0 mb-3 mb-md-0" />
                        </Stack>
                    </Col>
                    <Col xs={12} md={6} className="d-flex flex-column py-lg-4">
                        <h4 className="fs_xl fw-bolder text-center mb-2 mt-xxl-auto">
                            Freelancerlər üçün ödənişsiz
                        </h4>
                        <p className="fs_md fw-bold text-center mb-4 mb-lg-5">
                            Müştərilərlə işləmə tərzini əbədi olaraq dəyişməyə hazır olun
                        </p>
                        <Button className="bg_darkGreen border_darkGreen p-2 mx-auto mb-xxl-auto fw-medium fs_lg rounded">
                            İndi Başla
                        </Button>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}