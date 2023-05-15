import fs from '../../../../src/core/node_fs';
import * as path from 'path';
import assert from '../../../harness/wrapped-assert';
import common from '../../../harness/common';

export default function () {
	const rootFS = fs.getRootFS();
	const fn = path.join(common.fixturesDir, 'elipses.txt');

	if (rootFS.supportsSynch()) {
		const s = fs.readFileSync(fn, 'utf8');
		for (let i = 0; i < s.length; i++) {
			assert.equal('\u2026', s[i]);
		}
		assert.equal(10000, s.length);
	}
}
