import React from 'react';

import { Tip, Title } from './styles';

import grafico from '../../assets/grafico.png';

const Notifications: React.FC = () => {
  return (
    <>
      <Title>Notificações</Title>
      <img src={grafico} alt="Grafico" />
      <Tip>
        <h1>
          <div>
            <a href="https://www.msn.com/pt-br/noticias/mundo/pfizer-pedirá-autorização-para-vacina-de-covid-19/vi-BB1beuPX?ocid=bingcovid">
              <p>Pfizer pedirá autorização para vacina de covid</p>
            </a>
          </div>
        </h1>
      </Tip>
      <Tip>
        <h1>
          <div>
            <a href="https://www.msn.com/pt-br/dinheiro/economia-e-negocios/g20-promete-não-poupar-esforços-para-facilitar-o-acesso-às-vacinas-da-covid-19/ar-BB1bfFwj?ocid=bingcovid">
              <p>
                G20 promete 'não poupar esforços' para facilitar o acesso às
                vacinas da covid-19
              </p>
            </a>
          </div>
        </h1>
      </Tip>
      <Tip>
        <h1>
          <div>
            <a href="https://www.msn.com/pt-br/noticias/mundo/eua-aprova-uso-de-tratamento-da-regeneron-contra-a-covid-19-após-superar-os-12-milhões-de-casos/ar-BB1bfGBW?ocid=bingcovid">
              <p>
                EUA aprova uso de tratamento da Regeneron contra a covid-19 após
                superar os 12 milhões de casos
              </p>
            </a>
          </div>
        </h1>
      </Tip>
      <Tip>
        <h1>
          <div>
            <a href="https://www.msn.com/pt-br/noticias/mundo/balanço-mundial-da-pandemia-de-coronavírus-neste-domingo-às-08h00/ar-BB1bfExF?ocid=bingcovid">
              <p>
                Balanço mundial da pandemia de coronavírus neste domingo às
                08h00
              </p>
            </a>
          </div>
        </h1>
      </Tip>
      <Tip>
        <h1>
          <div>
            <a href="https://www.msn.com/pt-br/noticias/mundo/covid-19-anúncio-de-vacina-não-muda-postura-de-governos-europeus-que-mantêm-lockdown/ar-BB1bfE5K?ocid=bingcovid">
              <p>
                Covid-19: Anúncio de vacina não muda postura de governos
                europeus que mantêm lockdown
              </p>
            </a>
          </div>
        </h1>
      </Tip>
    </>
  );
};

export default Notifications;
