module.exports = function makeExchange(currency) {
    let money={};
    if (currency>10000){
    return {error:"You are rich, my friend! We don't have so much coins for exchange"};
    }
    if(currency<=0){
        return{};
    }
    let H=Math.floor(currency/50);
    let Q=Math.floor((currency-H*50)/25);
    let D=Math.floor((currency-H*50-Q*25)/10);
    let N=Math.floor((currency-H*50-Q*25-D*10)/5);
    let P=Math.floor((currency-H*50-Q*25-D*10-N*5)/1);

    if(H){
        money.H=H;
    }
    if(Q){
        money.Q=Q;
    }
    if(D){
        money.D=D;
    }
    if(N){
        money.N=N;
    }
    if(P){
        money.P=P;
    }

    return money;

}
