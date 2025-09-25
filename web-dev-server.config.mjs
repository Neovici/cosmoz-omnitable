/* eslint-env node */
export default {
	appIndex: 'demo/index.html',
	open: true,
	preserveSymlinks: true,
	nodeResolve: {
		mainFields: ['browser', 'jsnext', 'jsnext:main', 'module', 'main'],
		dedupe: (pkg) =>
			['@neovici', '@polymer', 'lit', '@pionjs/pion'].find((prefix) =>
				pkg.startsWith(prefix),
			),
	},
	// Handle TypeScript files by redirecting to compiled JS
	middleware: [
		(context, next) => {
			if (context.url.endsWith('.ts') && context.url.startsWith('/src/')) {
				// Redirect TypeScript imports to compiled JavaScript files
				const jsUrl = context.url.replace('/src/', '/dist/').replace('.ts', '.js');
				context.url = jsUrl;
			}
			return next();
		},
	],
};
