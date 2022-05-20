import { chain, codec, StateStore } from 'lisk-sdk';
import { RankNode, rankNodeSchema } from './data/rank_node';

const RANK_PREFIX = 'RANK';

// Get a unique key for each Rank object
export const getKeyForNode = (ownerAddress: Buffer): string => `${RANK_PREFIX}:${ownerAddress.toString('hex')}`;

export const createRankObject = async (
	stateStore: StateStore,
	params: RankNode,
): Promise<void> => {
	const { ownerAddress } = params;

	await stateStore.chain.set(getKeyForNode(ownerAddress), codec.encode(rankNodeSchema, params));
};
