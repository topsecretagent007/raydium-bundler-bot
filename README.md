### Token Bundler Bot V5.02

## summary

This bot is a bot that holds tokens at the initial price in 20 wallets when the user launches the initial token.
The user can hold tokens in the default main wallet and also hold tokens in other 20 wallets. The setting value is set to %.
In addition, the user can set the price of the token by adjusting the SOL amount when launching the token.
In addition, the bubble map has been updated to make it look good.

## Method of use

1. Install the module first.

  ```
  npm install
  ```

  or 

  ```
  yarn install
  ```


2. Create a .env file and set the necessary values.

Create the .env file by referring to .env.example.

3. Set the required values ​​in the settings.ts file:

  At this time, when setting the values ​​of each function, check and set the exact amount.
  LP_wallet_private_key,  quote_Mint_amount,  wallet1,  wallet2,  wallet3,  wallet4,  wallet5,  wallet6,  wallet7,  wallet8,  wallet9,  wallet10,  wallet11,  wallet12,  wallet13,  allet14,  wallet15,  wallet16,  wallet17,  wallet18,  wallet19,  wallet20,  wallet21

  Also, when setting the values ​​from wallet1 to 21 here, you should make sure that the sum of all wallets does not exceed 100.
  For reference, wallet1 is the user's main wallet. You can add a numeric value from 8 to 15 here to hold tokens.
  However, for other wallets, add at most 1.5.
  If you set each value to 3 to 4, you will hold 60 to 80% of the total token amount.
  So, please set it with these issues in mind.

4. Set the value of mainKp in the data.json file. 

  This is the private key of the default main wallet.

5. Once you have set all the values, just run the program.

  ```
  npm run start
  ```

6. Issues to consider when creating tokens

  After you start the bot, you should run it in the following order : 
  1 -> 2 -> 3 -> 1 -> 2 -> 4 -> 4 -> 5 -> 6 -> 7 -> 3 -> 3

  or

  1 -> 2 -> 4 -> 5 -> 6 -> 7 -> 3 -> 1 -> 2 -> 3 -> 4

  If you do this, the bot will work normally.

## If you have any questions while operating this bot, please feel free to contact me.