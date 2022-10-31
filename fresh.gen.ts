// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from './deno.json' assert { type: 'json' };
import * as $0 from './routes/404.tsx';
import * as $1 from './routes/500.tsx';
import * as $2 from './routes/_404.tsx';
import * as $3 from './routes/_500.tsx';
import * as $4 from './routes/blog.tsx';
import * as $5 from './routes/blog/[slug].tsx';
import * as $6 from './routes/home.ts';
import * as $7 from './routes/index.tsx';
import * as $8 from './routes/resume.tsx';
import * as $9 from './routes/sitemap.xml.ts';
import * as $$0 from './islands/CalendlyWidget.tsx';
import * as $$1 from './islands/SearchBar.tsx';
import * as $$2 from './islands/TypingCodeBlock.tsx';

const manifest = {
	routes: {
		'./routes/404.tsx': $0,
		'./routes/500.tsx': $1,
		'./routes/_404.tsx': $2,
		'./routes/_500.tsx': $3,
		'./routes/blog.tsx': $4,
		'./routes/blog/[slug].tsx': $5,
		'./routes/home.ts': $6,
		'./routes/index.tsx': $7,
		'./routes/resume.tsx': $8,
		'./routes/sitemap.xml.ts': $9,
	},
	islands: {
		'./islands/CalendlyWidget.tsx': $$0,
		'./islands/SearchBar.tsx': $$1,
		'./islands/TypingCodeBlock.tsx': $$2,
	},
	baseUrl: import.meta.url,
	config,
};

export default manifest;
