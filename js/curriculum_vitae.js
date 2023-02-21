    document.getElementById("modo_oscuro").addEventListener('click', function(){
        document.body.style.backgroundColor = '#281111';
        const lado_izquierdo = document.getElementsByClassName("lado_izquierdo");
        for (let i =0; i<lado_izquierdo.length; i++){
            lado_izquierdo[i].style.backgroundColor = '#FD5959';
        }

        const lado_derecho = document.getElementsByClassName("lado_derecho");
        for (let i =0; i<lado_derecho.length; i++){
            lado_derecho[i].style.backgroundColor = '#B28E8E';
        }

        const titulosh2 = document.getElementsByTagName('h2');
        for (let i =0; i<titulosh2.length; i++){
            titulosh2[i].style.color = '#281111';
        }

        const titulosh3 = document.getElementsByTagName('h3');
        for (let i =0; i<titulosh3.length; i++){
            titulosh3[i].style.color = '#281111';
        }

        const titulosh4 = document.getElementsByTagName('h4');
        for (let i =0; i<titulosh4.length; i++){
            titulosh4[i].style.color = '#281111';
        }

        const titulosh5 = document.getElementsByTagName('h5');
        for (let i =0; i<titulosh5.length; i++){
            titulosh5[i].style.color = '#281111';
        }

        const parrafos = document.getElementsByTagName('p');
        for (let i =0; i<parrafos.length; i++){
            parrafos[i].style.color = '#FDE0E0';
        }

        const li = document.getElementsByTagName('li');
        for (let i =0; i<li.length; i++){
            li[i].style.color = '#FDE0E0';
        }

        const span = document.getElementsByTagName('span');
        for (let i =0; i<span.length; i++){
            span[i].style.color = '#FDE0E0';
        }

    });

    