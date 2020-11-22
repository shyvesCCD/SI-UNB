import React from 'react';

import { Tip, Title } from './styles';

import tosseseca from '../../assets/tosseseca.png';
import narizescorrendo from '../../assets/narizescorrendo.png';
import fatiga from '../../assets/fatiga.png';
import febrealta from '../../assets/febrealta.png';
import dordegarganta from '../../assets/dordegarganta.png';

const Symptoms: React.FC = () => {
  return (
    <>
      <Title>Sintomas</Title>
      <Tip>
        <h1>
          <img src={tosseseca} alt="Mãos" />
          <div>
            <strong>Tosse seca</strong>
            <p>Tosse seca é aquela que você tosse e não sai muco.</p>
          </div>
        </h1>
      </Tip>
      <Tip>
        <h1>
          <img src={febrealta} alt="Mãos" />
          <div>
            <strong>Febre</strong>
            <p>
              Quando a temperatura é mais alta que o normal. Tipicamente em
              torno de 37ºC.
            </p>
          </div>
        </h1>
      </Tip>
      <Tip>
        <h1>
          <img src={narizescorrendo} alt="Mãos" />
          <div>
            <strong>Coriza</strong>
            <p>Nariz escorrendo ou até pingando.</p>
          </div>
        </h1>
      </Tip>
      <Tip>
        <h1>
          <img src={dordegarganta} alt="Mãos" />
          <div>
            <strong>Dor de garganta</strong>
            <p>
              Dor de garganta pode ser bem dolorida, seca, ou coçando na
              garganta.
            </p>
          </div>
        </h1>
      </Tip>
      <Tip>
        <h1>
          <img src={fatiga} alt="Mãos" />
          <div>
            <strong>Fatiga</strong>
            <p>Sem motivação, sem energia e no geral se sentindo cansado.</p>
          </div>
        </h1>
      </Tip>
    </>
  );
};

export default Symptoms;
