let resultat = document.getElementById("resultat")

function fordisplaynum(num) {
    resultat.innerHTML += num
}

function fordisplaysym(sym) {
    let pExiste = resultat.innerHTML.indexOf('+');
    let mExiste = resultat.innerHTML.indexOf('-');
    let fExiste = resultat.innerHTML.indexOf('*');
    let dExiste = resultat.innerHTML.indexOf('/');

    if (pExiste == -1 && mExiste == -1 && fExiste == -1 && dExiste == -1) {
        resultat.innerHTML += sym
    }
}


function forclear() {
    resultat.innerHTML = ""
}

function solve() {
    let pExiste = resultat.innerHTML.indexOf('+');
    let mExiste = resultat.innerHTML.indexOf('-');
    let fExiste = resultat.innerHTML.indexOf('*');
    let dExiste = resultat.innerHTML.indexOf('/');
    if (pExiste > -1) {
        let nombre = resultat.innerHTML.split("+")
        resultat.innerHTML = (+nombre[0]) + (+nombre[1])
    }
    if (mExiste > -1) {
        let nombre = resultat.innerHTML.split("-")
        resultat.innerHTML = (+nombre[0]) - (+nombre[1])
    }
    if (fExiste > -1) {
        let nombre = resultat.innerHTML.split("*")
        resultat.innerHTML = (+nombre[0]) * (+nombre[1])
    }
    if (dExiste > -1) {
        let nombre = resultat.innerHTML.split("/")
        resultat.innerHTML = (+nombre[0]) / (+nombre[1])
    }
}

function point(pt) {
    let pExiste = resultat.innerHTML.indexOf('+');
    let mExiste = resultat.innerHTML.indexOf('-');
    let fExiste = resultat.innerHTML.indexOf('*');
    let dExiste = resultat.innerHTML.indexOf('/');
    if (pExiste > -1) {
        let nb = resultat.innerHTML.split('+')
        let piExiste = nb[1].indexOf('.')
        if (piExiste < 0) {
            resultat.innerHTML += pt
        }
    } else if (mExiste > -1) {
        let nb = resultat.innerHTML.split('-')
        let piExiste = nb[1].indexOf('.')
        if (piExiste < 0) {
            resultat.innerHTML += pt
        }
    } else if (fExiste > -1) {
        let nb = resultat.innerHTML.split('*')
        let piExiste = nb[1].indexOf('.')
        if (piExiste < 0) {
            resultat.innerHTML += pt
        }
    } else if (dExiste > -1) {
        let nb = resultat.innerHTML.split('/')
        let piExiste = nb[1].indexOf('.')
        if (piExiste < 0) {
            resultat.innerHTML += pt
        }
    } else {
        let piExiste = resultat.innerHTML.indexOf('.')
        if (piExiste < 0) {
            resultat.innerHTML += pt
        }
    }
}

function delet() {
    let pExiste = resultat.innerHTML.indexOf('+');
    let mExiste = resultat.innerHTML.indexOf('-');
    let fExiste = resultat.innerHTML.indexOf('*');
    let dExiste = resultat.innerHTML.indexOf('/');
    if (pExiste > -1) {
        let nb = resultat.innerHTML.split('+')
        resultat.innerHTML = nb[0]
    } else if (mExiste > -1) {
        let nb = resultat.innerHTML.split('-')
        resultat.innerHTML = nb[0]
    } else if (fExiste > -1) {
        let nb = resultat.innerHTML.split('*')
        resultat.innerHTML = nb[0]
    } else if (dExiste > -1) {
        let nb = resultat.innerHTML.split('/')
        resultat.innerHTML = nb[0]
    } else {
        resultat.innerHTML = " "
    }
}

function sup() {
    resultat.innerHTML = resultat.innerHTML.substr(0, resultat.innerHTML.length - 1)
}