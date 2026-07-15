"use client";

import { useState } from "react";

interface FlowStep {
  title: string;
  actor: "Wallet" | "Issuer" | "Both";
  description: string;
  technicalDetails: {
    title: string;
    payload: string;
  };
}

const FLOW_STEPS: FlowStep[] = [
  {
    title: "1. Device Key Provisioning",
    actor: "Wallet",
    description:
      "The mobile wallet generates a secure device public/private key pair (typically using hardware-backed keystores like iOS Secure Enclave or Android Keystore). The private key never leaves the device.",
    technicalDetails: {
      title: "Device Key Generation (ECDSA secp256r1 / ES256)",
      payload: `// Public Key (COSE_Key format)
{
  1: 2,       // Key Type: EC2
  3: -7,      // Algorithm: ES256
  -1: 1,      // Curve: P-256
  -2: h'd759713f...', // X coordinate
  -3: h'f4a22d3e...'  // Y coordinate
}`,
    },
  },
  {
    title: "2. Issuance Request",
    actor: "Wallet",
    description:
      "The wallet initiates the request to the DVLA Issuer, submitting the Device Public Key alongside verified user identity credentials (e.g., via OpenID Connect for Verifiable Presentations or a custom REST API).",
    technicalDetails: {
      title: "OIDC4VCI Request Payload",
      payload: `{
  "proof": {
    "proof_type": "jwt",
    "jwt": "eyJhbGciOiJFUzI1NiIsImtpZCI6ImRldmljZS1rZXktMSJ9..."
  },
  "credential_definition": {
    "type": ["org.iso.18013.5.1.mDL"],
    "credentialSubject": {
      "driving_licence_number": "SHOEY9081249A"
    }
  }
}`,
    },
  },
  {
    title: "3. Cryptographic Signing",
    actor: "Issuer",
    description:
      "The DVLA Issuer validates the user's data against the central driver registry. It packages the data into CBOR namespaces, calculates digests, and constructs the Mobile Security Object (MSO). The Issuer then signs the MSO using its private certificate key, linking it to the Device Public Key.",
    technicalDetails: {
      title: "Signed Mobile Security Object (MSO) & COSE Sign1 Structure",
      payload: `// Issuer Signature (COSE_Sign1)
[
  h'a10126', // Protected Headers (ES256)
  {},        // Unprotected Headers
  h'a3636d736f...', // Payload: MSO containing:
                    // - Value Digests (SHA-256 of driver info)
                    // - Validity Info (Iss/Exp dates)
                    // - Device Public Key (bound to wallet)
  h'8f5b4a92c3...'  // Signature (DVLA Private Key)
]`,
    },
  },
  {
    title: "4. mdoc Storage & Deployment",
    actor: "Wallet",
    description:
      "The wallet receives the signed mdoc package containing the raw attribute statements, digests, and Issuer signature. It stores this cryptographically bound credential locally, ready for offline verification by readers (police, car hire, etc.) via BLE, NFC, or QR.",
    technicalDetails: {
      title: "Decoded mdoc Structure (ISO/IEC 18013-5 namespaces)",
      payload: `{
  "org.iso.18013.5.1": {
    "given_name": "Nathan",
    "family_name": "Shoemark",
    "birth_date": "1990-07-15",
    "issue_date": "2026-01-10",
    "expiry_date": "2036-01-10",
    "document_number": "SHOEY9081249A",
    "portrait": "h'ffd8ffe0...'" // Raw image byte array
  }
}`,
    },
  },
];

export function MdocFlow() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="glass-card w-full rounded-2xl p-6 transition-all duration-300 md:p-8">
      <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <span className="text-accent-primary text-xs font-semibold tracking-widest uppercase">
            DVLA Architecture Showcase
          </span>
          <h3 className="font-display mt-1 text-2xl font-bold text-slate-900 dark:text-zinc-50">
            mdoc Certificate & Issuance Lifecycle
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-slate-500 dark:text-zinc-400">
            This interactive demo illustrates how driving licence certificates
            are requested, cryptographically bound to hardware security
            enclaves, and signed by the DVLA root CA.
          </p>
        </div>

        {/* Legend */}
        <div className="flex gap-3 text-xs font-semibold">
          <span className="flex items-center gap-1.5 text-slate-600 dark:text-zinc-300">
            <span className="bg-accent-primary h-2.5 w-2.5 animate-pulse rounded-full" />
            Wallet (Mobile)
          </span>
          <span className="flex items-center gap-1.5 text-slate-600 dark:text-zinc-300">
            <span className="bg-accent-secondary h-2.5 w-2.5 rounded-full" />
            DVLA (Issuer)
          </span>
        </div>
      </div>

      {/* Steps Slider / Navigation */}
      <div className="mb-8 grid grid-cols-4 gap-2 border-b border-slate-200/50 pb-4 dark:border-zinc-800/50">
        {FLOW_STEPS.map((step, idx) => (
          <button
            key={idx}
            onClick={() => setActiveStep(idx)}
            className={`relative flex flex-col items-center pb-3 text-center transition-all md:items-start md:text-left ${
              idx === activeStep
                ? "text-accent-primary font-bold"
                : "font-medium text-slate-500 hover:text-slate-800 dark:text-zinc-400 dark:hover:text-zinc-200"
            }`}
          >
            <span className="hidden text-xs font-semibold md:inline">
              Step {idx + 1}
            </span>
            <span className="mt-1 line-clamp-1 text-sm tracking-tight">
              {step.title.split(". ")[1]}
            </span>
            {idx === activeStep && (
              <span className="bg-accent-primary absolute bottom-0 left-0 h-[3px] w-full rounded-full" />
            )}
          </button>
        ))}
      </div>

      {/* Visual Animation / Layout Grid */}
      <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-5">
        {/* Schematic Flow Column */}
        <div className="flex flex-col justify-between space-y-6 lg:col-span-3">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span
                className={`rounded-md px-2.5 py-0.5 text-xs font-bold ${
                  FLOW_STEPS[activeStep].actor === "Wallet"
                    ? "bg-accent-primary/10 text-accent-primary border-accent-primary/20 border"
                    : FLOW_STEPS[activeStep].actor === "Issuer"
                      ? "bg-accent-secondary/10 text-accent-secondary border-accent-secondary/20 border"
                      : "bg-accent-success/10 text-accent-success border-accent-success/20 border"
                }`}
              >
                Actor: {FLOW_STEPS[activeStep].actor}
              </span>
              <span className="text-xs font-medium text-slate-400 dark:text-zinc-500">
                ISO/IEC 18013-5 Standard compliant
              </span>
            </div>

            <h4 className="font-display text-xl font-bold text-slate-800 dark:text-zinc-100">
              {FLOW_STEPS[activeStep].title}
            </h4>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-zinc-400">
              {FLOW_STEPS[activeStep].description}
            </p>
          </div>

          {/* Graphical diagram representing message sending */}
          <div className="relative flex min-h-[160px] flex-col items-center justify-center overflow-hidden rounded-xl border border-slate-200/50 bg-slate-100/50 p-6 transition-all duration-300 dark:border-zinc-800/50 dark:bg-zinc-900/50">
            <div className="relative z-10 flex w-full max-w-sm items-center justify-between">
              {/* Wallet Node */}
              <div
                className={`flex flex-col items-center rounded-lg border p-3 transition-all duration-500 ${
                  FLOW_STEPS[activeStep].actor === "Wallet" ||
                  FLOW_STEPS[activeStep].actor === "Both"
                    ? "border-accent-primary bg-accent-primary/5 text-accent-primary scale-105 shadow-sm"
                    : "border-slate-300 bg-white text-slate-400 dark:border-zinc-800 dark:bg-zinc-950"
                }`}
              >
                <svg
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
                <span className="mt-1 text-[10px] font-bold tracking-wider uppercase">
                  Mobile Wallet
                </span>
              </div>

              {/* Data Transfer Line */}
              <div className="relative flex flex-1 items-center justify-center px-4">
                <div className="h-0.5 w-full bg-slate-300 dark:bg-zinc-800" />

                {/* Flow Direction Indicator */}
                {activeStep === 0 && (
                  <div className="bg-accent-primary absolute right-full mr-2 h-2 w-2 animate-ping rounded-full" />
                )}
                {activeStep === 1 && (
                  <div className="bg-accent-primary absolute flex h-3 w-3 animate-bounce items-center justify-center rounded-full text-[8px] text-white shadow-sm">
                    →
                  </div>
                )}
                {activeStep === 2 && (
                  <div className="bg-accent-secondary absolute flex h-3 w-3 animate-pulse items-center justify-center rounded-full text-[8px] text-white shadow-sm">
                    ⚙️
                  </div>
                )}
                {activeStep === 3 && (
                  <div className="bg-accent-success absolute flex h-3 w-3 animate-bounce items-center justify-center rounded-full text-[8px] text-white shadow-sm">
                    ←
                  </div>
                )}
              </div>

              {/* Issuer Node */}
              <div
                className={`flex flex-col items-center rounded-lg border p-3 transition-all duration-500 ${
                  FLOW_STEPS[activeStep].actor === "Issuer" ||
                  FLOW_STEPS[activeStep].actor === "Both"
                    ? "border-accent-secondary bg-accent-secondary/5 text-accent-secondary scale-105 shadow-sm"
                    : "border-slate-300 bg-white text-slate-400 dark:border-zinc-800 dark:bg-zinc-950"
                }`}
              >
                <svg
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
                <span className="mt-1 text-[10px] font-bold tracking-wider uppercase">
                  DVLA Issuer
                </span>
              </div>
            </div>

            {/* Glowing ambient lines for modern visual flair */}
            <div className="from-accent-primary/5 pointer-events-none absolute inset-0 bg-radial via-transparent to-transparent" />
          </div>

          {/* Navigation buttons */}
          <div className="flex gap-4">
            <button
              onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
              disabled={activeStep === 0}
              className="flex-1 rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold transition-all hover:bg-slate-100 disabled:opacity-50 disabled:hover:bg-transparent dark:border-zinc-800 dark:hover:bg-zinc-900"
            >
              Previous Step
            </button>
            <button
              onClick={() =>
                setActiveStep((prev) =>
                  Math.min(FLOW_STEPS.length - 1, prev + 1),
                )
              }
              disabled={activeStep === FLOW_STEPS.length - 1}
              className="flex-1 rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-slate-800 disabled:opacity-50 disabled:hover:bg-zinc-50 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              Next Step
            </button>
          </div>
        </div>

        {/* Payload / Data Structure Inspector Column */}
        <div className="flex flex-col lg:col-span-2">
          <div className="mb-3 flex items-center justify-between border-b border-slate-200/50 pb-2 dark:border-zinc-800/50">
            <span className="text-xs font-bold text-slate-500 dark:text-zinc-400">
              Payload Structure Inspector
            </span>
            <span className="text-accent-primary bg-accent-primary/10 border-accent-primary/10 rounded-md border px-1.5 py-0.5 font-mono text-[10px] uppercase">
              {activeStep === 0 || activeStep === 2
                ? "CBOR / COSE"
                : "JSON / JWT"}
            </span>
          </div>

          <div className="flex min-h-[220px] flex-1 flex-col justify-between overflow-x-auto rounded-xl border border-slate-800 bg-slate-950 p-4 font-mono text-[11px] leading-relaxed text-zinc-300 shadow-inner lg:min-h-0">
            <div>
              <div className="mb-2 border-b border-zinc-900 pb-1 text-[10px] font-semibold text-zinc-500">
                // {FLOW_STEPS[activeStep].technicalDetails.title}
              </div>
              <pre className="whitespace-pre">
                {FLOW_STEPS[activeStep].technicalDetails.payload}
              </pre>
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-zinc-900 pt-2 text-[9px] text-zinc-500">
              <span>Security Binding: Cryptographic Association</span>
              <span>Integrity Verified ✓</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
