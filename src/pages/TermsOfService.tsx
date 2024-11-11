import React from 'react';
import { PolicyLayout } from '../components/PolicyLayout';

export function TermsOfService() {
  const sections = [
    { id: 'acceptance', title: 'Terms Acceptance' },
    { id: 'eligibility', title: 'Eligibility' },
    { id: 'user-accounts', title: 'User Accounts' },
    { id: 'service-rules', title: 'Service Rules' },
    { id: 'intellectual-property', title: 'Intellectual Property' },
    { id: 'termination', title: 'Account Termination' },
    { id: 'disclaimers', title: 'Disclaimers' },
  ];

  return (
    <PolicyLayout 
      title="Terms of Service" 
      lastUpdated="March 10, 2024"
      sections={sections}
    >
      <section id="acceptance">
        <h2>Terms Acceptance</h2>
        <p>By accessing or using GameBro's services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.</p>
      </section>

      <section id="eligibility">
        <h2>Eligibility</h2>
        <p>You must be at least 18 years old to use GameBro services. By using our service, you represent and warrant that you have the right, authority, and capacity to enter into these Terms and to abide by all of the terms and conditions set forth herein.</p>
      </section>

      {/* Continue with more sections... */}
    </PolicyLayout>
  );
}