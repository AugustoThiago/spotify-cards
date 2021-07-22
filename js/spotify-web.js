const clientId = 'aeccdd0daa854e18ba0d5be3db207b4d';
const clientSecret = '5d39f1fd07ab4f0db51b39e319f82ae4';


$.ajax({
    type: "POST",
    url: 'https://accounts.spotify.com/api/token',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
    },
    data: {
        "grant_type": "client_credentials"
    },
    success: function (token) {
        // console.log('Token 01:', token.access_token);
        token = token.acess_token;
        result = token;
    },
});

$.ajax({
    type: "GET",
    url: 'https://api.spotify.com/v1/artists?ids=6MXMuAa4reykXVUPFaSE2q%2C3yujwOo5L5DZDOcGj8K9fj%2C1VD9v9T9bOrZXhfZ8ZAHK9%2C5IRGhffWFbNGJqS7wc7UDN%2C3Gmuv8ih6UWYlZQlM4zFgo%2C66DRc0RcwzeQcm1wKdDQ4o%2C4ESBMlhP8DUP0k5mIJ2xfJ%2C6QmiUgayhWQeUFTRtBzMT8%2C29fIOE8ckNq96NbZlktZ7a%2C5rOuAFH0SjUPYfw8czrNaP%2C7qd3q5BKu3lh5r0vVBWSzm%2C7aS93G9e7XG0GCUATQjqv0%2C3anHEyEBxuE2hsDhHVlzZi%2C01Vnbpcaztlxks2JFHYkME%2C1BkGeGrbRHYd8Wg2lQqJqR%2C4xMfBjNDW6VPe7W4Wly5W7',
    headers: {
        'Authorization': 'Bearer ' + 'BQCQabSDKgI2MTD0FDHT5lGD73fbbyLqwxrPhb1GVKIOVtjvNbHey-3iUC_2ymdVZaZae-OlgQPFeIrdHTvIZI_PwGTvW9MPUSb29cu-m88LJep6b8BTXlc4tM4zdc1gHgnEYEnf8C13U3_BTY1IB0MfFI82Yw'
    },
    success: function (data) {
        // console.log('Todos', data);

        var tabelaGaz = document.getElementById("nome-gazolla");
        var fotoGaz = document.getElementById("foto-gazolla");
        var seguidoresGaz = document.getElementById("seguidores-gazolla");
        tabelaGaz.innerHTML = data.artists[0].name;
        fotoGaz.innerHTML = '<img src="' + data.artists[0].images[2].url + '" class="img-tabela" alt="" srcset=""/>';
        seguidoresGaz.innerHTML = '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M19.1,10.64C15.23,8.34,8.85,8.13,5.16,9.25A1.12,1.12,0,1,1,4.51,7.1c4.23-1.28,11.28-1,15.73,1.61a1.12,1.12,0,1,1-1.14,1.93ZM19,14a.94.94,0,0,1-1.29.31A15.73,15.73,0,0,0,5.73,13a.94.94,0,0,1-.55-1.79,17.5,17.5,0,0,1,13.48,1.6A.93.93,0,0,1,19,14ZM17.5,17.31a.75.75,0,0,1-1,.25c-2.82-1.72-6.37-2.11-10.55-1.16A.74.74,0,0,1,5,15.84a.75.75,0,0,1,.56-.9c4.57-1,8.49-.59,11.66,1.34A.75.75,0,0,1,17.5,17.31ZM12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Z" style="fill:#fff"/></svg>&nbsp' + data.artists[0].followers.total + '&nbspSeguidores';



        //brn
        var tabelaBrn = document.getElementById("nome-brn");
        var fotoBrn = document.getElementById("foto-brn");
        var seguidoresBrn = document.getElementById("seguidores-brn");
        tabelaBrn.innerHTML = data.artists[1].name;
        fotoBrn.innerHTML = '<img src="' + data.artists[1].images[2].url + '" class="img-tabela" alt="" srcset=""/>';
        seguidoresBrn.innerHTML = '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M19.1,10.64C15.23,8.34,8.85,8.13,5.16,9.25A1.12,1.12,0,1,1,4.51,7.1c4.23-1.28,11.28-1,15.73,1.61a1.12,1.12,0,1,1-1.14,1.93ZM19,14a.94.94,0,0,1-1.29.31A15.73,15.73,0,0,0,5.73,13a.94.94,0,0,1-.55-1.79,17.5,17.5,0,0,1,13.48,1.6A.93.93,0,0,1,19,14ZM17.5,17.31a.75.75,0,0,1-1,.25c-2.82-1.72-6.37-2.11-10.55-1.16A.74.74,0,0,1,5,15.84a.75.75,0,0,1,.56-.9c4.57-1,8.49-.59,11.66,1.34A.75.75,0,0,1,17.5,17.31ZM12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Z" style="fill:#fff"/></svg>&nbsp' + data.artists[1].followers.total + '&nbspSeguidores';



        //Krash
        var tabelaKrash = document.getElementById("nome-krash");
        var fotoKrash = document.getElementById("foto-krash");
        var seguidoresKrash = document.getElementById("seguidores-krash");
        tabelaKrash.innerHTML = data.artists[2].name;
        fotoKrash.innerHTML = '<img src="' + data.artists[2].images[2].url + '" class="img-tabela" alt="" srcset=""/>';
        seguidoresKrash.innerHTML = '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M19.1,10.64C15.23,8.34,8.85,8.13,5.16,9.25A1.12,1.12,0,1,1,4.51,7.1c4.23-1.28,11.28-1,15.73,1.61a1.12,1.12,0,1,1-1.14,1.93ZM19,14a.94.94,0,0,1-1.29.31A15.73,15.73,0,0,0,5.73,13a.94.94,0,0,1-.55-1.79,17.5,17.5,0,0,1,13.48,1.6A.93.93,0,0,1,19,14ZM17.5,17.31a.75.75,0,0,1-1,.25c-2.82-1.72-6.37-2.11-10.55-1.16A.74.74,0,0,1,5,15.84a.75.75,0,0,1,.56-.9c4.57-1,8.49-.59,11.66,1.34A.75.75,0,0,1,17.5,17.31ZM12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Z" style="fill:#fff"/></svg>&nbsp' + data.artists[2].followers.total + '&nbspSeguidores';

        //Jacob
        var tabelaJacob = document.getElementById("nome-jacob");
        var fotoJacob = document.getElementById("foto-jacob");
        var seguidoresJacob = document.getElementById("seguidores-jacob");
        tabelaJacob.innerHTML = data.artists[3].name;
        fotoJacob.innerHTML = '<img src="' + data.artists[3].images[2].url + '" class="img-tabela" alt="" srcset=""/>';
        seguidoresJacob.innerHTML = '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M19.1,10.64C15.23,8.34,8.85,8.13,5.16,9.25A1.12,1.12,0,1,1,4.51,7.1c4.23-1.28,11.28-1,15.73,1.61a1.12,1.12,0,1,1-1.14,1.93ZM19,14a.94.94,0,0,1-1.29.31A15.73,15.73,0,0,0,5.73,13a.94.94,0,0,1-.55-1.79,17.5,17.5,0,0,1,13.48,1.6A.93.93,0,0,1,19,14ZM17.5,17.31a.75.75,0,0,1-1,.25c-2.82-1.72-6.37-2.11-10.55-1.16A.74.74,0,0,1,5,15.84a.75.75,0,0,1,.56-.9c4.57-1,8.49-.59,11.66,1.34A.75.75,0,0,1,17.5,17.31ZM12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Z" style="fill:#fff"/></svg>&nbsp' + data.artists[3].followers.total + '&nbspSeguidores';

        //Puka
        var tabelaPuka = document.getElementById("nome-puka");
        var fotoPuka = document.getElementById("foto-puka");
        var seguidoresPuka = document.getElementById("seguidores-puka");
        tabelaPuka.innerHTML = data.artists[4].name;
        fotoPuka.innerHTML = '<img src="' + data.artists[4].images[2].url + '" class="img-tabela" alt="" srcset=""/>';
        seguidoresPuka.innerHTML = '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M19.1,10.64C15.23,8.34,8.85,8.13,5.16,9.25A1.12,1.12,0,1,1,4.51,7.1c4.23-1.28,11.28-1,15.73,1.61a1.12,1.12,0,1,1-1.14,1.93ZM19,14a.94.94,0,0,1-1.29.31A15.73,15.73,0,0,0,5.73,13a.94.94,0,0,1-.55-1.79,17.5,17.5,0,0,1,13.48,1.6A.93.93,0,0,1,19,14ZM17.5,17.31a.75.75,0,0,1-1,.25c-2.82-1.72-6.37-2.11-10.55-1.16A.74.74,0,0,1,5,15.84a.75.75,0,0,1,.56-.9c4.57-1,8.49-.59,11.66,1.34A.75.75,0,0,1,17.5,17.31ZM12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Z" style="fill:#fff"/></svg>&nbsp' + data.artists[4].followers.total + '&nbspSeguidores';

        //Voltech
        var tabelaVoltech = document.getElementById("nome-volt");
        var fotoVoltech = document.getElementById("foto-volt");
        var seguidoresVoltech = document.getElementById("seguidores-volt");
        tabelaVoltech.innerHTML = data.artists[5].name;
        fotoVoltech.innerHTML = '<img src="' + data.artists[5].images[2].url + '" class="img-tabela" alt="" srcset=""/>';
        seguidoresVoltech.innerHTML = '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M19.1,10.64C15.23,8.34,8.85,8.13,5.16,9.25A1.12,1.12,0,1,1,4.51,7.1c4.23-1.28,11.28-1,15.73,1.61a1.12,1.12,0,1,1-1.14,1.93ZM19,14a.94.94,0,0,1-1.29.31A15.73,15.73,0,0,0,5.73,13a.94.94,0,0,1-.55-1.79,17.5,17.5,0,0,1,13.48,1.6A.93.93,0,0,1,19,14ZM17.5,17.31a.75.75,0,0,1-1,.25c-2.82-1.72-6.37-2.11-10.55-1.16A.74.74,0,0,1,5,15.84a.75.75,0,0,1,.56-.9c4.57-1,8.49-.59,11.66,1.34A.75.75,0,0,1,17.5,17.31ZM12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Z" style="fill:#fff"/></svg>&nbsp' + data.artists[5].followers.total + '&nbspSeguidores';

        //Gaba Kamer
        var tabelaGaba = document.getElementById("nome-gaba");
        var fotoGaba = document.getElementById("foto-gaba");
        var seguidoresGaba = document.getElementById("seguidores-gaba");
        tabelaGaba.innerHTML = data.artists[6].name;
        fotoGaba.innerHTML = '<img src="' + data.artists[6].images[2].url + '" class="img-tabela" alt="" srcset=""/>';
        seguidoresGaba.innerHTML = '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M19.1,10.64C15.23,8.34,8.85,8.13,5.16,9.25A1.12,1.12,0,1,1,4.51,7.1c4.23-1.28,11.28-1,15.73,1.61a1.12,1.12,0,1,1-1.14,1.93ZM19,14a.94.94,0,0,1-1.29.31A15.73,15.73,0,0,0,5.73,13a.94.94,0,0,1-.55-1.79,17.5,17.5,0,0,1,13.48,1.6A.93.93,0,0,1,19,14ZM17.5,17.31a.75.75,0,0,1-1,.25c-2.82-1.72-6.37-2.11-10.55-1.16A.74.74,0,0,1,5,15.84a.75.75,0,0,1,.56-.9c4.57-1,8.49-.59,11.66,1.34A.75.75,0,0,1,17.5,17.31ZM12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Z" style="fill:#fff"/></svg>&nbsp' + data.artists[6].followers.total + '&nbspSeguidores';

        //Hippocoon
        var tabelaHippo = document.getElementById("nome-hippo");
        var fotoHippo = document.getElementById("foto-hippo");
        var seguidoresHippo = document.getElementById("seguidores-hippo");
        tabelaHippo.innerHTML = data.artists[7].name;
        fotoHippo.innerHTML = '<img src="' + data.artists[7].images[2].url + '" class="img-tabela" alt="" srcset=""/>';
        seguidoresHippo.innerHTML = '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M19.1,10.64C15.23,8.34,8.85,8.13,5.16,9.25A1.12,1.12,0,1,1,4.51,7.1c4.23-1.28,11.28-1,15.73,1.61a1.12,1.12,0,1,1-1.14,1.93ZM19,14a.94.94,0,0,1-1.29.31A15.73,15.73,0,0,0,5.73,13a.94.94,0,0,1-.55-1.79,17.5,17.5,0,0,1,13.48,1.6A.93.93,0,0,1,19,14ZM17.5,17.31a.75.75,0,0,1-1,.25c-2.82-1.72-6.37-2.11-10.55-1.16A.74.74,0,0,1,5,15.84a.75.75,0,0,1,.56-.9c4.57-1,8.49-.59,11.66,1.34A.75.75,0,0,1,17.5,17.31ZM12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Z" style="fill:#fff"/></svg>&nbsp' + data.artists[7].followers.total + '&nbspSeguidores';

        //Cosmonet
        var tabelaCosmo = document.getElementById("nome-cosmo");
        var fotoCosmo = document.getElementById("foto-cosmo");
        var seguidoresCosmo = document.getElementById("seguidores-cosmo");
        tabelaCosmo.innerHTML = data.artists[8].name;
        fotoCosmo.innerHTML = '<img src="' + data.artists[8].images[2].url + '" class="img-tabela" alt="" srcset=""/>';
        seguidoresCosmo.innerHTML = '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M19.1,10.64C15.23,8.34,8.85,8.13,5.16,9.25A1.12,1.12,0,1,1,4.51,7.1c4.23-1.28,11.28-1,15.73,1.61a1.12,1.12,0,1,1-1.14,1.93ZM19,14a.94.94,0,0,1-1.29.31A15.73,15.73,0,0,0,5.73,13a.94.94,0,0,1-.55-1.79,17.5,17.5,0,0,1,13.48,1.6A.93.93,0,0,1,19,14ZM17.5,17.31a.75.75,0,0,1-1,.25c-2.82-1.72-6.37-2.11-10.55-1.16A.74.74,0,0,1,5,15.84a.75.75,0,0,1,.56-.9c4.57-1,8.49-.59,11.66,1.34A.75.75,0,0,1,17.5,17.31ZM12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Z" style="fill:#fff"/></svg>&nbsp' + data.artists[8].followers.total + '&nbspSeguidores';

        //Elemental
        var tabelaElemental = document.getElementById("nome-elemental");
        var fotoElemental = document.getElementById("foto-elemental");
        var seguidoresElemental = document.getElementById("seguidores-elemental");
        tabelaElemental.innerHTML = data.artists[9].name;
        fotoElemental.innerHTML = '<img src="' + data.artists[9].images[2].url + '" class="img-tabela" alt="" srcset=""/>';
        seguidoresElemental.innerHTML = '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M19.1,10.64C15.23,8.34,8.85,8.13,5.16,9.25A1.12,1.12,0,1,1,4.51,7.1c4.23-1.28,11.28-1,15.73,1.61a1.12,1.12,0,1,1-1.14,1.93ZM19,14a.94.94,0,0,1-1.29.31A15.73,15.73,0,0,0,5.73,13a.94.94,0,0,1-.55-1.79,17.5,17.5,0,0,1,13.48,1.6A.93.93,0,0,1,19,14ZM17.5,17.31a.75.75,0,0,1-1,.25c-2.82-1.72-6.37-2.11-10.55-1.16A.74.74,0,0,1,5,15.84a.75.75,0,0,1,.56-.9c4.57-1,8.49-.59,11.66,1.34A.75.75,0,0,1,17.5,17.31ZM12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Z" style="fill:#fff"/></svg>&nbsp' + data.artists[9].followers.total + '&nbspSeguidores';

        //Plastic Robots
        var tabelaPlastic = document.getElementById("nome-plastic");
        var fotoPlastic = document.getElementById("foto-plastic");
        var seguidoresPlastic = document.getElementById("seguidores-plastic");
        tabelaPlastic.innerHTML = data.artists[10].name;
        fotoPlastic.innerHTML = '<img src="' + data.artists[10].images[2].url + '" class="img-tabela" alt="" srcset=""/>';
        seguidoresPlastic.innerHTML = '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M19.1,10.64C15.23,8.34,8.85,8.13,5.16,9.25A1.12,1.12,0,1,1,4.51,7.1c4.23-1.28,11.28-1,15.73,1.61a1.12,1.12,0,1,1-1.14,1.93ZM19,14a.94.94,0,0,1-1.29.31A15.73,15.73,0,0,0,5.73,13a.94.94,0,0,1-.55-1.79,17.5,17.5,0,0,1,13.48,1.6A.93.93,0,0,1,19,14ZM17.5,17.31a.75.75,0,0,1-1,.25c-2.82-1.72-6.37-2.11-10.55-1.16A.74.74,0,0,1,5,15.84a.75.75,0,0,1,.56-.9c4.57-1,8.49-.59,11.66,1.34A.75.75,0,0,1,17.5,17.31ZM12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Z" style="fill:#fff"/></svg>&nbsp' + data.artists[10].followers.total + '&nbspSeguidores';

        //Vermont
        var tabelaVermont = document.getElementById("nome-vermont");
        var fotoVermont = document.getElementById("foto-vermont");
        var seguidoresVermont = document.getElementById("seguidores-vermont");
        tabelaVermont.innerHTML = data.artists[11].name;
        fotoVermont.innerHTML = '<img src="' + data.artists[11].images[2].url + '" class="img-tabela" alt="" srcset=""/>';
        seguidoresVermont.innerHTML = '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M19.1,10.64C15.23,8.34,8.85,8.13,5.16,9.25A1.12,1.12,0,1,1,4.51,7.1c4.23-1.28,11.28-1,15.73,1.61a1.12,1.12,0,1,1-1.14,1.93ZM19,14a.94.94,0,0,1-1.29.31A15.73,15.73,0,0,0,5.73,13a.94.94,0,0,1-.55-1.79,17.5,17.5,0,0,1,13.48,1.6A.93.93,0,0,1,19,14ZM17.5,17.31a.75.75,0,0,1-1,.25c-2.82-1.72-6.37-2.11-10.55-1.16A.74.74,0,0,1,5,15.84a.75.75,0,0,1,.56-.9c4.57-1,8.49-.59,11.66,1.34A.75.75,0,0,1,17.5,17.31ZM12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Z" style="fill:#fff"/></svg>&nbsp' + data.artists[11].followers.total + '&nbspSeguidores';

        //Renan Boeing
        var tabelaRenan = document.getElementById("nome-renan");
        var fotoRenan = document.getElementById("foto-renan");
        var seguidoresRenan = document.getElementById("seguidores-renan");
        tabelaRenan.innerHTML = data.artists[12].name;
        fotoRenan.innerHTML = '<img src="' + data.artists[12].images[2].url + '" class="img-tabela" alt="" srcset=""/>';
        seguidoresRenan.innerHTML = '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M19.1,10.64C15.23,8.34,8.85,8.13,5.16,9.25A1.12,1.12,0,1,1,4.51,7.1c4.23-1.28,11.28-1,15.73,1.61a1.12,1.12,0,1,1-1.14,1.93ZM19,14a.94.94,0,0,1-1.29.31A15.73,15.73,0,0,0,5.73,13a.94.94,0,0,1-.55-1.79,17.5,17.5,0,0,1,13.48,1.6A.93.93,0,0,1,19,14ZM17.5,17.31a.75.75,0,0,1-1,.25c-2.82-1.72-6.37-2.11-10.55-1.16A.74.74,0,0,1,5,15.84a.75.75,0,0,1,.56-.9c4.57-1,8.49-.59,11.66,1.34A.75.75,0,0,1,17.5,17.31ZM12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Z" style="fill:#fff"/></svg>&nbsp' + data.artists[12].followers.total + '&nbspSeguidores';

        //SOFAT
        var tabelaSofat = document.getElementById("nome-sofat");
        var fotoSofat = document.getElementById("foto-sofat");
        var seguidoresSofat = document.getElementById("seguidores-sofat");
        tabelaSofat.innerHTML = data.artists[13].name;
        fotoSofat.innerHTML = '<img src="' + data.artists[13].images[2].url + '" class="img-tabela" alt="" srcset=""/>';
        seguidoresSofat.innerHTML = '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M19.1,10.64C15.23,8.34,8.85,8.13,5.16,9.25A1.12,1.12,0,1,1,4.51,7.1c4.23-1.28,11.28-1,15.73,1.61a1.12,1.12,0,1,1-1.14,1.93ZM19,14a.94.94,0,0,1-1.29.31A15.73,15.73,0,0,0,5.73,13a.94.94,0,0,1-.55-1.79,17.5,17.5,0,0,1,13.48,1.6A.93.93,0,0,1,19,14ZM17.5,17.31a.75.75,0,0,1-1,.25c-2.82-1.72-6.37-2.11-10.55-1.16A.74.74,0,0,1,5,15.84a.75.75,0,0,1,.56-.9c4.57-1,8.49-.59,11.66,1.34A.75.75,0,0,1,17.5,17.31ZM12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Z" style="fill:#fff"/></svg>&nbsp' + data.artists[13].followers.total + '&nbspSeguidores';

        //FlexB
        var tabelaFlexB = document.getElementById("nome-flexb");
        var fotoFlexB = document.getElementById("foto-flexb");
        var seguidoresFlexB = document.getElementById("seguidores-flexb");
        tabelaFlexB.innerHTML = data.artists[14].name;
        fotoFlexB.innerHTML = '<img src="' + data.artists[14].images[2].url + '" class="img-tabela" alt="" srcset=""/>';
        seguidoresFlexB.innerHTML = '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M19.1,10.64C15.23,8.34,8.85,8.13,5.16,9.25A1.12,1.12,0,1,1,4.51,7.1c4.23-1.28,11.28-1,15.73,1.61a1.12,1.12,0,1,1-1.14,1.93ZM19,14a.94.94,0,0,1-1.29.31A15.73,15.73,0,0,0,5.73,13a.94.94,0,0,1-.55-1.79,17.5,17.5,0,0,1,13.48,1.6A.93.93,0,0,1,19,14ZM17.5,17.31a.75.75,0,0,1-1,.25c-2.82-1.72-6.37-2.11-10.55-1.16A.74.74,0,0,1,5,15.84a.75.75,0,0,1,.56-.9c4.57-1,8.49-.59,11.66,1.34A.75.75,0,0,1,17.5,17.31ZM12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Z" style="fill:#fff"/></svg>&nbsp' + data.artists[14].followers.total + '&nbspSeguidores';

        //Thales Thumbra
        var nomeThales = document.getElementById("nome-thales");
        var fotoThales = document.getElementById("foto-thales");
        var seguidoresThales = document.getElementById("seguidores-thales");
        nomeThales.innerHTML = data.artists[15].name;
        fotoThales.innerHTML = '<img src="' + data.artists[15].images[2].url + '" class="img-tabela" alt="" srcset=""/>';
        seguidoresThales.innerHTML = '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M19.1,10.64C15.23,8.34,8.85,8.13,5.16,9.25A1.12,1.12,0,1,1,4.51,7.1c4.23-1.28,11.28-1,15.73,1.61a1.12,1.12,0,1,1-1.14,1.93ZM19,14a.94.94,0,0,1-1.29.31A15.73,15.73,0,0,0,5.73,13a.94.94,0,0,1-.55-1.79,17.5,17.5,0,0,1,13.48,1.6A.93.93,0,0,1,19,14ZM17.5,17.31a.75.75,0,0,1-1,.25c-2.82-1.72-6.37-2.11-10.55-1.16A.74.74,0,0,1,5,15.84a.75.75,0,0,1,.56-.9c4.57-1,8.49-.59,11.66,1.34A.75.75,0,0,1,17.5,17.31ZM12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Z" style="fill:#fff"/></svg>&nbsp' + data.artists[15].followers.total + '&nbspSeguidores';

        var ftModalGazzola = document.getElementById("foto-modal-gazolla");
        var ftModalBrn = document.getElementById("foto-modal-brn");
        var ftModalKrash = document.getElementById("foto-modal-krash");
        var ftModalJacob = document.getElementById("foto-modal-jacob");
        var ftModalPuka = document.getElementById("foto-modal-puka");
        var ftModalVoltech = document.getElementById("foto-modal-voltech");
        var ftModalGaba = document.getElementById("foto-modal-gaba");
        var ftModalHippo = document.getElementById("foto-modal-hippo");
        var ftModalCosmonet = document.getElementById("foto-modal-cosmonet");
        var ftModalElemental = document.getElementById("foto-modal-elemental");
        var ftModalPlastic = document.getElementById("foto-modal-plastic");
        var ftModalVermont = document.getElementById("foto-modal-vermont");
        var ftModalRenan = document.getElementById("foto-modal-renan");
        var ftModalSofat = document.getElementById("foto-modal-sofat");
        var ftModalFlexb = document.getElementById("foto-modal-flexb");
        var ftModalThales = document.getElementById("foto-modal-thales");
        ftModalGazzola.innerHTML = '<img src="' + data.artists[0].images[1].url + '"alt="" srcset=""/>'
        ftModalBrn.innerHTML = '<img src="' + data.artists[1].images[1].url + '"alt="" srcset=""/>'
        ftModalKrash.innerHTML = '<img src="' + data.artists[2].images[1].url + '"alt="" srcset=""/>'
        ftModalJacob.innerHTML = '<img src="' + data.artists[3].images[1].url + '"alt="" srcset=""/>'
        ftModalPuka.innerHTML = '<img src="' + data.artists[4].images[1].url + '"alt="" srcset=""/>'
        ftModalVoltech.innerHTML = '<img src="' + data.artists[5].images[1].url + '"alt="" srcset=""/>'
        ftModalGaba.innerHTML = '<img src="' + data.artists[6].images[1].url + '"alt="" srcset=""/>'
        ftModalHippo.innerHTML = '<img src="' + data.artists[7].images[1].url + '"alt="" srcset=""/>'
        ftModalCosmonet.innerHTML = '<img src="' + data.artists[8].images[1].url + '"alt="" srcset=""/>'
        ftModalElemental.innerHTML = '<img src="' + data.artists[9].images[1].url + '"alt="" srcset=""/>'
        ftModalPlastic.innerHTML = '<img src="' + data.artists[10].images[1].url + '"alt="" srcset=""/>'
        ftModalVermont.innerHTML = '<img src="' + data.artists[11].images[1].url + '"alt="" srcset=""/>'
        ftModalRenan.innerHTML = '<img src="' + data.artists[12].images[1].url + '"alt="" srcset=""/>'
        ftModalSofat.innerHTML = '<img src="' + data.artists[13].images[1].url + '"alt="" srcset=""/>'
        ftModalFlexb.innerHTML = '<img src="' + data.artists[14].images[1].url + '"alt="" srcset=""/>'
        ftModalThales.innerHTML = '<img src="' + data.artists[15].images[1].url + '"alt="" srcset=""/>'
    }
});



//---------TOP TRACKS
//gazolla
$.ajax({
    type: "GET",
    url: 'https://api.spotify.com/v1/artists/6MXMuAa4reykXVUPFaSE2q/top-tracks?market=BR',
    headers: {
        'Authorization': 'Bearer ' + 'BQBFQU3zV_kA3oUO1yOMu_RzJ5ViZvMiutjCu55dLE1fbDi0E1v_mTLYIgs0DDlOeFmxRikNIrb9-rj0DY9PPcAsJi0-9_mzhUYpTaAhT_fOKyaOfJgdihCtCYRx0D2Waf1Xkm2ZCidmjJ8I0dC4gpcRocR3nw'
    },
    success: function (data) {
        for (i in data.tracks) {
            var idTrack = data.tracks[i].id;
            var trackArtista = document.getElementById("track-gazolla_" + i);
            trackArtista.innerHTML = '<iframe src="https://open.spotify.com/embed/track/' + idTrack + '" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>';
        }
    }
});

//brn
$.ajax({
    type: "GET",
    url: 'https://api.spotify.com/v1/artists/3yujwOo5L5DZDOcGj8K9fj/top-tracks?market=BR',
    headers: {
        'Authorization': 'Bearer ' + 'BQAVmt8WsSw0EbetBEy6wsi-wvZF1kIng3rfvbcE62DtKalsFuI-5wodt1aMOJjcTo1FZLTjYU9ZQqCvIjonXwS7hRm0DnSJ5kQ7qDsZKD2MNlEs7aoI4t7YbjgM87tlQTrwjNW2q-2juHlBfL34fwrjBYFV6Q'
    },
    success: function (data) {
        for (i in data.tracks) {
            var idTrack = data.tracks[i].id;
            console.log(idTrack);
            var trackArtista = document.getElementById("track-brn_" + i);
            trackArtista.innerHTML = '<iframe src="https://open.spotify.com/embed/track/' + idTrack + '" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>';
        }


    }
});

//KRASH
$.ajax({
    type: "GET",
    url: 'https://api.spotify.com/v1/artists/1VD9v9T9bOrZXhfZ8ZAHK9/top-tracks?market=BR',
    headers: {
        'Authorization': 'Bearer ' + 'BQBVAipKJDlYZZY3jRtWiVS0wqBihR7fxWyBR1hBC1PjKMHRfEIFuPjSZ3vtM3aXmVTCUwxlXd0W2GIssWKSCLHb1h3DkiZVIDE9s0_-YSPTL4dN7lCN6GPtBPPcGsUmgHec1amDCV3yHVi18txBmOXGqr5GYQ'
    },
    success: function (data) {
        for (i in data.tracks) {
            var idTrack = data.tracks[i].id;
            console.log(idTrack);
            var trackArtista = document.getElementById("track-krash_" + i);
            trackArtista.innerHTML = '<iframe src="https://open.spotify.com/embed/track/' + idTrack + '" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>';
        }


    }
});

//JACOB
$.ajax({
    type: "GET",
    url: 'https://api.spotify.com/v1/artists/5IRGhffWFbNGJqS7wc7UDN/top-tracks?market=BR',
    headers: {
        'Authorization': 'Bearer ' + 'BQCgoWw_uFpcT8vJIifM556sy8BdVxiKFwluE1iLUW-sZpbcyfBOnBkUmdfrZavAPu4HKUJXe5PTQTdcqWfrib5cO7s7ZdCu1FE5FnWq9qLm31siM6LLDbfO2MeRZMWdvo5yXbEIR6X5MnxeJRz2FQD4U86YWQ'
    },
    success: function (data) {
        for (i in data.tracks) {
            var idTrack = data.tracks[i].id;
            console.log(idTrack);
            var trackArtista = document.getElementById("track-jacob_" + i);
            trackArtista.innerHTML = '<iframe src="https://open.spotify.com/embed/track/' + idTrack + '" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>';
        }


    }
});