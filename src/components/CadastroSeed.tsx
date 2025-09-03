import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Camera, Save, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CadastroSeed = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    foto: '',
    cpf: '',
    nomeCompleto: '',
    dataNascimento: '',
    sexo: '',
    endereco: '',
    email: '',
    responsavelImediato: '',
    contato: '',
    igrejaLocal: '',
    batizado: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.nomeCompleto || !formData.email || !formData.cpf) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha nome, email e CPF.",
        variant: "destructive"
      });
      return;
    }

    console.log('Dados do Seed:', formData);
    
    toast({
      title: "Seed cadastrado com sucesso!",
      description: `${formData.nomeCompleto} foi adicionado ao sistema.`,
      className: "bg-success text-success-foreground"
    });
    
    // Reset form
    setFormData({
      foto: '',
      cpf: '',
      nomeCompleto: '',
      dataNascimento: '',
      sexo: '',
      endereco: '',
      email: '',
      responsavelImediato: '',
      contato: '',
      igrejaLocal: '',
      batizado: false
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Foto de Perfil */}
      <Card className="bg-secondary/20 border-dashed border-2 hover:border-primary/50 transition-colors">
        <CardContent className="flex flex-col items-center justify-center py-8">
          <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            {formData.foto ? (
              <img 
                src={formData.foto} 
                alt="Preview" 
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              <Camera className="h-8 w-8 text-primary" />
            )}
          </div>
          <Button type="button" variant="outline" size="sm">
            Adicionar Foto
          </Button>
        </CardContent>
      </Card>

      {/* Informações Pessoais */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="nomeCompleto" className="text-sm font-medium flex items-center gap-2">
            <User className="h-4 w-4" />
            Nome Completo *
          </Label>
          <Input
            id="nomeCompleto"
            value={formData.nomeCompleto}
            onChange={(e) => setFormData({...formData, nomeCompleto: e.target.value})}
            placeholder="Digite o nome completo"
            className="transition-all focus:shadow-card"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="cpf" className="text-sm font-medium">CPF *</Label>
          <Input
            id="cpf"
            value={formData.cpf}
            onChange={(e) => setFormData({...formData, cpf: e.target.value})}
            placeholder="000.000.000-00"
            className="transition-all focus:shadow-card"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="dataNascimento" className="text-sm font-medium">Data de Nascimento</Label>
          <Input
            id="dataNascimento"
            type="date"
            value={formData.dataNascimento}
            onChange={(e) => setFormData({...formData, dataNascimento: e.target.value})}
            className="transition-all focus:shadow-card"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="sexo" className="text-sm font-medium">Sexo</Label>
          <Select onValueChange={(value) => setFormData({...formData, sexo: value})}>
            <SelectTrigger className="transition-all focus:shadow-card">
              <SelectValue placeholder="Selecione o sexo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="masculino">Masculino</SelectItem>
              <SelectItem value="feminino">Feminino</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="endereco" className="text-sm font-medium">Endereço</Label>
          <Textarea
            id="endereco"
            value={formData.endereco}
            onChange={(e) => setFormData({...formData, endereco: e.target.value})}
            placeholder="Digite o endereço completo"
            className="transition-all focus:shadow-card resize-none"
            rows={2}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium">E-mail *</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            placeholder="email@exemplo.com"
            className="transition-all focus:shadow-card"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="contato" className="text-sm font-medium">Contato</Label>
          <Input
            id="contato"
            value={formData.contato}
            onChange={(e) => setFormData({...formData, contato: e.target.value})}
            placeholder="(11) 99999-9999"
            className="transition-all focus:shadow-card"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="responsavelImediato" className="text-sm font-medium">Responsável Imediato</Label>
          <Input
            id="responsavelImediato"
            value={formData.responsavelImediato}
            onChange={(e) => setFormData({...formData, responsavelImediato: e.target.value})}
            placeholder="Nome do responsável"
            className="transition-all focus:shadow-card"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="igrejaLocal" className="text-sm font-medium">Igreja Local</Label>
          <Select onValueChange={(value) => setFormData({...formData, igrejaLocal: value})}>
            <SelectTrigger className="transition-all focus:shadow-card">
              <SelectValue placeholder="Selecione a igreja" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sp-centro">São Paulo - Centro</SelectItem>
              <SelectItem value="sp-zona-sul">São Paulo - Zona Sul</SelectItem>
              <SelectItem value="rj-copacabana">Rio de Janeiro - Copacabana</SelectItem>
              <SelectItem value="mg-bh-centro">Belo Horizonte - Centro</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Status Batizado */}
      <Card className="bg-accent/5 border-accent/20">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg">Status Espiritual</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Label htmlFor="batizado" className="text-sm font-medium">Batizado</Label>
              <p className="text-sm text-muted-foreground">
                Indica se o membro já foi batizado
              </p>
            </div>
            <Switch
              id="batizado"
              checked={formData.batizado}
              onCheckedChange={(checked) => setFormData({...formData, batizado: checked})}
            />
          </div>
        </CardContent>
      </Card>

      {/* Botões de Ação */}
      <div className="flex gap-4 pt-6">
        <Button 
          type="submit" 
          className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-glow flex-1"
        >
          <Save className="h-4 w-4 mr-2" />
          Cadastrar Seed
        </Button>
        <Button 
          type="button" 
          variant="outline"
          onClick={() => setFormData({
            foto: '',
            cpf: '',
            nomeCompleto: '',
            dataNascimento: '',
            sexo: '',
            endereco: '',
            email: '',
            responsavelImediato: '',
            contato: '',
            igrejaLocal: '',
            batizado: false
          })}
        >
          Limpar
        </Button>
      </div>
    </form>
  );
};

export default CadastroSeed;