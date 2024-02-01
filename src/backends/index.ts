import { AsyncMirror } from './AsyncMirror';
import { DropboxFileSystem as Dropbox } from './Dropbox';
import { EmscriptenFileSystem as Emscripten } from './Emscripten';
import { FileSystemAccessFileSystem as FileSystemAccess } from './FileSystemAccess';
import { FolderAdapter } from './FolderAdapter';
import { InMemoryFileSystem as InMemory } from './InMemory';
import { IndexedDBFileSystem as IndexedDB } from './IndexedDB';
import { StorageFileSystem as Storage } from './Storage';
import { OverlayFS } from './OverlayFS';
import { WorkerFS } from './WorkerFS';
import { HTTPRequest } from './HTTPRequest';
import { IsoFS } from './IsoFS';
import { BackendConstructor } from './backend';

export const backends: { [backend: string]: BackendConstructor } = {
	AsyncMirror,
	Dropbox,
	Emscripten,
	FileSystemAccess,
	FolderAdapter,
	InMemory,
	IndexedDB,
	IsoFS,
	Storage,
	OverlayFS,
	WorkerFS,
	HTTPRequest,
	XMLHTTPRequest: HTTPRequest,
};

export {
	AsyncMirror,
	Dropbox,
	Emscripten,
	FileSystemAccess,
	FolderAdapter,
	InMemory,
	IndexedDB,
	IsoFS,
	Storage,
	OverlayFS,
	WorkerFS,
	HTTPRequest,
	HTTPRequest as XMLHTTPRequest,
};
