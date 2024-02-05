// 'use client'
// import Marcadagua from '@/app/components/marcadagua';
// import React, { useState } from 'react';
// import axios from 'axios';
// import DriveFileRenameOutlineRoundedIcon from '@mui/icons-material/DriveFileRenameOutlineRounded';
// import SaveRoundedIcon from '@mui/icons-material/SaveRounded';
// import MenuE from '../components/menuE';
// import Button from '@mui/material/Button';



// const PerfilE = () => {
//     const [nome, Getnome] = useState()
//     const [sobrenome, Getsobrenome] = useState()
//     const [dt_nascimento, Getdt_nascimento] = useState()
//     const [cpf, Getcpf] = useState()
//     const [tel, Gettel] = useState()
//     const [cep, Getcep] = useState()
//     const [nick, Getnick] = useState()
//     const [email, Getemail] = useState()
//     const [senha, Getsenha] = useState()

//     const [infoData, getInfoData] = useState();

//     const Info = (f) => getInfoData(
//         { ...infoData, [f.target.nome]: f.target.value },
//         { ...infoData, [f.target.sobrenome]: f.target.value },
//         { ...infoData, [f.target.dt_nascimento]: f.target.value },
//         { ...infoData, [f.target.cpf]: f.target.value },
//         { ...infoData, [f.target.cep]: f.target.value },
//         { ...infoData, [f.target.nick]: f.target.value },
//         { ...infoData, [f.target.email]: f.target.value },
//         { ...infoData, [f.target.senha]: f.target.value }
//     );

//     const sendReq = async (f) => {

//         f.preventDefault();

//         const header = {
//             'headers': {
//                 'Content-Type': 'application/json'
//             }
//         }

//         await axios.get("http://localhost:8000/empresa", {
//             nome: nome,
//             sobrenome: sobrenome,
//             dt_nascimento: dt_nascimento,
//             cpf: cpf,
//             tel: tel,
//             cep: cep,
//             nick: nick,
//         }, header)
//             .then((res) => {
//                 console.log(res)
//                 // setResposta(res.data.message);
//                 // setAlerta("Cadastro realizado com sucesso!");
//             })
//             .catch((err) => {
//                 console.log(err)
//                 //setAlerta("danger");
//                 if (err.response) {
//                     //   setResposta(err.response.data.message);
//                 } else {
//                     // setResposta("Erro ao cadastrar!");
//                 }
//             });
//     }

//     const [infoEmpresarial, setinfoEmpresarial] = useState([
//         'Centro Universitário Fundação de ENsino Octávio Bastos - UNIFEOB',
//         '59.764.555/0001-52',
//         '(19)3634-3300',
//         'UNIFEOB@UNIFEOB.EDU.BR'
//     ]);

//     const [infoEndereco, setinfoEndereco] = useState([
//         '13.874-149',
//         'AV DOUTOR OCTÁVIO DA SILVA bastos, 2439',
//         'SÃO JOÃO DA BOA VISTA',
//         'JARDIM NOVA SÃO JOÃO'
//     ]);


//     const [editing, setEditing] = useState(false);
//     const [avaliaVariavel, setavaliaVariavel] = useState(editing);

//     const handleEditInfoE = (index, value) => {
//         const newinfoEmpresarial = [...infoEmpresarial];
//         newinfoEmpresarial[index] = value;
//         setinfoEmpresarial(newinfoEmpresarial);
//     };
//     const handleEditInfoEnd = (index, value) => {

//         const newinfoEndereco = [...infoEndereco];
//         newinfoEndereco[index] = value;
//         setinfoEndereco(newinfoEndereco);
//     };


//     const buttonText = editing ? 'SALVAR' : 'EDITAR';

//     const icon = editing ? <SaveRoundedIcon fontSize='15px' /> : <DriveFileRenameOutlineRoundedIcon fontSize='15px' />;

//     const handleClick = () => {
//         setEditing(!editing);
//     };

//     return (
//         <html>
//             <title>PERFIL</title>
//             <body>
//                 <Marcadagua />
//                 <MenuE />
//                 <div id='secao_1_perfil_empresa'>
//                     <div id='container_info_perfil_empresa'>
//                         <main>
//                             {editing ? (
//                                 <div id='form_info_emp_1'>
//                                     <h1>
//                                         DADOS EMPRESARIAIS
//                                     </h1>
//                                     {infoEmpresarial.map((infoEmpresarial, index) => (

//                                         <input
//                                             key={index}
//                                             type="text"
//                                             value={infoEmpresarial}
//                                             onChange={(e) => handleEditInfoE(index, e.target.value)}
//                                         />
//                                     ))}
//                                 </div>
//                             ) : (
//                                 <div id='form_info_emp_1'>
//                                     <h1>
//                                         DADOS EMPRESARIAIS
//                                     </h1>
//                                     {infoEmpresarial.map((infoEmpresarial, index) => (
//                                         <p key={index}>{infoEmpresarial}</p>
//                                     ))}
//                                 </div>
//                             )}

//                             {editing ? (
//                                 <div id='form_info_emp_2'>

//                                     <h1>
//                                         ENDEREÇO
//                                     </h1>
//                                     {infoEndereco.map((infoEndereco, index) => (


//                                         <input
//                                             key={index}
//                                             type="text"
//                                             value={infoEndereco}
//                                             onChange={(e) => handleEditInfoEnd(index, e.target.value)}
//                                         />
//                                     ))}

//                                 </div>
//                             ) : (
//                                 <div id='form_info_emp_2'>
//                                     <h1>
//                                         ENDEREÇO
//                                     </h1>
//                                     {infoEndereco.map((infoEndereco, index) => (
//                                         <p key={index}>{infoEndereco}</p>
//                                     ))}
//                                 </div>
//                             )}
//                         </main>
//                     </div>
//                 </div>

//                 <div id='secao_2_perfil_empresa'>
//                     <img id="fundo_empresa" src="/imagens/image 6.jpg" />
//                     <div id='foto_empresa_perfil'>
//                         <img src='https://media.licdn.com/dms/image/D560BAQGR6Xq8cDhWBg/company-logo_200_200/0/1696602781146/unifeob_logo?e=2147483647&v=beta&t=d-5Lz5p1-NWjk5tu3RGwxjg8lO3d0CgR4YKb9ULvtd0' />
//                     </div>
//                     <div id='nome_empresa_perfil'>
//                         <h1>UNIFEOB</h1>
//                     </div>
//                     <div id='edit_empresa_perfil'>
//                         <Button id="button_edit_perfil" onClick={handleClick} variant="contained">{icon}
//                             {buttonText}</Button>
//                     </div>
//                 </div>

//             </body>
//         </html>
//     );
// };


// export default PerfilE;