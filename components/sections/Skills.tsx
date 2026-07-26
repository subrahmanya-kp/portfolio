'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ServerIcon,
  CogIcon,
  CloudIcon,
  CommandLineIcon,
  ShieldCheckIcon,
  ArrowPathIcon,
  CircleStackIcon,
  DocumentTextIcon,
  CodeBracketIcon,
  WrenchScrewdriverIcon,
  ChevronDownIcon,
  ChevronUpIcon
} from '@heroicons/react/24/outline';

const Skills = () => {
  const [showAllSkills, setShowAllSkills] = useState(false);
  const [showCertifications, setShowCertifications] = useState(false);
  
  const skillCategories = [
    {
      name: 'Languages & Frameworks',
      skills: ['Python', 'C', 'C++', 'SQL', 'Django', 'Django Allauth', 'FastAPI', 'REST API'],
      icon: <CodeBracketIcon className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
    },
    {
      name: 'AI / LLM',
      skills: ['Model Context Protocol (MCP)', 'LLM Agent Orchestration'],
      icon: <DocumentTextIcon className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
    },
    {
      name: 'Databases & Storage',
      skills: ['PostgreSQL', 'Supabase', 'MySQL', 'Redis'],
      icon: <CircleStackIcon className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
    },
    {
      name: 'Cloud & Infrastructure',
      skills: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Helm', 'Nginx', 'Keycloak', 'Ansible'],
      icon: <CloudIcon className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
    },
    {
      name: 'Observability & Testing',
      skills: ['Datadog', 'Grafana', 'Locust', 'Distributed Tracing'],
      icon: <ShieldCheckIcon className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
    },
    {
      name: 'CI/CD & DevOps',
      skills: ['Jenkins', 'Git', 'SonarQube', 'Snyk', 'OWASP Dependency Check', 'JIRA', 'Teleport'],
      icon: <ArrowPathIcon className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
    },
    {
      name: 'Container & Orchestration',
      skills: ['Docker', 'Kubernetes', 'Helm', 'Docker Compose'],
      icon: <ServerIcon className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
    },
    {
      name: 'Tools',
      skills: ['Postman', 'JIRA', 'Teleport', 'SonarQube', 'Snyk'],
      icon: <WrenchScrewdriverIcon className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="max-w-2xl mx-auto mt-6 text-xl text-gray-600 dark:text-gray-400">
            Comprehensive expertise in modern DevOps tools, cloud platforms, and infrastructure technologies
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center">Currently Building With</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
              Model Context Protocol (MCP)
            </span>
            <span className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium">
              LLM Agent Orchestration
            </span>
            <span className="px-4 py-2 bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 rounded-full text-sm font-medium">
              FastAPI
            </span>
            <span className="px-4 py-2 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 rounded-full text-sm font-medium">
              Supabase
            </span>
            <span className="px-4 py-2 bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 rounded-full text-sm font-medium">
              Distributed Tracing
            </span>
            <span className="px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full text-sm font-medium">
              Locust (Load Testing)
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(showAllSkills ? skillCategories : skillCategories.slice(0, 6)).map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 + 0.3 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 break-words">{category.name}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {skillCategories.length > 6 && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAllSkills(!showAllSkills)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              {showAllSkills ? (
                <>
                  Show Less
                  <ChevronUpIcon className="w-5 h-5" />
                </>
              ) : (
                <>
                  Show More Skills
                  <ChevronDownIcon className="w-5 h-5" />
                </>
              )}
            </button>
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Certifications & Achievements</h3>
            <button
              onClick={() => setShowCertifications(!showCertifications)}
              className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              {showCertifications ? (
                <ChevronUpIcon className="w-6 h-6" />
              ) : (
                <ChevronDownIcon className="w-6 h-6" />
              )}
            </button>
          </div>
          
          {showCertifications && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
              <CloudIcon className="w-10 h-10 text-blue-600 dark:text-blue-400 mr-4 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">AWS Certified Cloud Practitioner</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Amazon Web Services · Issued Dec 2023 · Expires Dec 2026</p>
              </div>
            </div>
            <div className="flex items-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
              <DocumentTextIcon className="w-10 h-10 text-blue-600 dark:text-blue-400 mr-4 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Model Context Protocol</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Anthropic · Issued Mar 2026</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Key Strengths</h4>
            <div className="flex flex-wrap gap-3 justify-center">
              <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                Infrastructure Automation
              </span>
              <span className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
                Cloud Architecture
              </span>
              <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
                CI/CD Pipeline Design
              </span>
              <span className="px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full text-sm font-medium">
                System Reliability
              </span>
              <span className="px-4 py-2 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-full text-sm font-medium">
                Security Best Practices
              </span>
            </div>
          </div>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;