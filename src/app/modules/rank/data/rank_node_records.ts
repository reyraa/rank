export interface RankNodeRecord {
	value: string;
}

export type RankNodeRecordJSON = RankNodeRecord;

export const rankNodeRecordSchema = {
	$id: 'lisk/rank/rankNodeRecord',
	type: 'object',
	required: ['value'],
	properties: {
		value: {
			dataType: 'string',
			fieldNumber: 1,
		}
	},
};
