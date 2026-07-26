'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BriefcaseIcon, 
  AcademicCapIcon, 
  BuildingOfficeIcon,
  ServerIcon,
  ArrowDownTrayIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

const Resume = () => {
  const [showAllExperience, setShowAllExperience] = useState(false);
  const experiences = [
    {
      title: 'Software Development Engineer',
      company: 'Qure.ai',
      duration: 'Aug 2025 - Present',
      role: 'Backend SDE',
      description: 'Designing and building backend systems for a multi-tenant healthcare platform handling 100K+ daily transactions. Leading API architecture, SSO integration, LLM agent tooling, and production observability.',
      highlights: [
        'Designed REST APIs and core architecture for a multi-tenant healthcare platform with PostgreSQL as primary datastore',
        'Implemented SAML/OIDC-based SSO using Django Allauth with zero-downtime migration via email-based account matching',
        'Built secure REST APIs with API-key auth and custom rate-limiting middleware supporting 100K+ daily transactions',
        'Designed and built LLM agents using Model Context Protocol for an AI orchestration microservice',
        'Load-tested microservices using Locust to validate performance under production-like traffic',
        'Implemented distributed tracing and monitoring with Datadog and Grafana across production services',
        'Applied CI/CD practices via Jenkins-based pipelines across deployment workflows'
      ]
    },
    {
      title: 'Site Reliability Engineer',
      company: 'Qure.ai',
      duration: 'Oct 2024 - Aug 2025',
      role: 'SRE & Backend Developer',
      description: 'Deployed and operated AI radiology products across cloud and on-premise environments. Built internal tooling and data pipelines while ensuring reliability and compliance across international client deployments.',
      highlights: [
        'Deployed qXR across analog systems, AWS Cloud, and on-premise infrastructure — including on-site in India, Vietnam, and Uganda',
        'Built qInventory, an internal inventory tracking app, using Django, PostgreSQL, Docker, Keycloak, and Nginx',
        'Built qStat analytics portal with Power BI and Metabase dashboards, migrated users from legacy platform with zero data loss',
        'Built a PoC real-time data pipeline using Kafka and Debezium for change data capture (CDC)',
        'Automated configuration management for on-premise systems using Ansible with Teleport for secure remote access'
      ]
    },
    {
      title: 'Information Technology Officer',
      company: 'Rashtriya Chemicals & Fertilizers Limited',
      duration: 'Jun 2024 - Oct 2024',
      role: 'Full-Stack Developer',
      description: 'Built a Receipt Management System integrating payment gateway with SAP FI, automating end-to-end billing workflows across internal services.',
      highlights: [
        'Built full-stack RMS integrating CCAvenue payment gateway with SAP FI, automating billing entry, cancellation, and reconciliation',
        'Managed RCF on-premise infrastructure and deployed the RMS application on physical data center servers'
      ]
    },
    {
      title: 'Site Reliability Engineer',
      company: 'Tata Consultancy Services (Client: Intel)',
      duration: 'Aug 2021 - Jun 2024',
      role: 'SRE & Developer',
      description: 'Maintained Kubernetes infrastructure for Intel Digital Twin and Smart City projects. Addressed security vulnerabilities and built observability tooling.',
      highlights: [
        'Maintained a Kubernetes cluster of 8 microservices across two projects, building Helm charts to standardize releases',
        'Identified and resolved Log4j vulnerability across 10 Docker images using Snyk; applied Kubernetes security best practices',
        'Built a Grafana dashboard visualizing real-time inferences from a Flask server in Kubernetes',
        'Processed LiDAR data using Python (OpenCV, Open3D, NumPy, Point Cloud Library) and trained basic ML models'
      ]
    }
  ];


  const education = [
    {
      degree: 'B.E',
      institution: 'Dr. Ambedkar Institute of Technology, Bengaluru',
      duration: 'Aug 2017 – June 2021'
    },
    {
      degree: '12th (CBSE Board)',
      institution: 'Jawahar Navodaya Vidyalaya',
      duration: '2016'
    },
    {
      degree: '10th (CBSE Board)',
      institution: 'Jawahar Navodaya Vidyalaya',
      duration: '2014'
    }
  ];

  const awards = [
    {
      title: 'Customer Delight',
      description: 'Received for doing multiple POCs and getting good feedback, appreciation from engagements'
    },
    {
      title: 'Star Team Award',
      description: 'Received for good work performance in the project'
    }
  ];

  return (
    <section id="resume" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <div className="flex justify-center mt-6">
            <Link 
              href="/Subrahmanya_K_P.pdf" 
              target="_blank"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              <ArrowDownTrayIcon className="w-5 h-5" />
              Download Resume
            </Link>
          </div>
        </div>

        {/* Work Experience Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8 flex items-center">
            <BriefcaseIcon className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
            Work Experience
          </h3>
          
          <div className="space-y-8">
            {(showAllExperience ? experiences : experiences.slice(0, 1)).map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-8 pb-8 border-l-2 border-blue-600 dark:border-blue-500"
              >
                <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-500"></div>
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 sm:mb-0">{exp.title}</h4>
                    <span className="text-sm px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full mt-1 sm:mt-0">
                      {exp.duration}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center mb-4 text-gray-600 dark:text-gray-400">
                    <BuildingOfficeIcon className="w-4 h-4 mr-2" />
                    <span>{exp.company}</span>
                    <span className="mx-2">•</span>
                    <span className="font-medium text-blue-600 dark:text-blue-400">{exp.role}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.description}</p>
                  {exp.highlights && (
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400 text-sm">
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx}>{highlight}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          
          {experiences.length > 1 && (
            <div className="mt-6 text-center">
              <button
                onClick={() => setShowAllExperience(!showAllExperience)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                {showAllExperience ? (
                  <>
                    Show Less
                    <ChevronUpIcon className="w-5 h-5" />
                  </>
                ) : (
                  <>
                    Show More Experience
                    <ChevronDownIcon className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>
          )}
        </div>


        {/* Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8 flex items-center">
            <AcademicCapIcon className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
            Education
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md"
              >
                <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">{edu.degree}</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-1">{edu.institution}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{edu.duration}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Awards */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8 flex items-center">
            <ServerIcon className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
            Awards & Recognition
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md"
              >
                <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">{award.title}</h4>
                <p className="text-gray-600 dark:text-gray-300">{award.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume; 