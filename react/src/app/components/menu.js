import React, { useEffect, useState } from 'react';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import WatchLaterRoundedIcon from '@mui/icons-material/WatchLaterRounded';
import MusicNoteRoundedIcon from '@mui/icons-material/MusicNoteRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import ViewListRoundedIcon from '@mui/icons-material/ViewListRounded';
// import MusicOffRoundedIcon from '@mui/icons-material/MusicOffRounded';
// import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ReactAudioPlayer from 'react-audio-player';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';




const Menu = () => {



    const [step, setStep] = useState(1);
    const [iconMenuClass, setIconMenuClass] = useState('icon_menu');
    const handNav = (newStep) => {
        setStep(newStep);
    };

    const handleRedirectProfile = () => {
        window.location.href = '../perfil_usuario';
    };
    const handleRedirectHome = () => {
        window.location.href = '../home';
    };
    const getContent = () => {
        switch (step) {
            case 1:
                return (
                    <>
                        <div className='case'>
                            <div className='capa'></div>

                            <ul className="opcoes_menu">
                                <li className="item_menu" id="item_menu" onClick={handleRedirectHome}>
                                    <i className={iconMenuClass} id="icon_menu">
                                        <HomeRoundedIcon />
                                    </i>
                                    <span className="span_menu" id="span_menu">HOME</span>
                                </li>
                                <li className="item_menu" id="item_menu" onClick={handleRedirectProfile}>
                                    <i className={iconMenuClass} id="icon_menu">
                                        <AccountCircleRoundedIcon />
                                    </i>
                                    <span className="span_menu" id="span_menu">PERFIL</span>
                                </li>

                                <li className="item_menu" id="item_menu" onClick={() => setStep(2)}>
                                    <i className={iconMenuClass} id="icon_menu">
                                        <MailRoundedIcon />
                                    </i>
                                    <span className="span_menu" id="span_menu">CAIXA DE ENTRADA</span>
                                </li>

                                <li className="item_menu" id="item_menu" onClick={() => setStep(3)}>
                                    <i className={iconMenuClass} id="icon_menu">
                                        <WatchLaterRoundedIcon />
                                    </i>
                                    <span className="span_menu" id="span_menu">HISTORICO DE DOAÇÕES</span>
                                </li>

                                <li className="item_menu" id="item_menu" onClick={() => setStep(4)}>
                                    <i className={iconMenuClass} id="icon_menu">
                                        <MusicNoteRoundedIcon />
                                    </i>
                                    <span className="span_menu" id="span_menu">SOM</span>
                                </li>


                            </ul>
                            <ul className="advance_menu">
                                <li className="item_menu" id="item_menu">
                                    <i className={iconMenuClass} id="icon_menu">
                                        <SettingsRoundedIcon />
                                    </i>
                                    <span className="span_menu" id="span_menu">CONFIGURAÇÕES</span>
                                </li>

                                <li className="item_menu" id="item_menu">
                                    <i className={iconMenuClass} id="icon_menu">
                                        <LogoutRoundedIcon />
                                    </i>
                                    <span className="span_menu" id="span_menu">LOG OUT</span>
                                </li>
                            </ul>
                        </div>
                    </>

                );
            case 2:
                return (
                    <>
                        <div className='case'>
                            <button className='volta_menu' onClick={() => setStep(1)}><ViewListRoundedIcon fontSize='10px' /></button>
                            <h1>CAIXA DE ENTRADA</h1>
                            <span className='notificacao'>
                                <h1>NOVA AÇÃO <p>4+</p></h1>
                                <p>Instituição A</p>
                                <p>Descrição</p>
                                <p>Recebido xKg de Y produto</p>
                            </span>
                            <span className='notificacao'>
                                <h1>NOVA AÇÃO <p>4+</p></h1>
                                <p>Instituição A</p>
                                <p>Descrição</p>
                                <p>Recebido xKg de Y produto</p>
                            </span>
                            <span className='notificacao'>
                                <h1>NOVA AÇÃO <p>4+</p></h1>
                                <p>Instituição A</p>
                                <p>Descrição</p>
                                <p>Recebido xKg de Y produto</p>
                            </span>
                            <span className='notificacao'>
                                <h1>NOVA AÇÃO <p>4+</p></h1>
                                <p>Instituição A</p>
                                <p>Descrição</p>
                                <p>Recebido xKg de Y produto</p>
                            </span>
                            <span className='notificacao'>
                                <h1>NOVA AÇÃO <p>4+</p></h1>
                                <p>Instituição A</p>
                                <p>Descrição</p>
                                <p>Recebido xKg de Y produto</p>
                            </span>
                        </div>
                    </>
                );
            case 3:
                return (
                    <>
                        <div className='case'>
                            <button className='volta_menu' onClick={() => setStep(1)}><ViewListRoundedIcon fontSize='10px' /></button>
                            <h1>HISTORICO DE DOAÇÕES</h1>
                            <span className='doacao_h'>
                                <h1>Instituição A <p>4+</p></h1>
                                <p>Descrição</p>
                                <p>Recebido xKg de Y produto</p>
                            </span>
                            <span className='doacao_h'>
                                <h1>Instituição A <p>4+</p></h1>
                                <p>Descrição</p>
                                <p>Recebido xKg de Y produto</p>
                            </span>
                            <span className='doacao_h'>
                                <h1>Instituição A <p>4+</p></h1>
                                <p>Descrição</p>
                                <p>Recebido xKg de Y produto</p>
                            </span>
                            <span className='doacao_h'>
                                <h1>Instituição A <p>4+</p></h1>
                                <p>Descrição</p>
                                <p>Recebido xKg de Y produto</p>
                            </span>
                            <span className='doacao_h'>
                                <h1>Instituição A <p>4+</p></h1>
                                <p>Descrição</p>
                                <p>Recebido xKg de Y produto</p>
                            </span>
                        </div>
                    </>
                );
            case 4:
                return (
                    <>
                        <div className='case'>
                            <button className='volta_menu' onClick={() => setStep(1)}><ViewListRoundedIcon fontSize='10px' /></button>
                            <h1>MUSICA AMBIENTE</h1>
                            <span className='span_musica'>
                                <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                                    <VolumeDown />
                                    <input type="range" className='slider' id="volumeRange" min="0" max="100" step="1" value={volume * 100} onChange={handleVolumeChange} />
                                    <VolumeUp />
                                </Stack>
                            </span>
                        </div>
                    </>
                );
            default:
                return null;
        }
    };

    const [volume, setVolume] = useState(1);
    const handleVolumeChange = (e) => {
        // Obtenha o valor do input range e ajuste para a escala de volume (0 a 1)
        const newVolume = e.target.value / 100;

        // Atualize o estado do volume
        setVolume(newVolume);
    };

    return (
        <>
            <ReactAudioPlayer
                src="../imagens/Shadowing - Corbyn Kites.mp3"
                autoPlay
                loop
                volume={volume}
                className='none'
                controls
            />
            <input type='checkbox' id='check_menu' className='none'></input>

            <nav id="MeuMenu" >
                {getContent()}

                <input type='checkbox' id='check_menu' className='none'></input>
                <div id="nivel" class="parte2_nivel_1">
                    <h2>@USUARIO</h2>
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
            </nav>
            <div className='expande_menu'>
                <label onClick={() => setStep(1)} htmlFor='check_menu'><KeyboardArrowLeftRoundedIcon /></label></div>
            <div id="parte1" class="parte1_1">

                <div class="barra-circular">
                    <svg>
                        <circle class="background-circle" r="25" stroke-width="5" fill="none">
                        </circle>
                        <circle class="progresso-circular" r="25" stroke-width="5" fill="none" stroke-linecap="round">
                        </circle>
                    </svg>
                </div>
                <img id="img_parte1" class="img_parte1_p" src="../imagens/user.png" alt="" />

            </div>
        </>
    );
}
export default Menu;