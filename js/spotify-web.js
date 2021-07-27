const clientId = 'aeccdd0daa854e18ba0d5be3db207b4d';
const clientSecret = '5d39f1fd07ab4f0db51b39e319f82ae4';
var tokenn

const pegaToken = {
	"url": "https://accounts.spotify.com/api/token",
    async:'false',
	"method": "POST",
	"headers": {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
	},
	"data": {
		"grant_type": "client_credentials"
	},
};



$.ajax(pegaToken).done(function(response){    
    console.log('RESPONSE: ', response.access_token);
    tokenn = response.access_token; 
    return tokenn  
})

console.log(pegaToken, tokenn);

$.ajax({
    type: "GET",
    url: 'https://api.spotify.com/v1/artists?ids=6MXMuAa4reykXVUPFaSE2q%2C3yujwOo5L5DZDOcGj8K9fj%2C1VD9v9T9bOrZXhfZ8ZAHK9%2C5IRGhffWFbNGJqS7wc7UDN%2C3Gmuv8ih6UWYlZQlM4zFgo%2C66DRc0RcwzeQcm1wKdDQ4o%2C4ESBMlhP8DUP0k5mIJ2xfJ%2C6QmiUgayhWQeUFTRtBzMT8%2C29fIOE8ckNq96NbZlktZ7a%2C5rOuAFH0SjUPYfw8czrNaP%2C7qd3q5BKu3lh5r0vVBWSzm%2C7aS93G9e7XG0GCUATQjqv0%2C3anHEyEBxuE2hsDhHVlzZi%2C01Vnbpcaztlxks2JFHYkME%2C1BkGeGrbRHYd8Wg2lQqJqR%2C4xMfBjNDW6VPe7W4Wly5W7',
    async:'false',
    headers: {
        'Authorization': 'Bearer ' + 'BQAxGCNO4OkTWD2Y2_21hS4JobxvQkqnS_YlVcIXPpRavuQSsFhbd0HxRuCc4aOnclAzjhGOG5M5tcdOSGGsddEOjT6nWzd2fXiR99PQCsc5Rjo_3-0hBUk8Lpiej37aYVc4ExC798y8y91fj9bZ5JpyJnLl4Q'
    },
    success: function (data) {
        console.log("chegou bem", tokenn);
    }
});
// $.ajax({
//     type: "POST",
//     url: 'https://accounts.spotify.com/api/token',
//     headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//         'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
//     },
//     data: {
//         "grant_type": "client_credentials"
//     },
//     success: function (token) {
//         console.log('Token 01:', token.access_token);
//         token = token.access_token;
//         return token
//     },
// });


$.ajax({
    type: "GET",
    url: 'https://api.spotify.com/v1/artists?ids=6MXMuAa4reykXVUPFaSE2q%2C3yujwOo5L5DZDOcGj8K9fj%2C1VD9v9T9bOrZXhfZ8ZAHK9%2C5IRGhffWFbNGJqS7wc7UDN%2C3Gmuv8ih6UWYlZQlM4zFgo%2C66DRc0RcwzeQcm1wKdDQ4o%2C4ESBMlhP8DUP0k5mIJ2xfJ%2C6QmiUgayhWQeUFTRtBzMT8%2C29fIOE8ckNq96NbZlktZ7a%2C5rOuAFH0SjUPYfw8czrNaP%2C7qd3q5BKu3lh5r0vVBWSzm%2C7aS93G9e7XG0GCUATQjqv0%2C3anHEyEBxuE2hsDhHVlzZi%2C01Vnbpcaztlxks2JFHYkME%2C1BkGeGrbRHYd8Wg2lQqJqR%2C4xMfBjNDW6VPe7W4Wly5W7',

    headers: {
        'Authorization': 'Bearer ' + 'BQAs3lFrhaBUW3_ZT1Ipy-iizqnO4Ux82FXepI7vwVlWDM1sQqGDwQlXZfGkdtSvVpce-K2UIfPRcmlwdWVI6ercLyw4UC6d0PbeoUX289WOc-fyXF9JuUfejtCcjeB9c7aHL9dobRfz_WAHnlTutdem04R_5A'
    },
    success: function (data) {
        // console.log('Todos', data);
        var spotifyIcon = '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M19.1,10.64C15.23,8.34,8.85,8.13,5.16,9.25A1.12,1.12,0,1,1,4.51,7.1c4.23-1.28,11.28-1,15.73,1.61a1.12,1.12,0,1,1-1.14,1.93ZM19,14a.94.94,0,0,1-1.29.31A15.73,15.73,0,0,0,5.73,13a.94.94,0,0,1-.55-1.79,17.5,17.5,0,0,1,13.48,1.6A.93.93,0,0,1,19,14ZM17.5,17.31a.75.75,0,0,1-1,.25c-2.82-1.72-6.37-2.11-10.55-1.16A.74.74,0,0,1,5,15.84a.75.75,0,0,1,.56-.9c4.57-1,8.49-.59,11.66,1.34A.75.75,0,0,1,17.5,17.31ZM12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Z" style="fill:#fff"/></svg>&nbsp'

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


        var ftModalGazzola = document.getElementById("foto-modal-gazolla");
        ftModalGazzola.innerHTML = '<img src="' + data.artists[0].images[1].url + '"alt="" srcset=""/>'
        var ftModalBrn = document.getElementById("foto-modal-brn");
        ftModalBrn.innerHTML = '<img src="' + data.artists[1].images[1].url + '"alt="" srcset=""/>'
        var ftModalKrash = document.getElementById("foto-modal-krash");
        ftModalKrash.innerHTML = '<img src="' + data.artists[2].images[1].url + '"alt="" srcset=""/>'
        var ftModalJacob = document.getElementById("foto-modal-jacob");
        ftModalJacob.innerHTML = '<img src="' + data.artists[3].images[1].url + '"alt="" srcset=""/>'
        var ftModalPuka = document.getElementById("foto-modal-puka");
        ftModalPuka.innerHTML = '<img src="' + data.artists[4].images[1].url + '"alt="" srcset=""/>'
        var ftModalVoltech = document.getElementById("foto-modal-voltech");
        ftModalVoltech.innerHTML = '<img src="' + data.artists[5].images[1].url + '"alt="" srcset=""/>'
        var ftModalGaba = document.getElementById("foto-modal-gaba");
        ftModalGaba.innerHTML = '<img src="' + data.artists[6].images[1].url + '"alt="" srcset=""/>'
        var ftModalHippo = document.getElementById("foto-modal-hippo");
        ftModalHippo.innerHTML = '<img src="' + data.artists[7].images[1].url + '"alt="" srcset=""/>'
        var ftModalCosmonet = document.getElementById("foto-modal-cosmo");
        ftModalCosmonet.innerHTML = '<img src="' + data.artists[8].images[1].url + '"alt="" srcset=""/>'
        var ftModalElemental = document.getElementById("foto-modal-elemental");
        ftModalElemental.innerHTML = '<img src="' + data.artists[9].images[1].url + '"alt="" srcset=""/>'
        var ftModalPlastic = document.getElementById("foto-modal-plastic");
        ftModalPlastic.innerHTML = '<img src="' + data.artists[10].images[1].url + '"alt="" srcset=""/>'
        var ftModalVermont = document.getElementById("foto-modal-vermont");
        ftModalVermont.innerHTML = '<img src="' + data.artists[11].images[1].url + '"alt="" srcset=""/>'
        var ftModalRenan = document.getElementById("foto-modal-renan");
        ftModalRenan.innerHTML = '<img src="' + data.artists[12].images[1].url + '"alt="" srcset=""/>'
        var ftModalSofat = document.getElementById("foto-modal-sofat");
        ftModalSofat.innerHTML = '<img src="' + data.artists[13].images[1].url + '"alt="" srcset=""/>'
        var ftModalFlexb = document.getElementById("foto-modal-flexb");
        ftModalFlexb.innerHTML = '<img src="' + data.artists[14].images[1].url + '"alt="" srcset=""/>'
        var ftModalThales = document.getElementById("foto-modal-thales");
        ftModalThales.innerHTML = '<img src="' + data.artists[15].images[1].url + '"alt="" srcset=""/>'
    }
});

//---------TOP TRACKS
//gazolla
$.ajax({
    type: "GET",
    url: 'https://api.spotify.com/v1/artists/6MXMuAa4reykXVUPFaSE2q/top-tracks?market=BR',
    headers: {
        'Authorization': 'Bearer ' + 'BQBsJIHoI56PU9QQ-WQstng5OLunje7pGcmSALP_nsUJCAB4cyHWngu3qZy53V5Icc4BE7-oJeWW70NYIYG8NnVeEffl0eMsGtdLlPStCQbXz2qhbvI9zpzpvUmQyP0fSbA4k2XjHoROWvtZviNFOUu696Kc1w'
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
        'Authorization': 'Bearer ' + 'BQDtmXCkIXjB63ama2Jy6JzMTJEhT0PwSSnRjO6jp_0--IZOofTtObpofAVmOvm3AMRoAjlkY3N4WFivAk45FKGF_FddKFO1QBNHaBgKMmEaE26jfDb0hRbqPq-OdhzNRxpye_74AE15cbWYUNTFLnd5WY_WLw'
    },
    success: function (data) {
        for (i in data.tracks) {
            var idTrack = data.tracks[i].id;

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
        'Authorization': 'Bearer ' + 'BQCmXZD31FDO-zkYJz6RQZHdk-Ox0g9F6dSfjENHQq2QGo84lDO17ahdIpB1_tZBnqMSdI0YvGFlf3mXzD6IqT2QBdFxkpU4jKNsIQGrUaOa3Z42VeyvNua2wOxKcgo9botp8I1x93MAwBa7ZrQgYsqBr2UJzg'
    },
    success: function (data) {
        for (i in data.tracks) {
            var idTrack = data.tracks[i].id;

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
        'Authorization': 'Bearer ' + 'BQBRaat_on9SKg3a2-q02VvrA_gPQD79CYpVuRLCqc08ioZGsFR6wYnBC7MWYNqTTlTVW_Pkg9DblO_eWzYJW42tqd4zw9I9W5AaPgOHPpp4GLkVaK7jCVaEYCLFzrPpOn-7dvf5EhTSpTOGtTqR0CWD5N-J2w'
    },
    success: function (data) {
        for (i in data.tracks) {
            var idTrack = data.tracks[i].id;

            var trackArtista = document.getElementById("track-jacob_" + i);
            trackArtista.innerHTML = '<iframe src="https://open.spotify.com/embed/track/' + idTrack + '" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>';
        }


    }
});

//PUKA
$.ajax({
    type: "GET",
    url: 'https://api.spotify.com/v1/artists/3Gmuv8ih6UWYlZQlM4zFgo/top-tracks?market=BR',

    headers: {
        'Authorization': 'Bearer ' + 'BQClsI-4FnJQnFDfds_x25Yb80QiTdcIbK9iqI15e8qUaYA0N3SSXVtHGuAgTU17mvCIxMIhOwoWzFq05agi-etzHeVpHyUlQJ4uqoGQCsvk4S8mYuO49uAJs47iB01Cutk8jYfnVIBjezJ_NZntoaflT5dIsg'
    },
    success: function (data) {
        for (i in data.tracks) {
            var idTrack = data.tracks[i].id;

            var trackArtista = document.getElementById("track-puka_" + i);
            trackArtista.innerHTML = '<iframe src="https://open.spotify.com/embed/track/' + idTrack + '" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>';
        }


    }
});

//VOLTECH
$.ajax({
    type: "GET",
    url: 'https://api.spotify.com/v1/artists/66DRc0RcwzeQcm1wKdDQ4o/top-tracks?market=BR',

    headers: {
        'Authorization': 'Bearer ' + 'BQAK7rjDQD7qWFq-VFHtJt_7WVRxNUF9am_5C-rmxWt7iEJvM1gW0EKy0GZaVgoFt6wkOvdeJ3Vh7wb-9HEOgDn37D0vQaa3Vd7snp7-c4wBFFDB5-cSX9D3WnTy7mlvHmv-TtOh0g9CIABKV1ozptqyDeViqw'
    },
    success: function (data) {
        for (i in data.tracks) {
            var idTrack = data.tracks[i].id;

            var trackArtista = document.getElementById("track-voltech_" + i);
            trackArtista.innerHTML = '<iframe src="https://open.spotify.com/embed/track/' + idTrack + '" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>';
        }


    }
});

//GABA
$.ajax({
    type: "GET",
    url: 'https://api.spotify.com/v1/artists/4ESBMlhP8DUP0k5mIJ2xfJ/top-tracks?market=BR',

    headers: {
        'Authorization': 'Bearer ' + 'BQC24gaTnJ3vAVPj3_AXTm_k-ttX24O9DkcrKQFH53VCsxPkOUMFvinYbqjaN_cdu3jQYkCzOBJ569tl4hDMgdWYOQWWeaXEldiIoPRg_kBJM_BPFGUWEqRhW--Tk_XBiqdXwuEdjqS4qPLHg7DmPWy8bCrWhQ'
    },
    success: function (data) {
        for (i in data.tracks) {
            var idTrack = data.tracks[i].id;

            var trackArtista = document.getElementById("track-gaba_" + i);
            trackArtista.innerHTML = '<iframe src="https://open.spotify.com/embed/track/' + idTrack + '" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>';
        }


    }
});

//HIPPO
$.ajax({
    type: "GET",
    url: 'https://api.spotify.com/v1/artists/6QmiUgayhWQeUFTRtBzMT8/top-tracks?market=BR',

    headers: {
        'Authorization': 'Bearer ' + 'BQDU9oD4JLP79fF1j4YbPD96-J3sAMg6Ekq0Qo-WLJnnOm2l9p5wsTyA2L2rqXtkQOg_4_595DhC2bhzfXdTgjIAugjvEycEswLB7efauikHTRobVJPBRLFMT-ViUZb4nPDaQeNqIF2IbNfTGho6Pp2bw4whrw'
    },
    success: function (data) {
        for (i in data.tracks) {
            var idTrack = data.tracks[i].id;

            var trackArtista = document.getElementById("track-hippo_" + i);
            trackArtista.innerHTML = '<iframe src="https://open.spotify.com/embed/track/' + idTrack + '" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>';
        }


    }
});

//COSMONET
$.ajax({
    type: "GET",
    url: 'https://api.spotify.com/v1/artists/29fIOE8ckNq96NbZlktZ7a/top-tracks?market=BR',

    headers: {
        'Authorization': 'Bearer ' + 'BQByhICjAzOOVuL6aCHDl3dygO7v1ksT1HdkG3DvjF8_XUznMw0jaZEcHwpKFYeUkshwQSW_sbd8YMj_cBNeO5BrXoLK_HUkQ765B1U-ggIWVqJrmdllyH3C8Z4dfBtiFQQFZmRvA1LRyTiiFbml8-9-v89GVQ'
    },
    success: function (data) {
        for (i in data.tracks) {
            var idTrack = data.tracks[i].id;

            var trackArtista = document.getElementById("track-cosmo_" + i);
            trackArtista.innerHTML = '<iframe src="https://open.spotify.com/embed/track/' + idTrack + '" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>';
        }


    }
});

//ELEMENTAL
$.ajax({
    type: "GET",
    url: 'https://api.spotify.com/v1/artists/5rOuAFH0SjUPYfw8czrNaP/top-tracks?market=BR',

    headers: {
        'Authorization': 'Bearer ' + 'BQAmCFX23Qo_dyEklymWV501pyezOhtkDxSeehRkCqBSFb6iMcj-n10chU54HrJjZZ2u0-gCEWPvKbb7laaVRTnFalpkXiFNrTf34Q9wtDt6zGswkpbN1bVATlaikaNZvFpVamupZW8vSYNzKM3SSZhq7AoMnA'
    },
    success: function (data) {
        for (i in data.tracks) {
            var idTrack = data.tracks[i].id;

            var trackArtista = document.getElementById("track-elemental_" + i);
            trackArtista.innerHTML = '<iframe src="https://open.spotify.com/embed/track/' + idTrack + '" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>';
        }


    }
});

//PLASTIC
$.ajax({
    type: "GET",
    url: 'https://api.spotify.com/v1/artists/7qd3q5BKu3lh5r0vVBWSzm/top-tracks?market=BR',

    headers: {
        'Authorization': 'Bearer ' + 'BQD_8I0Xk9wUmRWACEhmQ26KUkasNEKYB_Kbcr8mv49Y7k92TnPXjz-7EYAYEeL_xskch80KfwV_p2IzKNA0uCpQumVap-O7Zv_YepTK9fj8wkQwmBN0VGld6G0gtzQOb9MYZuylQC8JNS5avGiqRkKSooJjiQ'
    },
    success: function (data) {
        for (i in data.tracks) {
            var idTrack = data.tracks[i].id;

            var trackArtista = document.getElementById("track-plastic_" + i);
            trackArtista.innerHTML = '<iframe src="https://open.spotify.com/embed/track/' + idTrack + '" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>';
        }


    }
});

//VERMONT
$.ajax({
    type: "GET",
    url: 'https://api.spotify.com/v1/artists/7aS93G9e7XG0GCUATQjqv0/top-tracks?market=BR',

    headers: {
        'Authorization': 'Bearer ' + 'BQD_8I0Xk9wUmRWACEhmQ26KUkasNEKYB_Kbcr8mv49Y7k92TnPXjz-7EYAYEeL_xskch80KfwV_p2IzKNA0uCpQumVap-O7Zv_YepTK9fj8wkQwmBN0VGld6G0gtzQOb9MYZuylQC8JNS5avGiqRkKSooJjiQ'
    },
    success: function (data) {
        for (i in data.tracks) {
            var idTrack = data.tracks[i].id;

            var trackArtista = document.getElementById("track-vermont_" + i);
            trackArtista.innerHTML = '<iframe src="https://open.spotify.com/embed/track/' + idTrack + '" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>';
        }


    }
});


//RENAN
$.ajax({
    type: "GET",
    url: 'https://api.spotify.com/v1/artists/3anHEyEBxuE2hsDhHVlzZi/top-tracks?market=BR',

    headers: {
        'Authorization': 'Bearer ' + 'BQD5GOTI7ShLwq7hWY41sm-ap7BuyXrhxgO47UFIZDZr01oLMYIOOKFrtkCPoJPyFSmjVSNuBGk7K3fDl_0oaXA0ExovM2YhSikGz-ucTQnCt7A31-kM5ZNP9rFJMxO_3QqZTKewBabx5WKc7rScBIgHlHDjbw'
    },
    success: function (data) {
        for (i in data.tracks) {
            var idTrack = data.tracks[i].id;

            var trackArtista = document.getElementById("track-renan_" + i);
            trackArtista.innerHTML = '<iframe src="https://open.spotify.com/embed/track/' + idTrack + '" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>';
        }


    }
});

//SOFAT
$.ajax({
    type: "GET",
    url: 'https://api.spotify.com/v1/artists/01Vnbpcaztlxks2JFHYkME/top-tracks?market=BR',

    headers: {
        'Authorization': 'Bearer ' + 'BQBcwOs60HSpXpK7rs6JJwVMY3zoEJzulYFoL8RjQYHffyuVo2d7hlkWGg0sWzR8h_WROS56Q4h8vjtx_gS0WFR0N9gg3M-HGyBky7QRbRvHKsj3D61QnOY5B-V97dua2huFvWm1GBuDhXekhD4WwTW2Q70VfQ'
    },
    success: function (data) {
        for (i in data.tracks) {
            var idTrack = data.tracks[i].id;

            var trackArtista = document.getElementById("track-sofat_" + i);
            trackArtista.innerHTML = '<iframe src="https://open.spotify.com/embed/track/' + idTrack + '" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>';
        }


    }
});

//FLEXB
$.ajax({
    type: "GET",
    url: 'https://api.spotify.com/v1/artists/1BkGeGrbRHYd8Wg2lQqJqR/top-tracks?market=BR',

    headers: {
        'Authorization': 'Bearer ' + 'BQAD8ohmN_5ZoLIFg8yXuGDnVogSVA5_SFp0RMwW6GD8GRDa20vNMt36k1GHlLms1RtzymCgwnfKkZ7j39EUExiapucrxolhLKH93xET-K_C-KfBLwbl6Wc17kuVc6ycD7MSK0XMOPAz1vkBAqhCEaNzBgpPOg'
    },
    success: function (data) {
        for (i in data.tracks) {
            var idTrack = data.tracks[i].id;

            var trackArtista = document.getElementById("track-flexb_" + i);
            trackArtista.innerHTML = '<iframe src="https://open.spotify.com/embed/track/' + idTrack + '" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>';
        }


    }
});

//THALES
$.ajax({
    type: "GET",
    url: 'https://api.spotify.com/v1/artists/4xMfBjNDW6VPe7W4Wly5W7/top-tracks?market=BR',

    headers: {
        'Authorization': 'Bearer ' + 'BQBmFeG46FnBWkvKM9pYGwSJDd8_amct-U0uk1azO_uKUAWzh-G3PToORWmczG_d9gB_JhhvXOt9GhILTx9XYB9dj0XUXKXPwWq8O5FACu-xMqdvl1vEjZRzkv1AKO3u-MaMwpB0gaJg8pis_c4rK2Et6nJlKg'
    },
    success: function (data) {
        for (i in data.tracks) {
            var idTrack = data.tracks[i].id;

            var trackArtista = document.getElementById("track-thales_" + i);
            trackArtista.innerHTML = '<iframe src="https://open.spotify.com/embed/track/' + idTrack + '" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>';
        }


    }
});

