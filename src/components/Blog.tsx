import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export const Blog = () => {
  const posts = [
    {
      title: "Como o monitoramento agrícola pode aumentar sua produção",
      img: "https://images.unsplash.com/photo-1555696958-c069c5ebd162",
    },
    {
      title: "Manutenção preventiva: economize tempo e dinheiro",
      img: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce",
    },
    {
      title: "5 Dicas para utilizar dados agrícolas a seu favor",
      img: "https://images.unsplash.com/photo-1576267423445-bf7ef3e8d0f7",
    },
  ];

  return (
    <section id="blog" className="py-20 bg-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-green-600 mb-8">Nosso Blog</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
              <img
                src={post.img}
                alt={post.title}
                className="h-40 w-full object-cover rounded-t-lg"
              />
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-green-600">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">Resumo do post: {post.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
