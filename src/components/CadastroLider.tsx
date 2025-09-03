import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Crown, Save, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CadastroLider = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nomeCompleto: '',
    sexo: '',
    email: '',
    contato: '',
    igrejaLocal: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.nomeCompleto || !formData.email) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha nome completo e email.",
        variant: "destructive"
      });
      return;
    }

    console.log('Dados do Líder:', formData);
    
    toast({
      title: "Líder cadastrado com sucesso!",
      description: `${formData.nomeCompleto} foi adicionado como líder.`,
      className: "bg-success text-success-foreground"
    });
    
    // Reset form
    setFormData({
      nomeCompleto: '',
      sexo: '',
      email: '',
      contato: '',
      igrejaLocal: ''
    });
  };

  return (
    <div className="space-y-8">
      {/* Header Info */}
      <Card className="bg-gradient-accent border-accent/20">
        <CardContent className="flex items-center gap-4 p-6">
          <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
            <Crown className="h-6 w-6 text-accent-foreground" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-accent-foreground">Cadastro de Líder</h3>
            <p className="text-sm text-accent-foreground/80">
              Líderes possuem permissões avançadas para gerenciar membros e eventos
            </p>
          </div>
        </CardContent>
      </Card>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Informações do Líder */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="nomeCompleto" className="text-sm font-medium flex items-center gap-2">
              <Shield className="h-4 w-4" />
              Nome Completo *
            </Label>
            <Input
              id="nomeCompleto"
              value={formData.nomeCompleto}
              onChange={(e) => setFormData({...formData, nomeCompleto: e.target.value})}
              placeholder="Digite o nome completo do líder"
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

          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="igrejaLocal" className="text-sm font-medium">Igreja Local</Label>
            <Select onValueChange={(value) => setFormData({...formData, igrejaLocal: value})}>
              <SelectTrigger className="transition-all focus:shadow-card">
                <SelectValue placeholder="Selecione a igreja que o líder irá gerenciar" />
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

        {/* Informações sobre Permissões */}
        <Card className="bg-primary/5 border-primary/20">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              Permissões do Líder
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <p className="font-medium text-primary">✓ Gestão de Membros</p>
                <p className="text-muted-foreground">Cadastrar, editar e visualizar Seeds</p>
              </div>
              <div className="space-y-2">
                <p className="font-medium text-primary">✓ Gestão de Eventos</p>
                <p className="text-muted-foreground">Criar e gerenciar eventos da igreja</p>
              </div>
              <div className="space-y-2">
                <p className="font-medium text-primary">✓ Controle de Frequência</p>
                <p className="text-muted-foreground">Registrar presença em eventos</p>
              </div>
              <div className="space-y-2">
                <p className="font-medium text-primary">✓ Relatórios</p>
                <p className="text-muted-foreground">Acessar dashboard e métricas</p>
              </div>
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
            Cadastrar Líder
          </Button>
          <Button 
            type="button" 
            variant="outline"
            onClick={() => setFormData({
              nomeCompleto: '',
              sexo: '',
              email: '',
              contato: '',
              igrejaLocal: ''
            })}
          >
            Limpar
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CadastroLider;