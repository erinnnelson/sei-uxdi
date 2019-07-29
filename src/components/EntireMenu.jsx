import React from 'react';

import Beverages from './menu-sections/Beverages';
import Desserts from './menu-sections/Desserts';
import Eggs from './menu-sections/Eggs';
import Entrees from './menu-sections/Entrees';
import Fish from './menu-sections/Fish';
import Heros from './menu-sections/Heros';
import HouseSpecialties from './menu-sections/HouseSpecialties';
import InAPita from './menu-sections/InAPita';
import IsraeliSpecialties from './menu-sections/IsraeliSpecialties';
import Panini from './menu-sections/Panini';
import Platters from './menu-sections/Platters';
import Salads from './menu-sections/Salads';
import SideOrders from './menu-sections/SideOrders';
import Soups from './menu-sections/Soups';
import ThinCrustPie from './menu-sections/ThinCrustPie';
import Vegetarian from './menu-sections/Vegetarian';
import WholeWheatPizza from './menu-sections/WholeWheatPizza';
import Wraps from './menu-sections/Wraps';
import Pizza from './menu-sections/Pizza';


export default function EntireMenu() {
  return (
    <>
      <Pizza />
      <ThinCrustPie />
      <WholeWheatPizza />
      <Entrees />
      <Fish />
      <Vegetarian />
      <IsraeliSpecialties />
      <Platters />
      <HouseSpecialties />
      <Heros />
      <Eggs />
      <InAPita />
      <Salads />
      <Soups />
      <SideOrders />
      <Wraps />
      <Panini />
      <Beverages />
      <Desserts />


    </>
  )
}