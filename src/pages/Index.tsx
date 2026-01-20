import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

type Page = 'home' | 'login' | 'dashboard' | 'admin';

export default function Index() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const stats = {
    totalUsers: 1247,
    activeSubscriptions: 892,
    revenue: 45680,
    growth: 23.5
  };

  const users = [
    { id: 1, name: 'Александр Петров', email: 'a.petrov@mail.ru', plan: 'Pro', status: 'active', sessions: 12 },
    { id: 2, name: 'Мария Иванова', email: 'm.ivanova@mail.ru', plan: 'Enterprise', status: 'active', sessions: 45 },
    { id: 3, name: 'Дмитрий Сидоров', email: 'd.sidorov@mail.ru', plan: 'Free', status: 'inactive', sessions: 3 },
    { id: 4, name: 'Елена Волкова', email: 'e.volkova@mail.ru', plan: 'Pro', status: 'active', sessions: 28 },
  ];

  const renderHome = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      <header className="border-b border-white/10 backdrop-blur-sm bg-black/20 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Icon name="Radar" className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              SITE RADAR
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Возможности</a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Тарифы</a>
            <a href="#docs" className="text-gray-300 hover:text-white transition-colors">Документация</a>
          </nav>
          <Button onClick={() => setCurrentPage('login')} className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
            Войти
          </Button>
        </div>
      </header>

      <section className="container mx-auto px-6 py-20 text-center animate-fade-in">
        <Badge className="mb-6 bg-purple-500/20 text-purple-300 border-purple-500/30">
          🚀 Запущено 20 января 2026
        </Badge>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight">
          Облачный SaaS-сервис
          <br />нового поколения
        </h1>
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          Полный контроль над пользователями, подписками и безопасностью. 
          Двухфакторная аутентификация и логирование действий из коробки.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button onClick={() => setCurrentPage('login')} size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8">
            Начать бесплатно
            <Icon name="ArrowRight" className="ml-2" size={20} />
          </Button>
          <Button size="lg" variant="outline" className="border-purple-500/30 text-white hover:bg-purple-500/10 text-lg px-8">
            Смотреть демо
            <Icon name="Play" className="ml-2" size={20} />
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-20" id="features">
          <Card className="bg-gradient-to-br from-purple-950/50 to-slate-950/50 border-purple-500/20 backdrop-blur-sm p-8 hover:scale-105 transition-transform">
            <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <Icon name="ShieldCheck" className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Двухфакторная аутентификация</h3>
            <p className="text-gray-400">Максимальная защита аккаунтов с помощью 2FA, SMS и email подтверждений</p>
          </Card>

          <Card className="bg-gradient-to-br from-pink-950/50 to-slate-950/50 border-pink-500/20 backdrop-blur-sm p-8 hover:scale-105 transition-transform">
            <div className="w-14 h-14 bg-gradient-to-br from-pink-600 to-orange-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <Icon name="Activity" className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Логирование действий</h3>
            <p className="text-gray-400">Полный аудит всех операций пользователей в реальном времени</p>
          </Card>

          <Card className="bg-gradient-to-br from-blue-950/50 to-slate-950/50 border-blue-500/20 backdrop-blur-sm p-8 hover:scale-105 transition-transform">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <Icon name="Users" className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Управление сессиями</h3>
            <p className="text-gray-400">Контроль активных сессий, принудительный выход и безопасность</p>
          </Card>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20" id="pricing">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Выберите тарифный план</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { name: 'Free', price: '0', users: '1', features: ['Базовая аутентификация', 'До 100 запросов/день', 'Email поддержка'], color: 'from-gray-600 to-gray-700' },
            { name: 'Pro', price: '1990', users: '10', features: ['2FA аутентификация', 'До 10,000 запросов/день', 'Приоритетная поддержка', 'Логирование действий'], color: 'from-purple-600 to-pink-600', popular: true },
            { name: 'Enterprise', price: '9990', users: '∞', features: ['Всё из Pro', 'Неограниченные запросы', '24/7 поддержка', 'Управление сессиями', 'API доступ'], color: 'from-pink-600 to-orange-600' },
          ].map((plan) => (
            <Card key={plan.name} className={`bg-slate-950/50 border ${plan.popular ? 'border-purple-500 scale-105' : 'border-white/10'} p-8 relative`}>
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600">
                  Популярный
                </Badge>
              )}
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-white">{plan.price}</span>
                <span className="text-gray-400"> ₽/мес</span>
              </div>
              <p className="text-gray-400 mb-6">До {plan.users} пользователей</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-300">
                    <Icon name="Check" className="text-green-400 flex-shrink-0 mt-0.5" size={20} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className={`w-full bg-gradient-to-r ${plan.color} hover:opacity-90`}>
                Выбрать план
              </Button>
            </Card>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black/20 backdrop-blur-sm py-12">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>© 2026 SITE RADAR. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );

  const renderLogin = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 flex items-center justify-center p-6">
      <Card className="w-full max-w-md bg-slate-950/80 border-purple-500/20 backdrop-blur-xl p-8 animate-scale-in">
        <button onClick={() => setCurrentPage('home')} className="flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors">
          <Icon name="ArrowLeft" size={20} />
          Назад
        </button>
        
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
            <Icon name="Radar" className="text-white" size={28} />
          </div>
          <h1 className="text-2xl font-bold text-white">SITE RADAR</h1>
        </div>

        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="login">Вход</TabsTrigger>
            <TabsTrigger value="register">Регистрация</TabsTrigger>
          </TabsList>

          <TabsContent value="login" className="space-y-4">
            <div>
              <Label htmlFor="email" className="text-gray-300">Email</Label>
              <Input id="email" type="email" placeholder="your@email.com" className="bg-slate-900/50 border-purple-500/30 mt-2" />
            </div>
            <div>
              <Label htmlFor="password" className="text-gray-300">Пароль</Label>
              <Input id="password" type="password" placeholder="••••••••" className="bg-slate-900/50 border-purple-500/30 mt-2" />
            </div>
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-400">
                <input type="checkbox" className="rounded" />
                Запомнить меня
              </label>
              <a href="#" className="text-purple-400 hover:text-purple-300">Забыли пароль?</a>
            </div>
            <Button 
              onClick={() => {
                setIsLoggedIn(true);
                setCurrentPage('dashboard');
              }} 
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              Войти
            </Button>
            <Button 
              onClick={() => {
                setIsLoggedIn(true);
                setIsAdmin(true);
                setCurrentPage('admin');
              }} 
              variant="outline" 
              className="w-full border-purple-500/30 text-purple-400 hover:bg-purple-500/10"
            >
              Войти как Админ (демо)
            </Button>
          </TabsContent>

          <TabsContent value="register" className="space-y-4">
            <div>
              <Label htmlFor="reg-name" className="text-gray-300">Имя</Label>
              <Input id="reg-name" placeholder="Иван Петров" className="bg-slate-900/50 border-purple-500/30 mt-2" />
            </div>
            <div>
              <Label htmlFor="reg-email" className="text-gray-300">Email</Label>
              <Input id="reg-email" type="email" placeholder="your@email.com" className="bg-slate-900/50 border-purple-500/30 mt-2" />
            </div>
            <div>
              <Label htmlFor="reg-password" className="text-gray-300">Пароль</Label>
              <Input id="reg-password" type="password" placeholder="••••••••" className="bg-slate-900/50 border-purple-500/30 mt-2" />
            </div>
            <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              Зарегистрироваться
            </Button>
          </TabsContent>
        </Tabs>

        <div className="mt-6 pt-6 border-t border-white/10">
          <p className="text-center text-gray-400 text-sm mb-4">Или войти через</p>
          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" className="border-white/10 hover:bg-white/5">
              <Icon name="Github" className="mr-2" size={20} />
              GitHub
            </Button>
            <Button variant="outline" className="border-white/10 hover:bg-white/5">
              <Icon name="Mail" className="mr-2" size={20} />
              Google
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );

  const renderDashboard = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      <header className="border-b border-white/10 backdrop-blur-sm bg-black/20 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Icon name="Radar" className="text-white" size={24} />
            </div>
            <span className="text-xl font-bold text-white">SITE RADAR</span>
          </div>
          <div className="flex items-center gap-4">
            <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">Pro Plan</Badge>
            <Avatar>
              <AvatarFallback className="bg-gradient-to-br from-purple-600 to-pink-600">АП</AvatarFallback>
            </Avatar>
            <Button onClick={() => { setIsLoggedIn(false); setCurrentPage('home'); }} variant="ghost" size="sm">
              <Icon name="LogOut" size={20} />
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8 animate-fade-in">
        <h1 className="text-4xl font-bold text-white mb-8">Личный кабинет</h1>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-purple-950/50 to-slate-950/50 border-purple-500/20 backdrop-blur-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <Icon name="Users" className="text-purple-400" size={32} />
              <Badge className="bg-green-500/20 text-green-400 border-green-500/30">+12%</Badge>
            </div>
            <p className="text-gray-400 text-sm">Активных сессий</p>
            <p className="text-3xl font-bold text-white mt-2">28</p>
          </Card>

          <Card className="bg-gradient-to-br from-pink-950/50 to-slate-950/50 border-pink-500/20 backdrop-blur-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <Icon name="Activity" className="text-pink-400" size={32} />
              <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">Live</Badge>
            </div>
            <p className="text-gray-400 text-sm">API запросов</p>
            <p className="text-3xl font-bold text-white mt-2">3,247</p>
          </Card>

          <Card className="bg-gradient-to-br from-blue-950/50 to-slate-950/50 border-blue-500/20 backdrop-blur-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <Icon name="Shield" className="text-blue-400" size={32} />
              <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">Secure</Badge>
            </div>
            <p className="text-gray-400 text-sm">2FA статус</p>
            <p className="text-3xl font-bold text-white mt-2">Активен</p>
          </Card>

          <Card className="bg-gradient-to-br from-green-950/50 to-slate-950/50 border-green-500/20 backdrop-blur-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <Icon name="TrendingUp" className="text-green-400" size={32} />
              <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30">+45%</Badge>
            </div>
            <p className="text-gray-400 text-sm">Использовано</p>
            <p className="text-3xl font-bold text-white mt-2">7.2 GB</p>
          </Card>
        </div>

        <Card className="bg-slate-950/50 border-purple-500/20 backdrop-blur-sm p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Icon name="History" size={24} />
            Последняя активность
          </h2>
          <div className="space-y-4">
            {[
              { action: 'Вход в систему', time: '2 минуты назад', ip: '192.168.1.1', icon: 'LogIn', color: 'text-green-400' },
              { action: 'API запрос выполнен', time: '15 минут назад', ip: 'API v2', icon: 'Zap', color: 'text-blue-400' },
              { action: 'Изменение пароля', time: '2 часа назад', ip: '192.168.1.1', icon: 'Key', color: 'text-purple-400' },
              { action: '2FA подтверждение', time: '5 часов назад', ip: 'Mobile App', icon: 'ShieldCheck', color: 'text-pink-400' },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-slate-900/30 rounded-lg border border-white/5 hover:bg-slate-900/50 transition-colors">
                <div className="flex items-center gap-4">
                  <Icon name={item.icon as any} className={item.color} size={24} />
                  <div>
                    <p className="text-white font-medium">{item.action}</p>
                    <p className="text-gray-400 text-sm">{item.ip}</p>
                  </div>
                </div>
                <span className="text-gray-400 text-sm">{item.time}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="bg-slate-950/50 border-purple-500/20 backdrop-blur-sm p-6">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Icon name="BarChart3" size={24} />
            Использование ресурсов
          </h2>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-300">API запросы</span>
                <span className="text-purple-400 font-bold">3,247 / 10,000</span>
              </div>
              <Progress value={32} className="h-3" />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-300">Хранилище</span>
                <span className="text-pink-400 font-bold">7.2 GB / 20 GB</span>
              </div>
              <Progress value={36} className="h-3" />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-300">Пропускная способность</span>
                <span className="text-blue-400 font-bold">124 GB / 500 GB</span>
              </div>
              <Progress value={25} className="h-3" />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );

  const renderAdmin = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      <header className="border-b border-white/10 backdrop-blur-sm bg-black/20 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Icon name="Radar" className="text-white" size={24} />
            </div>
            <span className="text-xl font-bold text-white">SITE RADAR</span>
            <Badge className="bg-red-500/20 text-red-300 border-red-500/30">Admin</Badge>
          </div>
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarFallback className="bg-gradient-to-br from-red-600 to-orange-600">AD</AvatarFallback>
            </Avatar>
            <Button onClick={() => { setIsAdmin(false); setIsLoggedIn(false); setCurrentPage('home'); }} variant="ghost" size="sm">
              <Icon name="LogOut" size={20} />
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8 animate-fade-in">
        <h1 className="text-4xl font-bold text-white mb-8">Административная панель</h1>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-purple-950/50 to-slate-950/50 border-purple-500/20 backdrop-blur-sm p-6">
            <Icon name="Users" className="text-purple-400 mb-3" size={32} />
            <p className="text-gray-400 text-sm">Всего пользователей</p>
            <p className="text-3xl font-bold text-white mt-2">{stats.totalUsers}</p>
          </Card>

          <Card className="bg-gradient-to-br from-pink-950/50 to-slate-950/50 border-pink-500/20 backdrop-blur-sm p-6">
            <Icon name="CreditCard" className="text-pink-400 mb-3" size={32} />
            <p className="text-gray-400 text-sm">Активных подписок</p>
            <p className="text-3xl font-bold text-white mt-2">{stats.activeSubscriptions}</p>
          </Card>

          <Card className="bg-gradient-to-br from-blue-950/50 to-slate-950/50 border-blue-500/20 backdrop-blur-sm p-6">
            <Icon name="DollarSign" className="text-blue-400 mb-3" size={32} />
            <p className="text-gray-400 text-sm">Доход (мес)</p>
            <p className="text-3xl font-bold text-white mt-2">{stats.revenue.toLocaleString()} ₽</p>
          </Card>

          <Card className="bg-gradient-to-br from-green-950/50 to-slate-950/50 border-green-500/20 backdrop-blur-sm p-6">
            <Icon name="TrendingUp" className="text-green-400 mb-3" size={32} />
            <p className="text-gray-400 text-sm">Рост</p>
            <p className="text-3xl font-bold text-white mt-2">+{stats.growth}%</p>
          </Card>
        </div>

        <Card className="bg-slate-950/50 border-purple-500/20 backdrop-blur-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Icon name="UserCog" size={24} />
              Управление пользователями
            </h2>
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              <Icon name="UserPlus" className="mr-2" size={20} />
              Добавить пользователя
            </Button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-4 text-gray-400 font-medium">Пользователь</th>
                  <th className="text-left py-4 px-4 text-gray-400 font-medium">Email</th>
                  <th className="text-left py-4 px-4 text-gray-400 font-medium">План</th>
                  <th className="text-left py-4 px-4 text-gray-400 font-medium">Статус</th>
                  <th className="text-left py-4 px-4 text-gray-400 font-medium">Сессии</th>
                  <th className="text-right py-4 px-4 text-gray-400 font-medium">Действия</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="border-b border-white/5 hover:bg-slate-900/30 transition-colors">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarFallback className="bg-gradient-to-br from-purple-600 to-pink-600">
                            {user.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-white font-medium">{user.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-gray-300">{user.email}</td>
                    <td className="py-4 px-4">
                      <Badge className={
                        user.plan === 'Enterprise' ? 'bg-orange-500/20 text-orange-400 border-orange-500/30' :
                        user.plan === 'Pro' ? 'bg-purple-500/20 text-purple-400 border-purple-500/30' :
                        'bg-gray-500/20 text-gray-400 border-gray-500/30'
                      }>
                        {user.plan}
                      </Badge>
                    </td>
                    <td className="py-4 px-4">
                      <Badge className={
                        user.status === 'active' 
                          ? 'bg-green-500/20 text-green-400 border-green-500/30' 
                          : 'bg-red-500/20 text-red-400 border-red-500/30'
                      }>
                        {user.status === 'active' ? 'Активен' : 'Неактивен'}
                      </Badge>
                    </td>
                    <td className="py-4 px-4 text-gray-300">{user.sessions}</td>
                    <td className="py-4 px-4">
                      <div className="flex items-center justify-end gap-2">
                        <Button size="sm" variant="ghost" className="hover:bg-purple-500/10">
                          <Icon name="Edit" size={16} />
                        </Button>
                        <Button size="sm" variant="ghost" className="hover:bg-red-500/10 text-red-400">
                          <Icon name="Trash2" size={16} />
                        </Button>
                        <Button size="sm" variant="ghost" className="hover:bg-blue-500/10">
                          <Icon name="MoreVertical" size={16} />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );

  return (
    <>
      {currentPage === 'home' && renderHome()}
      {currentPage === 'login' && renderLogin()}
      {currentPage === 'dashboard' && renderDashboard()}
      {currentPage === 'admin' && renderAdmin()}
    </>
  );
}
