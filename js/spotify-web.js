var spotifyApi = new SpotifyWebApi();
const spotifyIcon = '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M19.1,10.64C15.23,8.34,8.85,8.13,5.16,9.25A1.12,1.12,0,1,1,4.51,7.1c4.23-1.28,11.28-1,15.73,1.61a1.12,1.12,0,1,1-1.14,1.93ZM19,14a.94.94,0,0,1-1.29.31A15.73,15.73,0,0,0,5.73,13a.94.94,0,0,1-.55-1.79,17.5,17.5,0,0,1,13.48,1.6A.93.93,0,0,1,19,14ZM17.5,17.31a.75.75,0,0,1-1,.25c-2.82-1.72-6.37-2.11-10.55-1.16A.74.74,0,0,1,5,15.84a.75.75,0,0,1,.56-.9c4.57-1,8.49-.59,11.66,1.34A.75.75,0,0,1,17.5,17.31ZM12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Z" style="fill:#fff"/></svg>&nbsp';
const clientId = 'aeccdd0daa854e18ba0d5be3db207b4d';
const clientSecret = '5d39f1fd07ab4f0db51b39e319f82ae4';

const pegaToken = (function () {
    fetch('https://accounts.spotify.com/api/token', {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": "Basic " + btoa(clientId + ':' + clientSecret)
            },
            body: 'grant_type=client_credentials'
        })
        .then(dataToken => {
            return dataToken.json()
        })
        .then(token => {
            console.log('sucesso token :', token.access_token);
            spotifyApi.setAccessToken(token.access_token);

            spotifyApi
                .getArtists([
                    '6MXMuAa4reykXVUPFaSE2q',
                    '3yujwOo5L5DZDOcGj8K9fj',
                    '1VD9v9T9bOrZXhfZ8ZAHK9',
                    '5IRGhffWFbNGJqS7wc7UDN',
                    '3Gmuv8ih6UWYlZQlM4zFgo',
                    '66DRc0RcwzeQcm1wKdDQ4o',
                    '4ESBMlhP8DUP0k5mIJ2xfJ',
                    '6QmiUgayhWQeUFTRtBzMT8',
                    '29fIOE8ckNq96NbZlktZ7a',
                    '5rOuAFH0SjUPYfw8czrNaP',
                    '7qd3q5BKu3lh5r0vVBWSzm',
                    '7aS93G9e7XG0GCUATQjqv0',
                    '3anHEyEBxuE2hsDhHVlzZi',
                    '01Vnbpcaztlxks2JFHYkME',
                    '1BkGeGrbRHYd8Wg2lQqJqR',
                    '4xMfBjNDW6VPe7W4Wly5W7'
                ])
                .then(
                    function (data) {
                        console.log('Artistas Infos', data);
                        
                        //gazolla
                        var tabelaGaz = document.getElementById("nome-gazolla");
                        var fotoGaz = document.getElementById("foto-gazolla");
                        var seguidoresGaz = document.getElementById("seguidores-gazolla");
                        tabelaGaz.innerHTML = data.artists[0].name;
                        fotoGaz.innerHTML = '<img src="' + data.artists[0].images[2].url + '" class="img-tabela" alt="" srcset=""/>';
                        seguidoresGaz.innerHTML = spotifyIcon + data.artists[0].followers.total + '&nbspSeguidores';

                        //brn
                        var tabelaBrn = document.getElementById("nome-brn");
                        var fotoBrn = document.getElementById("foto-brn");
                        var seguidoresBrn = document.getElementById("seguidores-brn");
                        tabelaBrn.innerHTML = data.artists[1].name;
                        fotoBrn.innerHTML = '<img src="' + data.artists[1].images[2].url + '" class="img-tabela" alt="" srcset=""/>';
                        seguidoresBrn.innerHTML = spotifyIcon + data.artists[1].followers.total + '&nbspSeguidores';

                        //Krash
                        var tabelaKrash = document.getElementById("nome-krash");
                        var fotoKrash = document.getElementById("foto-krash");
                        var seguidoresKrash = document.getElementById("seguidores-krash");
                        tabelaKrash.innerHTML = data.artists[2].name;
                        fotoKrash.innerHTML = '<img src="' + data.artists[2].images[2].url + '" class="img-tabela" alt="" srcset=""/>';
                        seguidoresKrash.innerHTML = spotifyIcon + data.artists[2].followers.total + '&nbspSeguidores';

                        //Jacob
                        var tabelaJacob = document.getElementById("nome-jacob");
                        var fotoJacob = document.getElementById("foto-jacob");
                        var seguidoresJacob = document.getElementById("seguidores-jacob");
                        tabelaJacob.innerHTML = data.artists[3].name;
                        fotoJacob.innerHTML = '<img src="' + data.artists[3].images[2].url + '" class="img-tabela" alt="" srcset=""/>';
                        seguidoresJacob.innerHTML = spotifyIcon + data.artists[3].followers.total + '&nbspSeguidores';

                        //Puka
                        var tabelaPuka = document.getElementById("nome-puka");
                        var fotoPuka = document.getElementById("foto-puka");
                        var seguidoresPuka = document.getElementById("seguidores-puka");
                        tabelaPuka.innerHTML = data.artists[4].name;
                        fotoPuka.innerHTML = '<img src="' + data.artists[4].images[2].url + '" class="img-tabela" alt="" srcset=""/>';
                        seguidoresPuka.innerHTML = spotifyIcon + data.artists[4].followers.total + '&nbspSeguidores';

                        //Voltech
                        var tabelaVoltech = document.getElementById("nome-volt");
                        var fotoVoltech = document.getElementById("foto-volt");
                        var seguidoresVoltech = document.getElementById("seguidores-volt");
                        tabelaVoltech.innerHTML = data.artists[5].name;
                        fotoVoltech.innerHTML = '<img src="' + data.artists[5].images[2].url + '" class="img-tabela" alt="" srcset=""/>';
                        seguidoresVoltech.innerHTML = spotifyIcon + data.artists[5].followers.total + '&nbspSeguidores';

                        //Gaba Kamer
                        var tabelaGaba = document.getElementById("nome-gaba");
                        var fotoGaba = document.getElementById("foto-gaba");
                        var seguidoresGaba = document.getElementById("seguidores-gaba");
                        tabelaGaba.innerHTML = data.artists[6].name;
                        fotoGaba.innerHTML = '<img src="' + data.artists[6].images[2].url + '" class="img-tabela" alt="" srcset=""/>';
                        seguidoresGaba.innerHTML = spotifyIcon + data.artists[6].followers.total + '&nbspSeguidores';

                        //Hippocoon
                        var tabelaHippo = document.getElementById("nome-hippo");
                        var fotoHippo = document.getElementById("foto-hippo");
                        var seguidoresHippo = document.getElementById("seguidores-hippo");
                        tabelaHippo.innerHTML = data.artists[7].name;
                        fotoHippo.innerHTML = '<img src="' + data.artists[7].images[2].url + '" class="img-tabela" alt="" srcset=""/>';
                        seguidoresHippo.innerHTML = spotifyIcon + data.artists[7].followers.total + '&nbspSeguidores';

                        //Cosmonet
                        var tabelaCosmo = document.getElementById("nome-cosmo");
                        var fotoCosmo = document.getElementById("foto-cosmo");
                        var seguidoresCosmo = document.getElementById("seguidores-cosmo");
                        tabelaCosmo.innerHTML = data.artists[8].name;
                        fotoCosmo.innerHTML = '<img src="' + data.artists[8].images[2].url + '" class="img-tabela" alt="" srcset=""/>';
                        seguidoresCosmo.innerHTML = spotifyIcon + data.artists[8].followers.total + '&nbspSeguidores';

                        //Elemental
                        var tabelaElemental = document.getElementById("nome-elemental");
                        var fotoElemental = document.getElementById("foto-elemental");
                        var seguidoresElemental = document.getElementById("seguidores-elemental");
                        tabelaElemental.innerHTML = data.artists[9].name;
                        fotoElemental.innerHTML = '<img src="' + data.artists[9].images[2].url + '" class="img-tabela" alt="" srcset=""/>';
                        seguidoresElemental.innerHTML = spotifyIcon + data.artists[9].followers.total + '&nbspSeguidores';

                        //Plastic Robots
                        var tabelaPlastic = document.getElementById("nome-plastic");
                        var fotoPlastic = document.getElementById("foto-plastic");
                        var seguidoresPlastic = document.getElementById("seguidores-plastic");
                        tabelaPlastic.innerHTML = data.artists[10].name;
                        fotoPlastic.innerHTML = '<img src="' + data.artists[10].images[2].url + '" class="img-tabela" alt="" srcset=""/>';
                        seguidoresPlastic.innerHTML = spotifyIcon + data.artists[10].followers.total + '&nbspSeguidores';

                        //Vermont
                        var tabelaVermont = document.getElementById("nome-vermont");
                        var fotoVermont = document.getElementById("foto-vermont");
                        var seguidoresVermont = document.getElementById("seguidores-vermont");
                        tabelaVermont.innerHTML = data.artists[11].name;
                        fotoVermont.innerHTML = '<img src="' + data.artists[11].images[2].url + '" class="img-tabela" alt="" srcset=""/>';
                        seguidoresVermont.innerHTML = spotifyIcon + data.artists[11].followers.total + '&nbspSeguidores';

                        //Renan Boeing
                        var tabelaRenan = document.getElementById("nome-renan");
                        var fotoRenan = document.getElementById("foto-renan");
                        var seguidoresRenan = document.getElementById("seguidores-renan");
                        tabelaRenan.innerHTML = data.artists[12].name;
                        fotoRenan.innerHTML = '<img src="' + data.artists[12].images[2].url + '" class="img-tabela" alt="" srcset=""/>';
                        seguidoresRenan.innerHTML = spotifyIcon + data.artists[12].followers.total + '&nbspSeguidores';

                        //SOFAT
                        var tabelaSofat = document.getElementById("nome-sofat");
                        var fotoSofat = document.getElementById("foto-sofat");
                        var seguidoresSofat = document.getElementById("seguidores-sofat");
                        tabelaSofat.innerHTML = data.artists[13].name;
                        fotoSofat.innerHTML = '<img src="' + data.artists[13].images[2].url + '" class="img-tabela" alt="" srcset=""/>';
                        seguidoresSofat.innerHTML = spotifyIcon + data.artists[13].followers.total + '&nbspSeguidores';

                        //FlexB
                        var tabelaFlexB = document.getElementById("nome-flexb");
                        var fotoFlexB = document.getElementById("foto-flexb");
                        var seguidoresFlexB = document.getElementById("seguidores-flexb");
                        tabelaFlexB.innerHTML = data.artists[14].name;
                        fotoFlexB.innerHTML = '<img src="' + data.artists[14].images[2].url + '" class="img-tabela" alt="" srcset=""/>';
                        seguidoresFlexB.innerHTML = spotifyIcon + data.artists[14].followers.total + '&nbspSeguidores';

                        //Thales Thumbra
                        var nomeThales = document.getElementById("nome-thales");
                        var fotoThales = document.getElementById("foto-thales");
                        var seguidoresThales = document.getElementById("seguidores-thales");
                        nomeThales.innerHTML = data.artists[15].name;
                        fotoThales.innerHTML = '<img src="' + data.artists[15].images[2].url + '" class="img-tabela" alt="" srcset=""/>';
                        seguidoresThales.innerHTML = spotifyIcon + data.artists[15].followers.total + '&nbspSeguidores';
                    },
                    function (err) {
                        console.error(err);
                    }
                );
        })
        .catch(error => console.log(error));



})();
