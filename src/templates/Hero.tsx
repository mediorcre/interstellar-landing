import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-hero-bg">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://github.com/mediorcre">GitHub</Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            <span className="text-white">Unleash the power of the</span>
            <br />
            <span className="text-white">EVM on Stellar</span>
          </>
        }
        description="The easiest way to port your ethereum DApp to Stellar"
        button={
          <Link href="https://creativedesignsguru.com/category/nextjs/">
            <Button xl>Join the waitlist</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
