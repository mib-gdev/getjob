import { useMediaQuery } from 'react-responsive';
import { Form, Input, Checkbox,Button, message } from 'antd';
import { useGoogleLogin } from '@react-oauth/google';
import './style.css';
import { Link } from 'react-router-dom';
import { useNavHeightContext } from '../../context/NavContext';
import { useUserStateContext } from '../../context/UserStateContext';
import { useEffect } from 'react';

export default function Login() {
    // temporary code starts
    const { setUserState } = useUserStateContext();
    useEffect(() => {
        setUserState('authorizing');
    }, []);
    // temporary code ends

    const { navHeight } = useNavHeightContext();
    const isMobile = useMediaQuery({ query: '(max-width: 576px)' });
    const inputClass = "fs_sm inp_style rounded px-4 ps_md_6 pe-4 py-2";
    
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

    const login = useGoogleLogin({
        onSuccess: tokenResponse => console.log(tokenResponse),
        onFailure: tokenError => console.log("Google Login Error", tokenError)
    });
    return(
        <div
            className='login_bg position-absolute top-0 start-0 end-0'
            style={{ paddingTop: navHeight + 'px' }}>
            <div className='container-xxl flex_center flex-column h-100'>
                {/* the white circle */}
                <div className='bg_form w_fit mb-auto mt-5 mt-sm-auto mx-5 mx-md-auto p-2 p-sm-0'>
                    <h3 className='fs_xl text-center mb-4'>
                        Platformamıza {isMobile&& <br />} qoşulun
                    </h3>
                    <button onClick={() => login()}
                    className='bg-transparent py-2 px-4 px_md_6 w-100 rounded border_black d-flex align-items-center'>
                        <img className='pe-4 icon_md' src="/google-color-icon.svg" alt="google icon"/>
                        <span className='fs_md text-start'>Google ilə daxil olun</span>
                    </button>
                    <div className='lines text-center my_4-5'>
                        <span className='px-4 px-sm-5 fs_sm'>və ya</span>
                    </div>
                    <Form
                        form={form}
                        name="basic"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish} // Handles successful submission
                        onFinishFailed={onFinishFailed} // Handles failed submission
                        autoComplete="off"
                        className='d-flex flex-column'
                    >
                        <Form.Item
                            name="email"
                            rules={[{ required: true, type: "email", message: 'E-poçt daxil edin!' }]} // validation
                        >
                            <Input
                                className={inputClass}
                                placeholder="E-poçt"
                                prefix={<img className="pe-4 icon_sm" src="/envelope.jpg" alt="envelope icon" />}
                            />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Şifrə daxil edin!' }]} // validation
                            className='mb-2'
                        >
                            <Input.Password
                                className={inputClass}
                                placeholder="Şifrə"
                                prefix={<img className="pe-4 icon_sm" src="/lock.png" alt="lock icon" />}
                                suffix={<img className="ms-auto icon_sm" src="/eye.png" alt="eye icon" />}
                            />
                        </Form.Item>
                            <div className="d-flex flex-column flex-sm-row justify-content-sm-between align-items-center gap-2 gap-sm-5">
                                <Form.Item name="remember" valuePropName="checked" className="flex_center m-0">
                                    <Checkbox className="me-2">Şifrəmi yadda saxla</Checkbox>
                                </Form.Item>

                                <a className="text_black fs_sm text-center text-sm-start" href="#" target="_blank">
                                    Şifrəni unutmusunuz?
                                </a>
                            </div>
                        <Form.Item>
                            <div className='d-flex'>
                                <Button
                                    className="py-3 px-5 mt-3 mb-2 mx-auto rounded border-0 text-white bg_green w_fit fs_lg"
                                    type="primary"
                                    htmlType="submit"
                                    >
                                    Daxil ol
                                </Button>
                            </div>
                        </Form.Item>
                    </Form>
                    <div className='text-center fs_sm fw-normal pb-4'>
                        <span>Hesabınız yoxdur?</span>
                        <Link className='text_green ps-2' to='/Register'>Qeydiyyatdan keçin</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}