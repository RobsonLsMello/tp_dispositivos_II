class Amplificador{
    constructor(r1,r2,r3,r4,positive, negative, _tipoAmplificador, saturacao, ganho = 0, vout = 0, rc = 0, sr = 0, vSomador = [], rSomador = [], c = 0, t = 0, vInicial = 0){
        let grandezas = ["r1","r2","r3","r4","positive","negative", "tipoAmplificador", "saturacao", "ganho", "vout"];
        this.r1= r1;//baixo
        this.r2= r2;//cima        
        this.r3= r3;//cima
        this.r4= r4;//baixo
        this.rc = rc;
        this.sr = sr;
        this.c = c;
        this.t = t;
        this.vInicial = vInicial;
        this.positive= positive;
        this.negative= negative;        
        this.tipoAmplificador = _tipoAmplificador;
        this.saturacao = saturacao;
        this.vSomador = vSomador;
        this.rSomador = rSomador;
        this.ganho = ganho;
        this.vout = vout; 
        
        this.calcular();
    }    
    calcTimeSlewRate(v1,v2){
        let dTensao = v2-v1;
        return dTensao/(this.sr); 
    }
    calcular(){
        for(let i = 0; i<4 ; i++){//efetuar diversas vezes as contas afim de verificar se todas as infos foram preenchidas
            this.calcResistors();
            this.calcRc();
            this.calcGain();
            this.calcInVoltage();
            this.calcOutVoltage();
        } 
    }
    calcGain(){
        if(this.ganho == 0){
            switch(this.tipoAmplificador){
                case 1://inversor
                    
                    this.ganho = this.r1 == 0 || this.r2 == 0 ? this.ganho : -this.r2/this.r1;
                    this.ganho = this.negative == 0 || this.vout == 0 ? this.ganho : this.vout/this.negative;
                break;
                case 2://nao inversor
                    this.ganho = this.r1 == 0 || this.r2 == 0? this.ganho : ((this.r2/this.r1) + 1);
                    this.ganho = this.positive == 0 || this.vout == 0? this.ganho : this.vout/this.positive;
                break;
                default:
                    this.ganho = 1;
                break;
            }
        }
        
    }

    calcOutVoltage(){
        if(this.vout == 0){
            switch(this.tipoAmplificador){
                case 1://inversor
                    this.vout = this.ganho * this.negative;
                break;
                case 2://nao inversor
                    this.vout = this.ganho * this.positive;
                break;
                case 3://comparador:
                    this.vout = (-(this.r4/this.r3)*this.negative)+((this.r2/this.r1)*this.positive);                
                break;
                case 4://nao inversor somador
                    for(let i = 0; i < this.vSomador.length; i++){
                        this.vout += (this.r2/this.rSomador[i])*this.vSomador[i]*-1;
                    }
                break;
                case 5://seguidor de tensao
                    this.vout = this.positive ;
                break;
                case 6://ssinversor somador
                    for(let i = 0; i < this.vSomador.length; i++){
                        this.vout += -1*(this.r2/this.rSomador[i])*this.vSomador[i];
                    }
                break;
                case 7:
                    let l = this.negative/this.r1;
                    this.vout = -(l*this.t/this.c) + this.vInicial;
                break;
            }
            //efetuar comparacao de saturacao
            this.vout = (this.vout > this.saturacao ? this.saturacao : this.vout);
            this.vout = (this.vout < -this.saturacao ? -this.saturacao : this.vout);
        }
        
    }
    
    calcInVoltage(){
        switch(this.tipoAmplificador){
            case 1://inversor
                if(this.negative == 0)
                    this.negative = this.ganho == 0 ? 0 : this.vout / this.ganho;
            break;
            case 2://nao inversor
                if(this.positive == 0)
                    this.positive = this.ganho == 0 ? this.positive : this.vout / this.ganho;
            break;
            case 3://comparador:
                if(this.negative == 0)
                    this.negative = this.r1 == 0 || this.r4 == 0 ? 0 : (this.vout - ((this.r2/this.r1)*this.positive))* this.r3/(-this.r4);  
                if(this.positive == 0) 
                    this.positive = this.r2 == 0 || this.r3 == 0 ? 0 : (this.vout + ((this.r4/this.r3)*this.negative))* this.r1/(this.r2);       
            break;
            
        }
    }

    calcRc(){
        if(this.rc == 0){
            this.rc =  this.r2 == 0 && this.r1 == 0 ? 0 : (this.r2*this.r1)/(this.r2+this.r1);
        }
            
    }

    calcResistors(){
        switch(this.tipoAmplificador){
            case 1://inversor
                
                //somente tendo informacao do ganho
                if(this.r1 == 0 && this.r2 == 0 && this.ganho != 0 && this.rc == 0){
                    this.r1 = 1000;
                    this.r2 = this.ganho * 1000 * (this.ganho < 0 ? -1 : 1);
                }
                else if((this.r1 == 0 || this.r2 == 0)){
                    if(this.rc == 0){
                        this.r1 = (this.ganho == 0 ? 0 : -this.r2/this.ganho);                
                        this.r2 = (this.ganho*this.r1)/-1;
                    }
                    else{
                        
                        this.r1 = this.r2 == 0 || this.r1 != 0 || this.rc == 0 ? this.r1 : (this.r2*this.rc)/(this.r2-this.rc);
                        this.r2 = this.r1 == 0 || this.r2 != 0 || this.rc == 0 ? this.r2 : (this.r1*this.rc)/(this.r1-this.rc);
                    }
                }

            break;
            case 2://nao inversor
                
                //somente tendo informacao do ganho
                if(this.r1 == 0 && this.r2 == 0 && this.ganho != 0){
                    this.r1= 1000;
                    this.r2 = (this.ganho - 1)*1000* (this.ganho < 0 ? -1 : 1);
                }
                else if(this.r1 == 0 || this.r2 == 0){
                    this.r1 = this.r2/(this.ganho - 1) * (this.ganho -1 < 0 ? -1 : 1);
                    this.r2 = (this.ganho - 1)*this.r1 * (this.ganho -1 < 0 ? -1 : 1);
                }
            break;
        }
    }
}

const tipoAmplificador = {
    "inversor":1,
    "naoInversor":2,
    "comparador":3,
    "naoInversor-somador":4,
    "inversor-somador":6,
    'seguidor-tensao': 5,
    'integral': 7
}

