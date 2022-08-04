var myKanji = ""

document.addEventListener("DOMContentLoaded",function(){
    document.querySelector('#fsearcher').onsubmit = function() {
        myKanji = document.querySelector('#fkanji').value.trim();
        myFunc = async() =>{
            try{
                const response = await fetch("https://j-atj.github.io/diccionarioKanji/db.json") 
                datos = await response.json()
                datos = datos.data; 
                var lista = []
                for(var i=0; i < datos.length; i++){
                  lista.push(datos[i].kanji);
                }
                const indice = lista.indexOf(myKanji);
          
                if (response.status == 200){

                    if(lista.indexOf(myKanji) !== -1){
                        document.getElementById("results").innerHTML = `
                            <h4>Kanji: ${datos[indice].kanji}</h4>
                            <h4>Hiragana: ${datos[indice].hiragana}</h4>
                            <h4>Romaji: ${datos[indice].romaji}</h4>
                            <h4>English: ${datos[indice].english}</h4>
                            <h4>Español: ${datos[indice].spanish}</h4>
                    `
                    }
                    else{
                        document.getElementById("results").innerHTML = `
                            <h4 class="error">Eso no es un kanji</h4>
                            <h5 class="error">Sólo puedes buscar un kanji a la vez</h5>
                        `
                    }
                }          
            } catch(error){
                console.log(error)
            }
        }
        myFunc();
        return false;
    }
});

