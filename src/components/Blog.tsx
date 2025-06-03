
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const posts = [
    {
      title: "ENEM 2024: Principais mudanças e como se preparar",
      excerpt: "O Exame Nacional do Ensino Médio trouxe algumas novidades importantes. Entenda as principais mudanças na estrutura da prova.",
      date: "15 Nov 2024",
      author: "Equipe Pedagógica",
      category: "Vestibular"
    },
    {
      title: "A importância da educação socioemocional",
      excerpt: "Competências socioemocionais são fundamentais para o sucesso acadêmico e pessoal dos estudantes.",
      date: "10 Nov 2024",
      author: "Prof. Ana Santos",
      category: "Educação"
    },
    {
      title: "Sistema Bernoulli: metodologia de aprovação",
      excerpt: "Conheça os pilares da metodologia Bernoulli que tem levado estudantes às melhores universidades.",
      date: "5 Nov 2024",
      author: "Coordenação Acadêmica",
      category: "Metodologia"
    },
    {
      title: "Projeto de Ciências conquista reconhecimento",
      excerpt: "Alunos do Ensino Médio desenvolveram projeto inovador sobre sustentabilidade premiado nacionalmente.",
      date: "28 Out 2024",
      author: "Prof. Carlos Eduardo",
      category: "Projetos"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Blog e Notícias</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fique por dentro das novidades, dicas educacionais e conquistas da nossa comunidade escolar.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {posts.map((post, index) => (
              <Card key={index} className="hover-scale shadow-lg">
                <CardHeader>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                    <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl text-gray-900 hover:text-red-600 transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                      Ler mais
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/blog">
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                Ver Todas as Notícias
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
