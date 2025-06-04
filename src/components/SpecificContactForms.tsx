
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  name: string;
  email: string;
  phone: string;
  studentAge: string;
  level: string;
  contactPreference: string;
  message: string;
}

interface SpecificContactFormProps {
  title: string;
  description: string;
  defaultLevel?: string;
  whatsappMessage: string;
}

const SpecificContactForm = ({ title, description, defaultLevel, whatsappMessage }: SpecificContactFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    studentAge: "",
    level: defaultLevel || "",
    contactPreference: "whatsapp",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.level) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }

    // Send structured WhatsApp message
    const structuredMessage = encodeURIComponent(
      `${whatsappMessage}\n\n` +
      `Nome: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Telefone: ${formData.phone}\n` +
      `Idade do estudante: ${formData.studentAge}\n` +
      `Nível de interesse: ${formData.level}\n` +
      `Preferência de contato: ${formData.contactPreference}\n` +
      `Mensagem: ${formData.message}`
    );
    
    window.open(`https://wa.me/5566996781284?text=${structuredMessage}`, "_blank");
    
    toast({
      title: "Formulário enviado!",
      description: "Redirecionando para WhatsApp para finalizar o atendimento.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      studentAge: "",
      level: defaultLevel || "",
      contactPreference: "whatsapp",
      message: ""
    });
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl text-gray-900">{title}</CardTitle>
        <p className="text-gray-600">{description}</p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Nome Completo *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="Digite seu nome completo"
                required
              />
            </div>
            <div>
              <Label htmlFor="email">E-mail *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="seu@email.com"
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="phone">Telefone/WhatsApp *</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                placeholder="(66) 99999-9999"
                required
              />
            </div>
            <div>
              <Label htmlFor="studentAge">Idade do Estudante</Label>
              <Select value={formData.studentAge} onValueChange={(value) => handleInputChange("studentAge", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione a faixa etária" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2-5">2 a 5 anos</SelectItem>
                  <SelectItem value="6-10">6 a 10 anos</SelectItem>
                  <SelectItem value="11-14">11 a 14 anos</SelectItem>
                  <SelectItem value="15-17">15 a 17 anos</SelectItem>
                  <SelectItem value="18+">18+ anos</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="level">Nível de Interesse *</Label>
              <Select value={formData.level} onValueChange={(value) => handleInputChange("level", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o nível" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="infantil">Ensino Infantil</SelectItem>
                  <SelectItem value="fundamental1">Fundamental I</SelectItem>
                  <SelectItem value="fundamental2">Fundamental II</SelectItem>
                  <SelectItem value="medio">Ensino Médio</SelectItem>
                  <SelectItem value="preparatorio">Preparatório ENEM/Vestibular</SelectItem>
                  <SelectItem value="extracurricular">Cursos Extracurriculares</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="contactPreference">Preferência de Contato</Label>
              <Select value={formData.contactPreference} onValueChange={(value) => handleInputChange("contactPreference", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Como prefere ser contatado?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="whatsapp">WhatsApp</SelectItem>
                  <SelectItem value="telefone">Telefone</SelectItem>
                  <SelectItem value="email">E-mail</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor="message">Mensagem Adicional</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              placeholder="Conte-nos mais sobre suas necessidades específicas..."
              rows={3}
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-red-600 hover:bg-red-700 text-white"
          >
            Enviar Solicitação
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

const SpecificContactForms = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Solicite Informações Específicas</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Receba informações personalizadas sobre o nível de ensino que mais interessa para você.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <SpecificContactForm
            title="Educação Infantil"
            description="Para crianças de 2 a 5 anos. Desenvolvimento cognitivo, social e emocional."
            defaultLevel="infantil"
            whatsappMessage="Olá! Tenho interesse em receber informações sobre a Educação Infantil do Colégio Leibniz."
          />
          
          <SpecificContactForm
            title="Ensino Fundamental"
            description="Base sólida para o desenvolvimento acadêmico com metodologia Bernoulli."
            defaultLevel="fundamental1"
            whatsappMessage="Olá! Tenho interesse em receber informações sobre o Ensino Fundamental do Colégio Leibniz."
          />
          
          <SpecificContactForm
            title="Ensino Médio"
            description="Preparação completa para vestibulares e ENEM com excelência acadêmica."
            defaultLevel="medio"
            whatsappMessage="Olá! Tenho interesse em receber informações sobre o Ensino Médio do Colégio Leibniz."
          />
          
          <SpecificContactForm
            title="Preparatório ENEM/Vestibular"
            description="Curso intensivo focado na aprovação em universidades públicas e privadas."
            defaultLevel="preparatorio"
            whatsappMessage="Olá! Tenho interesse em receber informações sobre o Preparatório ENEM/Vestibular do Colégio Leibniz."
          />
        </div>
      </div>
    </section>
  );
};

export default SpecificContactForms;
