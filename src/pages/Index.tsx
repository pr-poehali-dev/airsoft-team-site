
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary/10 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
                АирСтрайк
              </h1>
              <p className="text-xl mb-8">
                Профессиональная страйкбольная команда. 
                Стратегия, тактика, веселье и адреналин!
              </p>
              <div className="flex gap-4 justify-center">
                <Button asChild>
                  <Link to="/team">Наша команда</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/events">Ближайшие игры</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Почему мы?</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">👥</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Дружная команда</h3>
                <p className="text-muted-foreground">
                  Наша команда - это сплоченный коллектив единомышленников, всегда готовых поддержать друг друга.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🔫</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Качественное снаряжение</h3>
                <p className="text-muted-foreground">
                  Используем только надежное и проверенное снаряжение для максимального комфорта и реализма.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🏆</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Регулярные мероприятия</h3>
                <p className="text-muted-foreground">
                  Участвуем в турнирах, проводим тренировки и организуем собственные тематические игры.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-secondary/10 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Присоединяйся к нам!</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Ищем новых игроков в нашу команду. Опыт не обязателен, главное - желание расти и развиваться вместе с нами.
            </p>
            <Button size="lg">Связаться с нами</Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
