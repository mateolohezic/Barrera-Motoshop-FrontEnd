import React from 'react'
import BotonWhatsapp from '../../Components/BotonWhatsapp/BotonWhatsapp'
import CaracteristicasEmpresa from '../../Components/CaracteristicasEmpresa/CaracteristicasEmpresa'
import CategoriasDestacadasInicio from '../../Components/CategoriasDestacadasInicio/CategoriasDestacadasInicio'
import DestacadosInicio from '../../Components/DestacadosInicio/DestacadosInicio'
import Footer from '../../Components/Footer/Footer'
import HeaderInformacion from '../../Components/HeaderInformacion/HeaderInformacion'
import NovedadesInicio from '../../Components/NovedadesInicio/NovedadesInicio'
import PiePagina from '../../Components/PiePagina/PiePagina'
import PortadaInicio from '../../Components/PortadaInicio/PortadaInicio'
import RedesSocialesInicio from '../../Components/RedesSocialesInicio/RedesSocialesInicio'
import TiraMarcas from '../../Components/TiraMarcas/TiraMarcas'

function Inicio() {
  return (
    <>
      <div className="bg"></div>
      <PortadaInicio/>
      <HeaderInformacion/>
      <DestacadosInicio/>
      <RedesSocialesInicio/>
      <CategoriasDestacadasInicio/>
      <TiraMarcas/>
      <NovedadesInicio/>
      <CaracteristicasEmpresa/>
      <BotonWhatsapp/>
      <Footer/>
      <PiePagina/>
    </>
  )
}

export default Inicio