'use client';
import Marcadagua from '@/app/components/marcadagua';
import React, { useState, useRef } from 'react';
import axios from 'axios';
import InputMask from 'react-input-mask';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import CircleIcon from '@mui/icons-material/Circle';
import Button from '@mui/material/Button';
const mtop = {
    marginTop: '5%'
}
const colorat = {
    color: '#208D9B',
    trasnform: 'scale(1.1)'
}

export default function Usuario() {
    
    const [usuario, setUsuario] = useState({
        nome : '',
        sobrenome : '',
        dt_nascimento : '',
        cpf : '',
        tel : '',
        cep : '',
        nick : '',
        email : '',
        senha : '',
    });

    //capturar os dados do formulario pelo atributo name, conforme o usuario alterar o campo
    const cadastraUsuario = (e) => setUsuario({...usuario, [e.target.name]: e.target.value});

    const sendReq = async (e) => {

        e.preventDefault();

        const header = {
            'headers' : {
                'Content-Type' : 'application/json'
            }
        }

        await axios.post("http://localhost:8000/usuario", usuario, header)
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

    // const handleNextP = (data, event) => {
    //     event.preventDefault();

    //     // console.log({...data})
    //     // setUsuario((prevData) => ({
    //     //     ...prevData,
    //     //     ...data,
    //     // })
    //     // );
    //     setStep(step + 1);
    // }

    // const handleNextU = (data, event) => {
    //     event.preventDefault();

    //     // setUsuario((prevData) => ({
    //     //     ...prevData,
    //     //     ...data,
    //     // }));
    //     setStep(step + 1);
    // }

    // const handlePrevious = (event) => {
    //     event.preventDefault();
    //     setStep(step - 1);
    // };

    // const renderForm = () => {
    //     switch (step) {

    //         case 1:
    //             return (
    //                 <div id='container_validacao'>
    //                     <form className='form_1'>

    //                         <h1>DEFINA SEU USUARIO</h1>
    //                         <input
    //                             name='nick'
    //                             id='input_usuario'
    //                             type="text"
    //                             placeholder="COMO QUER SER CHAMADO?"
    //                             required
    //                             onChange={setUsuario}
    //                         />
    //                         <Button onClick={(f) => handleNextU(dados, f)} id='button_azul' variant="contained">SEGUIR</Button>
    //                     </form>
    //                     <div id="itens">
    //                         <div id="iten">
    //                             <a><img id='logo_cad' src='/imagens/google logo.png' /></a>
    //                         </div>
    //                         <div id="iten">
    //                             <a><img id='logo_cad' src='/imagens/Facebook.png' /></a>
    //                         </div >
    //                         <div id="iten">
    //                             <a><img id='logo_cad' src='/imagens/apple.png' /></a>
    //                         </div>

    //                     </div>

    //                 </div>
    //             );
    //         case 2:
    //             return (

    //                 <div id='container_validacao'>
    //                     <h1>CADASTRO</h1>
    //                     <form>
    //                         <input
    //                             name='nome'
    //                             type="text"
    //                             placeholder="NOME"
    //                             required
    //                             onChange={setUsuario}
    //                         />
    //                         <input
    //                             name='sobrenome'
    //                             type="text"
    //                             placeholder="SOBRENOME"
    //                             required
    //                             onChange={setDados}
    //                         />
    //                         <input
    //                             name='dt_nascimento'
    //                             type="date"
    //                             placeholder="DATA DE NASCIMENTO"
    //                             required
    //                             onChange={setDados}
    //                         />
    //                         <InputMask
    //                             name='cpf'
    //                             mask="999.999.999-99"
    //                             required
    //                             maskChar="_"
    //                             placeholder="CPF"
    //                             onChange={setDados}
    //                         />
    //                     </form>
    //                     <span>
    //                         <button id='button_next_previous' onClick={handlePrevious}><KeyboardArrowLeftIcon id="nex_previous" /></button>
    //                         <button id='button_next_previous' ><CircleIcon id="circleC1" style={colorat} /></button>
    //                         <button id='button_next_previous' ><CircleIcon id="circleC2" /></button>
    //                         <button id='button_next_previous' ><CircleIcon id="circleC3" /></button>
    //                         <button id='button_next_previous' onClick={(e) => handleNextP(dados, e)}><KeyboardArrowRightIcon id="nex_previous" /></button>
    //                     </span>
    //                 </div>
    //             );
    //         case 3:
    //             return (
    //                 <div id='container_validacao'>
    //                     <h1>CADASTRO</h1>
    //                     <form>
    //                         <InputMask
    //                             name='cep'
    //                             type="text"
    //                             placeholder="CEP"
    //                             mask="999.99-999"
    //                             maskChar="_"
    //                             required
    //                             onChange={setDados}
    //                         />
    //                         <input
    //                             name='tel'
    //                             type="text"
    //                             placeholder="TELEFONE"
    //                             required
    //                             onChange={setDados}
    //                         />
    //                     </form>
    //                     <span>
    //                         <button id='button_next_previous' onClick={handlePrevious}><KeyboardArrowLeftIcon id="nex_previous" /></button>
    //                         <button id='button_next_previous' ><CircleIcon id="circleC1" /></button>
    //                         <button id='button_next_previous' ><CircleIcon id="circleC2" style={colorat} /></button>
    //                         <button id='button_next_previous' ><CircleIcon id="circleC3" /></button>
    //                         <button id='button_next_previous' onClick={(e) => handleNextP(dados, e)}><KeyboardArrowRightIcon id="nex_previous" /></button>
    //                     </span>

    //                 </div>
    //             );
    //         case 4:
    //             return (
    //                 <div id='container_validacao'>
    //                     <h1>CADASTRO</h1>
    //                     <form>
    //                         <input
    //                             name='email'
    //                             type="text"
    //                             placeholder="EMAIL"
    //                             required
    //                             onChange={setDados}
    //                         />
    //                         <input
    //                             type="text"
    //                             placeholder="CONFIRME SEU EMAIL"
    //                             required
    //                         />
    //                         <InputMask
    //                             name='senha'
    //                             type="password"
    //                             placeholder="CRIE UMA SENHA"
    //                             required
    //                             onChange={setDados}
    //                         />
    //                         <InputMask
    //                             type="password"
    //                             placeholder="CONFIRME SUA SENHA"
    //                             required
    //                         />

    //                     </form>
    //                     <span>
    //                         <button id='button_next_previous' onClick={(e) => handlePrevious(e)}><KeyboardArrowLeftIcon id="nex_previous" /></button>
    //                         <button id='button_next_previous' ><CircleIcon id="circleC1" /></button>
    //                         <button id='button_next_previous' ><CircleIcon id="circleC2" /></button>
    //                         <button id='button_next_previous' ><CircleIcon id="circleC3" style={colorat} /></button>
    //                         <button id='button_next_previous' ></button>
    //                     </span>
    //                     <section>

    //                         <p ><input type="checkbox" id="checktermos" />
    //                             <label for="checktermos" > Estou ciente de todos termos de </label>
    //                             <a target="_blank" href="../politica_de_privacidade">
    //                                 politica e privacidade</a>
    //                         </p>


    //                     </section>
    //                     <div id='itens'>
    //                         <input type="button" id="button_azul" value="ENVIAR" onClick={cadastraUsuario}></input>
    //                     </div>

    //                 </div>
    //             );
    //     }
    // };

    return (

        <html>
            <title>CADASTRO</title>
            <body>
                <Marcadagua />
                <img id="fundo" src="/imagens/image 10.jpg" />
                <div id='container_validacao'>

                    <h1>DEFINA SEU USUARIO</h1>
                    <form>
                        <input
                            type="text"
                            placeholder="COMO QUER SER CHAMADO?"
                            required
                            onChange={cadastraUsuario}
                            name='nick'
                        />
                        <input
                            type="text"
                            placeholder="NOME"
                            required
                            onChange={cadastraUsuario}
                            name='nome'
                        />
                        <input
                            type="text"
                            placeholder="SOBRENOME"
                            required
                            onChange={cadastraUsuario}
                            name='sobrenome'
                        />
                        <input
                            type="date"
                            placeholder="DATA DE NASCIMENTO"
                            required
                            onChange={cadastraUsuario}
                            name='dt_nascimento'
                        />
                        <InputMask
                            mask="999.999.999-99"
                            required
                            maskChar="_"
                            placeholder="CPF"
                            onChange={cadastraUsuario}
                            name='cpf'
                        />
                        <InputMask
                            type="text"
                            placeholder="CEP"
                            mask="999.99-999"
                            maskChar="_"
                            required
                            onChange={cadastraUsuario}
                            name='cep'
                        />
                        <input
                            type="text"
                            placeholder="TELEFONE"
                            required
                            onChange={cadastraUsuario}
                            name='tel'
                        />
                        <input
                            type="text"
                            placeholder="EMAIL"
                            required
                            onChange={cadastraUsuario}
                            name='email'
                        />
                        <input
                            type="text"
                            placeholder="CONFIRME SEU EMAIL"
                            required
                        />
                        <InputMask
                            type="password"
                            placeholder="CRIE UMA SENHA"
                            required
                            onChange={cadastraUsuario}
                            name='senha'
                        />
                        <InputMask
                            type="password"
                            placeholder="CONFIRME SUA SENHA"
                            required
                        />
                        <Button variant='contained' id="button_cad" onClick={sendReq}>CADASTRAR</Button>
                    </form>
                </div>
            </body>
        </html>


    );
}
// }