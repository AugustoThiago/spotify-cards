const clientId = '197f058f20614425a7683de1552719de';
const clientSecret = 'a6e241d8de0445449913be97343c0174';


$.ajax({
    type: "POST",
    url: 'https://accounts.spotify.com/api/token',
    headers: {
        'Content-Type' : 'application/x-www-form-urlencoded',
		'Authorization' : 'Basic ' + btoa(clientId + ':' + clientSecret)
    },
    data: {
        "grant_type": "client_credentials"
    },
    success: function (token) {
        console.log('Token 01:', token.access_token);
        token = token.acess_token;
        resulta = token;
    },

});


$.ajax({
    type:"GET",   
    url: 'https://api.spotify.com/v1/artists?ids=6MXMuAa4reykXVUPFaSE2q%2C3yujwOo5L5DZDOcGj8K9fj%2C1VD9v9T9bOrZXhfZ8ZAHK9%2C5IRGhffWFbNGJqS7wc7UDN%2C3Gmuv8ih6UWYlZQlM4zFgo%2C66DRc0RcwzeQcm1wKdDQ4o%2C4ESBMlhP8DUP0k5mIJ2xfJ%2C6QmiUgayhWQeUFTRtBzMT8%2C29fIOE8ckNq96NbZlktZ7a%2C5rOuAFH0SjUPYfw8czrNaP%2C7qd3q5BKu3lh5r0vVBWSzm%2C7aS93G9e7XG0GCUATQjqv0%2C3anHEyEBxuE2hsDhHVlzZi%2C01Vnbpcaztlxks2JFHYkME%2C1BkGeGrbRHYd8Wg2lQqJqR%2C4xMfBjNDW6VPe7W4Wly5W7',
    headers: {
        'Authorization': 'Bearer ' + 'BQCwlJnfdsl22y_0wuO_3cHuEl0zV7KjIyH3jdQ-UL57sn73NpolB4jDUyU5pxcIcK7Vwi8mt55ipxqh21gTEgnFuepUKZdOoNsdXfGwCGyQVFPmbKzXWZg_tdYA8CT893U8ByNxXfa1NesVOU0O5GbfY5AGHw'
    },
    success: function (data) {
        console.log('Todos', data);
        var tabelaGaz = document.getElementById("nome-gazolla");
        tabelaGaz.innerHTML = data.artists[0].name;
        var fotoGaz = document.getElementById("foto-gazolla");
        fotoGaz.innerHTML = '<img src="' + data.artists[0].images[2].url + '" class="img-tabela" alt="" srcset=""/>';
        var seguidoresGaz = document.getElementById("seguidores-gazolla");
        seguidoresGaz.innerHTML = 'ÍCONE ' + data.artists[0].followers.total;
        
        //brn
        var tabelaBrn = document.getElementById("nome-brn");
        tabelaBrn.innerHTML = data.artists[1].name;
        var fotoBrn = document.getElementById("foto-brn");
        fotoBrn.innerHTML = '<img src="' + data.artists[1].images[2].url + '" class="img-tabela" alt="" srcset=""/>';
        var seguidoresBrn = document.getElementById("seguidores-brn");
        seguidoresBrn.innerHTML = 'ÍCONE ' + data.artists[1].followers.total;

        //Krash
        var tabelaKrash = document.getElementById("nome-krash");
        tabelaKrash.innerHTML = data.artists[2].name;
        var fotoKrash = document.getElementById("foto-krash");
        fotoKrash.innerHTML = '<img src="' + data.artists[2].images[2].url + '" class="img-tabela" alt="" srcset=""/>';
        var seguidoresKrash = document.getElementById("seguidores-krash");
        seguidoresKrash.innerHTML = 'ÍCONE ' + data.artists[2].followers.total;

        //Jacob
        var tabelaJacob = document.getElementById("nome-jacob");
        tabelaJacob.innerHTML = data.artists[3].name;
        var fotoJacob = document.getElementById("foto-jacob");
        fotoJacob.innerHTML = '<img src="' + data.artists[3].images[2].url + '" class="img-tabela" alt="" srcset=""/>';
        var seguidoresJacob = document.getElementById("seguidores-jacob");
        seguidoresJacob.innerHTML = 'ÍCONE ' + data.artists[3].followers.total;

        //Puka
        var tabelaPuka = document.getElementById("nome-puka");
        tabelaPuka.innerHTML = data.artists[4].name;
        var fotoPuka = document.getElementById("foto-puka");
        fotoPuka.innerHTML = '<img src="' + data.artists[4].images[2].url + '" class="img-tabela" alt="" srcset=""/>';
        var seguidoresPuka = document.getElementById("seguidores-puka");
        seguidoresPuka.innerHTML = 'ÍCONE ' + data.artists[4].followers.total;

        //Voltech
        var tabelaVoltech = document.getElementById("nome-volt");
        tabelaVoltech.innerHTML = data.artists[5].name;
        var fotoVoltech = document.getElementById("foto-volt");
        fotoVoltech.innerHTML = '<img src="' + data.artists[5].images[2].url + '" class="img-tabela" alt="" srcset=""/>';
        var seguidoresVoltech = document.getElementById("seguidores-volt");
        seguidoresVoltech.innerHTML = 'ÍCONE ' + data.artists[5].followers.total;

        //Gaba Kamer
        var tabelaGaba = document.getElementById("nome-gaba");
        tabelaGaba.innerHTML = data.artists[6].name;
        var fotoGaba = document.getElementById("foto-gaba");
        fotoGaba.innerHTML = '<img src="' + data.artists[6].images[2].url + '" class="img-tabela" alt="" srcset=""/>';
        var seguidoresGaba = document.getElementById("seguidores-gaba");
        seguidoresGaba.innerHTML = 'ÍCONE ' + data.artists[6].followers.total;
        
        //Hippocoon
        var tabelaHippo = document.getElementById("nome-hippo");
        tabelaHippo.innerHTML = data.artists[7].name;
        var fotoHippo = document.getElementById("foto-hippo");
        fotoHippo.innerHTML = '<img src="' + data.artists[7].images[2].url + '" class="img-tabela" alt="" srcset=""/>';
        var seguidoresHippo = document.getElementById("seguidores-hippo");
        seguidoresHippo.innerHTML = 'ÍCONE ' + data.artists[7].followers.total;

        //Cosmonet
        var tabelaCosmo = document.getElementById("nome-cosmo");
        tabelaCosmo.innerHTML = data.artists[8].name;
        var fotoCosmo = document.getElementById("foto-cosmo");
        fotoCosmo.innerHTML = '<img src="' + data.artists[8].images[2].url + '" class="img-tabela" alt="" srcset=""/>';
        var seguidoresCosmo = document.getElementById("seguidores-cosmo");
        seguidoresCosmo.innerHTML = 'ÍCONE ' + data.artists[8].followers.total;

        //Elemental
        var tabelaElemental = document.getElementById("nome-elemental");
        tabelaElemental.innerHTML = data.artists[9].name;
        var fotoElemental = document.getElementById("foto-elemental");
        fotoElemental.innerHTML = '<img src="' + data.artists[9].images[2].url + '" class="img-tabela" alt="" srcset=""/>';
        var seguidoresElemental = document.getElementById("seguidores-elemental");
        seguidoresElemental.innerHTML = 'ÍCONE ' + data.artists[9].followers.total;

        //Plastic Robots
        var tabelaPlastic = document.getElementById("nome-plastic");
        tabelaPlastic.innerHTML = data.artists[10].name;
        var fotoPlastic = document.getElementById("foto-plastic");
        fotoPlastic.innerHTML = '<img src="' + data.artists[10].images[2].url + '" class="img-tabela" alt="" srcset=""/>';
        var seguidoresPlastic = document.getElementById("seguidores-plastic");
        seguidoresPlastic.innerHTML = 'ÍCONE ' + data.artists[10].followers.total;

        //Vermont
        var tabelaVermont = document.getElementById("nome-vermont");
        tabelaVermont.innerHTML = data.artists[11].name;
        var fotoVermont = document.getElementById("foto-vermont");
        fotoVermont.innerHTML = '<img src="' + data.artists[11].images[2].url + '" class="img-tabela" alt="" srcset=""/>';
        var seguidoresVermont = document.getElementById("seguidores-vermont");
        seguidoresVermont.innerHTML = 'ÍCONE ' + data.artists[11].followers.total;

        //Renan Boeing
        var tabelaRenan = document.getElementById("nome-renan");
        tabelaRenan.innerHTML = data.artists[12].name;
        var fotoRenan = document.getElementById("foto-renan");
        fotoRenan.innerHTML = '<img src="' + data.artists[12].images[2].url + '" class="img-tabela" alt="" srcset=""/>';
        var seguidoresRenan = document.getElementById("seguidores-renan");
        seguidoresRenan.innerHTML = 'ÍCONE ' + data.artists[12].followers.total; 

        //SOFAT
        var tabelaSofat = document.getElementById("nome-sofat");
        tabelaSofat.innerHTML = data.artists[13].name;
        var fotoSofat = document.getElementById("foto-sofat");
        fotoSofat.innerHTML = '<img src="' + data.artists[13].images[2].url + '" class="img-tabela" alt="" srcset=""/>';
        var seguidoresSofat = document.getElementById("seguidores-sofat");
        seguidoresSofat.innerHTML = 'ÍCONE ' + data.artists[13].followers.total; 

        //FlexB
        var tabelaFlexB = document.getElementById("nome-flexb");
        tabelaFlexB.innerHTML = data.artists[14].name;
        var fotoFlexB = document.getElementById("foto-flexb");
        fotoFlexB.innerHTML = '<img src="' + data.artists[14].images[2].url + '" class="img-tabela" alt="" srcset=""/>';
        var seguidoresFlexB = document.getElementById("seguidores-flexb");
        seguidoresFlexB.innerHTML = 'ÍCONE ' + data.artists[14].followers.total;

        //Thales Thumbra
        var nomeThales = document.getElementById("nome-thales");
        nomeThales.innerHTML = data.artists[15].name;
        var fotoThales = document.getElementById("foto-thales");
        fotoThales.innerHTML = '<img src="' + data.artists[15].images[2].url + '" class="img-tabela" alt="" srcset=""/>';
        var seguidoresThales = document.getElementById("seguidores-thales");
        seguidoresThales.innerHTML = 'ÍCONE ' + data.artists[15].followers.total;
    }
});
