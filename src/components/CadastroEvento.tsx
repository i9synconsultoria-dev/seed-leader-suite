import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Save, Camera, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CadastroEvento = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    foto: '',
    video: '',
    nomeEvento: '',
    data: '',
    inicio: '',
    fim: '',
    local: '',
    descricao: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.nomeEvento || !formData.data || !formData.inicio) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha nome do evento, data e horário de início.",
        variant: "destructive"
      });
      return;
    }

    console.log('Dados do Evento:', formData);
    
    toast({
      title: "Evento criado com sucesso!",
      description: `${formData.nomeEvento} foi adicionado ao calendário.`,
      className: "bg-success text-success-foreground"
    });
    
    // Reset form
    setFormData({
      foto: '',
      video: '',
      nomeEvento: '',
      data: '',
      inicio: '',
      fim: '',
      local: '',
      descricao: ''
    });
  };

  return (
    <div className="space-y-8">
      {/* Header Info */}
      <Card className="bg-gradient-primary/10 border-primary/20">
        <CardContent className="flex items-center gap-4 p-6">
          <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
            <Calendar className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-primary">Novo Evento</h3>
            <p className="text-sm text-muted-foreground">
              Crie eventos, cultos e atividades para sua igreja local
            </p>
          </div>
        </CardContent>
      </Card>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Mídia do Evento */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-secondary/20 border-dashed border-2 hover:border-primary/50 transition-colors">
            <CardContent className="flex flex-col items-center justify-center py-8">
              <Camera className="h-8 w-8 text-primary mb-4" />
              <p className="text-sm text-muted-foreground mb-4">Foto do Evento</p>
              <Button type="button" variant="outline" size="sm">
                Adicionar Foto
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-secondary/20 border-dashed border-2 hover:border-accent/50 transition-colors">
            <CardContent className="flex flex-col items-center justify-center py-8">
              <Camera className="h-8 w-8 text-accent mb-4" />
              <p className="text-sm text-muted-foreground mb-4">Vídeo Promocional</p>
              <Button type="button" variant="outline" size="sm">
                Adicionar Vídeo
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Informações do Evento */}
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="nomeEvento" className="text-sm font-medium flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Nome do Evento *
            </Label>
            <Input
              id="nomeEvento"
              value={formData.nomeEvento}
              onChange={(e) => setFormData({...formData, nomeEvento: e.target.value})}
              placeholder="Ex: Culto de Domingo, Reunião de Jovens..."
              className="transition-all focus:shadow-card"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label htmlFor="data" className="text-sm font-medium">Data *</Label>
              <Input
                id="data"
                type="date"
                value={formData.data}
                onChange={(e) => setFormData({...formData, data: e.target.value})}
                className="transition-all focus:shadow-card"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="inicio" className="text-sm font-medium flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Início *
              </Label>
              <Input
                id="inicio"
                type="time"
                value={formData.inicio}
                onChange={(e) => setFormData({...formData, inicio: e.target.value})}
                className="transition-all focus:shadow-card"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="fim" className="text-sm font-medium">Fim</Label>
              <Input
                id="fim"
                type="time"
                value={formData.fim}
                onChange={(e) => setFormData({...formData, fim: e.target.value})}
                className="transition-all focus:shadow-card"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="local" className="text-sm font-medium flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Local
            </Label>
            <Input
              id="local"
              value={formData.local}
              onChange={(e) => setFormData({...formData, local: e.target.value})}
              placeholder="Endereço ou nome do local do evento"
              className="transition-all focus:shadow-card"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="descricao" className="text-sm font-medium">Descrição</Label>
            <Textarea
              id="descricao"
              value={formData.descricao}
              onChange={(e) => setFormData({...formData, descricao: e.target.value})}
              placeholder="Descreva os detalhes do evento, programação, convidados especiais..."
              className="transition-all focus:shadow-card resize-none"
              rows={4}
            />
          </div>
        </div>

        {/* Preview do Evento */}
        {(formData.nomeEvento || formData.data) && (
          <Card className="bg-gradient-card shadow-card">
            <CardHeader>
              <CardTitle className="text-lg">Preview do Evento</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {formData.nomeEvento && (
                  <h4 className="text-lg font-semibold text-primary">{formData.nomeEvento}</h4>
                )}
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  {formData.data && (
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(formData.data).toLocaleDateString('pt-BR')}
                    </span>
                  )}
                  {formData.inicio && (
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {formData.inicio} {formData.fim && `- ${formData.fim}`}
                    </span>
                  )}
                  {formData.local && (
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {formData.local}
                    </span>
                  )}
                </div>
                {formData.descricao && (
                  <p className="text-sm text-muted-foreground">{formData.descricao}</p>
                )}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Botões de Ação */}
        <div className="flex gap-4 pt-6">
          <Button 
            type="submit" 
            className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-glow flex-1"
          >
            <Save className="h-4 w-4 mr-2" />
            Criar Evento
          </Button>
          <Button 
            type="button" 
            variant="outline"
            onClick={() => setFormData({
              foto: '',
              video: '',
              nomeEvento: '',
              data: '',
              inicio: '',
              fim: '',
              local: '',
              descricao: ''
            })}
          >
            Limpar
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CadastroEvento;