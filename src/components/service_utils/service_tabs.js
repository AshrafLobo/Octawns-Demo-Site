import React from 'react';
import styles from './service_tabs.module.scss';

import { TabContent } from '../component_barrel';

import {
  Tab,
  Tabs,
  Row,
  Col,
} from '../../utils/bootstrap_imports_barrel';

import useData from '../../utils/useData';

const tab_data = useData.tab_data;

const ServiceTabs = () => (
  <Row className="justify-content-center p-4">
    <Col lg={11} xl={9} className="align-self-center">
      <Tabs justify className={styles.custom_tabs} defaultActiveKey="item 1" id="uncontrolled-tab-example">
        {
          tab_data.map(({ tab_title, title, icon, image, content }, index) => {
            const key = `item ${index + 1}`;

            return (
              <Tab eventKey={key} key={key} title={tab_title}>
                <TabContent
                  icon={icon}
                  image={image}
                  title={title}
                  content={content}
                />
              </Tab>
            )
          })
        }
      </Tabs>
    </Col>
  </Row>
);

export default ServiceTabs;