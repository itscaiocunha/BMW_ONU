'use client';
import Marcadagua from '@/app/components/marcadagua';
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert'
import InputMask from 'react-input-mask';
import axios from 'axios';
import { nextConfigCadE } from 'next.config';
// import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
// import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
// import CircleIcon from '@mui/icons-material/Circle';
import Button from '@mui/material/Button';
const mtop = {
    marginTop: '5%'
}
const colorat = {
    color: '#208D9B',
    transform: 'scale(1.1)'
}

export default function Empresa() {
    const [empresa, setEmpresa] = useState({
        nome: '',
        cnpj: '',
        email: '',
        senha: '',
        cep: '',
        cidade: '',
        rua: '',
        numero: '',
        bairro: '',
        tel: ''
    });

    const [alerta, setAlerta] = useState();
    const [resposta, setResposta] = useState();

    const cadastraEmpresa = (e) => setEmpresa({ ...empresa, [e.target.name]: e.target.value });

    const sendReq = async (e) => {

        e.preventDefault();

        const header = {
            'headers': {
                'Content-Type': 'application/json'
            }
        }

        await axios.post("http://localhost:8000/empresa", empresa, header)
            .then((res) => {
                setResposta(res.data.message);
                setAlerta("success");
                return nextConfigCadE;
            })
            .catch((err) => {
                setAlerta("danger");
                if (err.response) {
                    setResposta(err.response.data.message);
                } else {
                    setResposta("Erro: Tente mais tarde!");
                }
            });
    }    


    return (

        <html>
            <title>CADASTRO</title>
            <body>
                <Marcadagua />
                <img id="fundo" src="/imagens/image 9.jpg" />
                <div id="container_validacao">
                    <h1>BMW PARA EMPRESA</h1>
                    <form>
                        <InputMask
                            name="cnpj"
                            // mask="99.999.999/9999-99"
                            required
                            // maskChar="_"
                            placeholder="CNPJ"
                            onChange={cadastraEmpresa}
                        />
                        <input
                            name="nome"
                            type="text"
                            placeholder="RAZÃO SOCIAL"
                            required
                            onChange={cadastraEmpresa}
                        />
                        <InputMask
                            name="cep"
                            type="text"
                            placeholder="CEP"
                            // mask="999.99-999"
                            // maskChar="_"
                            required
                            onChange={cadastraEmpresa}
                        />
                        <input
                            name="rua"
                            type="text"
                            placeholder="LOGRADOURO"
                            required
                            onChange={cadastraEmpresa}
                        />
                        <input
                            name="numero"
                            type="text"
                            placeholder="NUMERO"
                            required
                            onChange={cadastraEmpresa}
                        />
                        <input
                            name="bairro"
                            type="text"
                            placeholder="BAIRRO"
                            required
                            onChange={cadastraEmpresa}
                        />
                        <input
                            name="cidade"
                            type="text"
                            placeholder="CIDADE"
                            required
                            onChange={cadastraEmpresa}
                        />
                        <InputMask
                            name="tel"
                            type="text"
                            // mask="(99) 9 9999-9999"
                            // maskChar="_"
                            placeholder="TELEFONE"
                            required
                            onChange={cadastraEmpresa}
                        />
                        <input
                            name="email"
                            type="text"
                            placeholder="EMAIL"
                            required
                            onChange={cadastraEmpresa}
                        />

                        <InputMask
                            name="senha"
                            type="password"
                            placeholder="CRIE UMA SENHA"
                            required
                            onChange={cadastraEmpresa}
                        />
                        <InputMask
                            type="password"
                            placeholder="CONFIRME SUA SENHA"
                            required
                        />
                        <br/>
                        <Button variant='contained' id="button_cad" onClick={sendReq}>CADASTRAR</Button>

                    </form>
                </div>
            </body>
        </html>

    );
}