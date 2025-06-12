
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { trackFormSubmission } from "@/components/OptimizedAnalytics";

interface FormData {
  responsavelNome: string;
  alunoNome: string;
  serie: string;
  unidade: string;
  telefone: string;
}

interface EducationSegmentFormProps {
  segment: string;
  onSuccess: () => void;
}

const EducationSegmentForm = ({ segment, onSuccess }: EducationSegmentFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    responsavelNome: "",
    alunoNome: "",
    serie: "",
    unidade: "",
    telefone: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.responsavelNome || !formData.alunoNome || !formData.serie || !formData.unidade || !formData.telefone) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Track form submission
      trackFormSubmission(`education_segment_${segment.toLowerCase().replace(/\s+/g, '_')}`);

      // Create WhatsApp message
      const message = `Olá, gostaria de saber mais sobre o segmento ${segment}. Aqui estão meus dados:
- Nome do responsável: ${formData.responsavelNome}
- Nome do aluno: ${formData.alunoNome}
- Série desejada: ${formData.serie}
- Unidade: ${formData.unidade}
- Telefone: ${formData.telefone}`;

      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/5566996781284?text=${encodedMessage}`;

      // Open WhatsApp
      window.open(whatsappUrl, "_blank");

      // Reset form and close
      setFormData({
        responsavelNome: "",
        alunoNome: "",
        serie: "",
        unidade: "",
        telefone: ""
      });
      
      onSuccess();
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      alert("Erro ao enviar. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const getSeriesOptions = () => {
    if (segment.includes("Infantil")) {
      return ["Maternal", "Jardim I", "Jardim II"];
    } else if (segment.includes("Fundamental I")) {
      return ["1º Ano", "2º Ano", "3º Ano", "4º Ano", "5º Ano"];
    } else if (segment.includes("Fundamental II")) {
      return ["6º Ano", "7º Ano", "8º Ano", "9º Ano"];
    } else if (segment.includes("Médio")) {
      return ["1ª Série", "2ª Série", "3ª Série"];
    }
    return [];
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="responsavelNome" className="text-sm font-medium">
          Nome do Responsável *
        </Label>
        <Input
          id="responsavelNome"
          type="text"
          value={formData.responsavelNome}
          onChange={(e) => handleInputChange("responsavelNome", e.target.value)}
          placeholder="Digite seu nome"
          className="w-full"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="alunoNome" className="text-sm font-medium">
          Nome do Aluno *
        </Label>
        <Input
          id="alunoNome"
          type="text"
          value={formData.alunoNome}
          onChange={(e) => handleInputChange("alunoNome", e.target.value)}
          placeholder="Digite o nome do aluno"
          className="w-full"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="serie" className="text-sm font-medium">
          Série Desejada *
        </Label>
        <Select value={formData.serie} onValueChange={(value) => handleInputChange("serie", value)}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Selecione a série" />
          </SelectTrigger>
          <SelectContent>
            {getSeriesOptions().map((serie) => (
              <SelectItem key={serie} value={serie}>
                {serie}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="unidade" className="text-sm font-medium">
          Unidade ou Cidade *
        </Label>
        <Input
          id="unidade"
          type="text"
          value={formData.unidade}
          onChange={(e) => handleInputChange("unidade", e.target.value)}
          placeholder="Ex: Cuiabá, Várzea Grande"
          className="w-full"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="telefone" className="text-sm font-medium">
          Telefone com WhatsApp *
        </Label>
        <Input
          id="telefone"
          type="tel"
          value={formData.telefone}
          onChange={(e) => handleInputChange("telefone", e.target.value)}
          placeholder="(65) 99999-9999"
          className="w-full"
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-red-600 hover:bg-red-700 text-white mt-6"
      >
        {isSubmitting ? "Enviando..." : "Enviar"}
      </Button>
    </form>
  );
};

export default EducationSegmentForm;
