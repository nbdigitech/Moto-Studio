import emailjs from "@emailjs/browser";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { apipath } from "../pages/api/apiPath";
import ButtonLight from "./button/ButtonLight";

function ContactForm() {
  const [msg, setMsg] = useState("");
  const [inputText, setInputText] = useState({
    first_name: "",
    last_name: "",
    email: "",
    subject: "",
    message: "",
  });
  const router = useRouter();

  const [inputTextGrievance, setInputTextGrievance] = useState({
    first_name_grievance: "",
    last_name_grievance: "",
    email_grievance: "",
    grievance_grievance: "",
    message_grievance: "",
  });

  const { first_name, last_name, email, subject, message } = inputText;

  const {
    first_name_grievance,
    last_name_grievance,
    email_grievance,
    grievance_grievance,
    message_grievance,
  } = inputTextGrievance;

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setInputText((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const changeHandlerGrievance = (e) => {
    const { name, value } = e.target;
    setInputTextGrievance((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const [grievCat, setGrievCat] = useState([]);

  const submitEvent = async (e) => {
    e.preventDefault();
    try {
      if (first_name && last_name && email && subject && message) {
        const response = await fetch("/api/contact", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(inputText),
        });
        const jsonData = await response.json();
        console.log(jsonData);
        if (jsonData.contactForm) {
          setMsg("Your Query has been Sent Successfully");
          setInputText({
            first_name: "",
            last_name: "",
            email: "",
            subject: "",
            message: "",
          });
          sendEmail(jsonData);
          sendEmail2(jsonData);
          setTimeout(() => {
            router.push("/thankyou");
          }, 2000);
        }
      } else {
        alert("All field is required");
        return false;
      }
    } catch (error) {
      console.log(error);
    }
  };
  const sendEmail = (result) => {
    console.log(result);
    var templatePrams = {
      to_email: result.contactForm.email,
      to_name: result.contactForm.first_name,
      content:
        "Your Contact request has been Sucessfully registered, we will reach you shortly",
    };
    emailjs
      .send(
        "service_bm4ik2t",
        "template_hnpif37",
        templatePrams,
        "jUEhdpTCUgLCMTHkC"
      )
      .then(
        (result) => {
          console.log(result, "success");
        },
        (error) => {
          console.log(error, "error");
        }
      );
  };
  const sendEmail2 = (result) => {
    console.log(result);
    var templatePrams = {
      mailFrom: result.contactForm.email,
      userName: result.contactForm.first_name,
      mobile: result.contactForm.last_name,
      content: result.contactForm.message,
      subject: result.contactForm.subject,
    };
    emailjs
      .send(
        "service_bm4ik2t",
        "template_tvohnwq",
        templatePrams,
        "jUEhdpTCUgLCMTHkC"
      )
      .then(
        (result) => {
          console.log(result, "success");
        },
        (error) => {
          console.log(error, "error");
        }
      );
  };
  const submitEventGrievance = async (e) => {
    e.preventDefault();
    try {
      if (
        first_name_grievance &&
        last_name_grievance &&
        email_grievance &&
        grievance_grievance &&
        message_grievance
      ) {
        const response = await fetch(
          apipath + "/api/v1/grievance_category/user/create",
          {
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(inputTextGrievance),
          }
        );
        console.log("created......");
        const jsonData = await response.json();
        if (jsonData.data) {
          console.log("created123......");
          console.log(`Data is: `, jsonData.dat);
          setMsg("Your Query has been Sent Successfully");
          setInputTextGrievance({
            first_name_grievance: "",
            last_name_grievance: "",
            email_grievance: "",
            grievance_grievance: "",
            message_grievance: "",
          });
        }
      } else {
        alert("All field is required");
        return false;
      }
    } catch (error) {
      console.log(error);
    }
  };
  // ref
  const ContactUsTab = useRef(null);
  const GrievanceTab = useRef(null);

  const selectTabs = (e, tab) => {
    console.log("select tab working....");
    if (tab === "contact-us") {
      console.log("contact us tab working....");
      GrievanceTab.current.classList.remove("shiftToNeutralForm");
      ContactUsTab.current.classList.remove("shiftToLeft");
    }
    if (tab === "grievance") {
      console.log("grievance tab working....");
      GrievanceTab.current.classList.add("shiftToNeutralForm");
      ContactUsTab.current.classList.add("shiftToLeft");
    }
  };

  // material ui select option
  const [grievance, setGrievance] = useState("");
  const handleChange = (event) => {
    setGrievance(event.target.value);
  };

  const [index, setIndex] = useState(0);
  const handleChangeNum = (event) => {
    setIndex(event.target.value);
    if (event.target.value === 1) {
      selectTabs(event, "contact-us");
    } else {
      selectTabs(event, "grievance");
    }
  };

  return (
    <>
      <div className="contact-container">
        <div className="container-fluid contact">
          <Container
            className="demo1"
            style={{
              display: "flex ",
              alignItems: "center",
              justifyContent: "end",
            }}
          >
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59510.503137682186!2d81.62783833577852!3d21.215725439606523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dd4b51b6bc55%3A0x15861f4804a3f788!2sMoto%20Studio!5e0!3m2!1sen!2sin!4v1667365884657!5m2!1sen!2sin"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="iframe"
              />
            </div>
          </Container>
          <Container className="demo1" style={{}}>
            <div>
              {index === 1 ? (
                <h1 className="Contact-Us-heading mt-5 fs-2 ">
                  Support & Feedback
                </h1>
              ) : index === 2 ? (
                <h1 className="Contact-Us-heading mt-5 fs-2 ">Grievances</h1>
              ) : (
                <h1 className="Contact-Us-heading mt-5 fs-2 ">Contact Us</h1>
              )}
              <hr className="contact-form-hr mx-auto mb-4" />
              <p className="contact-para mt-4">
                If you have any questions we are all ears!
              </p>
            </div>

            <div className="text-center text-success text-bold fw-bold my-3">
              {msg}
            </div>
            <div className="maxheight">
              <Form className="Contact-Us-form pt-4 mt-1" ref={ContactUsTab}>
                <Row>
                  <Col md={12} lg={6}>
                    <Form.Label className=" fw-bold pt-3">
                      First name
                    </Form.Label>
                    <Form.Control
                      className="Contact-Us-form-input  "
                      placeholder="Enter your first name here"
                      name="first_name"
                      value={first_name}
                      onChange={changeHandler}
                    />
                  </Col>
                  <Col md={12} lg={6}>
                    <Form.Label className=" fw-bold pt-3 ">
                      Mobile Number
                    </Form.Label>
                    <Form.Control
                      className=" Contact-Us-form-input  "
                      placeholder="Enter your Mobile Number here"
                      name="last_name"
                      value={last_name}
                      onChange={changeHandler}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col md={12} lg={6}>
                    <Form.Label className=" fw-bold pt-3">
                      Email Address
                    </Form.Label>
                    <Form.Control
                      className=" Contact-Us-form-input  "
                      placeholder="Enter your email address here"
                      name="email"
                      value={email}
                      onChange={changeHandler}
                    />
                  </Col>
                  <Col md={12} lg={6}>
                    <Form.Label className=" fw-bold pt-3">Subject</Form.Label>
                    <Form.Control
                      className=" Contact-Us-form-input  "
                      placeholder="Enter your subject here"
                      name="subject"
                      value={subject}
                      onChange={changeHandler}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Label className=" fw-bold pt-3">Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      className=" Contact-Us-form-input  "
                      placeholder="Write your messages in here"
                      name="message"
                      value={message}
                      onChange={changeHandler}
                      style={{ height: "229px" }}
                    />
                  </Col>
                </Row>
                <div
                  className="contac-sent-message text-center mt-3"
                  onClick={submitEvent}
                >
                  <ButtonLight onClick={submitEvent} text="SEND MESSAGE" />
                </div>
              </Form>

              {/* Grievance user form data*/}
              <Form className="Contact-Us-form pt-5" ref={GrievanceTab}>
                <Row>
                  <Col md={12} lg={6}>
                    <Form.Label className=" fw-bold ">First name</Form.Label>
                    <Form.Control
                      className=" Contact-Us-form-input  "
                      placeholder="Enter your first name here"
                      name="first_name_grievance"
                      value={first_name_grievance}
                      onChange={changeHandlerGrievance}
                    />
                  </Col>
                  <Col md={12} lg={6}>
                    <Form.Label className=" fw-bold ">Mobile Number</Form.Label>
                    <Form.Control
                      className=" Contact-Us-form-input  "
                      placeholder="Enter your Mobile Number here"
                      name="last_name_grievance"
                      value={last_name_grievance}
                      onChange={changeHandlerGrievance}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col md={12} lg={6}>
                    <Form.Label className="fw-bold pt-3">
                      Email Address
                    </Form.Label>
                    <Form.Control
                      className=" Contact-Us-form-input  "
                      placeholder="Enter your email address here"
                      name="email_grievance"
                      value={email_grievance}
                      onChange={changeHandlerGrievance}
                    />
                  </Col>

                  <Col md={12} lg={6}>
                    <Form.Label className="fw-bold pt-3">Category</Form.Label>
                    <FormControl className="category-minwidth col-12">
                      <InputLabel id="demo-simple-select-autowidth-label">
                        Category
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        name="grievance_grievance"
                        value={grievance_grievance}
                        onChange={changeHandlerGrievance}
                        // autoWidth
                        label="Category"
                      >
                        {grievCat.length &&
                          grievCat.map((cat, index) => {
                            return (
                              <MenuItem value={cat._id} key={index}>
                                {cat.name}
                              </MenuItem>
                            );
                          })}
                      </Select>
                    </FormControl>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Label className=" fw-bold pt-3">Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      className=" Contact-Us-form-input  "
                      placeholder="Write your messages in here"
                      name="message_grievance"
                      value={message_grievance}
                      onChange={changeHandlerGrievance}
                      style={{ height: "229px" }}
                    />
                  </Col>
                </Row>
                <div
                  className="contac-sent-message text-center mt-3"
                  onClick={submitEventGrievance}
                >
                  <ButtonLight
                    onClick={submitEventGrievance}
                    text="SEND GRIEVANCE"
                  />
                </div>
              </Form>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
