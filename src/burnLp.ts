import { Keypair, PublicKey, TransactionMessage, VersionedTransaction } from "@solana/web3.js"
import { createBurnCheckedInstruction, getAssociatedTokenAddress, unpackMint } from "@solana/spl-token";

import { cluster } from "../config"
import { tokens } from "../settings"
import { burnLpQuantityPercent } from "../settings"
import { readJson, securityCheckWaiting, sleep } from "./utils"
import { PoolInfo, UserToken } from './types'
import { getWalletTokenAccount } from "./get_balance";
import { connection } from "../config";

import bs58 from 'bs58'
import { security_checks } from "..";

type WalletTokenAccounts = Awaited<ReturnType<typeof getWalletTokenAccount>>

const execute = async (token: UserToken) => {
  let params: PoolInfo
  try {
    
  } catch (error) {
    console.log("Error happened in one of the token flow", error)
  }
}

export const burn_lp = async () => {
  
}

// burn_lp()
