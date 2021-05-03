import React from 'react';
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-11.svg';
import Icon3 from '../../images/svg-3.svg';
import Icon4 from '../../images/svg-5.svg';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesIcon,
  ServicesCard,
  ServicesH2,
  ServicesP,
} from './ServicesElements';

const Services = () => {
  return (
    <>
      <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>Door-to-door Makeup Services</ServicesH2>
            <ServicesP>
              Hassle free services just call or message us and we'll come see
              you.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH2>Hair Cut & Hair Color</ServicesH2>
            <ServicesP>
              Revitalize your hair to make it look more sleek and manageable.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH2>Special Occasions Makeover</ServicesH2>
            <ServicesP>
              Wedding, Debut, Prom or any type of occasions of your choice, call
              us.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon4} />
            <ServicesH2>Brazilian Blowout</ServicesH2>
            <ServicesP>
              Transform your hair, make it look smooth, healthy and thicker.
            </ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
