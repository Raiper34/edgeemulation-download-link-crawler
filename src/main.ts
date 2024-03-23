// For more information, see https://crawlee.dev/
import {CheerioCrawler, Dataset, ProxyConfiguration} from 'crawlee';

import { router } from './routes.js';
import {URLS} from "../config";

const startUrls = URLS;

const crawler = new CheerioCrawler({
    // proxyConfiguration: new ProxyConfiguration({ proxyUrls: ['...'] }),
    requestHandler: router,
    // Comment this option to scrape the full website.
    maxRequestsPerCrawl: 20,
});

await crawler.run(startUrls);
await Dataset.exportToJSON('items')
