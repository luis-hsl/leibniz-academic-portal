
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight, Clock, Tag } from "lucide-react";
import { Link } from "react-router-dom";

const BlogPage = () => {
  const featuredPost = {
    id: 1,
    title: "ENEM 2024: Principais mudanças e como se preparar",
    excerpt: "O Exame Nacional do Ensino Médio (ENEM) 2024 trouxe algumas novidades importantes. Entenda as principais mudanças na estrutura da prova e descubra estratégias eficazes para maximizar sua performance.",
    content: "Com mais de 3 milhões de inscritos anualmente, o ENEM continua sendo a principal porta de entrada para o ensino superior no Brasil. Este ano, algumas mudanças importantes foram implementadas para tornar o exame ainda mais justo e abrangente.",
    date: "15 de Novembro de 2024",
    author: "Equipe Pedagógica Leibniz",
    category: "Vestibular",
    readTime: "8 min de leitura",
    image: "/lovable-uploads/cd4e09f3-0765-415c-b018-59d5dffc9698.png"
  };

  const recentPosts = [
    {
      id: 2,
      title: "A importância da educação socioemocional no desenvolvimento estudantil",
      excerpt: "Competências socioemocionais são fundamentais para o sucesso acadêmico e pessoal. Descubra como desenvolvemos essas habilidades em nossos alunos.",
      date: "10 de Novembro de 2024",
      author: "Prof. Ana Maria Santos",
      category: "Educação",
      readTime: "6 min"
    },
    {
      id: 3,
      title: "Sistema Bernoulli: metodologia que transforma aprovações em realidade",
      excerpt: "Conheça os pilares da metodologia Bernoulli que tem levado milhares de estudantes às melhores universidades do país.",
      date: "5 de Novembro de 2024",
      author: "Coordenação Acadêmica",
      category: "Metodologia",
      readTime: "10 min"
    },
    {
      id: 4,
      title: "Projeto de Ciências do Colégio Leibniz conquista reconhecimento nacional",
      excerpt: "Alunos do Ensino Médio desenvolveram projeto inovador sobre sustentabilidade que foi premiado em feira nacional de ciências.",
      date: "28 de Outubro de 2024",
      author: "Prof. Carlos Eduardo",
      category: "Projetos",
      readTime: "5 min"
    },
    {
      id: 5,
      title: "Como organizar um cronograma de estudos eficiente",
      excerpt: "Dicas práticas para criar uma rotina de estudos que maximize o aprendizado e minimize o estresse.",
      date: "25 de Outubro de 2024",
      author: "Orientação Educacional",
      category: "Dicas de Estudo",
      readTime: "7 min"
    },
    {
      id: 6,
      title: "Tecnologia na educação: ferramentas que potencializam o aprendizado",
      excerpt: "Explore como as novas tecnologias estão revolucionando o processo de ensino-aprendizagem em nossa instituição.",
      date: "20 de Outubro de 2024",
      author: "Coord. Tecnologia Educacional",
      category: "Tecnologia",
      readTime: "9 min"
    },
    {
      id: 7,
      title: "Orientação vocacional: descobrindo sua verdadeira paixão profissional",
      excerpt: "O processo de escolha profissional é fundamental. Saiba como nosso programa de orientação vocacional ajuda os estudantes.",
      date: "15 de Outubro de 2024",
      author: "Psicóloga Educacional",
      category: "Orientação",
      readTime: "8 min"
    }
  ];

  const categories = [
    "Todos",
    "Vestibular",
    "Educação", 
    "Metodologia",
    "Projetos",
    "Dicas de Estudo",
    "Tecnologia",
    "Orientação"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Blog e Notícias</h1>
            <p className="text-xl leading-relaxed">
              Fique por dentro das novidades educacionais, dicas de estudo e conquistas da nossa comunidade escolar.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Destaque</h2>
            
            <Card className="shadow-xl border-0 overflow-hidden mb-16">
              <div className="grid lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-8 lg:p-12">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full font-semibold">
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <User className="h-4 w-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <Button className="bg-red-600 hover:bg-red-700 text-white">
                      Ler artigo completo
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "Todos" ? "default" : "outline"}
                  className={category === "Todos" ? "bg-red-600 hover:bg-red-700" : ""}
                >
                  <Tag className="h-4 w-4 mr-2" />
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Artigos Recentes</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentPosts.map((post) => (
                <Card key={post.id} className="hover-scale shadow-lg border-0">
                  <CardHeader>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                      <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs font-semibold">
                        {post.category}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <CardTitle className="text-lg text-gray-900 hover:text-red-600 transition-colors line-clamp-2">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 leading-relaxed text-sm line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-2 text-gray-500">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-gray-500">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700 mt-3 p-0">
                      Ler mais
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                Carregar mais artigos
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default BlogPage;
