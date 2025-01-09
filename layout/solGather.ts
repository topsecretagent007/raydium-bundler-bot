import { ComputeBudgetProgram, Keypair, LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionMessage, VersionedTransaction } from "@solana/web3.js";
import { mainMenuWaiting, outputBalance, readBundlerWallets, readJson, saveBundlerWalletsToFile, sleep } from "../src/utils";
import { cluster, connection } from "../config";
import { bundlerWalletName, bundleWalletNum, needNewWallets } from "../settings"
import bs58 from 'bs58'
import { screen_clear } from "../menu/menu";
import { execute } from "../src/legacy";
import { createCloseAccountInstruction, getAssociatedTokenAddress, NATIVE_MINT } from "@solana/spl-token";
import { calcWalletSol } from "./walletCreate";

const walletNum = bundleWalletNum
let swapSolAmount = calcWalletSol();


export const sol_gather = async () => {

    try {

        if (successNum == batchNum) console.log("Successfully gathered sol from bundler wallets!")
    } catch (error) {
        console.log(`Failed to transfer SOL`)
    }
}
