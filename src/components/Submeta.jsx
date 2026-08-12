import React from 'react'
import { useNavigate } from 'react-router-dom'

const Submeta = () => {

    const navigate = useNavigate();

return (
    <div className='container'>
        <p className='display-6 mt-4'><strong>Submeta seu trabalho</strong></p>
        <p>
            A submissão de trabalhos está aberta para alunos da <strong>graduação</strong> e <strong>pós-graduação</strong> nas modalidades <strong>Pesquisa</strong> e <strong>Ensino/Extensão</strong>
        </p>
        <p>
            <strong>Mas atenção!</strong> Para submeter seu trabalho, você deve estar inscrito como ouvinte, se ainda não se inscreveu <a href="/inscrições">clique aqui</a> para se inscrever.
        </p>    
        <div>
            <button className='btn btn-outline-dark mb-4' onClick={() => navigate("/pesquisa-graduacao")}>
              Pesquisa - Graduação
            </button>
            <button className='btn btn-outline-dark mb-4 ms-2' onClick={() => navigate("/pesquisa-pos-graduacao")}>
              Pesquisa - Pós-Graduação
            </button>
            <button className='btn btn-outline-dark mb-4 ms-2' onClick={() => navigate("/ensino-extensao")}>
              Ensino/Extensão - Geral
            </button>
        </div>
    </div>
)
}

export default Submeta
