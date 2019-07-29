import React from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap';


export default () => {
  return (
    <div id="nav-buttons">
      <DropdownButton id="nav-dropdown" className="nav-button" title="MENU" drop="up">
        <Dropdown.Item as="button">Pizza</Dropdown.Item>
        <Dropdown.Item as="button">Thin Crust Pie (Individaul)</Dropdown.Item>
        <Dropdown.Item as="button">Whole Wheat Pizza</Dropdown.Item>
        <Dropdown.Item as="button">Entrees</Dropdown.Item>
        <Dropdown.Item as="button">Fish</Dropdown.Item>
        <Dropdown.Item as="button">Vegetarian</Dropdown.Item>
        <Dropdown.Item as="button">Israeli Specialties</Dropdown.Item>
        <Dropdown.Item as="button">Platters</Dropdown.Item>
        <Dropdown.Item as="button">House Specialities</Dropdown.Item>
        <Dropdown.Item as="button">Heros</Dropdown.Item>
        <Dropdown.Item as="button">Eggs</Dropdown.Item>
        <Dropdown.Item as="button">In A Pita</Dropdown.Item>
        <Dropdown.Item as="button">Salads</Dropdown.Item>
        <Dropdown.Item as="button">Soups</Dropdown.Item>
        <Dropdown.Item as="button">Side Orders</Dropdown.Item>
        <Dropdown.Item as="button">Wraps</Dropdown.Item>
        <Dropdown.Item as="button">Tuna</Dropdown.Item>
        <Dropdown.Item as="button">Panini - Hot Pressed Sandwiches</Dropdown.Item>
        <Dropdown.Item as="button">Beverages</Dropdown.Item>
        <Dropdown.Item as="button">Desserts</Dropdown.Item>
      </DropdownButton>
      <button id="nav-button-about" className="nav-button">ABOUT US</button>
    </div>
  );
}