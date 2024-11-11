import React from 'react';
import { PolicyLayout } from '../components/PolicyLayout';

export function PrivacyPolicy() {
  const sections = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'information-collection', title: 'Information Collection' },
    { id: 'data-usage', title: 'Data Usage' },
    { id: 'data-sharing', title: 'Data Sharing' },
    { id: 'data-security', title: 'Data Security' },
    { id: 'user-rights', title: 'User Rights' },
    { id: 'updates', title: 'Policy Updates' },
  ];

  return (
    <PolicyLayout 
      title="Privacy Policy" 
      lastUpdated="March 10, 2024"
      sections={sections}
    >
      <section id="introduction">
        <h2>Introduction</h2>
        <p>At GameBro, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our WhatsApp-based football prediction service. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the service.</p>
      </section>

      <section id="information-collection">
        <h2>Information Collection</h2>
        <p>We collect information that you voluntarily provide to us when you use our service through WhatsApp. This includes:</p>
        <ul>
          <li>WhatsApp profile information (name, profile picture)</li>
          <li>Game predictions and interactions</li>
          <li>Communication preferences</li>
          <li>Performance statistics and gameplay data</li>
          <li>User feedback and support inquiries</li>
        </ul>
      </section>

      <section id="data-usage">
        <h2>Data Usage</h2>
        <p>We use the collected information for various purposes:</p>
        <ul>
          <li>To provide and maintain our service</li>
          <li>To notify you about changes to our service</li>
          <li>To allow you to participate in interactive features</li>
          <li>To provide customer support</li>
          <li>To gather analysis or valuable information to improve our service</li>
          <li>To monitor the usage of our service</li>
          <li>To detect, prevent and address technical issues</li>
        </ul>
      </section>

      {/* Continue with more sections... */}
    </PolicyLayout>
  );
}