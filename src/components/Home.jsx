import React from 'react'

const Home = () => {
  return (
    <div className='container'>
        <div className=''>
           <p className='fs-4 mt-5 recuo'>
                Convidamos estudantes de <strong>graduação</strong> e <strong>pós-graduação</strong> de toda a Universidade Federal de Pelotas para participar da <br /><strong>1° Semana Acadêmica</strong>, que será realizada no auditório Eliseu Maciel da Faculdade de Agronomia, no campus Capão do Leão da UFPel. 
                <br /><br />O evento, com duração de uma semana, tem por intuito possibilitar aos participantes, além de assistir palestras, participar de minicursos, realizar apresentação oral ou de pôster, e interagir com empresas, divulgadores científicos e pesquisadores da UFPel e de outras instituições do Brasil. Desta forma, um dos objetivos deste evento é <strong>promover a interação da comunidade acadêmica</strong> e impulsionar diferentes áreas de conhecimento acerca da Biotecnologia.
            </p> 
        </div>
    <div className='border rounded-5 mt-5 fs-5 text-center mx-auto shadow' style={{width: "70%"}}>
      <h3 className='mt-4 fs-1 text-center mb-4 info'>INFORMAÇÕES</h3>
      <p><strong>Data</strong> <br />22 de setembro até 26 de setembro</p>
      <p className='mb-4'><strong>Local</strong> <br />Auditório Eliseu Maciel, Faculdade de Agronomia, UFPel</p>
    </div>
    <p className='mb-5 text-center mt-4'> Para mais informações, acompanhe no instragam: <a href="https://www.instagram.com/dabiotecufpel/" target="_blank" rel="noopener noreferrer">@dabiotecufpel</a>.</p>
    </div>
  )
}

export default Home
