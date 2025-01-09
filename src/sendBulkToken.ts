import { ComputeBudgetProgram, Keypair, PublicKey, Transaction, TransactionInstruction, TransactionMessage, VersionedTransaction, TransactionExpiredBlockheightExceededError } from "@solana/web3.js";
import { createAssociatedTokenAccountInstruction, createTransferCheckedInstruction, createTransferInstruction, getAssociatedTokenAddress, getOrCreateAssociatedTokenAccount } from "@solana/spl-token";
import { cluster, connection } from "../config";
import { sleep } from "./utils";
import { executeVersionedTx } from "./execute";
import { sendAndConfirmTransaction } from "@solana/web3.js";

interface Drop {
    walletAddress: PublicKey,
    tokenAmount: number
}

export async function newSendToken(

) {
    
}

const makeTxs = async (insts: TransactionInstruction[], mainKp: Keypair) => {
    try {

    } catch (error) {
        console.log("MakeTxs ~ error:", error)
    }

}

const handleTxs = async (transaction: Transaction, mainKp: Keypair) => {
    
}