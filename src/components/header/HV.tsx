import { FiDownload, FiSend } from 'react-icons/fi'
import CV from '../../assets/HV.Juan-Camilo-Sanchez-Echeverri.pdf'

export const HV = () => {
  return (
    <div className="header__cta">
      <a href={CV} download className="btn">
        <FiDownload /> Descargar CV
      </a>
      <a href="#contact" className="btn btn-primary">
        <FiSend /> Contáctame
      </a>
    </div>
  )
}
