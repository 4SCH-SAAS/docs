import React from 'react';
import styles from './ComplianceBadges.module.css';

interface Badge {
  name: string;
  icon: string;
  description: string;
  color: string;
}

const badges: Badge[] = [
  {
    name: 'GDPR Compliant',
    icon: '🔒',
    description: 'General Data Protection Regulation compliant',
    color: '#4285f4'
  },
  {
    name: 'ISO 27001',
    icon: '🛡️',
    description: 'Information Security Management',
    color: '#34a853'
  },
  {
    name: 'NDPR',
    icon: '🇳🇬',
    description: 'Nigeria Data Protection Regulation',
    color: '#008751'
  },
  {
    name: 'SSL Secured',
    icon: '🔐',
    description: '256-bit SSL encryption',
    color: '#fbbc05'
  },
  {
    name: 'SOC 2',
    icon: '✓',
    description: 'Service Organization Control',
    color: '#ea4335'
  },
  {
    name: 'FERPA',
    icon: '📚',
    description: 'Family Educational Rights and Privacy Act',
    color: '#9334e6'
  }
];

export default function ComplianceBadges(): JSX.Element {
  return (
    <div className={styles.complianceSection}>
      <h3 className={styles.title}>🏆 Industry Certifications & Compliance</h3>
      <p className={styles.subtitle}>
        Your data security and privacy are our top priorities. 4SCH meets international standards for data protection and security.
      </p>
      <div className={styles.badgesContainer}>
        {badges.map((badge, index) => (
          <div 
            key={index} 
            className={styles.badge}
            style={{ borderTopColor: badge.color }}
          >
            <div className={styles.badgeIcon}>{badge.icon}</div>
            <div className={styles.badgeContent}>
              <h4 className={styles.badgeName}>{badge.name}</h4>
              <p className={styles.badgeDescription}>{badge.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.securityNote}>
        <p>
          <strong>🔐 Enterprise-Grade Security:</strong> All data is encrypted in transit and at rest. 
          Regular security audits and penetration testing ensure your school's information remains protected.
        </p>
        <p>
          <strong>🌍 Global Standards, Local Context:</strong> While meeting international compliance standards, 
          we're designed specifically for Nigerian schools with local data residency options.
        </p>
      </div>
    </div>
  );
}
