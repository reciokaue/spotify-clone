import React, { ReactChild } from 'react';
import Card from '../../Card';

import { Container, Frame } from './styles';
import { BsChevronLeft, BsChevronRight} from 'react-icons/bs'

const Home: React.FC = () => {
  return (
    <Container>
      <nav>Home</nav>

      <div>
        
        <PlaylistSection title="Atalhos">
          <Card title="Contatos" subtitle="Kayuá, BK', CHS "/>
          <Card title="Pro.blema" subtitle="Febem, Ainá, M$E"/>
          <Card title="Gigante da Norte" subtitle="Kayuá. Fab$, Dallass"/>
          <Card title="Poetas no Topo 1" subtitle="Pinneple"/>
        </PlaylistSection>

        <PlaylistSection title="bk brabao de pega" subtitle="fresh frontal bk">
          <Card title="Contatos" subtitle="Kayuá, BK', CHS "/>
          <Card title="Pro.blema" subtitle="Febem, Ainá, M$E"/>
          <Card title="Gigante da Norte" subtitle="Kayuá. Fab$, Dallass"/>
          <Card title="Poetas no Topo 1" subtitle="Makalister, BK, Menestrel, Djonga, Sant, JXNV$"/>
        </PlaylistSection>

        <PlaylistSection title="bk brabao de pega" subtitle="fresh frontal bk">
          <Card title="Contatos" subtitle="Kayuá, BK', CHS "/>
          <Card title="Pro.blema" subtitle="Febem, Ainá, M$E"/>
          <Card title="Gigante da Norte" subtitle="Kayuá. Fab$, Dallass"/>
          <Card title="Poetas no Topo 1" subtitle="Makalister, BK, Menestrel, Djonga, Sant, JXNV$"/>
        </PlaylistSection>
        
        <PlaylistSection title="bk brabao de pega" subtitle="fresh frontal bk">
          <Card title="Contatos" subtitle="Kayuá, BK', CHS "/>
          <Card title="Pro.blema" subtitle="Febem, Ainá, M$E"/>
          <Card title="Gigante da Norte" subtitle="Kayuá. Fab$, Dallass"/>
          <Card title="Poetas no Topo 1" subtitle="Makalister, BK, Menestrel, Djonga, Sant, JXNV$"/>
        </PlaylistSection>

        <PlaylistSection title="bk brabao de pega" subtitle="fresh frontal bk">
          <Card title="Contatos" subtitle="Kayuá, BK', CHS "/>
          <Card title="Pro.blema" subtitle="Febem, Ainá, M$E"/>
          <Card title="Gigante da Norte" subtitle="Kayuá. Fab$, Dallass"/>
          <Card title="Poetas no Topo 1" subtitle="Makalister, BK, Menestrel, Djonga, Sant, JXNV$"/>
        </PlaylistSection>
        
      </div>
    </Container>
  );
};

interface SectionProps{
  title?: string
  subtitle?: string
  children?: any
}

function PlaylistSection(props: SectionProps){
  return(
    <Frame>
      <header>
        <h1>{props.title}<h2>{props.subtitle}</h2></h1> 
        
        <div>
          <BsChevronLeft/>
          <BsChevronRight/>
        </div>
      </header>
      
      <article>
        {props.children}
      </article>
    </Frame>
  )
}

export default Home;
