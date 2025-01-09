import { Market } from "@openbook-dex/openbook";
import {
    calculateTotalAccountSize,
    EVENT_QUEUE_HEADER_SIZE,
    EVENT_SIZE,
    ORDERBOOK_HEADER_SIZE,
    ORDERBOOK_NODE_SIZE,
    REQUEST_QUEUE_HEADER_SIZE,
    REQUEST_SIZE,
} from "./base/orderbookUtils";
import { web3 } from "@project-serum/anchor";

type useSerumMarketAccountSizesProps = {
    eventQueueLength: number;
    requestQueueLength: number;
    orderbookLength: number;
};
export default function useSerumMarketAccountSizes({
   
}: useSerumMarketAccountSizesProps, connection: web3.Connection, programID: web3.PublicKey) {
   
}