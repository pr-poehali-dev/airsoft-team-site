
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-accent py-6 mt-auto">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold text-primary">АирСтрайк</h3>
            <p className="text-sm text-muted-foreground">
              Страйкбольная команда с 2023 года
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              © {currentYear} АирСтрайк. Все права защищены.
            </p>
            <div className="flex gap-4 mt-2 justify-center md:justify-end">
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                VK
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                Telegram
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
