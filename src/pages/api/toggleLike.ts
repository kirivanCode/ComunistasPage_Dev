import { toggleLike } from '../../firebase/toggleLike';

export async function POST({ request }: { request: Request }) {
  try {
    const { newsId, userId } = await request.json();

    if (!newsId || !userId) {
      return new Response(JSON.stringify({ error: 'Missing parameters' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const liked = await toggleLike(newsId, userId);

    return new Response(JSON.stringify({ liked }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
