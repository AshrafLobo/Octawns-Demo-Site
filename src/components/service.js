import React from 'react';

import {
  ServiceTabs,
  ServiceCarousel
} from './component_barrel'

import { useWindowWidth } from '@react-hook/window-size';

const Service = () => {

  const width = useWindowWidth();
  const windowWidth = width < 576 ? <ServiceCarousel /> : <ServiceTabs />;
  return (
    <>
      {windowWidth}
    </>
  );
};

export default Service;