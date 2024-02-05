'use client';
import { useState ,useEffect} from 'react';
import axios from "axios";
import Marcadagua from "../components/marcadagua";
import InputMask from 'react-input-mask';
import MenuE from "../components/menuE";
import Button from '@mui/material/Button';

export default function Empresa() {
    
    const [doacao, setDoacao] = useState({
        quantidade : '',
        descricao : '',
        data_doacoes : '',
        empresas_id : '1',
        email : '',
        tp_doacoes_id : ''
    });

    //capturar os dados do formulario pelo atributo name, conforme o usuario alterar o campo
    const lancaDoacao = (e) => setDoacao({...doacao, [e.target.name]: e.target.value});

    const sendReq = async (e) => {

        e.preventDefault();

        const header = {
            'headers' : {
                'Content-Type' : 'application/json',
                'x-access-token' : 'token'
            }
        }

        await axios.post("http://localhost:8000/doacao", doacao, header)
        .then((res) => {
            console.log(res.data);
        })
        .catch((err) => {
            if(err.response){
                alert(err.response.data.message);
            } else {
                alert("Erro: Tente novamente mais tarde :( ");
            }
        });
    };


   /* useEffect(() => {
        axios.get("http://localhost:8000/usuarios", usuario)
        .then((res) => {
          console.log(res.data);
        });
    }, []);*/

     /*   useEffect(() => {
            axios.get("http://localhost:8000/usuarios", usuario)
            .then((res) => {
              console.log(res.data);
            });
          }, []);*/

    return (
        <html>
            <title>BMW | EMPRESA</title>
            <body>
                <Marcadagua />
                <MenuE />
                <img id="fundo" src="/imagens/image 16.jpg" />
                <a id="link_emp" href='/perfil_empresa'>
                    <img src="https://media.licdn.com/dms/image/D560BAQGR6Xq8cDhWBg/company-logo_200_200/0/1696602781146/unifeob_logo?e=2147483647&v=beta&t=d-5Lz5p1-NWjk5tu3RGwxjg8lO3d0CgR4YKb9ULvtd0" id="img_empresa" />
                    <div id="nome_img_empresa"><h1>UNIFEOB</h1></div>
                </a>
                <div id="container_1_empresa">
                    <div id="um">
                        {/* fom validar doação */}
                        <h1>CADASTRO DE DOAÇÕES</h1>
                        <form>
                            <input type="text" placeholder="USUARIO" onChange={lancaDoacao} name="email"></input>
                            <input type="date" onChange={lancaDoacao} name="data_doacoes"></input>
                            <InputMask mask="99.9" placeholder="00.0" onChange={lancaDoacao} name="quantidade"></InputMask>
                            <select onChange={lancaDoacao} name="tp_doacoes_id">
                                <option value="" selected disabled>SELECIONE O MATERIAL</option>
                                <option value="2">PLASTICO</option>
                                <option value="1">METAL</option>
                                <option value="4">PAPELÃO</option>
                                <option value="3">VIDRO</option>
                            </select>
                            <input type="text" placeholder="DESCRIÇÃO" onChange={lancaDoacao} name="descricao"></input>
                        </form>
                        <span>
                            <Button variant="contained" onClick={sendReq}>ENVIAR</Button>
                        </span>

                    </div>
                    <div id="dois">
                        {/* estilizando historico de doações */}

                        <h1>HISTÓRICO DE DOAÇÕES</h1>
                        <div >
                            <table>
                                <tbody>
                                    {/*doacao?.map(r =>{
                                            return  <tr>
                                                <td><img src="/imagens/user.png" alt="boneco_ayumi" /></td>
                                                <td>
                                                    <h1> @ + {r.usuario.nick} </h1>
                                                    <p>{r.descricao}</p>
                                                </td>
                                                <td><img src="/imagens/CALENDARIO.png" alt="calendario" /></td>
                                                <td><p>{r.data_doacoes}</p></td>
                                                <td><h2>DOAÇÃO CONFIRMADA</h2></td>
                                                <td><img src="/imagens/CONFIRMADO.png" alt="confirmado" /></td>
                                            </tr>
                                        })
                                    */}
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
                <div id="container_2_empresa">
                    <div id="um">
                        <div id="dois">
                            <h1>MATERIAIS MAIS RECEBIDOS</h1>

                            <span>
                                <img src="" alt="" />
                                <h1>1°</h1>
                                <p>PLASTICO</p>
                                <h1>10KG</h1>
                            </span>
                            <span>
                                <img src="" alt="" />
                                <h1>2°</h1>
                                <p>METAIS</p>
                                <h1>9KG</h1>
                            </span>
                            <span>
                                <img src="" alt="" />
                                <h1>3°</h1>
                                <p>PAPELÕES</p>
                                <h1>6KG</h1>
                            </span>
                            <span>
                                <h1>4°</h1>
                                <p>ALUMINIOS</p>
                                <h1>5KG</h1>
                            </span>

                        </div>
                        <div id="tres">
                            <span>
                                <h1>30KG</h1>
                                <p>DE RECICLAGEM RECEBIDO</p>
                            </span>

                        </div>
                        <div id="quatro">
                            <span>
                                <h1>4</h1>
                                <p>DOAÇÕES RECEBIDAS</p>
                            </span>
                        </div>
                    </div>

                </div>

            </body>
        </html>
    )

}