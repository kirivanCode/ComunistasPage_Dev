import { addComment } from '../../../src/firebase/addComment';

export async function POST({ request }) {
  const { newsId, usuario, mensaje } = await request.json();
  await addComment(newsId, usuario, mensaje);
  return new Response(null, { status: 200 });
}
