import React from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';


export default () => {
  return (
    <div id="nav-buttons">
      <DropdownButton id="nav-dropdown" className="nav-button" title="MENU" drop="up">
        <Link to="/#pizza"><Dropdown.Item as="button" style={{ color: "#F4F1F4", backgroundColor: "#A6020E" }}>Pizza</Dropdown.Item></Link>
        <Link to="/#thincrust"><Dropdown.Item as="button" style={{ color: "#F4F1F4", backgroundColor: "#A6020E" }}>Thin Crust Pie (Individual)</Dropdown.Item></Link>
        <Link to="/#wholewheat"><Dropdown.Item as="button" style={{ color: "#F4F1F4", backgroundColor: "#A6020E" }}>Whole Wheat Pizza</Dropdown.Item></Link>
        <Link to="/#entrees"><Dropdown.Item as="button" style={{ color: "#F4F1F4", backgroundColor: "#A6020E" }}>Entrees</Dropdown.Item></Link>
        <Link to="/#fish"><Dropdown.Item as="button" style={{ color: "#F4F1F4", backgroundColor: "#A6020E" }}>Fish</Dropdown.Item></Link>
        <Link to="/#vegetarian"><Dropdown.Item as="button" style={{ color: "#F4F1F4", backgroundColor: "#A6020E" }}>Vegetarian</Dropdown.Item></Link>
        <Link to="/#israeli"><Dropdown.Item as="button" style={{ color: "#F4F1F4", backgroundColor: "#A6020E" }}>Israeli Specialties</Dropdown.Item></Link>
        <Link to="/#platters"><Dropdown.Item as="button" style={{ color: "#F4F1F4", backgroundColor: "#A6020E" }}>Platters</Dropdown.Item></Link>
        <Link to="/#specialties"><Dropdown.Item as="button" style={{ color: "#F4F1F4", backgroundColor: "#A6020E" }}>House Specialties</Dropdown.Item></Link>
        <Link to="/#heros"><Dropdown.Item as="button" style={{ color: "#F4F1F4", backgroundColor: "#A6020E" }}>Heros</Dropdown.Item></Link>
        <Link to="/#eggs"><Dropdown.Item as="button" style={{ color: "#F4F1F4", backgroundColor: "#A6020E" }}>Eggs</Dropdown.Item></Link>
        <Link to="/#pita"><Dropdown.Item as="button" style={{ color: "#F4F1F4", backgroundColor: "#A6020E" }}>In A Pita</Dropdown.Item></Link>
        <Link to="/#salads"><Dropdown.Item as="button" style={{ color: "#F4F1F4", backgroundColor: "#A6020E" }}>Salads</Dropdown.Item></Link>
        <Link to="/#soups"><Dropdown.Item as="button" style={{ color: "#F4F1F4", backgroundColor: "#A6020E" }}>Soups</Dropdown.Item></Link>
        <Link to="/#sides"><Dropdown.Item as="button" style={{ color: "#F4F1F4", backgroundColor: "#A6020E" }}>Side Orders</Dropdown.Item></Link>
        <Link to="/#wraps"><Dropdown.Item as="button" style={{ color: "#F4F1F4", backgroundColor: "#A6020E" }}>Wraps</Dropdown.Item></Link>
        <Link to="/#tuna"><Dropdown.Item as="button" style={{ color: "#F4F1F4", backgroundColor: "#A6020E" }}>Tuna</Dropdown.Item></Link>
        <Link to="/#panini"><Dropdown.Item as="button" style={{ color: "#F4F1F4", backgroundColor: "#A6020E" }}>Panini - Hot Pressed Sandwiches</Dropdown.Item></Link>
        <Link to="/#beverages"><Dropdown.Item as="button" style={{ color: "#F4F1F4", backgroundColor: "#A6020E" }}>Beverages</Dropdown.Item></Link>
        <Link to="/#desserts"><Dropdown.Item as="button" style={{ color: "#F4F1F4", backgroundColor: "#A6020E" }}>Desserts</Dropdown.Item></Link>
      </DropdownButton>
      <Link id="nav-button-about" className="nav-button" to="/#about">ABOUT US</Link>
    </div>
  );
}