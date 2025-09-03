import { Home, Play, Calendar, Heart, Menu } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const FloatingBottomMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: Play, label: "Vídeos", path: "/videos" },
    { icon: Calendar, label: "Agenda", path: "/agenda" },
    { icon: Heart, label: "Contribua", path: "/contribua" },
    { icon: Menu, label: "Mais", path: "/mais" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 w-11/12 max-w-md">
      <div className="bg-card/95 backdrop-blur-lg border border-border rounded-2xl px-4 py-3 shadow-elevated">
        <div className="flex justify-around items-center">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            const active = isActive(item.path);
            
            return (
              <button
                key={index}
                onClick={() => navigate(item.path)}
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
  );
};

export default FloatingBottomMenu;