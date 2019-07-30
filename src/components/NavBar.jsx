import React from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { Route } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link';


export default () => {
  return (
    <div id="nav-buttons">
      <DropdownButton id="nav-dropdown" className="nav-button" title="MENU" drop="up">
        <Link to="/#pizza"><Dropdown.Item as="button">Pizza</Dropdown.Item></Link>
        <Link to="/#thincrust"><Dropdown.Item as="button">Thin Crust Pie (Individaul)</Dropdown.Item></Link>
        <Link to="/#wholewheat"><Dropdown.Item as="button">Whole Wheat Pizza</Dropdown.Item></Link>
        <Link to="/#entrees"><Dropdown.Item as="button">Entrees</Dropdown.Item></Link>
        <Link to="/#fish"><Dropdown.Item as="button">Fish</Dropdown.Item></Link>
        <Link to="/#vegetarian"><Dropdown.Item as="button">Vegetarian</Dropdown.Item></Link>
        <Link to="/#israeli"><Dropdown.Item as="button">Israeli Specialties</Dropdown.Item></Link>
        <Link to="/#platters"><Dropdown.Item as="button">Platters</Dropdown.Item></Link>
        <Link to="/#housespecialties"><Dropdown.Item as="button">House Specialities</Dropdown.Item></Link>
        <Link to="/#heros"><Dropdown.Item as="button">Heros</Dropdown.Item></Link>
        <Link to="/#eggs"><Dropdown.Item as="button">Eggs</Dropdown.Item></Link>
        <Link to="/#pita"><Dropdown.Item as="button">In A Pita</Dropdown.Item></Link>
        <Link to="/#salads"><Dropdown.Item as="button">Salads</Dropdown.Item></Link>
        <Link to="/#soups"><Dropdown.Item as="button">Soups</Dropdown.Item></Link>
        <Link to="/#sides"><Dropdown.Item as="button">Side Orders</Dropdown.Item></Link>
        <Link to="/#wraps"><Dropdown.Item as="button">Wraps</Dropdown.Item></Link>
        <Link to="/#tuna"><Dropdown.Item as="button">Tuna</Dropdown.Item></Link>
        <Link to="/#panini"><Dropdown.Item as="button">Panini - Hot Pressed Sandwiches</Dropdown.Item></Link>
        <Link to="/#beverages"><Dropdown.Item as="button">Beverages</Dropdown.Item></Link>
        <Link to="/#desserts"><Dropdown.Item as="button">Desserts</Dropdown.Item></Link>
      </DropdownButton>
      <button id="nav-button-about" className="nav-button">ABOUT US</button>
    </div>
  );
}