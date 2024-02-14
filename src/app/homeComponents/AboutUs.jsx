"use client";
import React, { useEffect } from "react";
import "../homeComponents/AboutUs.css";

import { Button, Checkbox, Form, Input, } from "antd";
import Select from 'react-select'


const AboutUs = ({ titleWidth, autoMx }) => {
  useEffect(() => {
    const body = document.body;

    body.style.overflow = "hidden";
  }, []);

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };

  // Filter `option.label` match the user type `input`
  const filterOption = (input, option) =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase());
    

    const options = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' }
    ]

  return (
    <div>
      <div
        id="contactUsHomeScrollRef"
        className="pb-10 border-b border-green-400 "
      >
        <div className="text-black">
          <div
            className={`text-xl sm:text-6xl lg:text-5xl text-center w-[100%] pillat-normal ${titleWidth} ${autoMx}`}
          >
            <h2>connect with us today to transform your business</h2>
          </div>
          <div className="text-center text-gray-600 sm:mt-12 mt-4 sm:text-lg lg:text-2xl lg:flex justify-center items-center gap-10 lg:gap-[12vw] pillat-normal ">
            <div>
              <h3>+92 21 3517 1991</h3>
              <p className="text-sm">phone</p>
            </div>
            <div className="">
              <h3>info@symmetrygroup.biz</h3>
              <p className="text-sm">email</p>
            </div>
          </div>
        </div>

        <div className="text-black my-10 mx-5 flex flex-col lg:flex-row lg:justify-center gap-5 lg:mt-16 lg:gap-[5vw] pillat-normal">
          <div className="flex flex-col gap-5 lg:w-[20%]">
            <div className=" border-gray-300 px-3 pb-1">
              <div>
                <h2>first name</h2>
              </div>
              <div className=" mt-3">
                <Form
                  name="basic"
                  labelCol={{
                    span: 8,
                  }}
                  wrapperCol={{
                    span: 16,
                  }}
                  style={{
                    maxWidth: 600,
                  }}
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  <Form.Item
                    // label="Username"
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your name",
                      },
                    ]}
                  >
                    <Input
                      placeholder="enter your first name"
                      style={{
                        borderRadius: "0px",
                        borderRight: "0px",
                        borderTop: "0px",
                        borderLeft: "0px",
                        // width: "260px",
                        marginLeft: "-11px",
                      }}
                      className="w-full lg:w-[220px] xl:w-[280px] 2xl:w-[600px]"
                    />
                  </Form.Item>

                  {/* <Form.Item
                    wrapperCol={{
                      offset: 8,
                      span: 16,
                    }}
                  >
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                  </Form.Item> */}
                </Form>
              </div>
            </div>
            <div className=" border-gray-300 px-3 pb-1">
              <div>
                <h2>last name</h2>
              </div>
              <div className=" mt-3">
                <Form
                  name="basic"
                  labelCol={{
                    span: 8,
                  }}
                  wrapperCol={{
                    span: 16,
                  }}
                  style={{
                    maxWidth: 600,
                  }}
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  <Form.Item
                    // label="Username"
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your last name",
                      },
                    ]}
                  >
                    <Input
                      placeholder="enter your last name"
                      style={{
                        borderRadius: "0px",
                        borderRight: "0px",
                        borderTop: "0px",
                        borderLeft: "0px",
                        // width: "260px",
                        marginLeft: "-11px",
                      }}
                      className="w-full lg:w-[220px] xl:w-[280px] 2xl:w-[600px]"
                    />
                  </Form.Item>

                  {/* <Form.Item
                    wrapperCol={{
                      offset: 8,
                      span: 16,
                    }}
                  >
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                  </Form.Item> */}
                </Form>
              </div>
            </div>
            <div className=" border-gray-300 px-3 pb-1">
              <div>
                <h2>email</h2>
              </div>
              <div className="mt-3">
                <Form
                  name="basic"
                  labelCol={{
                    span: 8,
                  }}
                  wrapperCol={{
                    span: 16,
                  }}
                  style={{
                    maxWidth: 600,
                  }}
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  <Form.Item
                    // label="Username"
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your email",
                      },
                    ]}
                  >
                    <Input
                      placeholder="enter your email"
                      style={{
                        borderRadius: "0px",
                        borderRight: "0px",
                        borderTop: "0px",
                        borderLeft: "0px",
                        // width: "260px",
                        marginLeft: "-11px",
                      }}
                      className="w-full lg:w-[220px] xl:w-[280px] 2xl:w-[600px]"
                    />
                  </Form.Item>

                  {/* <Form.Item
                    wrapperCol={{
                      offset: 8,
                      span: 16,
                    }}
                  >
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                  </Form.Item> */}
                </Form>
              </div>
            </div>

            <div className=" border-gray-300 px-3 pb-1">
              <div>
                <h2>mobile</h2>
              </div>
              <div className="mt-3">
                <Form
                  name="basic"
                  labelCol={{
                    span: 8,
                  }}
                  wrapperCol={{
                    span: 16,
                  }}
                  style={{
                    maxWidth: 600,
                  }}
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  <Form.Item
                    // label="Username"
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your mobile number",
                      },
                    ]}
                  >
                    <Input
                      placeholder="enter your mobile number"
                      style={{
                        borderRadius: "0px",
                        borderRight: "0px",
                        borderTop: "0px",
                        borderLeft: "0px",
                        // width: "260px",
                        marginLeft: "-11px",
                      }}
                      className="w-full lg:w-[220px] xl:w-[280px] 2xl:w-[600px]"
                    />
                  </Form.Item>

                  {/* <Form.Item
                    wrapperCol={{
                      offset: 8,
                      span: 16,
                    }}
                  >
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                  </Form.Item> */}
                </Form>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 lg:w-[20%]">
            <div className=" border-gray-300 px-3 pb-1">
              <div>
                <h2>company</h2>
              </div>
              <div className="mt-3">
                <Form
                  name="basic"
                  labelCol={{
                    span: 8,
                  }}
                  wrapperCol={{
                    span: 16,
                  }}
                  style={{
                    maxWidth: 600,
                  }}
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  <Form.Item
                    // label="Username"
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your company name",
                      },
                    ]}
                  >
                    <Input
                      placeholder="enter your company name"
                      style={{
                        borderRadius: "0px",
                        borderRight: "0px",
                        borderTop: "0px",
                        borderLeft: "0px",
                        // width: "260px",
                        marginLeft: "-11px",
                      }}
                      className="w-full lg:w-[220px] xl:w-[280px] 2xl:w-[600px]"
                    />
                  </Form.Item>

                  {/* <Form.Item
                    wrapperCol={{
                      offset: 8,
                      span: 16,
                    }}
                  >
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                  </Form.Item> */}
                </Form>
              </div>
            </div>

            <div className=" border-gray-300 px-3 pb-1">
              <div>
                <h2>country</h2>
              </div>
              <div className="mt-3">
                <Form
                  name="basic"
                  labelCol={{
                    span: 8,
                  }}
                  wrapperCol={{
                    span: 16,
                  }}
                  style={{
                    maxWidth: 600,
                  }}
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  <Form.Item
                    // label="Username"
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Please choose the country",
                      },
                    ]}
                  >
                      <Select options={options} />

                  </Form.Item>

                  {/* <Form.Item
                    wrapperCol={{
                      offset: 8,
                      span: 16,
                    }}
                  >
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                  </Form.Item> */}
                </Form>
              </div>
            </div>

            <div className=" border-gray-300 px-3 pb-1">
              <div>
                <h2>message</h2>
              </div>
              <div className="mt-3">
                <Form
                  name="basic"
                  labelCol={{
                    span: 8,
                  }}
                  wrapperCol={{
                    span: 16,
                  }}
                  style={{
                    maxWidth: 600,
                  }}
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  <Form.Item
                    // label="Username"
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your message",
                      },
                    ]}
                  >
                    <Input
                      placeholder="type your message"
                      style={{
                        borderRadius: "0px",
                        borderRight: "0px",
                        borderTop: "0px",
                        borderLeft: "0px",
                        // width: "260px",
                        marginLeft: "-11px",
                      }}
                      className="w-full lg:w-[220px] xl:w-[280px] 2xl:w-[600px]"
                    />
                  </Form.Item>

                  {/* <Form.Item
                    wrapperCol={{
                      offset: 8,
                      span: 16,
                    }}
                  >
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                  </Form.Item> */}
                </Form>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-20 ">
          <div className="border border-gray-400 rounded-lg w-40 flex justify-center items-center pillat-normal cursor-pointer lets-discuss-btn">
            <button className="py-2">let's discuss</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
