import { Home, Star, Calendar, BarChart3, Menu, LogOut, Settings, User, BookOpen } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const FloatingBottomMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { icon: Home, label: "Home", action: () => navigate("/") },
    { icon: Star, label: "Destaques", action: () => scrollToSection("destaques") },
    { icon: Calendar, label: "Agenda", action: () => scrollToSection("proximos-eventos") },
    { icon: BarChart3, label: "Dashboard", action: () => navigate("/dashboard") },
    { icon: Menu, label: "Mais", action: () => setIsMenuOpen(true) },
  ];

  const mainMenuOptions = [
    { icon: User, label: "Cadastros", action: () => navigate("/cadastros") },
    { icon: BookOpen, label: "Relatórios", action: () => navigate("/relatorios") },
    { icon: Settings, label: "Configurações", action: () => navigate("/configuracoes") },
    { icon: LogOut, label: "Sair", action: () => navigate("/login") },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 w-11/12 max-w-md">
        <div className="bg-card/95 backdrop-blur-lg border border-border rounded-2xl px-4 py-3 shadow-elevated">
          <div className="flex justify-around items-center">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              const active = item.label === "Home" && isActive("/");
              
              return (
                <button
                  key={index}
                  onClick={item.action}
                  className={`flex flex-col items-center space-y-1 p-2 rounded-xl transition-all duration-200 ${
                    active
                      ? "text-primary bg-primary/10 scale-105"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  <Icon className="h-6 w-6" />
                  <span className="text-xs font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <SheetContent side="bottom" className="h-[50vh]">
          <SheetHeader>
            <SheetTitle>Menu Principal</SheetTitle>
          </SheetHeader>
          <div className="grid gap-4 mt-6">
            {mainMenuOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <Button
                  key={index}
                  variant="ghost"
                  className="justify-start h-12"
                  onClick={() => {
                    option.action();
                    setIsMenuOpen(false);
                  }}
                >
                  <Icon className="h-5 w-5 mr-3" />
                  {option.label}
                </Button>
              );
            })}
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default FloatingBottomMenu;