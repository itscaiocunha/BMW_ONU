'use client';
import Marcadagua from "@/app/components/marcadagua";
import { useState } from 'react';
import axios from 'axios';
import {nextConfigE, nextConfigU} from "next.config";

export default function Login() {
    const [dados, setDados] = useState({
        login: '',
        senha: '',
    });

    //capturar os dados do formulario pelo atributo name, conforme o usuario alterar o campo
    const dadosLogin = (e) => setDados({ ...dados, [e.target.name]: e.target.value });

    //enviar a requisição com os dados para o servidor  
    const sendReq = async (e) => {

        e.preventDefault();

        const header = {
            'headers': {
                'Content-Type': 'application/json',
                'x-access-token' : 'token'
            }
        }

        let rotaLogin = "";

        console.log(dados);

        // if (dados.login.contains("@")) {  //CORRIGIR
            rotaLogin = "http://localhost:8000/login-empresa-email";
        // } else {
        //     rotaLogin = "http://localhost:8000/login-usuario-email";
        // }

        await axios.post(rotaLogin, dados, header)
            .then((res) => {
                console.log(res.data);
                if(rotaLogin === "http://localhost:8000/login-empresa-email"){
                    return nextConfigE;
                } else {
                    return nextConfigU;
                }
            })
            .catch((err) => {
                if (err.response) {
                    alert(err.response.data.message);
                } else {
                    alert("Erro: Tente mais tarde!");
                }
            });

    }
    return (

        <html lang="pt-br">
            <title>LOGIN</title>
            <body>

                <Marcadagua />
                <img id="fundo" src="/imagens/image 18.jpg" />
                <div id="container_validacao">
                    <h1>LOGIN</h1>
                    <form action="">
                        <input type="text" placeholder="EMAIL" onChange={dadosLogin} name="login"></input>
                        <input type="password" placeholder="SENHA" onChange={dadosLogin} name="senha"></input>
                        <input type="button" id="button_azul" value="ENTRAR" onClick={sendReq}></input>

                    </form>
                    <section>
                        <p>NÂO TEM UMA CONTA? <a href="./cadastro_usuario">CRIE UMA</a></p>
                    </section>

                    <div id="itens">
                        <div id="iten">
                            <a><img id='logo_cad' src='/imagens/google logo.png' /></a>
                        </div>
                        <div id="iten">
                            <a><img id='logo_cad' src='/imagens/Facebook.png' /></a>
                        </div >
                        <div id="iten">
                            <a><img id='logo_cad' src='/imagens/apple.png' /></a>
                        </div>

                    </div>
                </div>
            </body>
        </html>
    )
}