(function () {
    "use strict";
    'use strict';


    var app = angular.module('viewCustom', ['angularLoad']);

        

var waitingTimer = window.setInterval(function() {

    // REPLACE ExLibris LOGO
    var checkExists = document.getElementsByTagName('prm-logo');
    if(checkExists != undefined) {
        document.getElementsByTagName('prm-logo')[0].innerHTML = "";
        
        var logo3 = document.createElement('div');
        logo3.className = 'logo-image-custom'
        logo3.innerHTML = '<a href="https://du-primo.hosted.exlibrisgroup.com/primo-explore/search?vid=01UODE_ILIFF&sortby=rank&lang=en_US"><img src="custom/01UODE_SERVICES/img/library-logo_iliff.png" alt="Iliff" title="Iliff" /></a>';
        document.getElementsByTagName('prm-logo')[0].prepend(logo3);
        
        var logo2 = document.createElement('div');
        logo2.className = 'logo-image-custom'
        logo2.innerHTML = '<a href="https://du-primo.hosted.exlibrisgroup.com/primo-explore/search?vid=01UODE_LAW&lang=en_US&sortby=rank"><img src="custom/01UODE_SERVICES/img/library-logo_law.png" alt="Law Library" title="Law Library" /></a>';
        document.getElementsByTagName('prm-logo')[0].prepend(logo2);
        
        var logo1 = document.createElement('div');
        logo1.className = 'logo-image-custom'
        logo1.innerHTML = '<a href="https://du-primo.hosted.exlibrisgroup.com/primo-explore/search?vid=01UODE_MAIN&lang=en_US&sortby=rank"><img src="custom/01UODE_SERVICES/img/library-logo_libraries.png" alt="University Libraries" title="University Libraries" /></a>';
        document.getElementsByTagName('prm-logo')[0].prepend(logo1);
        
        clearInterval(waitingTimer);
    }
}, 2000);



    /****************************************************************************************************/

        /*In case of CENTRAL_PACKAGE - comment out the below line to replace the other module definition*/

        /*var app = angular.module('centralCustom', ['angularLoad']);*/

    /****************************************************************************************************/


})();

   
