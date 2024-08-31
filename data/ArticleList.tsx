import { ArticlesList } from 'data/ArticlesList';
import { connectToDatabase } from './mongodb';

async function ArticleList(lang: string) {
  const { db } = await connectToDatabase();

  try {
    const findResult = await db
      .collection('articles-' + lang)
      .find()
      .toArray();

    return {
      articles: findResult,
      status: 200,
    };
  } catch (e) {
    console.error(e);
    return {
      articles: ArticlesList,
      status: 500,
      errorMap: e,
    };
  }
}

export default ArticleList;
