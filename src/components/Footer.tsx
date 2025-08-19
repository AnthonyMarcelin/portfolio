const Footer = () => {
  return (
    <footer className="flex w-full items-center justify-center py-8">
      <p className="text-sm text-gray-400">
        @ {new Date().getFullYear()} Anthony Marcelin. Tous droits réservés.
      </p>
    </footer>
  );
};

export default Footer;
