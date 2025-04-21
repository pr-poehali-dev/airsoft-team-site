
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const teamMembers = [
  {
    id: 1,
    name: "Алексей",
    role: "Командир",
    bio: "Основатель команды с 5-летним опытом в страйкболе. Специализируется на тактическом планировании.",
    avatar: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Михаил",
    role: "Штурмовик",
    bio: "Бывший военный. Отвечает за тренировки команды и физическую подготовку.",
    avatar: "/placeholder.svg",
  },
  {
    id: 3,
    name: "Елена",
    role: "Снайпер",
    bio: "С нами уже 2 года. Лучший стрелок команды с несколькими медалями на соревнованиях.",
    avatar: "/placeholder.svg",
  },
  {
    id: 4,
    name: "Дмитрий",
    role: "Техник",
    bio: "Отвечает за поддержание снаряжения в рабочем состоянии и модификации оружия.",
    avatar: "/placeholder.svg",
  },
  {
    id: 5,
    name: "Иван",
    role: "Разведчик",
    bio: "Мастер скрытного передвижения и сбора информации о противнике.",
    avatar: "/placeholder.svg",
  },
  {
    id: 6,
    name: "Сергей",
    role: "Медик",
    bio: "Обеспечивает первую помощь и поддержку команды на длительных играх.",
    avatar: "/placeholder.svg",
  },
];

const TeamPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4 text-primary">Наша команда Jager Frettchen</h1>
            <p className="text-lg text-muted-foreground">
              Познакомьтесь с нашими игроками — опытными страйкболистами, объединенными любовью к тактическим играм 
              и командной работе.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <Card key={member.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <Avatar className="h-16 w-16 border-2 border-primary">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback>{member.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>{member.name}</CardTitle>
                    <CardDescription className="text-sm font-medium text-secondary">
                      {member.role}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">История команды</h2>
            <p className="mb-4">
              Команда "Jager Frettchen" была основана в 2023 году группой энтузиастов страйкбола, 
              которые хотели создать не просто игровой коллектив, а настоящее боевое братство.
            </p>
            <p className="mb-4">
              За время существования мы участвовали в десятках игр разного масштаба, 
              от небольших воскресных сражений до масштабных многодневных операций с сотнями участников.
            </p>
            <p>
              Наша философия — честная игра, уважение к противнику и постоянное совершенствование 
              как индивидуальных навыков, так и командного взаимодействия.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TeamPage;
