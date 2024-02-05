'use client';
import React from 'react';
import Menu from "../components/menu";
import Marcadagua from "../components/marcadagua";
import ReactAudioPlayer from 'react-audio-player';

export default function home() {

    return (
        <html lang="pt-br">

            <title>Home</title>
            <body>
                <Marcadagua />
                <Menu />
                <ReactAudioPlayer
                    src="../imagens/Shadowing - Corbyn Kites.mp3"
                    playing
                    loop
                    controls
                />
                <video autoPlay loop muted className="background-video">
                    <source src="../imagens/pexels-mr-borys-12336932 (1080p).mp4" type="video/mp4" />
                    Seu navegador não suporta o elemento de vídeo.
                </video>
                <script type="module" src="https://unpkg.com/@splinetool/viewer@0.9.508/build/spline-viewer.js"></script>
                <div className="background-word">
                    <spline-viewer  url="https://prod.spline.design/rztZyIzfzyzyWjmx/scene.splinecode"></spline-viewer>
                </div>

            </body>

        </html>
    );
};