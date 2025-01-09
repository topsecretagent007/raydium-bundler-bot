import { PublicKey } from "@solana/web3.js"

import { tokens } from "../settings"
import { mainMenuWaiting, outputBalance, readJson, saveDataToFile, sleep } from "../src/utils"
import { getWalletTokenAccount } from "../src/get_balance";
import { LP_wallet_keypair } from "../settings";
import { ammRemoveLiquidity } from "../src/removeLiquidity";
import { init } from "..";

type WalletTokenAccounts = Awaited<ReturnType<typeof getWalletTokenAccount>>

const execute = async () => {

}

export const remove_liquidity = async () => {

}

// remove_liquidity()
