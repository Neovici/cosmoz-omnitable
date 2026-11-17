import { esbuildPlugin } from '@web/dev-server-esbuild';

export default {
	preserveSymlinks: true,
	nodeResolve: {
		mainFields: ['browser', 'jsnext', 'jsnext:main', 'module', 'main'],
		dedupe: (pkg) =>
			['@neovici', '@polymer', 'lit', '@pionjs/pion'].find((prefix) =>
				pkg.startsWith(prefix)
			),
	},
	plugins: [esbuildPlugin({ ts: true, target: 'es2020' })],
};
