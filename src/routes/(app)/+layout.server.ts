import GroupModel from '$lib/db/groups';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
	const groups: string[] = await GroupModel.distinct('group');
	return { groups };
};
