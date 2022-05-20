import { BaseAsset, ApplyAssetContext, ValidateAssetContext } from 'lisk-sdk';
import { RegisterAssetProps, registerAssetPropsSchema } from '../data/assets/register';
import { RankAccountProps } from '../data/account_props';
import { createRankObject } from '../storage';

export class RegisterAsset extends BaseAsset<RegisterAssetProps> {
	public name = 'register';
  public id = 1;

  // Define schema for asset
	public schema = registerAssetPropsSchema;

  public validate({ asset }: ValidateAssetContext<RegisterAssetProps>): void {
    if (asset.name.length > 10) {
			throw new Error('Name can not be longer than 10 characters.');
		}
		if (!asset.name) {
			throw new Error('Name can not be empty.');
		}
  }

	// eslint-disable-next-line @typescript-eslint/require-await
  public async apply({ asset, transaction, stateStore }: ApplyAssetContext<RegisterAssetProps>): Promise<void> {
		// Get the sender account
		const sender = await stateStore.account.get<RankAccountProps>(transaction.senderAddress);

		// Create the rank object and save it on the blockchain
		const rankObject = {
			name: asset.name,
			ownerAddress: transaction.senderAddress,
		};
		// @todo define createRankObject
		await createRankObject(stateStore, rankObject);

		// Add the rank output of the domain to the sender account
		if (!sender.rank) {
			sender.rank = {
				name: '',
			};
		}
		sender.rank.name = asset.name;

		// Save the updated sender account on the blockchain
		await stateStore.account.set(sender.address, sender);
	}
}
