# Subrahmanya K P — Resume Data (Master Source of Truth)
_Last updated: reflects all finalized content as of latest conversation_

## Contact Info
- Name: Subrahmanya K P
- Email: [PENDING]
- Phone: [PENDING]
- Location: Bengaluru, Karnataka, India
- LinkedIn: https://www.linkedin.com/in/subrahmanya-kp/
- GitHub: https://github.com/subrahmanya-kp
- LeetCode: https://leetcode.com/u/subrahmanya_kp/
- Personal site: https://whoissubbu.vercel.app/

## Target Role
Software Engineer — dev-focused (API design, system design, backend implementation)

## Summary (current draft — used in both resumes)
Backend Software Engineer with 5 years of experience spanning SRE and SDE roles, specializing in API design, system architecture, and PostgreSQL-backed multi-tenant platforms. Proven track record designing and shipping production systems end-to-end — from authentication and payment infrastructure to AI agent orchestration. Currently building LLM agent tooling (Model Context Protocol) and backend systems for a healthcare platform handling 100K+ daily transactions.

## Skills (grouped)
- **Languages:** Python, C, C++, SQL
- **Frameworks:** Django, Django Allauth, FastAPI
- **AI / LLM:** Model Context Protocol (MCP), LLM Agent Orchestration
- **Databases:** PostgreSQL, Supabase
- **Cloud & Infra:** AWS, Azure, Docker, Kubernetes, Helm, Nginx, Keycloak, Ansible
- **Observability & Testing:** Datadog, Grafana, Locust (load testing), Distributed Tracing
- **Tools:** Git, SonarQube, Snyk, OWASP Dependency Check, Postman, JIRA, Teleport

### Market keyword check (done — real data, 74 live Bengaluru SDE/Backend postings)
High-frequency skills confirmed relevant and already covered: CI/CD (45%), Kubernetes (43%), AWS (39%), Microservices (38%), Docker (35%), Distributed Systems (35%), System Design (16%), Kafka (19%), PostgreSQL (19%), Django (15%), FastAPI (11%), LLM/Agentic (11%).
Deliberately NOT added: Java (41% — high frequency but no real experience, would backfire in interview), GraphQL, Golang (low relevance to actual background).

## Certifications (on resume)
- AWS Certified Cloud Practitioner (issued Dec 2023, expires Dec 2026)
- Model Context Protocol — Anthropic (issued Mar 2026)

## Education
- B.E., Computer Science — Dr. Ambedkar Institute of Technology, 2017–2021

---

## EXPERIENCE — FINALIZED CONTENT

### Software Development Engineer, Qure.ai — Aug 2025 to Present (7 bullets)
- Designed and implemented REST APIs and core system architecture for a multi-tenant healthcare platform, choosing PostgreSQL as primary datastore and owning schema/migration strategy
- Implemented SAML/OIDC-based SSO using Django Allauth, including zero-downtime migration of existing accounts via email-based matching
- Built secure REST APIs for qTrack with API-key authentication and custom rate-limiting middleware, supporting 100K+ daily transactions in production
- Designed and built LLM agents and tools using Model Context Protocol for an AI orchestration microservice, enabling care coordinators to create patient tasks, reminders, and tags via natural-language prompts
- Work within a monorepo microservices architecture, building and maintaining core services (EMR, orchestrator) — load-tested one such microservice using Locust to validate performance under production-like traffic before deployment
- Implemented distributed tracing and monitoring (Datadog, Grafana) across services to track error rates, latency, and system health in production
- Continued applying CI/CD practices (Jenkins-based pipelines) established during prior SRE experience to current deployment workflows

### Site Reliability Engineer, Qure.ai — Oct 2024 to Aug 2025 (5 bullets)
- Deployed qXR (AI radiology product) across analog systems, AWS Cloud, and on-premise infrastructure — including on-site installation and troubleshooting at client deployments in India, Vietnam, and Uganda — while ensuring regulatory compliance in Vietnam and Dubai, and integrating with hospital PACS systems via DICOM protocol to automate image retrieval and submission
- Built qInventory, an internal inventory tracking application, using Django, PostgreSQL, and Docker — with Keycloak for authentication and Nginx as a reverse proxy for inter-service routing
- Built qStat, an internal analytics portal embedding Power BI and Metabase (OSS) dashboards with role-based access control, and migrated users from a legacy Metabase-based portal to the new platform using Django and Supabase — with zero data loss
- Built a proof-of-concept real-time data pipeline using Kafka and Debezium for change data capture (CDC), streaming database changes into a data warehouse
- Automated configuration management for on-premise deployed systems (Raspberry Pi, laptops) using Ansible, with Teleport as a secure gateway for remote access

### Information Technology Officer, Rashtriya Chemicals & Fertilizers Limited — Jun 2024 to Oct 2024 (2 bullets)
- Built a full-stack Receipt Management System integrating the CCAvenue payment gateway with SAP FI, automating end-to-end billing (entry creation, cancellation, reconciliation) and eliminating manual payment processing across 2-3 internal services
- Managed RCF's on-premise infrastructure, including physical data center servers, and deployed the RMS application on this infrastructure

### Site Reliability Engineer, Tata Consultancy Services (Client: Intel) — Aug 2021 to Jun 2024 (3 bullets)
- Implemented and maintained a Kubernetes cluster of 8 microservices across two projects (Digital Twin, Smart City), building Helm charts and deployment configs to standardize releases and ensure high availability
- Identified and resolved a Log4j vulnerability across 10 Docker images using Snyk, and applied Kubernetes security best practices — parameterized configs and Base64-encoded secrets — to harden production deployments
- Built a Grafana dashboard visualizing real-time inferences from a Flask server in Kubernetes, and used Python (OpenCV, Open3D, NumPy, Point Cloud Library) to process LiDAR data and train basic ML models

---

## PROJECTS (new section — to be added)

### Market Notifier (personal project, self-hosted)
- Built and self-hosted Market Notifier, a Python/FastAPI application aggregating real-time market data (equities, IPOs, bonds, precious metals, global sentiment indices) from 7+ sources, delivering automated daily reports via Telegram and Email
- Exposed a Model Context Protocol (MCP) server alongside the REST API, enabling AI assistants to query live market data — mood index, investable bonds — directly through MCP tools
- Deployed on a self-managed Raspberry Pi with Nginx as a reverse proxy and ngrok tunnel for external access, using APScheduler for cron-based scheduling and a custom health-check/heartbeat system for uptime monitoring

**Placement decision pending:** add to two-pager only, or both? (one-pager is space-constrained)

---

## OUTPUT FORMATS
- [x] One-pager resume (.docx, ATS-friendly) — built, delivered
- [x] Two-pager resume (.docx, ATS-friendly) — built, delivered
- [ ] Both need regeneration with: updated SDE/SRE bullets (Kafka, CI/CD, microservices, Ansible additions), Projects section, updated links (LinkedIn, GitHub, LeetCode, new personal site URL), and final contact info once provided

## STILL PENDING FROM USER
- Email, phone number
- Confirm: Projects section on one-pager too, or two-pager only?
- Confirm final go-ahead to regenerate both docx files with all updates above
