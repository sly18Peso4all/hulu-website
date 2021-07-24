const HeaderItem = ({ Icon, title }) => {
  return (
    <div className="flex  flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-white">
      <Icon className="h-6 m-1 group-hover:animate-bounce" />
      <p className="opacity-0 tracking-widest group-hover:opacity-100">
        {title}
      </p>
    </div>
  );
};

export default HeaderItem;
