import { useState } from 'react';
import { Landing } from './Landing';
import { FotografaApp } from './pages/Fotografa-pages/FotografaApp';
import { VideomakerApp } from './pages/Videomaker-pages/VideomakeApp';

export const App = () => {
  const [role, setRole] = useState<'landing' | 'video' | 'foto'>('landing');

  const handleSwitchMode = () => {
    setRole('landing');
  };

  return (
    <>
      {role === 'landing' && <Landing onSelectRole={setRole} />}
      {role === 'foto' && <FotografaApp onSwitchMode={handleSwitchMode} />}
      {role === 'video' && <VideomakerApp onSwitchMode={handleSwitchMode} />}
    </>
  );
};