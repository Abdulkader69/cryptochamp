'use client';
import Image from 'next/image';
import crypto_link from '../../public/images/Links.png';
import crypto_rectangle from '../../public/images/Rectangle 18.png';
import crypto_wallet_ballance from '../../public/images/wallet + balance.png';
import crypto_energy from '../../public/images/Energy.png';
import minus from '../../../public/images/minus.png';
import plus from '../../../public/images/plus.png';
import Header from '../components/Header';
import { useState } from 'react';
import MyPopup from '../components/popup';

export default function Stake() {
  const [isOpen, setIsOpen] = useState(false);

  function openPopup() {
    setIsOpen(true);
  }

  function closePopup() {
    setIsOpen(false);
  }
  return (
    <>
      <main></main>
    </>
  );
}
