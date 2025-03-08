document.addEventListener('DOMContentLoaded', function (){
    //referenciar elemento
        const btnSpotify = document.getElementById('btnSpotify');
        const btnDeezer = document.getElementById('btnDeezer');
        const btnYTM = document.getElementById('btnYTM');

        const btnVoltar = document.getElementById('btnVoltar');
        const btnAnterior = document.getElementById('btnAnterior');
        const btnProxiomo = document.getElementById('btnProximo');

        let listaAlbum = ['Imagens/REFLECTIONS.png', 'Imagens/LOOM.png'];

        let indexAtual = 0;
    //listener
        btnSpotify.addEventListener('click', mandarSpotify);
        btnDeezer.addEventListener('click', mandarDeezer);
        btnYTM.addEventListener('click', mandarYTM);

        btnVoltar.addEventListener('click', voltarMenu);
        btnAnterior.addEventListener('click', anterior);
        btnProxiomo.addEventListener('click', proximo)

        console.log(btnSpotify, btnDeezer, btnYTM);
    //função
        function mandarSpotify (){
            console.log('Spotify clicado');
            window.open('https://open.spotify.com/intl-pt/album/5IBigZKJt8uffeMjKw5uEl', '_blank');
        }

        function mandarDeezer (){
            console.log('Deezer clicado');
            window.open('https://www.deezer.com/en/album/712820501', '_blank')
        }

        function mandarYTM (){
            console.log('YouTube Music clicado');
            window.open('https://music.youtube.com/playlist?list=OLAK5uy_lfYWpSWk2YbKYQNQEliW8tfYv4wU7IfMI', '_blank');
        }

        function voltarMenu (){
            window.location.href = 'index.html';
        }

        function atualizarImagem (){
            document.getElementById('img_Album').src = listaAlbum[indexAtual];
        }

        function proximo (){
            indexAtual = (indexAtual + 1) % listaAlbum.lenght;
            atualizarImagem();
        }

        function anterior (){
            indexAtual = (indexAtual - 1 + imagens.lenght) % listaAlbum.lenght;
            atualizarImagem();
        }
    });