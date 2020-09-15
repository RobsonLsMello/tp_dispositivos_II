
let exercicio1_11_agosto = () =>{
    let respostarEx1_11_agosto = [];
    respostarEx1_11_agosto.push( new Amplificador(1000,2000,0,0,0,2 ,tipoAmplificador.inversor,100,0,0,0));
    respostarEx1_11_agosto.push( new Amplificador(2000,1000,0,0,0,-6 ,tipoAmplificador.inversor,100,0,0,0));
    respostarEx1_11_agosto.push( new Amplificador(0,0,0,0,0,0 ,tipoAmplificador.inversor,100,-3,9,0));
    respostarEx1_11_agosto.push( new Amplificador(0,0,0,0,0,6 ,tipoAmplificador.inversor,100,0,-2,0));
    respostarEx1_11_agosto.push( new Amplificador(1000,0,0,0,0,0 ,tipoAmplificador.inversor,100,0,5,1000));
    respostarEx1_11_agosto.push( new Amplificador(0,2000,0,0,0,-1 ,tipoAmplificador.inversor,100,-4,0,0));
    respostarEx1_11_agosto.push( new Amplificador(10000,0,0,0,0,0 ,tipoAmplificador.inversor,100,-0.5,-4,0));
    respostarEx1_11_agosto.push( new Amplificador(16000,4000,0,0,0,0 ,tipoAmplificador.inversor,100,0,-1,0));
    respostarEx1_11_agosto.push( new Amplificador(0,0,0,0,0,6 ,tipoAmplificador.inversor,100,-0.25,0,0));
    respostarEx1_11_agosto.push( new Amplificador(0,0,0,0,0,0 ,tipoAmplificador.inversor,100,-2,5,0));
    respostarEx1_11_agosto.push( new Amplificador(0,4000,0,0,0,-3 ,tipoAmplificador.inversor,100,0,0,2000));
    respostarEx1_11_agosto.push( new Amplificador(8000,0,0,0,0,0 ,tipoAmplificador.inversor,100,-0.5,-3,0));
    respostarEx1_11_agosto.push( new Amplificador(0,0,0,0,0,-4 ,tipoAmplificador.inversor,100,0,6,0));
    respostarEx1_11_agosto.push( new Amplificador(0,0,0,0,0,-1.5 ,tipoAmplificador.inversor,100,-5,0,0));
    respostarEx1_11_agosto.push( new Amplificador(3000,6000,0,0,0,0 ,tipoAmplificador.inversor,100,0,8,0));
    respostarEx1_11_agosto.forEach(resp => {
        document.querySelector("#ex1_11-08 tbody").innerHTML += 
            `<tr>
                <td>${resp.negative}</td>
                <td>${resp.r1}</td>
                <td>${resp.r2}</td>
                <td>${resp.ganho}</td>
                <td>${resp.vout}</td>
                <td>${resp.rc}</td>
            </tr>`;
    })
    return respostarEx1_11_agosto;
}
let exercicio4_25_agosto_model = (v1, v2) =>{
    let u1 = new Amplificador(20000,10000,0,0,0,v1, tipoAmplificador.inversor, 10);
    let u2 = new Amplificador(10000,20000,0,0,u1.vout, 0, tipoAmplificador.naoInversor,10);
    let u3 = new Amplificador(10000,5000,0,0,u2.vout, 0, tipoAmplificador.naoInversor,10);

    let u5 = new Amplificador(10000,5000,0,0,v2, 0, tipoAmplificador.naoInversor,10);
    let u6 = new Amplificador(10000,10000,0,0,u5.vout, 0, tipoAmplificador.naoInversor,10);

    let u4 = new Amplificador(20000,10000,20000,10000, u6.vout, u3.vout, tipoAmplificador.comparador, 10);

    return [v1,v2,u4.vout];
}
let exercicio2_25_agosto_model = (V1,V2,V3,V4,RA,RB,RC,RF,R1,R2,R3,R4) =>{
    let u1 = new Amplificador(0,RF,0,0,0,0, tipoAmplificador["naoInversor-somador"],12,0,0,0,0,[V1,V2,V3],[RA,RB,RC]);
    let u2 = new Amplificador(R1, R2, R3,R4, V4, u1.vout, tipoAmplificador.comparador, 12);
    return [u1,u2];
}
let exercicio1_25_agosto_model = (V1,V2,R1,R2,R3,R4,V0) =>{
    return new Amplificador(R1, R2, R3,R4, V1, V2, tipoAmplificador.comparador, 100, 0, V0);
    
}
let exercicio3_25_agosto_model = (V1,R2,R1,R3,R4,V2,R5,R6,R7,R8,V3,R9,R10,R11,R12,R13,R14) =>{
    let u1 = new Amplificador(R2,R1,0,0,0,V1, tipoAmplificador.inversor, 12);
    let u2 = new Amplificador(R3, R4, 0,0,u1.vout, 0, tipoAmplificador.naoInversor,12);

    let u3 = new Amplificador(R5,R6,0,0,V2,0, tipoAmplificador.naoInversor,12);
    let u4 = new Amplificador(R7,R8,0,0,u3.vout,0,tipoAmplificador.naoInversor, 12);

    let u5 = new Amplificador(R9, R10, 0,0, V3, 0,tipoAmplificador.naoInversor,12);
     
    let u6 = new Amplificador(0, R14, 0,0, 0,0,tipoAmplificador["naoInversor-somador"], 12,0,0,0,0, [u2.vout, u3.vout, u4.vout], [R13,R12,R11]);
    return [u1,u2,u3,u4,u5,u6];
}
let exercicio1_25_agosto = () =>{
    let respostasEx1_25_agosto = [];
    respostasEx1_25_agosto.push(exercicio1_25_agosto_model(+2,+4,2000,1000,4000,2000,0));
    respostasEx1_25_agosto.push(exercicio1_25_agosto_model(-6,+1,1000,2000,4000,8000,0));
    respostasEx1_25_agosto.push(exercicio1_25_agosto_model(-4,-2,2000,2000,2000,2000,0));
    respostasEx1_25_agosto.push(exercicio1_25_agosto_model(+3,+1,1000,2000,2000,4000,0));
    respostasEx1_25_agosto.push(exercicio1_25_agosto_model(-4,-1,2000,1000,2000,1000,0));
    respostasEx1_25_agosto.push(exercicio1_25_agosto_model(-1,-5,4000,2000,2000,1000,0));
    respostasEx1_25_agosto.push(exercicio1_25_agosto_model(+2,+6,1000,1000,1000,1000,0));
    respostasEx1_25_agosto.push(exercicio1_25_agosto_model(+3,-1,4000,8000,2000,4000,0));
    respostasEx1_25_agosto.push(exercicio1_25_agosto_model(-6,0,4000,2000,2000,1000,-5));
    respostasEx1_25_agosto.push(exercicio1_25_agosto_model(0,0,0,6000,0,0,-8));
    respostasEx1_25_agosto.push(exercicio1_25_agosto_model(-3,0,4000,0,0,0,+6));
    respostasEx1_25_agosto.push(exercicio1_25_agosto_model(0,+2,0,0,0,0,-3));
    respostasEx1_25_agosto.push(exercicio1_25_agosto_model(+4,0,1000,0,1000,0,+6));
    respostasEx1_25_agosto.push(exercicio1_25_agosto_model(-1,5,0,1000,1000,1000,1000,-5));
    respostasEx1_25_agosto.push(exercicio1_25_agosto_model(0,0,6000,0,0,0,+8));
    respostasEx1_25_agosto.forEach(resp =>{
        document.querySelector("#ex1_25-08 tbody").innerHTML += 
            `<tr>
                <td>${resp.positive}</td>
                <td>${resp.negative}</td>
                <td>${resp.r1}</td>
                <td>${resp.r2}</td>
                <td>${resp.r3}</td>
                <td>${resp.r4}</td>
                <td>${resp.vout}</td>
            </tr>`;
    })
}
let exercicio4_25_agosto = () =>{ 
    let respostasEx4_25_agosto = [];
    respostasEx4_25_agosto.push(exercicio4_25_agosto_model(+2,+1));
    respostasEx4_25_agosto.push(exercicio4_25_agosto_model(+3,+2));
    respostasEx4_25_agosto.push(exercicio4_25_agosto_model(-1,-1));
    respostasEx4_25_agosto.push(exercicio4_25_agosto_model(-4,-1));
    respostasEx4_25_agosto.push(exercicio4_25_agosto_model(+1,-2));
    respostasEx4_25_agosto.push(exercicio4_25_agosto_model(-1,-2));
    respostasEx4_25_agosto.push(exercicio4_25_agosto_model(+6,+2));
    respostasEx4_25_agosto.push(exercicio4_25_agosto_model(-5,+1));
    respostasEx4_25_agosto.push(exercicio4_25_agosto_model(-2,-2));
    respostasEx4_25_agosto.push(exercicio4_25_agosto_model(+1,+1));
    respostasEx4_25_agosto.push(exercicio4_25_agosto_model(-4,-2));
    respostasEx4_25_agosto.push(exercicio4_25_agosto_model(-1,+2));
    respostasEx4_25_agosto.push(exercicio4_25_agosto_model(+2,-1));
    respostasEx4_25_agosto.push(exercicio4_25_agosto_model(-6,-2));
    respostasEx4_25_agosto.push(exercicio4_25_agosto_model(+4,+4));
    respostasEx4_25_agosto.forEach(resp =>{
        document.querySelector("#ex4_25-08 tbody").innerHTML += 
            `<tr>
                <td>${resp[0]}</td>
                <td>${resp[1]}</td>
                <td>${resp[2]}</td>
            </tr>`;
    })
}
let exercicio1_01_setembro_model = (Vin,t,Vi, saturacao) => {
    let l = Vin/100000;
    let result = -(l*t/Math.pow(10,-5)) + Vi;
    result = (result > saturacao ? saturacao : result);
    result = (result < -saturacao ? -saturacao : result);
    return result;
}
let exercicio1_01_setembro = () =>{
    let respostasEx1_01_setembro= [];
    respostasEx1_01_setembro.push(0);
    let grandezas = [
        [+2,2],[-6,1],[-1,1],[+3,2],[-4,2],[-1,3],[+2,1],[+3,1],[-6,2],[+2,2],[-3,2],[+1,3],[+2,2],[-1.5,2],[-3,1]
    ];
    grandezas.forEach(g => {
        respostasEx1_01_setembro.push(exercicio1_01_setembro_model(g[0], g[1], respostasEx1_01_setembro[respostasEx1_01_setembro.length - 1], 12));
    })
    for(let i = 1; i < respostasEx1_01_setembro.length; i++){
        document.querySelector("#ex1_01-09 tbody").innerHTML += 
            `<tr>
                <td>${grandezas[i-1][0]}</td>
                <td>${grandezas[i-1][1]}</td>
                <td>${Math.round(respostasEx1_01_setembro[i])}</td>
            </tr>`;
    }
}

let exercicio3_01_setembro_model = (v1,v2,v3) =>{
    let u1 = new Amplificador(20000, 10000, 0,0, 0, v1,  tipoAmplificador.inversor, 12);
    let u2 = new Amplificador(10000, 10000, 0,0, u1.vout, 0,  tipoAmplificador.naoInversor, 12);
    let u3 = new Amplificador(10000, 5000, 0,0, u2.vout, 0,  tipoAmplificador.naoInversor, 12);

    let u5 = new Amplificador(10000, 5000, 0,0, v2, 0,  tipoAmplificador.naoInversor, 12);
    let u6 = new Amplificador(20000, 10000, 0,0, u5.vout, 0,  tipoAmplificador.naoInversor, 12);

    let u4 = new Amplificador(20000, 10000, 20000, 10000, u6.vout, u3.vout,  tipoAmplificador.comparador, 12);

    let u8 = new Amplificador(20000, 10000, 0, 0, 0, v3, tipoAmplificador.inversor, 12);

    let u7 = new Amplificador(20000, 10000, 20000, 10000, u8.vout, u4.vout,  tipoAmplificador.comparador, 12);
    return [v1,v2,v3,u7.vout];
}
let exercicio4_01_setembro_model = (v1,v2,v3,v4) =>{
    let u1 = new Amplificador(10000, 20000, 0,0, 0, v1, tipoAmplificador.inversor, 12);
    let u5 = new Amplificador(0,0,0,0,u1.vout,0, tipoAmplificador["seguidor-tensao"],12);
    let u2 = new Amplificador(10000,10000, 0, 0, v2, 0, tipoAmplificador.naoInversor, 12);
    let u7 = new Amplificador(20000, 10000, 0,0,0,u2.vout, tipoAmplificador.inversor, 12);
    let u3 = new Amplificador(0,0,0,0,v3,0, tipoAmplificador["seguidor-tensao"],12);
    let u4 = new Amplificador(0,0,0,0,v4,0, tipoAmplificador["seguidor-tensao"],12);
    let u6 = new Amplificador(0, 10000, 0, 0, 0,0,tipoAmplificador["naoInversor-somador"], 12, 0,0,0,0, [u5.vout, u7.vout, u3.vout], [20000, 10000, 5000]);
    let u8 = new Amplificador(20000, 10000, 20000, 10000, u4.vout, u6.vout, tipoAmplificador.comparador, 12);
    return [v1,v2,v3,v4, u8.vout];
}
let exercicio4_01_setembro = () =>{
    let respostasEx4_01_setembro= [];
    respostasEx4_01_setembro.push(exercicio4_01_setembro_model(+2,+1,+2,+4));
    respostasEx4_01_setembro.push(exercicio4_01_setembro_model(+1,+2,+1,+2));
    respostasEx4_01_setembro.push(exercicio4_01_setembro_model(-1,-1,-2,-2));
    respostasEx4_01_setembro.push(exercicio4_01_setembro_model(-2,-1,-2,-4));
    respostasEx4_01_setembro.push(exercicio4_01_setembro_model(+1,-2,+2,+1));
    respostasEx4_01_setembro.push(exercicio4_01_setembro_model(-1,-2,-2,-1));
    respostasEx4_01_setembro.push(exercicio4_01_setembro_model(+2,+2,+2,+2));
    respostasEx4_01_setembro.push(exercicio4_01_setembro_model(-1,+1,-1,+3));
    respostasEx4_01_setembro.push(exercicio4_01_setembro_model(+2,-2,-5,-3));
    respostasEx4_01_setembro.push(exercicio4_01_setembro_model(+1,+1,+4,-4));
    respostasEx4_01_setembro.push(exercicio4_01_setembro_model(-3,-2,+3,+2));
    respostasEx4_01_setembro.push(exercicio4_01_setembro_model(-3,+2,-3,+3));
    respostasEx4_01_setembro.push(exercicio4_01_setembro_model(+2,-1,+2,-4));
    respostasEx4_01_setembro.push(exercicio4_01_setembro_model(-1,-2,-3,-2));
    respostasEx4_01_setembro.push(exercicio4_01_setembro_model(+2,+4,-3,-3));
    respostasEx4_01_setembro.forEach(resp =>{
        document.querySelector("#ex4_01-09 tbody").innerHTML += 
            `<tr>
                <td>${resp[0]}</td>
                <td>${resp[1]}</td>
                <td>${resp[2]}</td>
                <td>${resp[3]}</td>
                <td>${resp[4]}</td>
            </tr>`;
    })
}
let exercicio3_01_setembro= () =>{
    let respostasEx3_01_setembro= [];
    respostasEx3_01_setembro.push(exercicio3_01_setembro_model(2,1,4));
    respostasEx3_01_setembro.push(exercicio3_01_setembro_model(2,2,6));
    respostasEx3_01_setembro.push(exercicio3_01_setembro_model(-1,-1,-4));
    respostasEx3_01_setembro.push(exercicio3_01_setembro_model(-3,-1,-6));
    respostasEx3_01_setembro.push(exercicio3_01_setembro_model(1,-2,2));
    respostasEx3_01_setembro.push(exercicio3_01_setembro_model(-1,2,2));
    respostasEx3_01_setembro.push(exercicio3_01_setembro_model(4,2,2));
    respostasEx3_01_setembro.push(exercicio3_01_setembro_model(-4,1,-1));
    respostasEx3_01_setembro.push(exercicio3_01_setembro_model(-2,-2,-5));
    respostasEx3_01_setembro.push(exercicio3_01_setembro_model(1,1,4));
    respostasEx3_01_setembro.push(exercicio3_01_setembro_model(-4,-2,+3));
    respostasEx3_01_setembro.push(exercicio3_01_setembro_model(-3,+2,-3));
    respostasEx3_01_setembro.push(exercicio3_01_setembro_model(2,-1, 2));
    respostasEx3_01_setembro.push(exercicio3_01_setembro_model(-6,-2, -3));
    respostasEx3_01_setembro.push(exercicio3_01_setembro_model(4, 4, -3));
    respostasEx3_01_setembro.forEach(resp =>{
        document.querySelector("#ex3_01-09 tbody").innerHTML += 
            `<tr>
                <td>${resp[0]}</td>
                <td>${resp[1]}</td>
                <td>${resp[2]}</td>
                <td>${resp[3]}</td>
            </tr>`;
    })
}

let exercicio3_25_agosto = () =>{
    let respostasEx3_25_agosto = [];
    respostasEx3_25_agosto.push(exercicio3_25_agosto_model(+2,1000,2000,2000,1000,+1,1000,2000,2000,1000,-1,1000,2000,2000,1000,2000,2000));
    respostasEx3_25_agosto.push(exercicio3_25_agosto_model(+1,1000,2000,1000,1000,+1,1000,1000,2000,1000,+1,1000,2000,1000,2000,4000,2000));
    respostasEx3_25_agosto.push(exercicio3_25_agosto_model(-2,2000,1000,2000,4000,-2,2000,1000,1000,1000,-2,2000,1000,2000,1000,4000,2000));
    respostasEx3_25_agosto.push(exercicio3_25_agosto_model(+2,1000,1000,2000,1000,+1,1000,2000,2000,1000,-1,1000,1000,2000,2000,2000,2000));
    respostasEx3_25_agosto.push(exercicio3_25_agosto_model(-4,4000,1000,2000,1000,-1,1000,2000,1000,1000,+2,1000,2000,4000,2000,1000,2000));
    respostasEx3_25_agosto.push(exercicio3_25_agosto_model(+2,2000,1000,1000,1000,-1,1000,1000,1000,1000,+4,4000,1000,4000,4000,2000,2000));
    respostasEx3_25_agosto.push(exercicio3_25_agosto_model(-6,4000,1000,1000,1000,+2,4000,2000,2000,1000,-1,1000,1000,2000,2000,4000,1000));
    respostasEx3_25_agosto.push(exercicio3_25_agosto_model(+3,3000,1000,1000,3000,-2,4000,1000,1000,1000,+1,1000,1000,2000,1000,2000,4000));
    respostasEx3_25_agosto.push(exercicio3_25_agosto_model(-3,4000,2000,1000,2000,+1,4000,2000,1000,2000,-1,1000,4000,2000,2000,4000,4000));
    respostasEx3_25_agosto.push(exercicio3_25_agosto_model(+2,1000,1000,2000,1000,+2,1000,1000,2000,1000,-2,1000,2000,2000,2000,2000,1000));
    respostasEx3_25_agosto.push(exercicio3_25_agosto_model(-1,1000,2000,2000,1000,+2,2000,1000,2000,2000,-1,1000,3000,2000,1000,2000,1000));
    respostasEx3_25_agosto.push(exercicio3_25_agosto_model(+3,1000,1000,2000,1000,+1,2000,2000,2000,1000,-4,1000,1000,8000,2000,4000,2000));
    respostasEx3_25_agosto.push(exercicio3_25_agosto_model(-2,2000,1000,2000,1000,+2,1000,2000,3000,1000,-2,1000,2000,2000,4000,4000,2000));
    respostasEx3_25_agosto.push(exercicio3_25_agosto_model(+1,1000,2000,1000,2000,+1,1000,2000,2000,1000,-1,2000,1000,2000,2000,4000,2000));
    respostasEx3_25_agosto.push(exercicio3_25_agosto_model(+4,8000,2000,1000,1000,-2,1000,2000,3000,1000,-1,1000,2000,1000,4000,4000,2000));
    respostasEx3_25_agosto.forEach(resp =>{
        document.querySelector("#ex3_25-08 tbody").innerHTML += 
            `<tr>
                <td>${resp[0].negative}</td>
                <td>${resp[0].r1}</td>
                <td>${resp[0].r2}</td>
                <td>${resp[1].r1}</td>
                <td>${resp[1].r2}</td>
                <td>${resp[2].positive}</td>
                <td>${resp[2].r1}</td>
                <td>${resp[2].r2}</td>
                <td>${resp[3].r1}</td>
                <td>${resp[3].r2}</td>
                <td>${resp[4].positive}</td>
                <td>${resp[4].r1}</td>
                <td>${resp[4].r2}</td>
                <td>${resp[5].rSomador[0]}</td>
                <td>${resp[5].rSomador[1]}</td>
                <td>${resp[5].rSomador[2]}</td>
                <td>${resp[5].r2}</td>
                <td>${resp[5].vout}</td>
            </tr>`;
    })
}
let exercicio2_25_agosto = () =>{
    let respostasEx2_25_agosto = [];
    respostasEx2_25_agosto.push(exercicio2_25_agosto_model(+2,-3,+1,+2,2000,1000,2000,1000,1000,1000,1000,1000));
    respostasEx2_25_agosto.push(exercicio2_25_agosto_model(-3,+3,+1,+3,1000,2000,4000,2000,1000,1000,1000,1000));
    respostasEx2_25_agosto.push(exercicio2_25_agosto_model(+1,-1,+1,+2,2000,1000,1000,2000,1000,2000,1000,2000));
    respostasEx2_25_agosto.push(exercicio2_25_agosto_model(+2,-1,+2,+2,2000,1000,2000,4000,2000,1000,2000,1000));
    respostasEx2_25_agosto.push(exercicio2_25_agosto_model(-4,-3,+1,+2,2000,1000,2000,1000,2000,1000,2000,1000));
    respostasEx2_25_agosto.push(exercicio2_25_agosto_model(+1,-2,+2,+1,2000,1000,2000,1000,1000,2000,1000,2000));
    respostasEx2_25_agosto.push(exercicio2_25_agosto_model(+1,+1,+1,+1,1000,1000,1000,2000,1000,1000,1000,1000));
    respostasEx2_25_agosto.push(exercicio2_25_agosto_model(-2,-2,+1,+4,2000,2000,1000,2000,1000,2000,1000,2000));
    respostasEx2_25_agosto.push(exercicio2_25_agosto_model(-1,-2,+1,-2,10000,10000,20000,20000,1000,1000,1000,1000));
    respostasEx2_25_agosto.push(exercicio2_25_agosto_model(+2,+3,+1,-1,20000,20000,10000,10000,1000,2000,1000,2000));
    respostasEx2_25_agosto.push(exercicio2_25_agosto_model(-4,+2,-1,-4,2000,1000,2000,1000,1000,1000,1000,1000));
    respostasEx2_25_agosto.push(exercicio2_25_agosto_model(+2,+1,-2,-2,1000,2000,1000,1000,1000,2000,1000,2000));
    respostasEx2_25_agosto.push(exercicio2_25_agosto_model(+2,-1,-3,+1,1000,1000,2000,2000,20000,10000,20000,10000));
    respostasEx2_25_agosto.push(exercicio2_25_agosto_model(+2,-2,-4,-3,1000,2000,2000,2000,2000,1000,2000,1000));
    respostasEx2_25_agosto.push(exercicio2_25_agosto_model(+2,-3,-1,-1,2000,1000,2000,1000,10000,20000,10000,20000));
    respostasEx2_25_agosto.forEach(resp =>{
        document.querySelector("#ex2_25-08 tbody").innerHTML += 
            `<tr>
                <td>${resp[0].vSomador[0]}</td>
                <td>${resp[0].vSomador[1]}</td>
                <td>${resp[0].vSomador[2]}</td>
                <td>${resp[1].positive}</td>
                <td>${resp[0].rSomador[0]}</td>
                <td>${resp[0].rSomador[1]}</td>
                <td>${resp[0].rSomador[2]}</td>
                <td>${resp[0].r2}</td>
                <td>${resp[1].r1}</td>
                <td>${resp[1].r2}</td>
                <td>${resp[1].r3}</td>
                <td>${resp[1].r4}</td>
                <td>${resp[1].vout}</td>
            </tr>`;
    })
}
let exercicio2_11_18_agosto_model = (ve=0,r1=0,r2=0,avu1=0,vsu1=0,r4=0,r5=0,avu2=0,vsu2=0, _tipoAmplificador = 1) =>{
    let u1 = new Amplificador(r1,r2,0,0,0,ve, _tipoAmplificador,10,avu1,vsu1);
    let u2 = new Amplificador(r4,r5,0,0,_tipoAmplificador == 2 ? u1.vout : 0,_tipoAmplificador == 1 ? u1.vout : 0,_tipoAmplificador, 10,avu2, vsu2);
    if(vsu1 == 0){
        if(_tipoAmplificador == 1){
            if(u2.negative != 0){
                u1.vout = u2.negative;
                u1.calcular();
            }
        }
        else{
            if(u2.positive != 0){
                u1.vout = u2.positive;
                u1.calcular();
            }
        }
    }
    if(ve != 0 && vsu2 != 0 && r1 == 0 && r2 == 0 && avu1  == 0 && vsu1 == 0 && r4 == 0 && r5 == 0 && avu2 == 0){
        let media = (u1.negative + u2.vout)/2;
        u1.vout = media;
        if(_tipoAmplificador == 1)
            u2.negative = media;
        else
            u2.positive = media;
        u1.calcular();
        u2.calcular();
    }
    return [u1,u2];
}
let exercicio2_11_agosto = () =>{    
    let respostasEx2_11_agosto = [];
    respostasEx2_11_agosto.push(exercicio2_11_18_agosto_model(2,1000,2000,0,0,4000,1000,0,0));
    respostasEx2_11_agosto.push(exercicio2_11_18_agosto_model(-4,4000,0,-0.25,0,0,0,-3,0));
    respostasEx2_11_agosto.push(exercicio2_11_18_agosto_model(3,0,0,0,0,0,0,0,9));
    respostasEx2_11_agosto.push(exercicio2_11_18_agosto_model(0,0,0,-3,0,0,0,-0.5,-3));
    respostasEx2_11_agosto.push(exercicio2_11_18_agosto_model(0,0,4000,-0.5,-5,0,0,-4,0));
    respostasEx2_11_agosto.push(exercicio2_11_18_agosto_model(-3,0,0,0,0,6000,2000,0,-2));
    respostasEx2_11_agosto.push(exercicio2_11_18_agosto_model(2,5000,0,-2,0,0,0,-4,0));
    respostasEx2_11_agosto.push(exercicio2_11_18_agosto_model(-1,0,0,0,4,0,0,-0.5,0));
    respostasEx2_11_agosto.push(exercicio2_11_18_agosto_model(0,10000,10000,0,6,0,0,-2,0));
    respostasEx2_11_agosto.push(exercicio2_11_18_agosto_model(2,0,0,-3,0,2000,6000,0,10));
    respostasEx2_11_agosto.push(exercicio2_11_18_agosto_model(-6,1000,2000,0,0,4000,1000,0,0));
    respostasEx2_11_agosto.push(exercicio2_11_18_agosto_model(-2,2000,0,-0.5,0,0,0,-3,0));
    respostasEx2_11_agosto.push(exercicio2_11_18_agosto_model(0,0,0,-2,-6,0,0,0,8));
    respostasEx2_11_agosto.push(exercicio2_11_18_agosto_model(-4,0,0,0,0,0,0,0,-8));
    respostasEx2_11_agosto.push(exercicio2_11_18_agosto_model(-6,0,0,-0.25,0,0,0,-2,0));
    respostasEx2_11_agosto.forEach(resp =>{
        document.querySelector("#ex2_11-08 tbody").innerHTML += 
            `<tr>
                <td>${resp[0].negative}</td>
                <td>${resp[0].r1}</td>
                <td>${resp[0].r2}</td>
                <td>${resp[0].ganho}</td>
                <td>${resp[0].vout}</td>
                <td>${resp[1].r1}</td>
                <td>${resp[1].r2}</td>
                <td>${resp[1].ganho}</td>
                <td>${resp[1].vout}</td>
            </tr>`;
    })
    return respostasEx2_11_agosto;
}
let exercicio3_11_agosto = () =>{
    let AmpOp741 = new Amplificador(0,0, 0,0, 0, 0,  tipoAmplificador.inversor, 10, 0,0,0,0.5);
    let AmpOpLm318 = new Amplificador(0,0, 0,0, 0, 0,  tipoAmplificador.inversor, 10, 0,0,0,70);
    document.querySelector("#ex3_11-08 tbody").innerHTML += 
            `<tr>
                <td>Amp Op 741</td>
                <td>${AmpOp741.sr}</td>
                <td>de - 2V para +6V</td>
                <td>${AmpOp741.calcTimeSlewRate(-2,6)}</td>
            </tr>
            <tr>
                <td>Amp Op 741</td>
                <td>${AmpOp741.sr}</td>
                <td>de - 8V para +10V</td>
                <td>${AmpOp741.calcTimeSlewRate(-8,10)}</td>
            </tr>
            <tr>
                <td>Amp Lm 318</td>
                <td>${AmpOpLm318.sr}</td>
                <td>de - 2V para +6V</td>
                <td>${AmpOpLm318.calcTimeSlewRate(-2,6)}</td>
            </tr>
            <tr>
                <td>Amp Lm 318</td>
                <td>${AmpOpLm318.sr}</td>
                <td>de - 8V para +10V</td>
                <td>${AmpOpLm318.calcTimeSlewRate(-8,10)}</td>
            </tr>`;
}
let exercicio1_18_agosto = () =>{
    let respostarEx1_18_agosto = [];
    respostarEx1_18_agosto.push( new Amplificador(1000,2000,0,0,2,0,tipoAmplificador.naoInversor, 100,3,6));
    respostarEx1_18_agosto.push( new Amplificador(2000,1000,0,0,-6,0,tipoAmplificador.naoInversor, 100,0,0));
    respostarEx1_18_agosto.push( new Amplificador(0,0,0,0,0,0,tipoAmplificador.naoInversor, 100,3,9));
    respostarEx1_18_agosto.push( new Amplificador(10000,10000,0,0,3,0,tipoAmplificador.naoInversor, 100,2,6));
    respostarEx1_18_agosto.push( new Amplificador(1000,4000,0,0,1,0,tipoAmplificador.naoInversor, 100,5,5));
    respostarEx1_18_agosto.push( new Amplificador(0,3000,0,0,-1,0,tipoAmplificador.naoInversor, 100,4,0));
    respostarEx1_18_agosto.push( new Amplificador(0,10000,0,0,0,0,tipoAmplificador.naoInversor, 100,1.5,-3));
    respostarEx1_18_agosto.push( new Amplificador(16000,4000,0,0,0,0,tipoAmplificador.naoInversor, 100,0,-7));
    respostarEx1_18_agosto.push( new Amplificador(0,0,0,0,6,0,tipoAmplificador.naoInversor, 100,1.25,0));
    respostarEx1_18_agosto.push( new Amplificador(1000,1000,0,0,2.5,0,tipoAmplificador.naoInversor, 100,2,5));
    respostarEx1_18_agosto.push( new Amplificador(0,4000,0,0,-3,0,tipoAmplificador.naoInversor, 100,0,0));
    respostarEx1_18_agosto.push( new Amplificador(8000,0,0,0,0,0,tipoAmplificador.naoInversor, 100,1.5,-3));
    respostarEx1_18_agosto.push( new Amplificador(0,0,0,0,4,0,tipoAmplificador.naoInversor, 100,0,6));
    respostarEx1_18_agosto.push( new Amplificador(0,0,0,0,-1.5,0,tipoAmplificador.naoInversor, 100,5,0));
    respostarEx1_18_agosto.push( new Amplificador(3000,6000,0,0,0,0,tipoAmplificador.naoInversor, 100,0,8));

    respostarEx1_18_agosto.forEach(resp => {
        document.querySelector("#ex1_18-08 tbody").innerHTML += 
            `<tr>
                <td>${resp.positive}</td>
                <td>${resp.r1}</td>
                <td>${resp.r2}</td>
                <td>${resp.ganho}</td>
                <td>${resp.vout}</td>
            </tr>`;
    })
    return respostarEx1_18_agosto;
}
let exercicio2_18_agosto = () =>{    
    let respostasEx2_18_agosto = [];
    respostasEx2_18_agosto.push(exercicio2_11_18_agosto_model(2,1000,2000,-2,-4,4000,1000,1.25,-5,tipoAmplificador.naoInversor));
    respostasEx2_18_agosto.push(exercicio2_11_18_agosto_model(-4,4000,1000,-0.25, 1,1000,2000,3,3,tipoAmplificador.naoInversor));
    respostasEx2_18_agosto.push(exercicio2_11_18_agosto_model(3,1000,1000,-1,-3,1000,2000,1.5,-9,tipoAmplificador.naoInversor));
    respostasEx2_18_agosto.push(exercicio2_11_18_agosto_model(3,1000,2000,-2,-6,2000,1000,1.5,-9,tipoAmplificador.naoInversor));
    respostasEx2_18_agosto.push(exercicio2_11_18_agosto_model(0,0,0,-3,0,0,0,1.5,-6,tipoAmplificador.naoInversor));
    respostasEx2_18_agosto.push(exercicio2_11_18_agosto_model(0,0,4000,-0.5,-5,0,0,2,0 ,tipoAmplificador.naoInversor));
    respostasEx2_18_agosto.push(exercicio2_11_18_agosto_model(-2,0,0,0,0,6000,3000,6,tipoAmplificador.naoInversor));
    respostasEx2_18_agosto.push(exercicio2_11_18_agosto_model(2,5000,0,-2,0,0,0,4,0,tipoAmplificador.naoInversor));
    respostasEx2_18_agosto.push(exercicio2_11_18_agosto_model(-1,0,0,0,4,0,0,1.5,0,tipoAmplificador.naoInversor));
    respostasEx2_18_agosto.push(exercicio2_11_18_agosto_model(0,10000,10000,0,6,0,0,2,0,tipoAmplificador.naoInversor));
    respostasEx2_18_agosto.push(exercicio2_11_18_agosto_model(2,0,0,-3,0,2000,6000,0,-10,tipoAmplificador.naoInversor));
    respostasEx2_18_agosto.push(exercicio2_11_18_agosto_model(-6,1000,2000,0,0,4000,1000,0,0,tipoAmplificador.naoInversor));
    respostasEx2_18_agosto.push(exercicio2_11_18_agosto_model(-2,2000,0,-0.5,0,0,0,3,0,tipoAmplificador.naoInversor));
    respostasEx2_18_agosto.push(exercicio2_11_18_agosto_model(0,0,0,-2,-6,0,0,0,8,tipoAmplificador.naoInversor));
    respostasEx2_18_agosto.push(exercicio2_11_18_agosto_model(-4,0,0,0,0,0,0,0,8,tipoAmplificador.naoInversor));
    respostasEx2_18_agosto.push(exercicio2_11_18_agosto_model(-6,0,0,-0.25,0,0,0,2,0,tipoAmplificador.naoInversor));

    respostasEx2_18_agosto.forEach(resp =>{
        document.querySelector("#ex2_18-08 tbody").innerHTML += 
            `<tr>
                <td>${resp[0].negative}</td>
                <td>${resp[0].r1}</td>
                <td>${resp[0].r2}</td>
                <td>${resp[0].ganho}</td>
                <td>${resp[0].vout}</td>
                <td>${resp[1].r1}</td>
                <td>${resp[1].r2}</td>
                <td>${resp[1].ganho}</td>
                <td>${resp[1].vout}</td>
            </tr>`;
    })
    return respostasEx2_18_agosto;
}
let exercicio3_18_agosto_model = (v1) =>{
    let u1 = new Amplificador(20000, 10000, 0,0, 0, v1,  tipoAmplificador.inversor, 10);
    let u2 = new Amplificador(10000, 5000, 0,0, u1.vout, 0,  tipoAmplificador.naoInversor, 10);
    let u3 = new Amplificador(10000, 5000, 0,0, u2.vout, 0,  tipoAmplificador.naoInversor, 10);
    return [v1, u3.vout];
}
let exercicio4_18_agosto_model = (vs = [], rs = [],rf) =>{
    return new Amplificador(0, rf, 0,0, 0, 0,  tipoAmplificador["naoInversor-somador"], 10, 0,0,0,0,vs,rs);
}
let exercicio3_18_agosto = () =>{
    let respostasEx3_18_agosto = [];
    respostasEx3_18_agosto.push(exercicio3_18_agosto_model(2));
    respostasEx3_18_agosto.push(exercicio3_18_agosto_model(3));
    respostasEx3_18_agosto.push(exercicio3_18_agosto_model(-1));
    respostasEx3_18_agosto.push(exercicio3_18_agosto_model(-4));
    respostasEx3_18_agosto.push(exercicio3_18_agosto_model(1));
    respostasEx3_18_agosto.push(exercicio3_18_agosto_model(-1));
    respostasEx3_18_agosto.push(exercicio3_18_agosto_model(6));
    respostasEx3_18_agosto.push(exercicio3_18_agosto_model(-5));
    respostasEx3_18_agosto.forEach(resp =>{
        document.querySelector("#ex3_18-08 tbody").innerHTML += 
            `<tr>
                <td>${resp[0]}</td>
                <td>${resp[1]}</td>
            </tr>`;
    })
}
let exercicio4_18_agosto = () =>{
    let respostasEx4_18_agosto = [];
    respostasEx4_18_agosto.push(exercicio4_18_agosto_model([1,1,1], [2000,1000,4000],2000));
    respostasEx4_18_agosto.push(exercicio4_18_agosto_model([-1,1,4], [1000,2000,4000],4000));
    respostasEx4_18_agosto.push(exercicio4_18_agosto_model([1,-1,-1], [2000,2000,4000],8000));
    respostasEx4_18_agosto.push(exercicio4_18_agosto_model([3,-2,2], [2000,3000,6000],6000));
    respostasEx4_18_agosto.push(exercicio4_18_agosto_model([-1,1,-1], [2000,1000,2000],4000));
    respostasEx4_18_agosto.push(exercicio4_18_agosto_model([4,-3,1],[2000,1000,4000],4000));
    respostasEx4_18_agosto.push(exercicio4_18_agosto_model([-1,-1,-1],[2000,1000,2000],1000));
    respostasEx4_18_agosto.push(exercicio4_18_agosto_model([-2,1,4],[4000,5000,10000],10000));
    respostasEx4_18_agosto.push(exercicio4_18_agosto_model([2,2,3],[2000,8000,4000],2000));
    respostasEx4_18_agosto.push(exercicio4_18_agosto_model([-3,2,2],[4000,2000,4000],8000));
    respostasEx4_18_agosto.push(exercicio4_18_agosto_model([1,1,1],[4000,2000,2000],1000));
    respostasEx4_18_agosto.push(exercicio4_18_agosto_model([-4,-1,5],[20000,10000,40000],20000));
    respostasEx4_18_agosto.forEach(resp =>{
        document.querySelector("#ex4_18-08 tbody").innerHTML += 
            `<tr>
                <td>${resp.vSomador[0]}</td>
                <td>${resp.vSomador[1]}</td>
                <td>${resp.vSomador[2]}</td>
                <td>${resp.rSomador[0]}</td>
                <td>${resp.rSomador[1]}</td>
                <td>${resp.rSomador[2]}</td>
                <td>${resp.r2}</td>
                <td>${resp.vout}</td>
            </tr>`;
    })

}

exercicio1_11_agosto();
exercicio1_18_agosto();
exercicio1_25_agosto();
exercicio1_01_setembro();
exercicio2_11_agosto();
exercicio2_18_agosto();
exercicio2_25_agosto();
exercicio3_11_agosto();
exercicio3_18_agosto();
exercicio3_25_agosto();
exercicio3_01_setembro();
exercicio4_18_agosto();
exercicio4_25_agosto();
exercicio4_01_setembro();

