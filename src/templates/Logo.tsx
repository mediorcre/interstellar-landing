type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`inline-flex items-center text-gray-900 ${fontStyle}`}>
      <img
        style={{ height: '30px' }}
        className="mr-4"
        src="/assets/images/InterstellarLogoImage.png"
        alt="Interstellar Logo Image"
      />
      <img
        style={{ height: '30px' }}
        src="/assets/images/InterstellarLogoText.png"
        alt="Interstellar Logo Text"
      />
    </span>
  );
};

export { Logo };
