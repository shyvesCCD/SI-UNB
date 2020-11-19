import React from 'react';

import { Tip, Title } from './styles';

import maos from '../../assets/imagemaos.png';
import tosse from '../../assets/tosse.png';
import pessoas from '../../assets/pessoas.png';
import toque from '../../assets/nãotoque.png';
import mascara from '../../assets/mascara.png';
import distanciamento from '../../assets/distanciamento.png';

const Tips: React.FC = () => {
  return (
    <>
      <Title>Dicas</Title>
      <Tip>
        <h1>
          <img src={maos} alt="Mãos" />
          <div>
            <strong>Lave as mãos frequentemente</strong>
            <p>
              Lave suas mãos com sabonete e água por pelo menos 20 segundos.
            </p>
          </div>
        </h1>
      </Tip>
      <Tip>
        <h1>
          <img src={tosse} alt="Mãos" />
          <div>
            <strong>Cubra a sua boca e o seu nariz</strong>
            <p>
              Enquanto você espirra ou tosse cubra seu nariz e sua boca com as
              mãos.
            </p>
          </div>
        </h1>
      </Tip>
      <Tip>
        <h1>
          <img src={pessoas} alt="Mãos" />
          <div>
            <strong>Evite aglomerações</strong>
            <p>Evite lugares com uma grande concentração de pessoas.</p>
          </div>
        </h1>
      </Tip>
      <Tip>
        <h1>
          <img src={toque} alt="Mãos" />
          <div>
            <strong>Evite tocar em tudo.</strong>
            <p>
              Evite tocar no seus olhos, nariz e boca enquanto sua mão não
              estiver limpa.
            </p>
          </div>
        </h1>
      </Tip>
      <Tip>
        <h1>
          <img src={mascara} alt="Mãos" />
          <div>
            <strong>Use mascara</strong>
            <p>Cubra seu nariz e boca com uma mascara.</p>
          </div>
        </h1>
      </Tip>
      <Tip>
        <h1>
          <img src={distanciamento} alt="Mãos" />
          <div>
            <strong>Evite contato proximo</strong>
            <p>
              Evite contato proximo (em torno de 1.80m) com qualquer pessoa que
              esteja doente ou com os sintomas.
            </p>
          </div>
        </h1>
      </Tip>
    </>
  );
};

export default Tips;
