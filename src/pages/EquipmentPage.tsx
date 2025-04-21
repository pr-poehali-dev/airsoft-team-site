
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const equipment = {
  weapons: [
    {
      id: 1,
      name: "M4A1",
      type: "Штурмовая винтовка",
      description: "Надежная штурмовая винтовка американского производства. Высокая скорострельность и точность.",
      recommendations: "Подходит для средних и коротких дистанций, универсальное оружие для большинства ситуаций.",
      image: "/placeholder.svg",
    },
    {
      id: 2,
      name: "АК-74",
      type: "Штурмовая винтовка",
      description: "Легендарное оружие с отличной надежностью даже в суровых условиях.",
      recommendations: "Идеально для игр в лесной местности и при плохих погодных условиях.",
      image: "/placeholder.svg",
    },
    {
      id: 3,
      name: "SVD Драгунов",
      type: "Снайперская винтовка",
      description: "Полуавтоматическая снайперская винтовка с хорошей точностью на дальних дистанциях.",
      recommendations: "Для игроков, предпочитающих оказывать поддержку команде с расстояния.",
      image: "/placeholder.svg",
    },
    {
      id: 4,
      name: "MP5",
      type: "Пистолет-пулемет",
      description: "Компактное оружие для ближнего боя с хорошей маневренностью.",
      recommendations: "Отлично подходит для CQB и городских сценариев.",
      image: "/placeholder.svg",
    },
  ],
  protection: [
    {
      id: 1,
      name: "Тактический шлем",
      type: "Защита головы",
      description: "Обеспечивает защиту головы от ударов и попаданий шариков. Имеет крепления для аксессуаров.",
      recommendations: "Обязательно для CQB игр, рекомендуется для всех типов сценариев.",
      image: "/placeholder.svg",
    },
    {
      id: 2,
      name: "Защитные очки",
      type: "Защита глаз",
      description: "Противоударные очки с хорошей вентиляцией. Защищают глаза от попадания шариков.",
      recommendations: "Абсолютно обязательный элемент снаряжения для любой игры.",
      image: "/placeholder.svg",
    },
    {
      id: 3,
      name: "Бронежилет",
      type: "Защита корпуса",
      description: "Легкий тактический жилет с системой MOLLE для крепления подсумков и аксессуаров.",
      recommendations: "Удобен для ношения магазинов и дополнительного снаряжения.",
      image: "/placeholder.svg",
    },
  ],
  clothing: [
    {
      id: 1,
      name: "Камуфляжный костюм",
      type: "Униформа",
      description: "Костюм в расцветке Мультикам, состоящий из куртки и брюк с карманами.",
      recommendations: "Основа любого страйкбольного комплекта. Выбирайте по сезону и местности.",
      image: "/placeholder.svg",
    },
    {
      id: 2,
      name: "Тактические перчатки",
      type: "Защита рук",
      description: "Перчатки с защитой костяшек и хорошей тактильной чувствительностью.",
      recommendations: "Защищают руки и позволяют комфортно обращаться с оружием.",
      image: "/placeholder.svg",
    },
    {
      id: 3,
      name: "Тактические ботинки",
      type: "Обувь",
      description: "Высокие ботинки с хорошей поддержкой голеностопа и нескользящей подошвой.",
      recommendations: "Выбирайте водонепроницаемые модели для комфорта в любых условиях.",
      image: "/placeholder.svg",
    },
  ],
};

const EquipmentPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4 text-primary">Снаряжение</h1>
            <p className="text-lg text-muted-foreground">
              Рекомендации по выбору страйкбольного снаряжения от опытных игроков нашей команды.
            </p>
          </div>
          
          <Tabs defaultValue="weapons" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="weapons">Оружие</TabsTrigger>
              <TabsTrigger value="protection">Защита</TabsTrigger>
              <TabsTrigger value="clothing">Одежда</TabsTrigger>
            </TabsList>
            
            <TabsContent value="weapons">
              <div className="grid md:grid-cols-2 gap-6">
                {equipment.weapons.map((item) => (
                  <Card key={item.id}>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle>{item.name}</CardTitle>
                          <CardDescription>{item.type}</CardDescription>
                        </div>
                        <Badge className="bg-primary">{item.type}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-video bg-muted rounded-md mb-4 overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="mb-2">{item.description}</p>
                      <p className="text-sm text-muted-foreground">
                        <strong>Рекомендации:</strong> {item.recommendations}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="protection">
              <div className="grid md:grid-cols-2 gap-6">
                {equipment.protection.map((item) => (
                  <Card key={item.id}>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle>{item.name}</CardTitle>
                          <CardDescription>{item.type}</CardDescription>
                        </div>
                        <Badge className="bg-secondary text-secondary-foreground">{item.type}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-video bg-muted rounded-md mb-4 overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="mb-2">{item.description}</p>
                      <p className="text-sm text-muted-foreground">
                        <strong>Рекомендации:</strong> {item.recommendations}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="clothing">
              <div className="grid md:grid-cols-2 gap-6">
                {equipment.clothing.map((item) => (
                  <Card key={item.id}>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle>{item.name}</CardTitle>
                          <CardDescription>{item.type}</CardDescription>
                        </div>
                        <Badge variant="outline">{item.type}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-video bg-muted rounded-md mb-4 overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="mb-2">{item.description}</p>
                      <p className="text-sm text-muted-foreground">
                        <strong>Рекомендации:</strong> {item.recommendations}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="mt-16 max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Советы новичкам</h2>
            <div className="text-left space-y-4">
              <p>
                <strong>1. Начните с базового снаряжения</strong> — Сначала приобретите защитные очки, камуфляж и базовое оружие. 
                Остальное можно докупать постепенно.
              </p>
              <p>
                <strong>2. Предпочтите комфорт</strong> — Выбирайте снаряжение, в котором вам удобно двигаться и которое 
                подходит под ваш стиль игры.
              </p>
              <p>
                <strong>3. Не экономьте на защите</strong> — Качественные очки и защита лица — это то, на чем нельзя экономить 
                ради безопасности.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default EquipmentPage;
