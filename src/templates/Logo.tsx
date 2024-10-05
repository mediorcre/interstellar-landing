type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? '8' : '4';
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`inline-flex items-center text-gray-900 ${fontStyle}`}>
      <img
        className={`h-${size} mr-8`}
        src="/assets/images/InterstellarLogoImage.svg"
        alt="Interstellar"
      />
      <img
        className={`h-${size}`}
        src="/assets/images/InterstellarLogoText.svg"
        alt="Interstellar"
      />
    </span>
  );
};

export { Logo };
