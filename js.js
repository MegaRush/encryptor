var zashifr = true

var styles1 = document.getElementById("but1")
var styles2 = document.getElementById("but2")

function shifr(){
    var zag = document.getElementById("runzag");
    zag.textContent =  "Зашифровка";
    zashifr = true;

    var styles1 = document.getElementById("but1")
    var styles2 = document.getElementById("but2")

    styles1.style.backgroundColor = 'rgb(8, 228, 0)'
    styles1.style.border = '2px solid rgb(7, 214, 0)'
    styles2.style.backgroundColor = 'rgb(228, 225, 225)'
    styles2.style.border = '2px solid rgb(228, 225, 225)'
}

function unshifr(){
    var zag = document.getElementById("runzag");
    zag.textContent = "Расшифровка" ;
    zashifr = false;

    var styles1 = document.getElementById("but1")
    var styles2 = document.getElementById("but2")

    styles2.style.backgroundColor = 'rgb(8, 228, 0)'
    styles2.style.border = '2px solid rgb(7, 214, 0)'
    styles1.style.backgroundColor = 'rgb(228, 225, 225)'
    styles1.style.border = '2px solid rgb(228, 225, 225)'
}

function run(){
    if(zashifr === true){     
        var input = document.getElementById("input").value;
        var result = input
            .replace(/а/gi, 'zov')
            .replace(/б/gi, 'dxv')
            .replace(/в/gi, 'uyt')
            .replace(/г/gi, 'kjh')
            .replace(/д/gi, 'nmb')
            .replace(/е/gi, 'cdz')
            .replace(/ё/gi, 'ppa')
            .replace(/ж/gi, 'dbf')
            .replace(/з/gi, 'jur')
            .replace(/и/gi, 'hrt')
            .replace(/й/gi, 'plk')
            .replace(/к/gi, 'bng')
            .replace(/л/gi, 'lse')
            .replace(/м/gi, 'nvx')
            .replace(/н/gi, 'yqw')
            .replace(/о/gi, 'kir')
            .replace(/п/gi, 'lop')
            .replace(/р/gi, 'nej')
            .replace(/с/gi, 'sol')
            .replace(/т/gi, 'nqp')
            .replace(/у/gi, 'jes')
            .replace(/ф/gi, 'qwe')
            .replace(/х/gi, 'pav')
            .replace(/ц/gi, 'gow')
            .replace(/ч/gi, 'bvg')
            .replace(/ш/gi, 'shr')
            .replace(/щ/gi, 'mwl')
            .replace(/ъ/gi, 'kxt')
            .replace(/ы/gi, 'prv')
            .replace(/ь/gi, 'ghq')
            .replace(/э/gi, 'lat')
            .replace(/ю/gi, 'rgv')
            .replace(/я/gi, 'gpk')
        
        document.getElementById("input").value = result
    }

    if(zashifr === false){
        var input = document.getElementById("input").value;
        var result = input
            .replace(/zov/gi, 'а')
            .replace(/dxv/gi, 'б')
            .replace(/uyt/gi, 'в')
            .replace(/kjh/gi, 'г')
            .replace(/nmb/gi, 'д')
            .replace(/cdz/gi, 'е')
            .replace(/ppa/gi, 'ё')
            .replace(/dbf/gi, 'ж')
            .replace(/jur/gi, 'з')
            .replace(/hrt/gi, 'и')
            .replace(/plk/gi, 'й')
            .replace(/bng/gi, 'к')
            .replace(/lse/gi, 'л')
            .replace(/nvx/gi, 'м')
            .replace(/yqw/gi, 'н')
            .replace(/kir/gi, 'о')
            .replace(/lop/gi, 'п')
            .replace(/nej/gi, 'р')
            .replace(/sol/gi, 'с')
            .replace(/nqp/gi, 'т')
            .replace(/jes/gi, 'у')
            .replace(/qwe/gi, 'ф')
            .replace(/pav/gi, 'х')
            .replace(/gow/gi, 'ц')
            .replace(/bvg/gi, 'ч')
            .replace(/shr/gi, 'ш')
            .replace(/mwl/gi, 'щ')
            .replace(/kxt/gi, 'ъ')
            .replace(/prv/gi, 'ы')
            .replace(/ghq/gi, 'ь')
            .replace(/lat/gi, 'э')
            .replace(/rgv/gi, 'ю')
            .replace(/gpk/gi, 'я')
        
        document.getElementById("input").value = result
    }
}


