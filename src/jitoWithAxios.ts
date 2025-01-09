import { Keypair, LAMPORTS_PER_SOL, PublicKey, SystemProgram, TransactionMessage, VersionedTransaction } from "@solana/web3.js";
import base58 from "bs58";
import axios, { AxiosError } from "axios";
import { JITO_FEE, connection } from "../config";

interface Blockhash {
  blockhash: string;
  lastValidBlockHeight: number;
}


export const jitoWithAxios = async (transactions: VersionedTransaction[], payer: Keypair) => {

}




