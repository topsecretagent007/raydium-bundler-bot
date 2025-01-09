import { Keypair } from "@solana/web3.js"
import base58 from "bs58"

import { LP_wallet_private_key, tokens } from "../settings"
// import { LP_wallet_private_key } from "../settings"
import { createTokenWithMetadata } from "../src/createTokenPinata"
import { mainMenuWaiting, outputBalance, readJson, retrieveEnvVariable, saveDataToFile, sleep } from "../src/utils"
import { PoolInfo, UserToken } from '../src/types'
import {
  getWalletTokenAccount,
} from "../src/get_balance";
import { init } from ".."

type WalletTokenAccounts = Awaited<ReturnType<typeof getWalletTokenAccount>>

const recoveryMode = retrieveEnvVariable("RECOVERY_MODE") == "true"

const data = readJson()

const execute = async (token: UserToken) => {
  let params: PoolInfo
  try {
    

  } catch (error) {
    console.log("Error happened in one of the token flow", error)
  }
}

export const create_token = async () => {
 
}
