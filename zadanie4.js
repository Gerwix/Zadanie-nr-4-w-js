var n = +prompt('Podaj liczbę całkowitą celem wyświetlenia prostokąta: ');
var star = '';
for (var i = 0; i < n; i++){
    for (var b = 0; b < 2*n; b++){
        star = star + '*';
    }
    star += '\n';
} 
alert(star);