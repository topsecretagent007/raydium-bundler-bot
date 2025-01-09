import dotenv from 'dotenv'
import fs from 'fs'
import readline from 'readline'
import { Connection, GetProgramAccountsFilter, Keypair, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
import { connection } from "../config";
import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { SPL_ACCOUNT_LAYOUT, TokenAccount } from "@raydium-io/raydium-sdk";
import base58 from "bs58";
import { PoolInfo, PoolInfoStr } from "./types";
import { init, security_checks } from '..'
import { rl } from '../menu/menu';

// dotenv.config()

export const retrieveEnvVariable = (variableName: string) => {
  
}

export function sleep(ms: number) {

}

export function calcNonDecimalValue(value: number, decimals: number): number {

}

export function calcDecimalValue(value: number, decimals: number): number {

}

export async function getNullableResultFromPromise<T>(value: Promise<T>, opt?: { or?: T, logError?: boolean }): Promise<T | null> {
  
}

// Define the type for the JSON file content
export interface Data {

}
