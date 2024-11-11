import React from 'react';
import { PolicyLayout } from '../components/PolicyLayout';

export function CookiePolicy() {
  const sections = [
    { id: 'what-are-cookies', title: 'What Are Cookies' },
    { id: 'types-of-cookies', title: 'Types of Cookies' },
    { id: 'cookie-usage', title: 'How We Use Cookies' },
    { id: 'managing-cookies', title: 'Managing Cookies' },
    { id: 'third-party', title: 'Third-Party Cookies' },
    { id: 'updates', title: 'Policy Updates' },
  ];

  return (
    <PolicyLayout 
      title="Cookie Policy" 
      lastUpdated="March 10, 2024"
      sections={sections}
    >
      <section id="what-are-cookies">
        <h2>What Are Cookies</h2>
        <p>Cookies are small text files that are placed on your device when you use our service. They help us provide you with a better experience by remembering your preferences and gameplay data.</p>
      </section>

      <section id="types-of-cookies">
        <h2>Types of Cookies</h2>
        <p>We use different types of cookies for various purposes:</p>
        <ul>
          <li>Essential cookies: Required for the service to function properly</li>
          <li>Functional cookies: Remember your preferences and settings</li>
          <li>Analytics cookies: Help us understand how you use our service</li>
          <li>Performance cookies: Improve the speed and performance of the service</li>
        </ul>
      </section>

      {/* Continue with more sections... */}
    </PolicyLayout>
  );
}