import { toggleLike } from '../../../src/firebase/toggleLike';

export async function POST({ request }) {
  const { newsId, userId } = await request.json();
  const liked = await toggleLike(newsId, userId);
  return new Response(JSON.stringify(liked), {
    headers: { 'Content-Type': 'application/json' }
  });
}
