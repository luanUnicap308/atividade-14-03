import React, { useState } from 'react';

const App = () => {

  const [idadeAtual, setIdadeAtual] = useState(0);
  const [anoNascido, setAnoNascido] = useState(0);
  const [isClear, setIsClear] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false)

  const handleIsChecked = () => {
    setIsChecked(state => !state);
  }

  const handlesIdadeAtual = (e) => {
    setIdadeAtual(e.target.value);
  };

  const calcularAnoNascimento = () => {
    const data = new Date();
    const caulculoAnoNascimento = isChecked ? (data.getFullYear() - idadeAtual) - 1 : data.getFullYear() - idadeAtual;
    setAnoNascido(caulculoAnoNascimento);
    setIsDisabled(true)
  }

  const limparCampos = () => {
    setAnoNascido(0);
    setIdadeAtual(0);
    setIsChecked(false);
    setIsDisabled(!isDisabled)
  }

  return (
    <div>
      <div>
        <h1>Caucule o ano que você naceu !</h1>
        <div>
          <p>digite sua idade</p>
          <input type='number' disabled={isDisabled} value={idadeAtual} onChange={handlesIdadeAtual} />
        </div>

        <div>
          <p>Você nasceu no ano de: </p>
          <input type='number' readOnly value={anoNascido} />
        </div>
        <div>
          <input type='checkbox' checked={isChecked} onChange={handleIsChecked} />
        </div>
        <div>
          <button disabled={isDisabled} onClick={calcularAnoNascimento}>Calcule o ano</button>
          <button onClick={limparCampos}>Limpar Campos</button>
        </div>
      </div>
    </div>
  )
}

export default App;
