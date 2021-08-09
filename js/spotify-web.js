const clientId = '';
const clientSecret = '';
var token
var spotifyIcon = '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M19.1,10.64C15.23,8.34,8.85,8.13,5.16,9.25A1.12,1.12,0,1,1,4.51,7.1c4.23-1.28,11.28-1,15.73,1.61a1.12,1.12,0,1,1-1.14,1.93ZM19,14a.94.94,0,0,1-1.29.31A15.73,15.73,0,0,0,5.73,13a.94.94,0,0,1-.55-1.79,17.5,17.5,0,0,1,13.48,1.6A.93.93,0,0,1,19,14ZM17.5,17.31a.75.75,0,0,1-1,.25c-2.82-1.72-6.37-2.11-10.55-1.16A.74.74,0,0,1,5,15.84a.75.75,0,0,1,.56-.9c4.57-1,8.49-.59,11.66,1.34A.75.75,0,0,1,17.5,17.31ZM12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Z" style="fill:#fff"/></svg>&nbsp'


const pegaToken2 = async () => {
    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
        },
        body: {
            'grant_type': 'client_credentials'
        },
    });
    const meuJson = await response.json(); 
    console.log(meuJson);

}


var pegaToken = {
    "url": "https://accounts.spotify.com/api/token",
    "method": "POST",
    "headers": {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
    },
    "data": {
        "grant_type": "client_credentials"
    },
    success:function (sucesso){
    console.log('suesso', sucesso.access_token)
    token = sucesso.access_token;
    return token
    }
};


$.ajax(pegaToken).done({
    type:"GET",
    url: 'https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg',
    headers: {
        'Authorization': 'Bearer ' + token,
    },
    sucess: function(){
                //gazolla
                var tabelaGaz = document.getElementById("nome-gazolla");
                var fotoGaz = document.getElementById("foto-gazolla");
                var seguidoresGaz = document.getElementById("seguidores-gazolla");
                tabelaGaz.innerHTML = data.artists[0].name;
                fotoGaz.innerHTML = '<img src="' + data.artists[0].images[2].url + '" class="img-tabela" alt="" srcset=""/>';
                seguidoresGaz.innerHTML = spotifyIcon + data.artists[0].followers.total + '&nbspSeguidores';
    }
    

});


//var apenas para teste - token real
var meuToken = 'BQDTgYVVgLHpfN6ngDG4ITpRnWJqetbV4ecgDdZzFLdIJg6ulPH_Hq-SZvH2h3_48W6lkJD60LjAG1GHLUg'

$.ajax({
    type: "GET",
    url: 'https://api.spotify.com/v1/artists?ids=6MXMuAa4reykXVUPFaSE2q%2C3yujwOo5L5DZDOcGj8K9fj%2C1VD9v9T9bOrZXhfZ8ZAHK9%2C5IRGhffWFbNGJqS7wc7UDN%2C3Gmuv8ih6UWYlZQlM4zFgo%2C66DRc0RcwzeQcm1wKdDQ4o%2C4ESBMlhP8DUP0k5mIJ2xfJ%2C6QmiUgayhWQeUFTRtBzMT8%2C29fIOE8ckNq96NbZlktZ7a%2C5rOuAFH0SjUPYfw8czrNaP%2C7qd3q5BKu3lh5r0vVBWSzm%2C7aS93G9e7XG0GCUATQjqv0%2C3anHEyEBxuE2hsDhHVlzZi%2C01Vnbpcaztlxks2JFHYkME%2C1BkGeGrbRHYd8Wg2lQqJqR%2C4xMfBjNDW6VPe7W4Wly5W7',
    async: 'false',
    headers: {
        'Authorization': 'Bearer ' + meuToken,
    },
    success: function (data) {

        

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
    }
});