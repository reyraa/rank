export interface RankAccountProps {
	rank: {
		name: string;
	};
}

export const rankAccountPropsSchema = {
	$id: 'lisk/rank/rankAccount',
	type: 'object',
	required: ['name'],
	properties: {
		name: {
			dataType: 'string',
			fieldNumber: 1,
		},
	},
	default: {
		name: '',
	},
};
