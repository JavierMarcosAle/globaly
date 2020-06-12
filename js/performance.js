document.addEventListener("DOMContentLoaded", ()=>{

    const numero1 = document.getElementById("numero-1");
    const numero2 = document.getElementById("numero-2");
    const numero3 = document.getElementById("numero-3");
    const numero4 = document.getElementById("numero-4");
    
    function calculateTop(element)
    {
            let top = element.getBoundingClientRect().top;
            return top;
    }

    function setNumberRandom(element,speed,times,finalValue,clear=false)
    {
            // speed, es la velocidad en la que cambiarán los números (speed=1000, el número cambiará cada 1 segundo)
            // time, es el número de veces que cambiará el número (speed=1000 y times=5, el número cambiará 5 veces y cada cambio se hará cada 1 segundo. Tiempo total = 5 segundos )
            let account = 0;
            repeat = setInterval(()=>{
                account++;
                let r = Math.random()*100;
                r = Math.floor(r);
                element.innerText = `${r}`;
    
                if(account >= times)
                {
                    element.innerText = finalValue;
                    if(clear){
                        clearInterval(repeat);
                    }
                    
                }
                
            },speed);
            
    }


    let seguir = 0;

    addEventListener('scroll',()=>{
            
            //Calculamos el alto de nuestro viewport
            const inner = window.innerHeight;
            let set1, set2, set3, set4;

            if (calculateTop(numero1)<=inner && seguir==0)
            {
                seguir++;
                setNumberRandom(element=numero1, speed=70, times=20, finalValue="56");
                console.log("numero 1");

            }
            if (calculateTop(numero2)<=inner && seguir==1)
            {
                seguir++;
                setNumberRandom(element=numero2, speed=70, times=20, finalValue="47");
                
                console.log("numero 2");
            }
            if (calculateTop(numero3)<=inner && seguir==2)
            {
                seguir++;
                setNumberRandom(element=numero3, speed=70, times=20, finalValue="85");
               
                console.log("numero 3");
            }
            if (calculateTop(numero4)<=inner && seguir==3)
            {
                seguir++;
                setNumberRandom(element=numero4, speed=70, times=20, finalValue="79",true);
                //clearInterval(repeat);
                console.log("numero 4");
            }
            
    });

});