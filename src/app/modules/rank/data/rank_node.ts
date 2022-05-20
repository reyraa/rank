import { rankNodeRecordSchema } from './rank_node_records';

export interface RankNode {
	ownerAddress: Buffer;
	name: string;
}

export const rankNodeSchema = {
	$id: 'lisk/rank/rankNode',
	type: 'object',
	required: ['ownerAddress', 'name'],
	properties: {
		ownerAddress: {
			dataType: 'bytes',
			fieldNumber: 1,
		},
		name: {
			dataType: 'string',
			fieldNumber: 2,
		},
	},
};
