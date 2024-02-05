'use client';
import Marcadagua from '@/app/components/marcadagua';
import Button from '@mui/material/Button';

export default function telainicial() {

    return (
        <html lang="pt-br">
            <title>BMW</title>
            <body id="body_t_incial">
                <Marcadagua />
                <img id='fundo' src='/imagens/image 7.jpg'/>
                <div id="div_b_ti">
                    <a id="cadastrese" href='/cadastro_usuario'>
                    <Button variant="outlined">CADASTRE-SE</Button>                       
                    </a>
                    <a id="login" href='/login'>
                        <button id='button_azul'>
                        LOGIN
                        </button>
                    </a>
                </div>

                <div id="msg_t_inicial">
                    <h1>TORNE A RECICLAGEM DIVERTIDA!</h1>
                    <div>
                        <a className="saibamais" href="/saibamais"> <button id='button_azul'>SAIBA MAIS</button> </a>
                        <a className="bmwp_empresa" href="/cadastro_empresa"><button>BMW PARA EMPRESA</button></a>
                    </div>
                </div>
            </body>
        </html>
    );
};