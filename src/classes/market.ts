import type MarketTradeGood from "./market-trade-good";
import type MarketTransaction from "./market-transaction";
import type TradeGood from "./trade-good";

export default class Market {
    symbol?: string;
    exports: TradeGood[] = [];
    imports: TradeGood[] = [];
    exchange: TradeGood[] = [];
    transactions: MarketTransaction[] = [];
    tradeGoods: MarketTradeGood[] = [];
}