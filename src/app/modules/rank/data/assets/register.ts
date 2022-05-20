export interface RegisterAssetProps {
	name: string;
}

export const registerAssetPropsSchema = {
  $id: 'rank/assets/register',
  title: 'RegisterAsset transaction asset for rank module',
  type: 'object',
  required: ['name'],
  properties: {
    name: {
      dataType: 'string',
      fieldNumber: 1,
    },
  },
}
