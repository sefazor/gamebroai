import React from 'react';
import { Hero } from '../components/Hero';
import { Discover } from '../components/Discover';
import { ChallengeSection } from '../components/ChallengeSection';
import { NoExtraApp } from '../components/NoExtraApp';
import { FAQ } from '../components/FAQ';

export function Home() {
  return (
    <main>
      <Hero />
      <Discover />
      <ChallengeSection />
      <NoExtraApp />
      <FAQ />
    </main>
  );
}