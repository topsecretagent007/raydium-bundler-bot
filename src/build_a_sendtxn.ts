import {
  buildSimpleTransaction,
  InnerSimpleV0Transaction,

} from '@raydium-io/raydium-sdk';
import {
  Connection,
  Keypair,
  SendOptions,
  Signer,
  Transaction,
  VersionedTransaction,
  PublicKey
} from '@solana/web3.js';

import {
  addLookupTableInfo,
  cluster,
  connection,
  makeTxVersion,
} from '../config';

import { Liquidity } from '@raydium-io/raydium-sdk';

import { getComputeBudgetConfig, getComputeBudgetConfigHigh } from "./budget";
import { BN } from "bn.js";

export async function sendTx(): Promise<string[]> {
  
}



export async function buildAndSendTx(keypair: Keypair, innerSimpleV0Transaction: InnerSimpleV0Transaction[], options?: SendOptions) {
  
}



export async function build_swap_instructions(
 
) {


}



export async function build_swap_sell_instructions(
 
) {

}


export async function build_create_pool_instructions(
  
) {

}