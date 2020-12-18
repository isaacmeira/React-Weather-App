import React from 'react';
import location from '../../Assets/location.png';

import './Styles.scss';

export default function NoLocation() {
  return (
    <div className="NoLocationMain">
      <img alt="Botão de Localização" src={location} />
      <strong>Você precisa permitir a localização pelo seu Navegador !</strong>
      <span>
        Precisamos acessar para poder lhe entregar a previsão de acordo com o
        lugar que você está
      </span>
      <span>
        Esses dados não serão salvos, poderia permitir por gentileza ? 😉
      </span>
    </div>
  );
}
