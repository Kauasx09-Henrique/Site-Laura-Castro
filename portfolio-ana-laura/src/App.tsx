import React, { useState } from 'react';
import { Landing } from './Landing';
import { FotografaApp } from './pages/Fotografa-pages/FotografaApp';
import { VideomakerApp } from './pages/Videomaker-pages/VideomakeApp';

export const App = () => {
  const [role, setRole] = useState<'video' | 'foto' | null>(null);

  if (!role) {
    return <Landing onSelectRole={setRole} />;
  }

  return role === 'foto' ? <FotografaApp /> : <VideomakerApp />;
};