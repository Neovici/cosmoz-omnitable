import cfg from '@neovici/cfg/web/test-runner.mjs';

export default {
	...cfg,
	browsers: [cfg.browsers[0]],
};
