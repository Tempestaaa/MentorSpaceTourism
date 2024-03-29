type Props = {
  id: string;
  text: string;
};

const Header = ({ id, text }: Props) => {
  return (
    <section className="flex justify-center lg:justify-start lg:px-20">
      <h4 className="uppercase text-xl md:text-3xl font-barlow">
        <span className="font-bold text-white/20 mr-2">{id}</span>
        {text}
      </h4>
    </section>
  );
};

export default Header;
