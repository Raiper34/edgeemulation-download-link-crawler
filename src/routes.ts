import { Dataset } from 'crawlee';
import { createCheerioRouter } from 'crawlee';
import {BASE_URL} from "../config";

export const router = createCheerioRouter();

router.addDefaultHandler(async ({ enqueueLinks, log }) => {
    log.info(`enqueueing new URLs`);
    await enqueueLinks({
        globs: [`${BASE_URL}/browse-**`],
        label: 'detail',
    });
});

router.addHandler('detail', async ({ request, $, log, pushData }) => {
    const items: {href: string, text: string} = [];
    $('.roms a').each((_, item) => {
        const href = `${BASE_URL}/${item.attribs['href']}`;
        const text = $(item).text();
        log.info(text, {href});
        items.push({href, text});
    });
    for (let item of items) {
        await Dataset.pushData({url: item.href, name: item.text});
    }
});
