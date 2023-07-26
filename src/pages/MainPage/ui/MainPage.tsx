import { BugButton } from 'app/providers/ErrorBoundary/ui/BugButton';
import { Counter } from 'entities/Counter';
import { useTranslation } from 'react-i18next';

function MainPage () {
  const { t } = useTranslation('main');

  return (
    <div>
      <BugButton />
      {t('main')}
    </div>
  );
}

export default MainPage;
