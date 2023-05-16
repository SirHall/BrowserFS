import { fs } from '../../../common';
import * as path from 'path';
import common from '../../../common';

describe('File Writing with Custom Mode', () => {
	afterEach(() => {
		jest.restoreAllMocks();
	});

	it('should write file synchronously with custom mode', () => {
		const rootFS = fs.getRootFS();
		const file = path.join(common.tmpDir, 'testWriteFileSync.txt');
		const mode = 0o755;

		jest.spyOn(rootFS, 'openSync').mockImplementation((...args) => {
			return fs.openSync.apply(fs, args);
		});

		jest.spyOn(fs, 'closeSync').mockImplementation((...args) => {
			return fs.closeSync.apply(fs, args);
		});

		fs.writeFileSync(file, '123', { mode: mode });

		const content = fs.readFileSync(file, { encoding: 'utf8' });
		expect(content).toBe('123');

		if (rootFS.supportsProps()) {
			const actual = fs.statSync(file).mode & 0o777;
			expect(actual).toBe(mode);
		}

		fs.unlinkSync(file);
	});

	it('should append to a file synchronously with custom mode', () => {
		const rootFS = fs.getRootFS();
		const file = path.join(common.tmpDir, 'testAppendFileSync.txt');
		const mode = 0o755;

		jest.spyOn(rootFS, 'openSync').mockImplementation((...args) => {
			return fs.openSync.apply(fs, args);
		});

		jest.spyOn(fs, 'closeSync').mockImplementation((...args) => {
			return fs.closeSync.apply(fs, args);
		});

		fs.appendFileSync(file, 'abc', { mode: mode });

		const content = fs.readFileSync(file, { encoding: 'utf8' });
		expect(content).toBe('abc');

		if (rootFS.supportsProps()) {
			expect(fs.statSync(file).mode & mode).toBe(mode);
		}

		fs.unlinkSync(file);
	});
});
