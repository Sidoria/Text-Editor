import { Value } from 'slate';

const initialValue = Value.fromJSON({
	document: {
		nodes: [
			{
				object: 'block',
				type: 'paragraph',
				nodes: [
					{
						object: 'text',
						leaves: [
							{
								text: 'Socorro o Link nao funciona',
							},
						],
					},
				],
			},
		],
	},
});

export default initialValue;