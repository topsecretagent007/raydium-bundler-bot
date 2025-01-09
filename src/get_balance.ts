
import {
  Connection, PublicKey,
  GetProgramAccountsFilter
} from "@solana/web3.js";

import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
import {

  SPL_ACCOUNT_LAYOUT,
  TokenAccount,
  findProgramAddress,
} from '@raydium-io/raydium-sdk';


export async function getTokenAccountBalance(connection: Connection, wallet: string, mint_token: string) {
  
}

export function assert(condition: any, msg?: string): asserts condition {
 
}


export async function getWalletTokenAccount(connection: Connection, wallet: PublicKey): Promise<TokenAccount[]> {
  
}


export async function getWalletTokenAccountMint(connection: Connection, wallet: PublicKey, mint: PublicKey): Promise<TokenAccount[]> {
  
}


export function getATAAddress(programId: PublicKey, owner: PublicKey, mint: PublicKey) {
  
}