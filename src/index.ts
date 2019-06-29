// 定义一副扑克牌类型,
type Deck = NormalCard[]
// 定义一张扑克牌类型
type Color = '♥'|'♣'|'♦'|'♠'
type NormalCard = {
    color:Color
    mark:number 
}

function createDeck() :Deck{
    const deck:Deck = [];
    for(let i=1;i<=13;i++){
        deck.push({
            mark:i,
            color:'♠'
        })
        deck.push({
            mark:i,
            color:'♣'
        })
        deck.push({
            mark:i,
            color:'♥'
        })
        deck.push({
            mark:i,
            color:'♦'
        })
    }
    return deck;
}

function printDeck(deck:Deck) {
    let result = '\n';
    deck.forEach((card,i)=>{
        let str = card.color ;
        if(card.mark<=10){
            str+= card.mark;
        }else if(card.mark === 11){
            str += 'J';
        }else if(card.mark === 12){
            str += 'Q';
        }else if(card.mark === 13){
            str += 'K'
        }
        result+= str + '\t';
        if((i+1)%6 == 0){
            result+='\n'
        }
    })
    console.log(result)
}

let deck = createDeck();
printDeck(deck)

