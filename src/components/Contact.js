import Button from 'react-bootstrap/Button'
import React from 'react'
import Form from 'react-bootstrap/Form'
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2'
import image1 from '../images/imagecontact.jpg'
export default function Contact() {
  const USER_ID = 'user_axlSbTw5emprxSc7Yuu1y'
  const TEMPLATE_ID = 'template_je1j9f9'
  const SERVICE_ID = 'service_f0pt9cg'
  const handleOnSubmit = (e) => {
    e.preventDefault()
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log(result.text)
        Swal.fire({
          icon: `success`,
          title: `הודעה נשלחה בהצלחה , בקרוב אצור איתך קשר`,
        })
      },
      (error) => {
        console.log(error.text)
        Swal.fire({
          icon: `error`,
          title: `Ooops, something went wrong`,
          text: error.text,
        })
      }
    )
    e.target.reset()
  }
  return (
    <div className="contact ">
      <Form className="formContact" onSubmit={handleOnSubmit}>
        <h2>יש לך שאלה? מלא פרטים וניצור איתך קשר!</h2>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            size="sm"
            type="text"
            placeholder="name@example.com"
            name="name"
            id="name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" name="message" id="message" rows={3} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <div className="details">
        <img className="d-block w-100 imgContact" src={image1} />
        <p className="textOnImage">OR COHAVI - PERSONAL TRAINER.</p>
        <p className="textOnImageBottom">אור כוכבי - מאמן מקצועי</p>
      </div>
    </div>
  )
}
