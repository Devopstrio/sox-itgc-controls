<div align="center">

<img src="https://raw.githubusercontent.com/Devopstrio/.github/main/assets/Browser_logo.png" height="150" alt="Compliance Logo" />

<h1>SOX ITGC Controls Platform</h1>

<p><strong>The Strategic Governance & Protection Plane for Global IT General Controls and SOX Compliance.</strong></p>

[![Standard: SOX-ITGC](https://img.shields.io/badge/Standard-SOX--ITGC-blue.svg?style=for-the-badge&labelColor=000000)]()
[![Status: Production--Ready](https://img.shields.io/badge/Status-Production--Ready-emerald.svg?style=for-the-badge&labelColor=000000)]()
[![Focus: Audit--Readiness](https://img.shields.io/badge/Focus-Audit--Readiness-indigo.svg?style=for-the-badge&labelColor=000000)]()

<br/>

> **"Integrity is the foundation of financial trust."** 
> **SOX ITGC Controls (SOX-Ops)** is an institutional-grade platform designed to provide a secure, measurable, and highly automated foundation for global IT General Controls (ITGC) governance. It orchestrates the entire lifecycle—from control definition and automated effectiveness testing to segregation of duties (SoD) and evidence management.

</div>

---

## 🏛️ Executive Summary

Maintaining SOX compliance in a modern, rapid-release cloud environment is a significant challenge. Organizations often fail to pass audits not because of a lack of effort, but because of fragmented control ownership and manual evidence collection that cannot keep pace with ephemeral infrastructure.

This platform provides the **Compliance Governance Plane**. It implements a complete **Compliance Intelligence Framework**, enabling Finance and Internal Audit teams to manage ITGC as a first-class citizen. By automating the collection of signed evidence and the enforcement of SoD matrices, we ensure that the organizational systems are continuously governed, tested, and ready for institutional audits with strategic precision.

---

## 📐 Architecture Storytelling: Principal Reference Models

### 1. Principal Architecture: Global SOX ITGC Compliance & Governance Plane
This diagram illustrates the end-to-end flow from cross-domain control definition to automated evidence collection and immutable audit reporting.

```mermaid
graph LR
    %% Subgraph Definitions
    subgraph ControlDomain["ITGC Control Domains"]
        direction TB
        Access["Access Management (IAM/RBAC)"]
        Change["Change Management (DevOps/CI)"]
        Ops["Systems Operations (Backup/DR)"]
        Data["Data Integrity (Encryption/Audit)"]
    end

    subgraph Intelligence["Compliance Intelligence Engine"]
        direction TB
        API["FastAPI Compliance Gateway"]
        Matrix["Global Control Matrix"]
        SoD["Segregation of Duties Engine"]
        Tester["Automated Effectiveness Tester"]
    end

    subgraph EvidencePlane["Immutable Evidence Plane"]
        direction TB
        Ingest["Automated Evidence Ingestor"]
        Locker["Forensic Evidence Locker (S3/Vault)"]
        Signer["SHA-256 Metadata Signer"]
    end

    subgraph Reporting["Institutional Audit Hub"]
        direction TB
        Dash["Real-Time Compliance Dashboard"]
        Audit["SOX 404 Compliance Report"]
        Deficiency["Deficiency & Remediation Tracker"]
    end

    subgraph DevOps["Compliance-as-Code Orchestration"]
        direction TB
        GH["GitHub Actions (Control CI)"]
        TF["Terraform Compliance Modules"]
        Sentinel["Sentinel / OPA Guardrails"]
    end

    %% Flow Arrows
    ControlDomain -->|1. Map Controls| Matrix
    Matrix -->|2. Validate SoD| SoD
    SoD -->|3. Pass| Tester
    Tester -->|4. Collect Evidence| Ingest
    Ingest -->|5. Sign| Signer
    Signer -->|6. Store| Locker
    
    Locker -->|7. Audit| Dash
    Dash -->|8. Generate| Audit
    Dash -->|9. Alert| Deficiency
    
    GH -->|10. Provision| TF
    TF -->|11. Enforce| Sentinel
    Sentinel -->|12. Guardrails| ControlDomain

    %% Styling
    classDef domain fill:#f5f5f5,stroke:#616161,stroke-width:2px;
    classDef intel fill:#ede7f6,stroke:#311b92,stroke-width:2px;
    classDef evidence fill:#e8f5e9,stroke:#1b5e20,stroke-width:2px;
    classDef report fill:#fce4ec,stroke:#880e4f,stroke-width:2px;
    classDef devops fill:#fffde7,stroke:#f57f17,stroke-width:2px;

    class ControlDomain domain;
    class Intelligence intel;
    class EvidencePlane evidence;
    class Reporting report;
    class DevOps devops;
```

### 2. The ITGC Control Lifecycle: Define to Remediate
The continuous path of maintaining control effectiveness across the enterprise.

```mermaid
graph LR
    Define["Define Control"] --> Implement["Implement System"]
    Implement --> Test["Automated Test"]
    Test --> Audit["External Audit"]
    Audit --> Remediate["Deficiency Remediation"]
    Remediate --> Define
```

### 3. Four Pillars of ITGC Excellence
Standardizing the core domains required for SOX 404 financial reporting compliance.

```mermaid
graph TD
    Hub["SOX Hub"] --> A["Access (Who has access?)"]
    Hub --> C["Change (Who pushed the code?)"]
    Hub --> O["Ops (Is it backed up?)"]
    Hub --> D["Data (Is it accurate?)"]
```

### 4. Automated Evidence Collection Pipeline
The secure path for ingesting and protecting compliance artifacts.

```mermaid
graph LR
    Source["System Log / Artifact"] --> Ingest["Evidence Ingestor"]
    Ingest --> Sign["Cryptographic Signing"]
    Sign --> Vault["Immutable Evidence Vault"]
    Vault --> Link["Mapping to Control ID"]
```

### 5. Change Management Governance Flow
Linking technical deployments to organizational change control policies.

```mermaid
graph LR
    Commit["Git Commit"] --> Approval["CAB / Peer Approval"]
    Approval --> Pipeline["Automated Test Pipeline"]
    Pipeline --> Deploy["Deployment to Production"]
    Deploy --> Audit["Audit Record Generated"]
```

### 6. Identity & Access Governance (IAG)
Managing the lifecycle of user access through automated JML processes.

```mermaid
graph TD
    Joiner["New Hire (Provision)"] --> Role["RBAC Assignment"]
    Role --> Review["Periodic Access Review"]
    Mover["Role Change (Update)"] --> Review
    Leaver["Termination (Revoke)"] --> Audit["Access Log Archive"]
```

### 7. Separation of Duties (SoD) Conflict Matrix
Preventing high-risk combinations of roles across the global infrastructure.

```mermaid
graph LR
    Dev["Developer Role"] --- Matrix{"Conflict Matrix"}
    Ops["Ops Role"] --- Matrix
    Matrix -->|Conflict| Deny["Block Access / Escalation"]
```

### 8. Vulnerability & Patch Management Loop
Continuous identification and remediation of technical risks.

```mermaid
graph LR
    Scan["Global Vulnerability Scan"] --> Score["Risk-Based Priority"]
    Score --> Patch["Automated Patching"]
    Patch --> Verify["Rescan & Verification"]
```

### 9. Disaster Recovery & Backup Integrity Hub
Ensuring financial data is resilient and recoverable under audit conditions.

```mermaid
graph TD
    Backup["Continuous Backup"] --> Store["Off-site Storage"]
    Store --> Test["Automated Restore Drill"]
    Test --> Evidence["Integrity Audit Record"]
```

### 10. IaC Compliance Guardrails: Policy-as-Code
Using Sentinel or OPA to enforce SOX-compliant configurations during the provisioning phase.

```mermaid
graph LR
    HCL["TF Code"] --> Sentinel{"Policy Engine"}
    Sentinel -->|Pass| Cloud["Compliant Resource"]
    Sentinel -->|Fail| Block["Deployment Blocked"]
```

### 11. Metadata Lake for Forensic Audit Readiness
Long-term storage for immutable compliance logs and audit trails.

```mermaid
graph LR
    Event["Governance Event"] --> Stream["Compliance Stream"]
    Stream --> Lake["Forensic Metadata Lake"]
    Lake --> History["Long-term Audit History"]
```

---

## 🏛️ Core Compliance Pillars

1.  **Precision Control Matrix**: Centralized hub for defining ITGC controls across Access, Change, and Operations domains.
2.  **Automated Effectiveness Testing**: Policy-driven engine that continuously validates control performance through automated tests.
3.  **Strategic SoD Governance**: Advanced logic for detecting and preventing Segregation of Duties conflicts across multi-role environments.
4.  **Immutable Evidence Locker**: Secure, long-term storage for compliance artifacts, mapped to specific controls and audit periods.
5.  **Real-time Deficiency Tracking**: Intelligent monitoring of control failures, providing early warning signals and remediation.
6.  **Immutable Audit Record**: Comprehensive logging of every governance action, approval, and review.

---

## 🛠️ Technical Stack & Implementation

### Compliance Engine & APIs
*   **Framework**: Python 3.11+ / FastAPI.
*   **Control Engine**: Strategic management of ITGC controls across multi-domain matrices.
*   **SoD Engine**: Multi-role conflict detection and prevention logic.
*   **Evidence Signer**: Cryptographic signing (SHA-256) of all ingested evidence artifacts.
*   **State Management**: PostgreSQL (Metadata) and S3/Vault (Evidence Storage).

### Compliance Hub (UI)
*   **Framework**: React 18 / Vite.
*   **Theme**: Indigo / Slate (Modern Governance & Compliance aesthetic).
*   **Visualization**: Recharts for control effectiveness trends and risk heatmaps.

### Infrastructure & DevOps
*   **Runtime**: AWS EKS or Azure Kubernetes Service (AKS).
*   **IaC**: Modular Terraform for deploying the compliance hub and evidence pipelines.

---

## 🏗️ IaC Mapping (Module Structure)

| Module | Purpose | Real Services |
| :--- | :--- | :--- |
| **`infrastructure/governance`** | Central management plane | EKS, PostgreSQL, Redis |
| **`infrastructure/evidence`** | Secure artifact storage | S3 Glacier, Vault, KMS |
| **`infrastructure/iam`** | Access and SoD enforcement | Azure AD, AWS IAM, Okta |
| **`infrastructure/logging`** | Audit trail and evidence collectors | CloudWatch, ELK, Splunk |

---

## 🚀 Deployment Guide

### Local Principal Environment
```bash
# Clone the compliance platform
git clone https://github.com/devopstrio/sox-itgc-controls.git
cd sox-itgc-controls

# Configure environment
cp .env.example .env

# Launch the Compliance stack
make up

# Run automated control testing
make test-controls

# Run SoD conflict validation
make validate-sod
```

Access the Compliance Hub Dashboard at `http://localhost:3000`.

---

## 📜 License
Distributed under the MIT License. See `LICENSE` for more information.

---
<div align="center">
  <p>© 2026 Devopstrio. All rights reserved.</p>
</div>
