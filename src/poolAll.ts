import * as spl from '@solana/spl-token';
import { MARKET_STATE_LAYOUT_V3, Market } from '@openbook-dex/openbook';
import { AccountInfo, Connection, Keypair, PublicKey } from '@solana/web3.js';
import { u8, u32, struct } from '@solana/buffer-layout';
import { u64, publicKey } from '@solana/buffer-layout-utils';
import base58 from 'bs58';
import { LIQUIDITY_STATE_LAYOUT_V4, LiquidityPoolKeysV4 } from '@raydium-io/raydium-sdk';
import { connection, cluster } from '../config';
import { LP_wallet_keypair } from '../settings';

export const SPL_MINT_LAYOUT = struct<any>([
  u32('mintAuthorityOption'),
  publicKey('mintAuthority'),
  u64('supply'),
  u8('decimals'),
  u8('isInitialized'),
  u32('freezeAuthorityOption'),
  publicKey('freezeAuthority')
]);

export const SPL_ACCOUNT_LAYOUT = struct<any>([
  publicKey('mint'),
  publicKey('owner'),
  u64('amount'),
  u32('delegateOption'),
  publicKey('delegate'),
  u8('state'),
  u32('isNativeOption'),
  u64('isNative'),
  u64('delegatedAmount'),
  u32('closeAuthorityOption'),
  publicKey('closeAuthority')
]);



export const rayFee = cluster == "devnet"? new PublicKey("") : new PublicKey("");
// export const tipAcct = cluster == "devnet"? new PublicKey("3XMrhbv989VxAMi3DErLV9eJht1pHppW5LbKxe9fkEFR") :new PublicKey("Cw8CFyM9FkoMi7K7Crf6HNQqf4uEMzpKw6QNghXLvLkY");
export const RayLiqPoolv4 = cluster == "devnet"? new PublicKey("") : new PublicKey("");

export const wallet = LP_wallet_keypair

const openbookProgram =  cluster == "devnet"? new PublicKey("") : new PublicKey('');

async function getMarketInfo(marketId: PublicKey) {
  
}

export async function fetchMarketId(connection: Connection, baseMint: PublicKey, quoteMint: PublicKey) {
  
}

async function getDecodedData(marketInfo: {
  
}) {

}

async function getMintData(mint: PublicKey) {

}

async function getDecimals(mintData: AccountInfo<Buffer> | null) {
  
}

async function getOwnerAta(mint: { toBuffer: () => Uint8Array | Buffer }, publicKey: PublicKey) {
 
}

function getVaultSigner(marketId: { toBuffer: any }, marketDeco: { vaultSignerNonce: { toString: () => any } }) {
  
}

export async function derivePoolKeys(poolId: PublicKey): Promise<LiquidityPoolKeysV4 | null> {
  
}