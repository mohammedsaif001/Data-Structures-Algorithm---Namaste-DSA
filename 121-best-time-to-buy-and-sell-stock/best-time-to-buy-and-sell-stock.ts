function maxProfit(prices: number[]): number {
    let min = prices[0];
    let maxProfit = 0;

    for(let i=1;i<prices.length;i++){
        if(prices[i]-min > maxProfit){
            maxProfit = prices[i]-min
        }
        
        if(min>prices[i]){
            min = prices[i]
        }
    }
    return maxProfit
};