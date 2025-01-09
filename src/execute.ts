import { Connection, Keypair, Transaction, VersionedTransaction } from "@solana/web3.js";
import { cluster, connection } from "../config";


interface Blockhash {
  blockhash: string;
  lastValidBlockHeight: number;
}


export const executeVersionedTx = async (transaction: VersionedTransaction) => {
  
}


export const executeLegacyTx = async (transaction: Transaction, signer: Keypair[], latestBlockhash: Blockhash) => {

}
