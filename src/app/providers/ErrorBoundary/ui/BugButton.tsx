import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { useEffect, useState } from 'react';

interface BugButtonProps {
  className?: string;
}

export const BugButton = ({ className = '' }: BugButtonProps) => {
    const [error, setError] = useState(false);
    const { t } = useTranslation();

    const onThrow = () => {
        setError(true);
    };

    useEffect(() => {
        if (error) {
            throw Error();
        }
    }, [error]);

    return (
        <Button className={className} onClick={onThrow}>{t('throwError')}</Button>
    );
};
