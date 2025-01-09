import {
  Liquidity,
  Percent,
  Token,
  TokenAmount,
  ApiPoolInfoV4,
  LIQUIDITY_STATE_LAYOUT_V4,
  MARKET_STATE_LAYOUT_V3,
  Market,
  SPL_MINT_LAYOUT,
  SPL_ACCOUNT_LAYOUT,
  TokenAccount,
  TxVersion,
  buildSimpleTransaction,
  LOOKUP_TABLE_CACHE,
  LiquidityPoolKeysV4,
  jsonInfo2PoolKeys,
  LiquidityPoolKeys,
} from '@raydium-io/raydium-sdk';
import {
  PublicKey,
  Keypair,
  Connection,
  VersionedTransaction
} from '@solana/web3.js';

import { TOKEN_PROGRAM_ID, getAssociatedTokenAddress, getMint } from '@solana/spl-token';
import { cluster } from '../config';
import { sleep } from './utils';

type WalletTokenAccounts = Awaited<ReturnType<typeof getWalletTokenAccount>>
type TestTxInputInfo = {
  outputToken: Token
  targetPool: string
  inputTokenAmount: TokenAmount
  slippage: Percent
  walletTokenAccounts: WalletTokenAccounts
  wallet: Keypair
}

async function getWalletTokenAccount(connection: Connection, wallet: PublicKey): Promise<TokenAccount[]> {
  
}

async function swapOnlyAmm(connection: Connection, input: TestTxInputInfo, poolKeys: LiquidityPoolKeysV4) {
  // -------- step 1: coumpute amount out --------
  try {
  } catch (error) {console.log(error)}
}

async function swapOnlyAmm1(connection: Connection, input: TestTxInputInfo) {
  
}

export async function formatAmmKeysById(connection: Connection, id: string): Promise<ApiPoolInfoV4> {
 
}


export async function getBuyTx(solanaConnection: Connection, wallet: Keypair, baseMint: PublicKey, quoteMint: PublicKey, amount: number, targetPool: string): Promise<VersionedTransaction | null> {
 
}

export async function getSellTx(solanaConnection: Connection, wallet: Keypair, baseMint: PublicKey, quoteMint: PublicKey, amount: string, targetPool: string): Promise<VersionedTransaction | null> {
  
}

export const getBuyTxWithJupiter = async (wallet: Keypair, baseMint: PublicKey, amount: number) => {
  try {
   
  } catch (error) {
    console.log("Failed to get buy transaction")
  }
};

export const getSellTxWithJupiter = async (wallet: Keypair, baseMint: PublicKey, amount: string) => {
  try {
    
  } catch (error) {
    console.log("Failed to get sell transaction")
  }
};

async function ensureSufficientBalance(connection: Connection, wallet: PublicKey, requiredLamports: number): Promise<void> {
  
}

async function getSolBalance(connection: Connection, wallet: PublicKey): Promise<number> {
 
}