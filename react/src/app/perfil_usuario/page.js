'use client';
import React, { useState, useEffect } from 'react';
import Menu from "../components/menu";
import Marcadagua from "../components/marcadagua";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import DonutSmallRoundedIcon from '@mui/icons-material/DonutSmallRounded';
import LockResetRoundedIcon from '@mui/icons-material/LockResetRounded';
import WatchLaterRoundedIcon from '@mui/icons-material/WatchLaterRounded';
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';
import DriveFileRenameOutlineRoundedIcon from '@mui/icons-material/DriveFileRenameOutlineRounded';
import SaveRoundedIcon from '@mui/icons-material/SaveRounded';
import Back from '../components/back';

const perfilUser = () => {

    const [dados, setDados] = useState([]);

    const dadosUsuario = (e) => setDados({...dados, [e.target.name]: e.target.value} )

    useEffect(() => {

        const header = {
            'headers': {
                'Content-Type': 'application/json',
                'x-access-token': 'token'
            }
        }

        axios.get("http://localhost:8000/usuario", header)
            .then((res) => {
                setDados(res.data);
            })
            .catch((err) => {
                setResposta(err.response.data.message);
            });
    }, []);

    const [editing, setEditing] = useState(false);
    const [infoPessoal, setinfoPessoal] = useState([
        'Nome Sobrenome',
        '00/00/0000',
        '000.000.000-00'
    ]);

    const [infoEndereco, setinfoEndereco] = useState([
        '00000-000',
        'Rua A',
        '00',
        'Cidade A',
        'Bairro A'
    ]);

    const [editarUser, seteditarUser] = useState(false);

    const EditInfoP = (index, value) => {
        const newinfoPessoal = [...infoPessoal];
        newinfoPessoal[index] = value;
        setinfoPessoal(newinfoPessoal);
    };
    const EditInfoL = (index, value) => {

        const newinfoEndereco = [...infoEndereco];
        newinfoEndereco[index] = value;
        setinfoEndereco(newinfoEndereco);
    };
    const buttonText = editing ? 'SALVAR' : 'EDITAR';

    const icon = editing ? <SaveRoundedIcon fontSize='15px' /> : <DriveFileRenameOutlineRoundedIcon fontSize='15px' />;
    const handleClick = () => {
        setEditing(!editing);
    };
    const handleRedirectPrivacidade = () => {
        window.location.href = '../politica_de_privacidade';
    };


    const [next, setNext] = useState(1);

    const caseUser = () => {
        switch (next) {
            case 1: return (
                <>
                    <div class="profile_nivel">

                        <div class="barra_circular_progress">
                            <svg>
                                <circle class="background-circle" cy="30" cx="30" r="65" stroke-width="7" fill="none">
                                </circle>
                                <circle class="progresso-circular" cy="30" cx="30" r="65" stroke-width="7" fill="none" stroke-linecap="round">
                                </circle>
                            </svg>
                        </div>
                        <img class="img_progress" src="../imagens/user.png" alt="" />
                    </div>
                    <h1>NOME USUARIO</h1>
                    <p>@USUARIO, Cidade, EST</p>
                    <p>Telefone, Email@gmail.com</p>
                    <footer>
                        <ul>
                            <li onClick={() => setNext(2)}><i><AccountCircleRoundedIcon /></i>EDITAR PERFIL</li>
                            <li onClick={() => setNext(3)}><i><DonutSmallRoundedIcon /></i>VER MEU PROGRESSO</li>
                            <li onClick={() => setNext(4)}><i><LockResetRoundedIcon /></i>MUDAR SENHA</li>
                            <li onClick={() => setNext(5)}><i><WatchLaterRoundedIcon /></i>HISTÓRICO DE DOAÇÕES</li>
                            <li onClick={handleRedirectPrivacidade}><i><DescriptionRoundedIcon /></i>PRIVACIDADE E SEGURANÇA</li>
                        </ul>
                    </footer>


                </>
            );
            case 2: return (
                <>
                    <span onClick={() => setNext(1)}>
                        <Back /></span>
                    <div class="profile_nivel">


                        <div class="barra_circular_progress">
                            <svg>
                                <circle class="background-circle" cy="30" cx="30" r="65" stroke-width="7" fill="none">
                                </circle>
                                <circle class="progresso-circular" cy="30" cx="30" r="65" stroke-width="7" fill="none" stroke-linecap="round">
                                </circle>
                            </svg>
                        </div>
                        <img class="img_progress" src="../imagens/user.png" alt="" />
                    </div>
                    <div>
                        <form>


                            {editing ? (
                                <div >
                                    <h1>
                                        DADOS PESSOAIS
                                    </h1>
                                    {infoPessoal.map((infoPessoal, index) => (

                                        <input
                                            key={index}
                                            type="text"
                                            value={infoPessoal}
                                            onChange={(e) => EditInfoP(index, e.target.value)}
                                        />
                                    ))}
                                </div>
                            ) : (
                                <div >
                                    <h1>
                                        DADOS PESSOAIS
                                    </h1>
                                    {infoPessoal.map((infoPessoal, index) => (
                                        <p key={index}>{infoPessoal}</p>
                                    ))}
                                </div>
                            )}
                            {editing ? (
                                <div >
                                    <h1>
                                        LOCALIZAÇÃO
                                    </h1>
                                    {infoEndereco.map((infoEndereco, index) => (

                                        <input
                                            key={index}
                                            type="text"
                                            value={infoEndereco}
                                            onChange={(e) => EditInfoL(index, e.target.value)}
                                        />
                                    ))}
                                </div>
                            ) : (
                                <div >
                                    <h1>
                                        LOCALIZAÇÃO
                                    </h1>
                                    {infoEndereco.map((infoEndereco, index) => (
                                        <p key={index}>{infoEndereco}</p>
                                    ))}
                                </div>
                            )}
                            <p>seue*****@gmail.com</p>


                            <div id='edit_user_perfil'>
                                <span onClick={handleClick}>
                                    {icon}
                                    {buttonText}
                                </span>
                            </div>
                        </form>
                    </div>


                </>
            );
            case 3: return (
                <>
                    <span onClick={() => setNext(1)}>
                        <Back /></span>
                    <div id='score_user'>

                        <div id="score">
                            <div class="barra-reta">
                                <div class="progresso"></div>
                            </div>
                            <div class="score">
                                <img src="../imagens/trofeu.png" alt="" />
                                <div class="pontuacao">
                                    <h3>70</h3>
                                </div>
                            </div>

                        </div>
                        <div id="user">
                            <img src="../imagens/user.png" alt="" />
                        </div>
                        <div id='quantidade'>
                            <h1>3</h1>
                            <p>DOAÇÕES</p>
                        </div>

                    </div>
                    <div id="progresso_tabela">
                        <table>
                            <thead>
                                <tr>
                                    <th>INSTITUIÇÃO</th>
                                    <th>DATA</th>
                                    <th>PONTOS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>instituição furlano</td>
                                    <td>24/09/2023</td>
                                    <td>40+</td>
                                </tr>
                                <tr>
                                    <td>instituição furlano</td>
                                    <td>24/09/2023</td>
                                    <td>40+</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </>
            );
            case 4: return (
                <>
                    <span onClick={() => setNext(1)}>
                        <Back /></span>
                    <div id='reset_senha'>

                        <form>
                            <h1>
                                SENHA ATUAL
                            </h1>
                            <input type='password' placeholder='DIGITE SUA SENHA ATUAL'></input>
                            <h1>
                                NOVA SENHA
                            </h1>
                            <input type='password' placeholder='DIGITE SUA NOVA SENHA'></input>
                            <input type='password' placeholder='CONFIRME SUA NOVA SENHA '></input>
                            <span id='button_azul'>RESETAR</span>
                        </form>

                    </div>
                </>
            );
            case 5: return (
                <>
                    <div id='table_historico'>
                        <span onClick={() => setNext(1)}>
                            <Back /></span>
                        <table >
                            <thead>
                                <tr>
                                    <th>HISTÓRICO DE DOAÇÕES</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>

                                    <td>INSTITUIÇÃO</td>
                                    <td>DESCRIÇÃO</td>
                                    <td>Aqui uma breve descrição, citando a doação</td>

                                    <td>40+</td>
                                </tr>
                                <tr>

                                    <td>INSTITUIÇÃO</td>
                                    <td>DESCRIÇÃO</td>
                                    <td>Aqui uma breve descrição, citando a doação</td>

                                    <td>40+</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </>
            );
            default:
                return null;
        }
    }


    return (
        <>
            <title>PERFIL</title>
            <body>
                <Marcadagua />
                <Menu />
                <img id="fundo" src="/imagens/image 11.jpg" />
                <div id='container_perfil'>
                    {caseUser()}
                </div>

            </body >
        </>
    );

}
export default perfilUser;