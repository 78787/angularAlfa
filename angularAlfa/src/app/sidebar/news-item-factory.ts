import { NewsItem } from './news-item';
import { NewsItemRaw } from './news-item-raw';

export class NewsItemFactory {
    static empty(): NewsItem {
        return new NewsItem('', '', '', '');
    }

    static fromObject(rawNews: NewsItemRaw | any): NewsItem {
        return new NewsItem(
            rawNews.id,
            rawNews.titel,
            rawNews.text,
            rawNews.img
        );
    }
}
