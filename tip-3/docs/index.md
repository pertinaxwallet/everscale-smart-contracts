
# DeployEmptyWalletFor.tsol
**Path**: [contracts/tests](./../contracts/tests)





# ExpectedWalletAddressTest.tsol
**Path**: [contracts/tests](./../contracts/tests)





# Giver.tsol
**Path**: [contracts/additional](./../contracts/additional)





# RootTokenContract.tsol
**Path**: [contracts](./../contracts)

**Title**: FT token root contract


**Details**: All function calls are currently implemented without side effects



## constructor


### Params
| Index | Name                | Description                 |
| ----- | ------------------- | --------------------------- |
| 0     | root_owner_address_ | Root token owner address    |
| 1     | root_public_key_    | Root token owner public key |




## deployEmptyWallet(uint128,uint256,address,address)

**Details**: Can be called by anyone to deploy new token walletwallet_public_key_ or owner_address_ should be specified!


### Params
| Index | Name               | Description                                                            |
| ----- | ------------------ | ---------------------------------------------------------------------- |
| 0     | gas_back_address   | Receiver the remaining balance after deployment. msg.sender by default |
| 1     | owner_address_     | Token wallet owner address                                             |
| 2     | wallet_public_key_ | Token wallet owner public key                                          |



### Returns
| Index | Name  | Description          |
| ----- | ----- | -------------------- |
| 0     | _0    | Token wallet address |



## deployWallet(uint128,uint128,uint256,address,address)

**Details**: Can be called only by ownerCan be called both by owner key or addresswallet_public_key_ or owner_address_ should be specified!


### Params
| Index | Name               | Description                                                            |
| ----- | ------------------ | ---------------------------------------------------------------------- |
| 0     | deploy_grams       | How much TONs send to wallet on deployment                             |
| 1     | gas_back_address   | Receiver the remaining balance after deployment. msg.sender by default |
| 2     | owner_address_     | Token wallet owner address                                             |
| 3     | tokens             | How much tokens to send                                                |
| 4     | wallet_public_key_ | Token wallet owner public key                                          |



### Returns
| Index | Name  | Description          |
| ----- | ----- | -------------------- |
| 0     | _0    | Token wallet address |



## getWalletAddress(uint256,address)

**Details**: Since the token wallet can be controlled through key or address, both options are supported


### Params
| Index | Name               | Description                   |
| ----- | ------------------ | ----------------------------- |
| 0     | owner_address_     | Token wallet owner address    |
| 1     | wallet_public_key_ | Token wallet owner public key |



### Returns
| Index | Name  | Description          |
| ----- | ----- | -------------------- |
| 0     | _0    | Token wallet address |



## mint(uint128,address)

**Details**: Can be called only by owner


### Params
| Index | Name   | Description                   |
| ----- | ------ | ----------------------------- |
| 0     | to     | Receiver token wallet address |
| 1     | tokens | How much tokens to mint       |




## proxyBurn(uint128,address,address,address,TvmCell)

**Details**: Can be called only by owner addressDon&#39;t support token wallet owner public key


### Params
| Index | Name             | Description                                                             |
| ----- | ---------------- | ----------------------------------------------------------------------- |
| 0     | callback_address | Burn callback address                                                   |
| 1     | callback_payload | Burn callback payload                                                   |
| 2     | send_gas_to      | Receiver of the remaining balance after burn. sender_address by default |
| 3     | sender_address   | Token wallet owner address                                              |
| 4     | tokens           | How much tokens to burn                                                 |




## sendExpectedWalletAddress(uint256,address,address)


### Params
| Index | Name               | Description                   |
| ----- | ------------------ | ----------------------------- |
| 0     | owner_address_     | Token wallet owner address    |
| 1     | to                 | Callback receiver             |
| 2     | wallet_public_key_ | Token wallet owner public key |




## sendPausedCallbackTo(uint64,address)


### Params
| Index | Name          | Description       |
| ----- | ------------- | ----------------- |
| 0     | callback_addr | Callback receiver |
| 1     | callback_id   | Request id        |




## sendSurplusGas(address)

**Details**: Can by called only by owner address


### Params
| Index | Name  | Description       |
| ----- | ----- | ----------------- |
| 0     | to    | Withdraw receiver |




## setPaused(bool)

**Details**: Can be called only by ownerCan&#39;t stop transfers since it&#39;s an operation directly between token walletsPause disables / enables token burningPaused value should be used on wallet applications level


### Params
| Index | Name  | Description     |
| ----- | ----- | --------------- |
| 0     | value | Pause / unpause |




## tokensBurned(uint128,uint256,address,address,address,TvmCell)

**Details**: Decrease total supplyCan be called only by correct token wallet contractFails if root token is paused


### Params
| Index | Name              | Description                   |
| ----- | ----------------- | ----------------------------- |
| 0     | callback_address  | Callback receiver address     |
| 1     | callback_payload  | Callback payload              |
| 2     | send_gas_to       | Remaining balance receiver    |
| 3     | sender_address    | Token wallet owner address    |
| 4     | sender_public_key | Token wallet owner public key |
| 5     | tokens            | How much tokens was burned    |




## transferOwner(uint256,address)


### Params
| Index | Name                | Description                 |
| ----- | ------------------- | --------------------------- |
| 0     | root_owner_address_ | Root token owner address    |
| 1     | root_public_key_    | Root token owner public key |





# RootTokenContractInternalOwnerTest.tsol
**Path**: [contracts/tests](./../contracts/tests)





# TONTokenWallet.tsol
**Path**: [contracts](./../contracts)

**Title**: FT token wallet contract




## accept(uint128)

**Details**: Can be called only by root token


### Params
| Index | Name   | Description               |
| ----- | ------ | ------------------------- |
| 0     | tokens | How much tokens to accept |




## approve(address,uint128,uint128)

**Details**: Can be called only by ownerNo multi-allowance is allowed - only one sender and amount


### Params
| Index | Name             | Description                     |
| ----- | ---------------- | ------------------------------- |
| 0     | remaining_tokens | Required current tokens balance |
| 1     | spender          | Tokens spender address          |
| 2     | tokens           | How much tokens to spend        |




## burnByOwner(uint128,uint128,address,address,TvmCell)

**Details**: Can be called only by token wallet owner


### Params
| Index | Name             | Description                                                               |
| ----- | ---------------- | ------------------------------------------------------------------------- |
| 0     | callback_address | Part of root tokensBurned callback data                                   |
| 1     | callback_payload | Part of root tokensBurned callback data                                   |
| 2     | grams            | How much TONs attach to tokensBurned in case called with owner public key |
| 3     | send_gas_to      | Receiver of the remaining TONs balance, used in tokensBurned callback     |
| 4     | tokens           | How much tokens to burn                                                   |




## burnByRoot(uint128,address,address,TvmCell)

**Details**: Can be called only by root token wallet


### Params
| Index | Name             | Description                |
| ----- | ---------------- | -------------------------- |
| 0     | callback_address | Part of root callback data |
| 1     | callback_payload | Part of root callback data |
| 2     | send_gas_to      | Part of root callback data |
| 3     | tokens           | How much tokens to burn    |




## constructor

**Details**: All the parameters are specified as initial dataIf owner_address is not empty, it will be notified with .notifyWalletDeployed




## destroy(address)

**Details**: Requires 0 token balance


### Params
| Index | Name     | Description   |
| ----- | -------- | ------------- |
| 0     | gas_dest | TONs receiver |




## internalTransfer(uint128,uint256,address,address,bool,TvmCell)

**Details**: Can be called only by correct token wallet contract


### Params
| Index | Name              | Description                          |
| ----- | ----------------- | ------------------------------------ |
| 0     | notify_receiver   | Notify receiver on incoming transfer |
| 1     | payload           | Notification payload                 |
| 2     | send_gas_to       | Remaining TONs balance receiver      |
| 3     | sender_address    | Sender token wallet owner address    |
| 4     | sender_public_key | Sender token wallet owner public key |
| 5     | tokens            | How much tokens to receive           |




## internalTransferFrom(address,uint128,address,bool,TvmCell)

**Details**: Can be called only by correct token wallet


### Params
| Index | Name            | Description                          |
| ----- | --------------- | ------------------------------------ |
| 0     | notify_receiver | Notify receiver on incoming transfer |
| 1     | payload         | Notification payload                 |
| 2     | send_gas_to     | Remaining balance receiver           |
| 3     | to              | Tokens receiver                      |
| 4     | tokens          | How much tokens to transfer          |




## setBouncedCallback(address)

**Details**: Set 0:0 in case you want to disable bounced callback


### Params
| Index | Name              | Description       |
| ----- | ----------------- | ----------------- |
| 0     | bounced_callback_ | Callback receiver |




## setReceiveCallback(address,bool)

**Details**: Set 0:0 in case you want to disable receive callback


### Params
| Index | Name                  | Description               |
| ----- | --------------------- | ------------------------- |
| 0     | allow_non_notifiable_ | Allow no notification     |
| 1     | receive_callback_     | Receive callback receiver |




## transfer(address,uint128,uint128,address,bool,TvmCell)

**Details**: Can be called only by token wallet ownergrams ignored in case of internal message


### Params
| Index | Name            | Description                          |
| ----- | --------------- | ------------------------------------ |
| 0     | grams           | How much TONs to attach              |
| 1     | notify_receiver | Notify receiver on incoming transfer |
| 2     | payload         | Notification payload                 |
| 3     | send_gas_to     | Remaining TONs receiver              |
| 4     | to              | Tokens receiver token wallet         |
| 5     | tokens          | How much tokens to transfer          |




## transferFrom(address,address,uint128,uint128,address,bool,TvmCell)

**Details**: Can be called only by owner


### Params
| Index | Name            | Description                          |
| ----- | --------------- | ------------------------------------ |
| 0     | from            | Token wallet to transfer tokens from |
| 1     | grams           | How much TONs to attach              |
| 2     | notify_receiver | Notify receiver on incoming transfer |
| 3     | payload         | Notification payload                 |
| 4     | send_gas_to     | Remaining TONs receiver              |
| 5     | to              | Tokens receiver token wallet         |
| 6     | tokens          | How much tokens to transfer from     |




## transferToRecipient(uint256,address,uint128,uint128,uint128,address,bool,TvmCell)

**Details**: Can be called only by token wallet ownerWorks fine with 2 * 0.05 TON + deploy_gramstransfer_grams ignored in case of internal messageIf deploy_grams=0 works as regular transfer


### Params
| Index | Name                 | Description                                    |
| ----- | -------------------- | ---------------------------------------------- |
| 0     | deploy_grams         | How much TONs to attach to token wallet deploy |
| 1     | notify_receiver      | Notify receiver on incoming transfer           |
| 2     | payload              | Notification payload                           |
| 3     | recipient_address    | Token wallet receiver owner address            |
| 4     | recipient_public_key | Token wallet receiver owner public key         |
| 5     | send_gas_to          | Remaining TONs receiver                        |
| 6     | tokens               | How much tokens to transfer                    |
| 7     | transfer_grams       | How much TONs to attach to transfer            |





# TONTokenWalletHack.tsol
**Path**: [contracts/tests](./../contracts/tests)





# TONTokenWalletInternalOwnerTest.tsol
**Path**: [contracts/tests](./../contracts/tests)





# TokensBox.tsol
**Path**: [contracts/additional](./../contracts/additional)




