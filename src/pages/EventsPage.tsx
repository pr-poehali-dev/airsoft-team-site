
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const upcomingEvents = [
  {
    id: 1,
    title: "Операция 'Красный рассвет'",
    date: "12 ноября 2023",
    time: "10:00 - 17:00",
    location: "Полигон 'Тактика', пригород",
    type: "Масштабная игра",
    players: "40-60 человек",
    description: "Масштабная игра с элементами ролевого взаимодействия. Две фракции будут бороться за контроль над стратегическими объектами.",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    title: "Тренировка команды",
    date: "19 ноября 2023",
    time: "12:00 - 16:00",
    location: "CQB-арена 'Бункер'",
    type: "Тренировка",
    players: "Только члены команды",
    description: "Закрытая тренировка для отработки тактики ближнего боя в помещениях и улучшения командного взаимодействия.",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    title: "Зимний турнир 'Холодная сталь'",
    date: "10 декабря 2023",
    time: "09:00 - 18:00",
    location: "Полигон 'Форт'",
    type: "Турнир",
    players: "80-100 человек",
    description: "Ежегодный зимний турнир между командами города. В программе: командные соревнования, дуэли снайперов и штурмовиков.",
    image: "/placeholder.svg",
  },
];

const pastEvents = [
  {
    id: 4,
    title: "Городская операция 'Блэкаут'",
    date: "15 октября 2023",
    location: "Заброшенный район 'Восточный'",
    type: "Сценарная игра",
    description: "Ночная игра в условиях городской среды. Команды выполняли спецзадания в условиях ограниченной видимости.",
    image: "/placeholder.svg",
  },
  {
    id: 5,
    title: "Открытая тренировка",
    date: "1 октября 2023",
    location: "Тренировочная база 'Альфа'",
    type: "Открытая тренировка",
    description: "Тренировка с приглашенными гостями для обмена опытом и знакомства новичков со страйкболом.",
    image: "/placeholder.svg",
  },
];

const EventsPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4 text-primary">Мероприятия Jager Frettchen</h1>
            <p className="text-lg text-muted-foreground">
              Расписание предстоящих игр, тренировок и других событий нашей команды.
            </p>
          </div>
          
          <section className="mb-16">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Предстоящие события</h2>
              <Button variant="outline">Календарь событий</Button>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((event) => (
                <Card key={event.id} className="overflow-hidden flex flex-col">
                  <div className="aspect-video relative">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-full object-cover"
                    />
                    <Badge className="absolute top-3 right-3 bg-primary">
                      {event.type}
                    </Badge>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle>{event.title}</CardTitle>
                    <CardDescription>
                      <span className="flex items-center gap-1 mt-1">
                        <Calendar size={14} />
                        <span>{event.date}</span>
                      </span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2 flex-grow">
                    <div className="flex items-center gap-2">
                      <Clock size={16} className="text-muted-foreground" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-muted-foreground" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={16} className="text-muted-foreground" />
                      <span>{event.players}</span>
                    </div>
                    <p className="text-sm mt-4">{event.description}</p>
                  </CardContent>
                  <CardFooter className="pt-2">
                    <Button className="w-full">Подробнее</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>
          
          <Separator className="my-12" />
          
          <section>
            <h2 className="text-2xl font-bold mb-8">Прошедшие события</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {pastEvents.map((event) => (
                <Card key={event.id} className="flex overflow-hidden">
                  <div className="w-1/3 bg-muted">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-2/3 p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold">{event.title}</h3>
                      <Badge variant="outline">{event.type}</Badge>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
                      <Calendar size={14} />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
                      <MapPin size={14} />
                      <span>{event.location}</span>
                    </div>
                    <p className="text-sm">{event.description}</p>
                    <Button variant="ghost" size="sm" className="mt-3">
                      Фотоотчет
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default EventsPage;
