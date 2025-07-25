import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const products = [
    {
      id: 1,
      name: "Браслет из аметиста",
      price: "2 490 ₽",
      originalPrice: "2 990 ₽",
      images: ["/img/96597fdf-f745-4e49-a3ee-bbc8eb28d28c.jpg"],
      description: "Натуральный аметист успокаивает разум и развивает интуицию",
      category: "Браслеты",
      stone: "Аметист"
    },
    {
      id: 2,
      name: "Четки из нефрита",
      price: "3 290 ₽",
      images: ["/img/20648afd-07cd-43b7-b6a3-8c5984ae24da.jpg"],
      description: "Нефритовые четки для медитации и духовных практик",
      category: "Четки",
      stone: "Нефрит"
    },
    {
      id: 3,
      name: "Брелок с кристаллом",
      price: "890 ₽",
      images: ["/img/9c8836be-176c-4d07-8274-225ab344532a.jpg"],
      description: "Стильный брелок с натуральным кристаллом для защиты",
      category: "Брелоки",
      stone: "Кварц"
    }
  ];

  const reviews = [
    {
      name: "Мария",
      text: "Очень красивый браслет! Камни настоящие, качество отличное.",
      rating: 5
    },
    {
      name: "Анна",
      text: "Четки помогают в медитации. Спасибо за быструю доставку!",
      rating: 5
    },
    {
      name: "Елена",
      text: "Брелок стал моим талисманом. Рекомендую всем!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-modern-blue via-modern-purple to-modern-pink font-sans overflow-x-hidden">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-modern-purple/20 shadow-lg animate-slide-up">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Gem" size={32} className="text-modern-purple animate-pulse-slow" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-modern-purple to-modern-pink bg-clip-text text-transparent animate-float" style={{ fontFamily: 'Cormorant, serif' }}>
                Crystal Garden
              </h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#catalog" className="text-modern-purple hover:text-modern-pink transition-all duration-300 hover:scale-105 font-semibold">Каталог</a>
              <a href="#about" className="text-modern-purple hover:text-modern-pink transition-all duration-300 hover:scale-105 font-semibold">О нас</a>
              <a href="#delivery" className="text-modern-purple hover:text-modern-pink transition-all duration-300 hover:scale-105 font-semibold">Доставка</a>
              <a href="#contacts" className="text-modern-purple hover:text-modern-pink transition-all duration-300 hover:scale-105 font-semibold">Контакты</a>
              <a href="#reviews" className="text-modern-purple hover:text-modern-pink transition-all duration-300 hover:scale-105 font-semibold">Отзывы</a>
            </nav>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" className="border-modern-purple text-modern-purple hover:bg-gradient-to-r hover:from-modern-purple hover:to-modern-pink hover:text-white transition-all duration-300 hover:scale-110">
                <Icon name="ShoppingCart" size={16} />
              </Button>
              <Button variant="outline" size="sm" className="border-modern-purple text-modern-purple hover:bg-gradient-to-r hover:from-modern-purple hover:to-modern-pink hover:text-white transition-all duration-300 hover:scale-110 md:hidden">
                <Icon name="Menu" size={16} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-modern-cyan/20 to-modern-purple/20 backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-r from-modern-blue/10 to-modern-pink/10 animate-gradient-shift"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-in-left">
              <Badge className="bg-gradient-to-r from-modern-orange to-modern-yellow text-white animate-bounce-slow">✨ Ручная работа</Badge>
              <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-modern-purple via-modern-pink to-modern-orange bg-clip-text text-transparent leading-tight animate-fade-in-up" style={{ fontFamily: 'Cormorant, serif' }}>
                Украшения из натуральных камней
              </h2>
              <p className="text-lg text-white/90 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Браслеты, четки и брелоки ручной работы с энергией природных минералов. 
                Каждое изделие создано с любовью и несет в себе силу Земли.
              </p>
              <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <Button 
                  className="bg-gradient-to-r from-modern-purple to-modern-pink text-white hover:from-modern-pink hover:to-modern-orange px-8 py-3 text-lg rounded-full shadow-2xl hover:shadow-modern-purple/50 transition-all duration-300 hover:scale-105"
                  onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  🔥 Смотреть каталог
                  <Icon name="ArrowRight" size={20} />
                </Button>
                <Button 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white hover:text-modern-purple px-8 py-3 text-lg rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105"
                >
                  💎 О нашей работе
                  <Icon name="Heart" size={20} />
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in" style={{ animationDelay: '0.6s' }}>
              <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-modern-cyan/30 to-modern-purple/30 p-8 backdrop-blur-sm animate-float">
                <img 
                  src="/img/96597fdf-f745-4e49-a3ee-bbc8eb28d28c.jpg" 
                  alt="Браслеты из натуральных камней"
                  className="w-full h-full object-cover rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-2xl animate-bounce-slow">
                <div className="flex items-center space-x-3">
                  <Icon name="Shield" size={24} className="text-modern-green animate-pulse" />
                  <div>
                    <p className="font-semibold bg-gradient-to-r from-modern-purple to-modern-pink bg-clip-text text-transparent">100% натуральные</p>
                    <p className="text-sm text-modern-blue">⭐ Настоящие камни</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-modern-blue/5 to-modern-pink/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h3 className="text-4xl font-bold bg-gradient-to-r from-modern-purple to-modern-pink bg-clip-text text-transparent mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
              🌟 Наш каталог
            </h3>
            <p className="text-lg text-modern-purple max-w-2xl mx-auto">
              Каждое украшение создается вручную из тщательно отобранных натуральных камней
            </p>
          </div>

          <Tabs defaultValue="all" className="mb-12">
            <TabsList className="grid w-full grid-cols-4 max-w-md mx-auto bg-gradient-to-r from-modern-purple/10 to-modern-pink/10 backdrop-blur-sm">
              <TabsTrigger value="all" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-modern-purple data-[state=active]:to-modern-pink data-[state=active]:text-white">Все</TabsTrigger>
              <TabsTrigger value="bracelets" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-modern-purple data-[state=active]:to-modern-pink data-[state=active]:text-white">Браслеты</TabsTrigger>
              <TabsTrigger value="beads" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-modern-purple data-[state=active]:to-modern-pink data-[state=active]:text-white">Четки</TabsTrigger>
              <TabsTrigger value="keychains" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-modern-purple data-[state=active]:to-modern-pink data-[state=active]:text-white">Брелоки</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product, index) => (
                  <Card key={product.id} className="group hover:shadow-2xl hover:shadow-modern-purple/20 transition-all duration-500 rounded-2xl overflow-hidden bg-gradient-to-br from-white to-modern-purple/5 border-2 border-transparent hover:border-modern-purple/20 animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
                    <div 
                      className="aspect-square overflow-hidden cursor-pointer relative"
                      onClick={() => setSelectedImage(product.images[0])}
                    >
                      <img 
                        src={product.images[0]} 
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-modern-purple/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Icon name="ZoomIn" size={24} className="text-white drop-shadow-lg" />
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="bg-gradient-to-r from-modern-cyan/20 to-modern-blue/20 text-modern-blue border-modern-blue/30">
                          💎 {product.stone}
                        </Badge>
                        <Badge variant="outline" className="border-modern-pink text-modern-pink bg-modern-pink/10">
                          {product.category}
                        </Badge>
                      </div>
                      <h4 className="text-xl font-semibold bg-gradient-to-r from-modern-purple to-modern-pink bg-clip-text text-transparent mb-2" style={{ fontFamily: 'Cormorant, serif' }}>
                        {product.name}
                      </h4>
                      <p className="text-modern-purple/80 text-sm mb-4">
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl font-bold bg-gradient-to-r from-modern-orange to-modern-yellow bg-clip-text text-transparent">{product.price}</span>
                          {product.originalPrice && (
                            <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                          )}
                        </div>
                        <Button className="bg-gradient-to-r from-modern-purple to-modern-pink text-white hover:from-modern-pink hover:to-modern-orange rounded-full shadow-lg hover:shadow-modern-purple/50 transition-all duration-300 hover:scale-105">
                          <Icon name="ShoppingCart" size={16} />
                          В корзину
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-modern-purple/10 to-modern-pink/10 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-modern-cyan/5 to-modern-orange/5 animate-gradient-shift"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-in-left">
              <h3 className="text-4xl font-bold bg-gradient-to-r from-modern-purple to-modern-pink bg-clip-text text-transparent" style={{ fontFamily: 'Cormorant, serif' }}>
                ✨ О нашей мастерской
              </h3>
              <p className="text-lg text-modern-purple leading-relaxed">
                Мы создаем украшения из натуральных камней уже более 10 лет. Каждый камень 
                тщательно отбирается по качеству и энергетическим свойствам.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-bounce-slow">
                  <Icon name="Award" size={32} className="text-modern-orange mx-auto mb-2 animate-pulse" />
                  <h4 className="font-semibold bg-gradient-to-r from-modern-purple to-modern-pink bg-clip-text text-transparent">🏆 Качество</h4>
                  <p className="text-sm text-modern-purple">Только натуральные камни</p>
                </div>
                <div className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-bounce-slow" style={{ animationDelay: '0.5s' }}>
                  <Icon name="Handshake" size={32} className="text-modern-green mx-auto mb-2 animate-pulse" />
                  <h4 className="font-semibold bg-gradient-to-r from-modern-purple to-modern-pink bg-clip-text text-transparent">🤝 Ручная работа</h4>
                  <p className="text-sm text-modern-purple">Каждое изделие уникально</p>
                </div>
              </div>
            </div>
            <div className="relative animate-float">
              <div className="aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-modern-purple/30 to-modern-pink/30 p-6 backdrop-blur-sm shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-modern-purple to-modern-pink rounded-xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-modern-cyan/20 to-modern-orange/20 animate-gradient-shift"></div>
                  <Icon name="PlayCircle" size={64} className="text-white opacity-90 hover:scale-110 transition-transform duration-300 cursor-pointer relative z-10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Section */}
      <section id="delivery" className="py-20 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-modern-blue/5 via-modern-purple/5 to-modern-pink/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h3 className="text-4xl font-bold bg-gradient-to-r from-modern-purple to-modern-pink bg-clip-text text-transparent mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
              🚀 Доставка и оплата
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 rounded-2xl bg-gradient-to-br from-modern-blue/10 to-modern-cyan/10 border-2 border-modern-blue/20 hover:border-modern-blue/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-modern-blue/20 animate-scale-in">
              <div className="bg-gradient-to-br from-modern-blue to-modern-cyan p-4 rounded-full w-fit mx-auto mb-4 animate-bounce-slow">
                <Icon name="Truck" size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold bg-gradient-to-r from-modern-blue to-modern-cyan bg-clip-text text-transparent mb-2">⚡ Быстрая доставка</h4>
              <p className="text-modern-purple">По России 1-3 дня, по Москве — в день заказа</p>
            </Card>
            <Card className="text-center p-6 rounded-2xl bg-gradient-to-br from-modern-purple/10 to-modern-pink/10 border-2 border-modern-purple/20 hover:border-modern-purple/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-modern-purple/20 animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="bg-gradient-to-br from-modern-purple to-modern-pink p-4 rounded-full w-fit mx-auto mb-4 animate-bounce-slow">
                <Icon name="CreditCard" size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold bg-gradient-to-r from-modern-purple to-modern-pink bg-clip-text text-transparent mb-2">💳 Удобная оплата</h4>
              <p className="text-modern-purple">Картой онлайн или наличными при получении</p>
            </Card>
            <Card className="text-center p-6 rounded-2xl bg-gradient-to-br from-modern-orange/10 to-modern-yellow/10 border-2 border-modern-orange/20 hover:border-modern-orange/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-modern-orange/20 animate-scale-in" style={{ animationDelay: '0.4s' }}>
              <div className="bg-gradient-to-br from-modern-orange to-modern-yellow p-4 rounded-full w-fit mx-auto mb-4 animate-bounce-slow">
                <Icon name="RotateCcw" size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold bg-gradient-to-r from-modern-orange to-modern-yellow bg-clip-text text-transparent mb-2">🔄 Возврат 14 дней</h4>
              <p className="text-modern-purple">Не подошло? Вернем деньги без вопросов</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-gradient-to-br from-modern-purple/10 to-modern-pink/10 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-modern-cyan/5 to-modern-orange/5 animate-gradient-shift"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h3 className="text-4xl font-bold bg-gradient-to-r from-modern-purple to-modern-pink bg-clip-text text-transparent mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
              💬 Отзывы покупателей
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm border-2 border-transparent hover:border-modern-purple/20 hover:shadow-2xl hover:shadow-modern-purple/10 transition-all duration-300 hover:scale-105 animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-modern-purple to-modern-pink rounded-full flex items-center justify-center text-white font-semibold mr-3 animate-pulse-slow">
                    {review.name[0]}
                  </div>
                  <div>
                    <h5 className="font-semibold bg-gradient-to-r from-modern-purple to-modern-pink bg-clip-text text-transparent">{review.name}</h5>
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-modern-yellow fill-current animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-modern-purple italic">"{review.text}"</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-modern-blue/5 to-modern-pink/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h3 className="text-4xl font-bold bg-gradient-to-r from-modern-purple to-modern-pink bg-clip-text text-transparent mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
              📞 Свяжитесь с нами
            </h3>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6 animate-slide-in-left">
              <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-modern-blue/10 to-modern-cyan/10 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="bg-gradient-to-br from-modern-blue to-modern-cyan p-3 rounded-full">
                  <Icon name="Phone" size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold bg-gradient-to-r from-modern-blue to-modern-cyan bg-clip-text text-transparent">📱 Телефон</h4>
                  <p className="text-modern-purple">+7 (495) 123-45-67</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-modern-purple/10 to-modern-pink/10 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="bg-gradient-to-br from-modern-purple to-modern-pink p-3 rounded-full">
                  <Icon name="Mail" size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold bg-gradient-to-r from-modern-purple to-modern-pink bg-clip-text text-transparent">📧 Email</h4>
                  <p className="text-modern-purple">info@crystalgarden.ru</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-modern-orange/10 to-modern-yellow/10 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="bg-gradient-to-br from-modern-orange to-modern-yellow p-3 rounded-full">
                  <Icon name="MapPin" size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold bg-gradient-to-r from-modern-orange to-modern-yellow bg-clip-text text-transparent">📍 Адрес</h4>
                  <p className="text-modern-purple">Москва, ул. Природная, 15</p>
                </div>
              </div>
            </div>
            <Card className="p-6 rounded-2xl bg-gradient-to-br from-white to-modern-purple/5 border-2 border-modern-purple/20 shadow-2xl animate-scale-in">
              <h4 className="text-xl font-semibold bg-gradient-to-r from-modern-purple to-modern-pink bg-clip-text text-transparent mb-4">💌 Написать нам</h4>
              <div className="space-y-4">
                <input 
                  className="w-full p-3 border-2 border-modern-purple/20 rounded-lg focus:outline-none focus:border-modern-purple bg-white/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg"
                  placeholder="Ваше имя"
                />
                <input 
                  className="w-full p-3 border-2 border-modern-purple/20 rounded-lg focus:outline-none focus:border-modern-purple bg-white/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg"
                  placeholder="Email"
                />
                <textarea 
                  className="w-full p-3 border-2 border-modern-purple/20 rounded-lg focus:outline-none focus:border-modern-purple h-32 bg-white/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg"
                  placeholder="Ваше сообщение"
                ></textarea>
                <Button className="w-full bg-gradient-to-r from-modern-purple to-modern-pink text-white hover:from-modern-pink hover:to-modern-orange py-3 rounded-lg shadow-lg hover:shadow-modern-purple/50 transition-all duration-300 hover:scale-105">
                  🚀 Отправить
                  <Icon name="Send" size={16} />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-modern-purple to-modern-pink text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-modern-blue/20 to-modern-orange/20 animate-gradient-shift"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="animate-slide-in-left">
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Gem" size={24} className="animate-pulse-slow" />
                <h5 className="text-xl font-bold animate-float" style={{ fontFamily: 'Cormorant, serif' }}>Crystal Garden</h5>
              </div>
              <p className="text-white/80">✨ Украшения из натуральных камней ручной работы</p>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h6 className="font-semibold mb-4">🧭 Навигация</h6>
              <ul className="space-y-2 text-white/80">
                <li><a href="#catalog" className="hover:text-white transition-colors hover:scale-105 inline-block">Каталог</a></li>
                <li><a href="#about" className="hover:text-white transition-colors hover:scale-105 inline-block">О нас</a></li>
                <li><a href="#delivery" className="hover:text-white transition-colors hover:scale-105 inline-block">Доставка</a></li>
                <li><a href="#contacts" className="hover:text-white transition-colors hover:scale-105 inline-block">Контакты</a></li>
              </ul>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <h6 className="font-semibold mb-4">🌐 Социальные сети</h6>
              <div className="flex space-x-4">
                <div className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110 cursor-pointer">
                  <Icon name="Instagram" size={24} className="animate-pulse-slow" />
                </div>
                <div className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110 cursor-pointer">
                  <Icon name="MessageCircle" size={24} className="animate-pulse-slow" />
                </div>
                <div className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110 cursor-pointer">
                  <Icon name="Mail" size={24} className="animate-pulse-slow" />
                </div>
              </div>
            </div>
          </div>
          <Separator className="my-8 bg-white/30" />
          <div className="text-center text-white/80 animate-fade-in-up">
            <p>© 2024 Crystal Garden. Все права защищены. ✨</p>
          </div>
        </div>
      </footer>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in-up"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full animate-scale-in">
            <img 
              src={selectedImage} 
              alt="Детальный вид"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-4 right-4 text-white hover:bg-white/20 backdrop-blur-sm rounded-full transition-all duration-300 hover:scale-110"
              onClick={() => setSelectedImage(null)}
            >
              <Icon name="X" size={20} />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;