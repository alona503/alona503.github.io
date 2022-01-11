import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

export default function Menu() {
  return (
    <div className="navBar">
      <Col xs={1}>
        <img
          src="https://alonabudovoi.smugmug.com/My-First-Gallery/n-XDknLM/i-tv5CkF9"
          alt="logo"
          style={{ border: '1px solid blue' }}
        />
      </Col>
      <Col className="menuStyle">
        <Link to="/">Home</Link>
        <Link to="/offers">Offers</Link>
      </Col>
    </div>
  )
}
