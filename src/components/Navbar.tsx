
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Target, ShieldPlus, Calendar } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  
  const navItems = [
    { title: "Главная", path: "/", icon: null },
    { title: "Наша команда", path: "/team", icon: <Target size={20} /> },
    { title: "Снаряжение", path: "/equipment", icon: <ShieldPlus size={20} /> },
    { title: "Мероприятия", path: "/events", icon: <Calendar size={20} /> }
  ];

  return (
    <nav className="bg-accent py-4 px-6 shadow-md">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <img src="/logo-b.svg" alt="Логотип" className="h-10 w-10 mr-3" />
            <h1 className="text-2xl font-bold text-primary">Jager Frettchen</h1>
          </div>
          
          <ul className="flex space-x-1 md:space-x-2 items-center">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link 
                  to={item.path}
                  className={cn(
                    "px-3 py-2 rounded-md flex items-center gap-2 transition-colors hover:bg-primary hover:text-primary-foreground",
                    location.pathname === item.path ? 
                      "bg-primary text-primary-foreground" : 
                      "text-foreground"
                  )}
                >
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
