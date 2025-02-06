import { Form, Input, Button, message } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import {
    Container,
    Row,
    Col,
    Image,
    Stack
} from 'react-bootstrap';
import Slider from 'react-slick';
import './style.css';

export default function Header() {
    const inputClass = "fs_sm rounded-5 px-3 py-2 border-0 text_black placeholder_black";
    const [form] = Form.useForm();

    const onFinish = (values) => {
        // This function will be triggered when the form is successfully submitted.
        message.success('Form submitted successfully!', 3);
        console.log(values); // You can send these values to your server or handle them as needed
    };

    const onFinishFailed = (errorInfo) => {
        // This function will be triggered if the form submission fails.
        console.log('Failed:', errorInfo);
    };

    const settings = {
        infinite: true,
        centerMode: false,  // Disable center mode if not needed
        slidesToShow: 5,    // Default: 5 items displayed
        slidesToScroll: 1,  // Scroll one item at a time
        responsive: [
          {
            breakpoint: 1200,  // For large screens, show 5 items
            settings: {
              slidesToShow: 5,
            },
          },
          {
            breakpoint: 992,  // For medium screens (tablets), show 4 items
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 768,  // For small screens (mobile), show 3 items
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 480,  // For extra small screens, show 1 item
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      };
    
    return(
        <Container
            fluid="xxl"
            className="header_bg">
            <Row>
                <Col
                    xs={12}
                    className="d-flex flex-column"
                    style={{ height: "85vh" }}
                >
                    <h3
                        className="fs_xxl fw-bold shadow_text text-center my-5"
                    >
                        Layihəniz üçün ideal freelancerləri işə götürün
                    </h3>
                    <Form
                        form={form}
                        name="search"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish} // Handles successful submission
                        onFinishFailed={onFinishFailed} // Handles failed submission
                        autoComplete="off"
                        className='d-flex mx-auto ps-1 gap-0 border_green rounded-5 w_fit'
                    >
                        <Form.Item
                            className='mb-0'
                            name="job"
                            // rules={[{ required: true, message: 'İşin adını daxil edin!' }]} // validation
                        >
                            <Input
                                className={inputClass}
                                placeholder="İşin adı"
                                // prefix={<img className="pe-4 icon_sm" src="/briefCase.png" alt="brief case" />}
                            />
                        </Form.Item>
                        <div className="vr bg_green my-2"></div>
                        <Form.Item
                            className='mb-0'
                            name="worker"
                            // rules={[{ required: true, message: 'İşçinin adını daxil edin' }]} // validation
                        >
                            <Input
                                className={inputClass}
                                placeholder="İşçi Tapın"
                                // prefix={<img className="pe-4 icon_sm" src="/gradCap.png" alt="graduation cap" />}
                            />
                        </Form.Item>
                        <Form.Item className='mb-0'>
                            <div className='d-flex'>
                                <Button
                                    className="py-3 ps-3 pe-5 mx-auto rounded-start-0 rounded-end-5 border-0 text-white bg_green w_fit fs_md fw-light"
                                    type="primary"
                                    htmlType="submit"
                                    >
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                    Axtar
                                </Button>
                            </div>
                        </Form.Item>
                    </Form>
                    <Slider
                        {...settings}
                        className="mt-auto"
                    >
                        <Stack className='flex_center'>
                            <Image
                                className="w-75 h-auto"
                                src="kapitalbank-logo.png"
                                alt="kapitalbank" />
                        </Stack>
                        <Stack className='flex_center'>
                            <Image
                                className="w-75 h-auto"
                                src="bankofbaku-logo.png"
                                alt="bankofbaku" />
                        </Stack>
                        <Stack className='flex_center'>
                            <Image
                                className="w-75 h-auto"
                                src="abb-logo.png"
                                alt="abb" />
                        </Stack>
                        <Stack className='flex_center'>
                            <Image
                                className="w-75 h-auto"
                                src="idda-logo.png"
                                alt="idda" />
                        </Stack>
                        <Stack className='flex_center'>
                            <Image
                                className="w-75 h-auto"
                                src="acc-logo.png"
                                alt="acc" />
                        </Stack>
                    </Slider>
                </Col>
            </Row>
        </Container>
    );
}