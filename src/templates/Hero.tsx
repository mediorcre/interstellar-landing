import Link from 'next/link';
import { useState } from 'react';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';
import { WaitlistModal } from './WaitlistModal';

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Background color="bg-hero-bg h-screen">
      <Section yPadding="py-6">
        <NavbarTwoColumns logo={<Logo xl />}>
          <li>
            <Link href="https://github.com/mediorcre/interstellar-zkevm">
              GitHub
            </Link>
          </li>
        </NavbarTwoColumns>
      </Section>

      <div className="flex h-full flex-col items-center justify-center">
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
              <Button xl onClick={() => setShowModal(true)}>
                Join the waitlist
              </Button>
            }
          />
        </Section>
      </div>

      {showModal && <WaitlistModal onClose={() => setShowModal(false)} />}
    </Background>
  );
};

export { Hero };
