import React, { Component } from 'react'
import style from './style.css'

class Simulador extends Component {
  constructor() {
    super()

    this.state = {
      isv: 0,
      cilindrada: 0,
      emissoes: 0
    }

    this.handleCilindradaChange = this.handleCilindradaChange.bind(this)
    this.handleEmissoesChange = this.handleEmissoesChange.bind(this)
  }

  calcularISV() {
    let valorCilindrada = 0
    let valorEmissoes = 0

    switch(true) {
    case (this.state.cilindrada <= 1000) :
      valorCilindrada = (0.95 * this.state.cilindrada) - 737
      break
    case (this.state.cilindrada > 1000 && this.state.cilindrada <= 1250) :
      valorCilindrada = (1.03 * this.state.cilindrada) - 740.55
      break
    case (this.state.cilindrada > 1250) :
      valorCilindrada = (4.84 * this.state.cilindrada) - 5362.67
      break
    }

    switch(true) {
    case (this.state.emissoes <= 99) :
      valorEmissoes = (4 * this.state.emissoes) - 370
      break
    case (this.state.emissoes >= 100 && this.state.emissoes <= 115) :
      valorEmissoes = (7 * this.state.emissoes) - 650
      break
    case (this.state.emissoes >= 116 && this.state.emissoes <= 145) :
      valorEmissoes = (45.49 * this.state.emissoes) - 5110
      break
    case (this.state.emissoes >= 146 && this.state.emissoes <= 175) :
      valorEmissoes = (53 * this.state.emissoes) - 6180
      break
    case (this.state.emissoes >= 176 && this.state.emissoes <= 195) :
      valorEmissoes = (135 * this.state.emissoes) - 20450
      break
    case (this.state.emissoes > 195) :
      valorEmissoes = (178 * this.state.emissoes) - 28900
      break
    }

    let total = valorCilindrada + valorEmissoes

    this.setState({
      isv: parseFloat(total)
    })
  }

  handleCilindradaChange(event) {
    this.setState({
      cilindrada: event.target.value
    }, function() {
      this.calcularISV()
    })
  }

  handleEmissoesChange(event) {
    this.setState({
      emissoes: event.target.value
    }, function() {
      this.calcularISV()
    })
  }

  render() {
    return (
      <div className={style.simulador}>
        <h1>Hello</h1>

        <form>
          <p>Cilindrada</p>
          <input name="cilindrada" type="text" onChange={this.handleCilindradaChange} value={this.state.cilindrada} />

          <p>Emissões CO2</p>
          <input name="emissoes" type="number" onChange={this.handleEmissoesChange} value={this.state.emissoes} />

          <p>Valor ISV: {this.state.isv}</p>
        </form>


      </div>
    )
  }
}

export default Simulador
