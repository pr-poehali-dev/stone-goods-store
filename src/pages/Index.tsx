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
    <div className="min-h-screen bg-earth-cream font-sans">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-earth-beige/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Gem" size={32} className="text-earth-brown" />
              <h1 className="text-2xl font-bold text-earth-brown" style={{ fontFamily: 'Cormorant, serif' }}>
                Crystal Garden
              </h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#catalog" className="text-earth-forest hover:text-earth-brown transition-colors">Каталог</a>
              <a href="#about" className="text-earth-forest hover:text-earth-brown transition-colors">О нас</a>
              <a href="#delivery" className="text-earth-forest hover:text-earth-brown transition-colors">Доставка</a>
              <a href="#contacts" className="text-earth-forest hover:text-earth-brown transition-colors">Контакты</a>
              <a href="#reviews" className="text-earth-forest hover:text-earth-brown transition-colors">Отзывы</a>
            </nav>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" className="border-earth-brown text-earth-brown hover:bg-earth-brown hover:text-white">
                <Icon name="ShoppingCart" size={16} />
              </Button>
              <Button variant="outline" size="sm" className="border-earth-brown text-earth-brown hover:bg-earth-brown hover:text-white md:hidden">
                <Icon name="Menu" size={16} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-earth-light to-earth-cream">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-earth-forest text-white">Ручная работа</Badge>
              <h2 className="text-5xl lg:text-6xl font-bold text-earth-brown leading-tight" style={{ fontFamily: 'Cormorant, serif' }}>
                Украшения из натуральных камней
              </h2>
              <p className="text-lg text-earth-forest leading-relaxed">
                Браслеты, четки и брелоки ручной работы с энергией природных минералов. 
                Каждое изделие создано с любовью и несет в себе силу Земли.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  className="bg-earth-brown text-white hover:bg-earth-brown/90 px-8 py-3 text-lg rounded-full"
                  onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Смотреть каталог
                  <Icon name="ArrowRight" size={20} />
                </Button>
                <Button 
                  variant="outline" 
                  className="border-earth-forest text-earth-forest hover:bg-earth-forest hover:text-white px-8 py-3 text-lg rounded-full"
                >
                  О нашей работе
                  <Icon name="Heart" size={20} />
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-earth-beige to-earth-light p-8">
                <img 
                  src="/img/96597fdf-f745-4e49-a3ee-bbc8eb28d28c.jpg" 
                  alt="Браслеты из натуральных камней"
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center space-x-3">
                  <Icon name="Shield" size={24} className="text-earth-forest" />
                  <div>
                    <p className="font-semibold text-earth-brown">100% натуральные</p>
                    <p className="text-sm text-earth-forest">Настоящие камни</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-earth-brown mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
              Наш каталог
            </h3>
            <p className="text-lg text-earth-forest max-w-2xl mx-auto">
              Каждое украшение создается вручную из тщательно отобранных натуральных камней
            </p>
          </div>

          <Tabs defaultValue="all" className="mb-12">
            <TabsList className="grid w-full grid-cols-4 max-w-md mx-auto">
              <TabsTrigger value="all">Все</TabsTrigger>
              <TabsTrigger value="bracelets">Браслеты</TabsTrigger>
              <TabsTrigger value="beads">Четки</TabsTrigger>
              <TabsTrigger value="keychains">Брелоки</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                  <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden">
                    <div 
                      className="aspect-square overflow-hidden cursor-pointer"
                      onClick={() => setSelectedImage(product.images[0])}
                    >
                      <img 
                        src={product.images[0]} 
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="bg-earth-light text-earth-brown">
                          {product.stone}
                        </Badge>
                        <Badge variant="outline" className="border-earth-forest text-earth-forest">
                          {product.category}
                        </Badge>
                      </div>
                      <h4 className="text-xl font-semibold text-earth-brown mb-2" style={{ fontFamily: 'Cormorant, serif' }}>
                        {product.name}
                      </h4>
                      <p className="text-earth-forest text-sm mb-4">
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl font-bold text-earth-brown">{product.price}</span>
                          {product.originalPrice && (
                            <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                          )}
                        </div>
                        <Button className="bg-earth-brown text-white hover:bg-earth-brown/90 rounded-full">
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
      <section id="about" className="py-20 bg-earth-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-4xl font-bold text-earth-brown" style={{ fontFamily: 'Cormorant, serif' }}>
                О нашей мастерской
              </h3>
              <p className="text-lg text-earth-forest leading-relaxed">
                Мы создаем украшения из натуральных камней уже более 10 лет. Каждый камень 
                тщательно отбирается по качеству и энергетическим свойствам.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4">
                  <Icon name="Award" size={32} className="text-earth-brown mx-auto mb-2" />
                  <h4 className="font-semibold text-earth-brown">Качество</h4>
                  <p className="text-sm text-earth-forest">Только натуральные камни</p>
                </div>
                <div className="text-center p-4">
                  <Icon name="Handshake" size={32} className="text-earth-brown mx-auto mb-2" />
                  <h4 className="font-semibold text-earth-brown">Ручная работа</h4>
                  <p className="text-sm text-earth-forest">Каждое изделие уникально</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden bg-earth-beige p-6">
                <div className="w-full h-full bg-gradient-to-br from-earth-brown to-earth-forest rounded-xl flex items-center justify-center">
                  <Icon name="PlayCircle" size={64} className="text-white opacity-80" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Section */}
      <section id="delivery" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-earth-brown mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
              Доставка и оплата
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 rounded-2xl">
              <Icon name="Truck" size={48} className="text-earth-brown mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-earth-brown mb-2">Быстрая доставка</h4>
              <p className="text-earth-forest">По России 1-3 дня, по Москве — в день заказа</p>
            </Card>
            <Card className="text-center p-6 rounded-2xl">
              <Icon name="CreditCard" size={48} className="text-earth-brown mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-earth-brown mb-2">Удобная оплата</h4>
              <p className="text-earth-forest">Картой онлайн или наличными при получении</p>
            </Card>
            <Card className="text-center p-6 rounded-2xl">
              <Icon name="RotateCcw" size={48} className="text-earth-brown mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-earth-brown mb-2">Возврат 14 дней</h4>
              <p className="text-earth-forest">Не подошло? Вернем деньги без вопросов</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-earth-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-earth-brown mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
              Отзывы покупателей
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="p-6 rounded-2xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-earth-brown rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    {review.name[0]}
                  </div>
                  <div>
                    <h5 className="font-semibold text-earth-brown">{review.name}</h5>
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-earth-forest italic">"{review.text}"</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-earth-brown mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
              Свяжитесь с нами
            </h3>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Icon name="Phone" size={24} className="text-earth-brown" />
                <div>
                  <h4 className="font-semibold text-earth-brown">Телефон</h4>
                  <p className="text-earth-forest">+7 (495) 123-45-67</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Icon name="Mail" size={24} className="text-earth-brown" />
                <div>
                  <h4 className="font-semibold text-earth-brown">Email</h4>
                  <p className="text-earth-forest">info@crystalgarden.ru</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Icon name="MapPin" size={24} className="text-earth-brown" />
                <div>
                  <h4 className="font-semibold text-earth-brown">Адрес</h4>
                  <p className="text-earth-forest">Москва, ул. Природная, 15</p>
                </div>
              </div>
            </div>
            <Card className="p-6 rounded-2xl">
              <h4 className="text-xl font-semibold text-earth-brown mb-4">Написать нам</h4>
              <div className="space-y-4">
                <input 
                  className="w-full p-3 border border-earth-beige rounded-lg focus:outline-none focus:border-earth-brown"
                  placeholder="Ваше имя"
                />
                <input 
                  className="w-full p-3 border border-earth-beige rounded-lg focus:outline-none focus:border-earth-brown"
                  placeholder="Email"
                />
                <textarea 
                  className="w-full p-3 border border-earth-beige rounded-lg focus:outline-none focus:border-earth-brown h-32"
                  placeholder="Ваше сообщение"
                ></textarea>
                <Button className="w-full bg-earth-brown text-white hover:bg-earth-brown/90 py-3 rounded-lg">
                  Отправить
                  <Icon name="Send" size={16} />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-earth-brown text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Gem" size={24} />
                <h5 className="text-xl font-bold" style={{ fontFamily: 'Cormorant, serif' }}>Crystal Garden</h5>
              </div>
              <p className="text-earth-light">Украшения из натуральных камней ручной работы</p>
            </div>
            <div>
              <h6 className="font-semibold mb-4">Навигация</h6>
              <ul className="space-y-2 text-earth-light">
                <li><a href="#catalog" className="hover:text-white transition-colors">Каталог</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#delivery" className="hover:text-white transition-colors">Доставка</a></li>
                <li><a href="#contacts" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold mb-4">Социальные сети</h6>
              <div className="flex space-x-4">
                <Icon name="Instagram" size={24} className="text-earth-light hover:text-white cursor-pointer transition-colors" />
                <Icon name="MessageCircle" size={24} className="text-earth-light hover:text-white cursor-pointer transition-colors" />
                <Icon name="Mail" size={24} className="text-earth-light hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
          <Separator className="my-8 bg-earth-beige/30" />
          <div className="text-center text-earth-light">
            <p>&copy; 2024 Crystal Garden. Все права защищены.</p>
          </div>
        </div>
      </footer>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img 
              src={selectedImage} 
              alt="Детальный вид"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-4 right-4 text-white hover:bg-white/20"
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