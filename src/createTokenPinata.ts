import { Keypair, PublicKey, SystemProgram, Transaction, ComputeBudgetProgram, sendAndConfirmTransaction } from '@solana/web3.js';
import {
    createAssociatedTokenAccountInstruction, createInitializeMintInstruction, createMintToInstruction,
    getAssociatedTokenAddress, getMinimumBalanceForRentExemptMint, MintLayout, TOKEN_PROGRAM_ID
} from '@solana/spl-token';
import { PROGRAM_ID, DataV2, createCreateMetadataAccountV3Instruction } from '@metaplex-foundation/mpl-token-metadata';
import axios from 'axios';
import FormData from 'form-data';
import base58 from 'bs58';
import fs from 'fs';
import { BN } from 'bn.js';
import { cluster, connection, pinataApiKey, pinataSecretApiKey } from '../config';
import { Metadata, UserToken } from "./types"
import { readJson } from './utils';

const uploadToIPFS = async (filePath: string) => {
    
};

const uploadMetadata = async (metadata: object) => {
    
};

const data = readJson()

export const createTokenWithMetadata = async (token: UserToken) => {
    try {
        
    } catch (error) {
        console.log("Create token error: ", error)
        return
    }
};
