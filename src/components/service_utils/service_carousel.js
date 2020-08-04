import React from 'react';

import {
  Container,
  Carousel,
} from '../../utils/bootstrap_imports_barrel';

import styles from './service_carousel.module.scss';
import { TabContent } from '../component_barrel';
import useData from '../../utils/useData';

const tab_data = useData.tab_data;

const ServiceCarousel = () => (
  <Container className="p-0" fluid>
    <Carousel className="py-4" controls={false} indicators={false} touch={true}>
      {
        tab_data.map(({ title, icon, image, content }, index) => {
          const key = `item ${index + 1}`;

          return (
            <Carousel.Item key={key} className={styles.carousel_container}>
              <TabContent
                icon={icon}
                image={image}
                title={title}
                content={content}
              />
            </Carousel.Item>
          )
        })
      }
    </Carousel>
  </Container>
);

export default ServiceCarousel;