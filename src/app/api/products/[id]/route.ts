export const dynamic = "force-dynamic"; // 
export async function GET(req: Request, { params }: { params: { id: string } }) {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const data = await res.json();

  return Response.json(data);
}