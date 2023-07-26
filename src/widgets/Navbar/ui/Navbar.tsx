import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import Modal from 'shared/ui/Modal/Modal';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className = '' }: NavbarProps) => {
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prevState) => !prevState);
  }, []);

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <AppLink theme={AppLinkTheme.SECONDARY} to="/">
        Main
      </AppLink>
      <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
        About
      </AppLink>

      <Button theme={ThemeButton.OUTLINE} onClick={onToggleModal}>
        Login
      </Button>

      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        snakcjsbndkjfaslbnkjdfbvalskjdfbvadsklfjabs dkljb askjdbn cvajk.sd
        vasdfjokv
      </Modal>
    </div>
  );
};
