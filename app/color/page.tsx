'use client';

import React, { useState } from 'react';
import { Moon, Sun, CheckCircle, Clock, XCircle, Info, AlertTriangle } from 'lucide-react';

export default function ColorDemo() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-elevated transition-colors duration-200">
        {/* Header */}
        <header className="bg-base border-b border-primary sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-primary">REMS Color Palette</h1>
                <p className="text-secondary text-sm">Government Real Estate Management System</p>
              </div>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-elevated border border-primary transition-colors"
                aria-label="Toggle theme"
              >
                {darkMode ? (
                  <Sun className="w-5 h-5 text-warning-500" />
                ) : (
                  <Moon className="w-5 h-5 text-primary-600" />
                )}
              </button>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
          
          {/* Primary Colors */}
          <section>
            <h2 className="text-xl font-semibold text-primary mb-4">Primary Colors (Blue)</h2>
            <p className="text-secondary mb-6">Main brand color - Used for buttons, links, and primary actions</p>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
              {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
                <div key={shade} className="space-y-2">
                  <div className={`h-24 rounded-lg bg-primary-${shade} border border-primary shadow-sm`}></div>
                  <div className="text-xs">
                    <p className="font-mono text-secondary">primary-{shade}</p>
                    <p className="font-mono text-tertiary">{getPrimaryColor(shade)}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Success Colors */}
          <section>
            <h2 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-success-600" />
              Success Colors (Green)
            </h2>
            <p className="text-secondary mb-6">Used for approved transactions, active status, success messages</p>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
              {[50, 100, 300, 500, 600, 700, 900].map((shade) => (
                <div key={shade} className="space-y-2">
                  <div className={`h-24 rounded-lg bg-success-${shade} border border-primary shadow-sm`}></div>
                  <div className="text-xs">
                    <p className="font-mono text-secondary">success-{shade}</p>
                    <p className="font-mono text-tertiary">{getSuccessColor(shade)}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Warning Colors */}
          <section>
            <h2 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-warning-600" />
              Warning Colors (Amber)
            </h2>
            <p className="text-secondary mb-6">Used for pending transactions, warnings, attention required</p>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
              {[50, 100, 300, 500, 600, 700, 900].map((shade) => (
                <div key={shade} className="space-y-2">
                  <div className={`h-24 rounded-lg bg-warning-${shade} border border-primary shadow-sm`}></div>
                  <div className="text-xs">
                    <p className="font-mono text-secondary">warning-{shade}</p>
                    <p className="font-mono text-tertiary">{getWarningColor(shade)}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Danger Colors */}
          <section>
            <h2 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
              <XCircle className="w-5 h-5 text-danger-600" />
              Danger Colors (Red)
            </h2>
            <p className="text-secondary mb-6">Used for rejected transactions, banned agencies, errors, delete actions</p>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
              {[50, 100, 300, 500, 600, 700, 900].map((shade) => (
                <div key={shade} className="space-y-2">
                  <div className={`h-24 rounded-lg bg-danger-${shade} border border-primary shadow-sm`}></div>
                  <div className="text-xs">
                    <p className="font-mono text-secondary">danger-{shade}</p>
                    <p className="font-mono text-tertiary">{getDangerColor(shade)}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Info Colors */}
          <section>
            <h2 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
              <Info className="w-5 h-5 text-info-600" />
              Info Colors (Sky Blue)
            </h2>
            <p className="text-secondary mb-6">Used for inspector notes, information messages, neutral highlights</p>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
              {[50, 100, 300, 500, 600, 700, 900].map((shade) => (
                <div key={shade} className="space-y-2">
                  <div className={`h-24 rounded-lg bg-info-${shade} border border-primary shadow-sm`}></div>
                  <div className="text-xs">
                    <p className="font-mono text-secondary">info-{shade}</p>
                    <p className="font-mono text-tertiary">{getInfoColor(shade)}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Gray Scale */}
          <section>
            <h2 className="text-xl font-semibold text-primary mb-4">Gray Scale</h2>
            <p className="text-secondary mb-6">Used for text, backgrounds, borders, and neutral elements</p>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
              {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
                <div key={shade} className="space-y-2">
                  <div className={`h-24 rounded-lg bg-gray-${shade} border border-primary shadow-sm`}></div>
                  <div className="text-xs">
                    <p className="font-mono text-secondary">gray-{shade}</p>
                    <p className="font-mono text-tertiary">{getGrayColor(shade)}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Component Examples */}
          <section>
            <h2 className="text-xl font-semibold text-primary mb-4">Component Examples</h2>
            
            {/* Buttons */}
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium text-secondary mb-3">Buttons</h3>
                <div className="flex flex-wrap gap-3">
                  <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                    Primary Button
                  </button>
                  <button className="bg-success-600 hover:bg-success-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                    Approve
                  </button>
                  <button className="bg-warning-600 hover:bg-warning-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                    Pending
                  </button>
                  <button className="bg-danger-600 hover:bg-danger-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                    Reject
                  </button>
                  <button className="bg-info-600 hover:bg-info-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                    Info
                  </button>
                  <button className="border border-primary hover:bg-elevated text-primary px-4 py-2 rounded-lg font-medium transition-colors">
                    Secondary
                  </button>
                </div>
              </div>

              {/* Badges */}
              <div>
                <h3 className="text-sm font-medium text-secondary mb-3">Status Badges</h3>
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-1 bg-success-100 text-success-700 dark:bg-success-900 dark:text-success-300 px-3 py-1 rounded-full text-sm font-medium">
                    <CheckCircle className="w-4 h-4" />
                    Approved
                  </span>
                  <span className="inline-flex items-center gap-1 bg-warning-100 text-warning-700 dark:bg-warning-900 dark:text-warning-300 px-3 py-1 rounded-full text-sm font-medium">
                    <Clock className="w-4 h-4" />
                    Pending
                  </span>
                  <span className="inline-flex items-center gap-1 bg-danger-100 text-danger-700 dark:bg-danger-900 dark:text-danger-300 px-3 py-1 rounded-full text-sm font-medium">
                    <XCircle className="w-4 h-4" />
                    Rejected
                  </span>
                  <span className="inline-flex items-center gap-1 bg-info-100 text-info-700 dark:bg-info-900 dark:text-info-300 px-3 py-1 rounded-full text-sm font-medium">
                    <Info className="w-4 h-4" />
                    Inspector Review
                  </span>
                  <span className="inline-flex items-center gap-1 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-medium">
                    Inactive
                  </span>
                </div>
              </div>

              {/* Alerts */}
              <div>
                <h3 className="text-sm font-medium text-secondary mb-3">Alerts</h3>
                <div className="space-y-3">
                  <div className="bg-success-50 dark:bg-success-900/20 border border-success-200 dark:border-success-800 text-success-800 dark:text-success-200 px-4 py-3 rounded-lg flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Transaction Approved</p>
                      <p className="text-sm mt-1 opacity-90">The property transaction has been successfully verified and approved.</p>
                    </div>
                  </div>

                  <div className="bg-warning-50 dark:bg-warning-900/20 border border-warning-200 dark:border-warning-800 text-warning-800 dark:text-warning-200 px-4 py-3 rounded-lg flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Pending Verification</p>
                      <p className="text-sm mt-1 opacity-90">This transaction is awaiting inspector verification.</p>
                    </div>
                  </div>

                  <div className="bg-danger-50 dark:bg-danger-900/20 border border-danger-200 dark:border-danger-800 text-danger-800 dark:text-danger-200 px-4 py-3 rounded-lg flex items-start gap-3">
                    <XCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Transaction Rejected</p>
                      <p className="text-sm mt-1 opacity-90">The transaction has been rejected due to invalid documentation.</p>
                    </div>
                  </div>

                  <div className="bg-info-50 dark:bg-info-900/20 border border-info-200 dark:border-info-800 text-info-800 dark:text-info-200 px-4 py-3 rounded-lg flex items-start gap-3">
                    <Info className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Information</p>
                      <p className="text-sm mt-1 opacity-90">Please ensure all documents are uploaded before submitting.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cards */}
              <div>
                <h3 className="text-sm font-medium text-secondary mb-3">Cards</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-base border border-primary rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-semibold text-primary">Total Agencies</h4>
                      <div className="p-2 bg-primary-100 dark:bg-primary-900 rounded-lg">
                        <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-3xl font-bold text-primary">156</p>
                    <p className="text-sm text-success-600 mt-2">↑ 12% from last month</p>
                  </div>

                  <div className="bg-base border border-primary rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-semibold text-primary">Properties</h4>
                      <div className="p-2 bg-success-100 dark:bg-success-900 rounded-lg">
                        <svg className="w-6 h-6 text-success-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-3xl font-bold text-primary">3,842</p>
                    <p className="text-sm text-success-600 mt-2">↑ 8% from last month</p>
                  </div>

                  <div className="bg-base border border-primary rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-semibold text-primary">Pending</h4>
                      <div className="p-2 bg-warning-100 dark:bg-warning-900 rounded-lg">
                        <Clock className="w-6 h-6 text-warning-600" />
                      </div>
                    </div>
                    <p className="text-3xl font-bold text-primary">23</p>
                    <p className="text-sm text-tertiary mt-2">Awaiting verification</p>
                  </div>
                </div>
              </div>

              {/* Form Elements */}
              <div>
                <h3 className="text-sm font-medium text-secondary mb-3">Form Elements</h3>
                <div className="bg-base border border-primary rounded-lg p-6 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">Agency Name</label>
                    <input
                      type="text"
                      placeholder="Enter agency name"
                      className="w-full px-3 py-2 border border-primary bg-base text-primary rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">Status</label>
                    <select className="w-full px-3 py-2 border border-primary bg-base text-primary rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors">
                      <option>Select status</option>
                      <option>Active</option>
                      <option>Pending</option>
                      <option>Closed</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">Description</label>
                    <textarea
                      rows={3}
                      placeholder="Enter description"
                      className="w-full px-3 py-2 border border-primary bg-base text-primary rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="terms"
                      className="w-4 h-4 text-primary-600 bg-base border-primary rounded focus:ring-2 focus:ring-primary-500"
                    />
                    <label htmlFor="terms" className="text-sm text-secondary">
                      I agree to the terms and conditions
                    </label>
                  </div>
                </div>
              </div>

              {/* Table */}
              <div>
                <h3 className="text-sm font-medium text-secondary mb-3">Table</h3>
                <div className="bg-base border border-primary rounded-lg overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-elevated border-b border-primary">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-secondary uppercase tracking-wider">Agency</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-secondary uppercase tracking-wider">License</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-secondary uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-secondary uppercase tracking-wider">Properties</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-primary">
                      <tr className="hover:bg-elevated transition-colors">
                        <td className="px-6 py-4 text-sm text-primary font-medium">Khan Real Estate</td>
                        <td className="px-6 py-4 text-sm text-secondary font-mono">LIC-2024-001</td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center gap-1 bg-success-100 text-success-700 dark:bg-success-900 dark:text-success-300 px-2 py-1 rounded text-xs font-medium">
                            Active
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-secondary">142</td>
                      </tr>
                      <tr className="hover:bg-elevated transition-colors">
                        <td className="px-6 py-4 text-sm text-primary font-medium">Ahmad Properties</td>
                        <td className="px-6 py-4 text-sm text-secondary font-mono">LIC-2024-002</td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center gap-1 bg-warning-100 text-warning-700 dark:bg-warning-900 dark:text-warning-300 px-2 py-1 rounded text-xs font-medium">
                            Pending
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-secondary">87</td>
                      </tr>
                      <tr className="hover:bg-elevated transition-colors">
                        <td className="px-6 py-4 text-sm text-primary font-medium">Kabul Estates</td>
                        <td className="px-6 py-4 text-sm text-secondary font-mono">LIC-2024-003</td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center gap-1 bg-danger-100 text-danger-700 dark:bg-danger-900 dark:text-danger-300 px-2 py-1 rounded text-xs font-medium">
                            Banned
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-secondary">0</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* Typography */}
          <section>
            <h2 className="text-xl font-semibold text-primary mb-4">Typography</h2>
            <div className="bg-base border border-primary rounded-lg p-6 space-y-4">
              <h1 className="text-4xl font-bold text-primary">Heading 1</h1>
              <h2 className="text-3xl font-bold text-primary">Heading 2</h2>
              <h3 className="text-2xl font-semibold text-primary">Heading 3</h3>
              <h4 className="text-xl font-semibold text-primary">Heading 4</h4>
              <h5 className="text-lg font-medium text-primary">Heading 5</h5>
              <h6 className="text-base font-medium text-primary">Heading 6</h6>
              <p className="text-primary">Body text - Regular paragraph text with primary color</p>
              <p className="text-secondary">Secondary text - Used for descriptions and helper text</p>
              <p className="text-tertiary">Tertiary text - Used for muted or less important text</p>
              <a href="#" className="text-primary-600 hover:text-primary-700 underline">Link text</a>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="bg-base border-t border-primary mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <p className="text-center text-secondary text-sm">
              REMS - Real Estate Management System © 2026
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

// Helper functions to get color hex values
function getPrimaryColor(shade: number): string {
  const colors: Record<number, string> = {
    50: '#EFF6FF', 100: '#DBEAFE', 200: '#BFDBFE', 300: '#93C5FD',
    400: '#60A5FA', 500: '#3B82F6', 600: '#2563EB', 700: '#1D4ED8',
    800: '#1E40AF', 900: '#1E3A8A'
  };
  return colors[shade];
}

function getSuccessColor(shade: number): string {
  const colors: Record<number, string> = {
    50: '#F0FDF4', 100: '#DCFCE7', 300: '#86EFAC', 500: '#22C55E',
    600: '#16A34A', 700: '#15803D', 900: '#14532D'
  };
  return colors[shade];
}

function getWarningColor(shade: number): string {
  const colors: Record<number, string> = {
    50: '#FFFBEB', 100: '#FEF3C7', 300: '#FCD34D', 500: '#F59E0B',
    600: '#D97706', 700: '#B45309', 900: '#78350F'
  };
  return colors[shade];
}

function getDangerColor(shade: number): string {
  const colors: Record<number, string> = {
    50: '#FEF2F2', 100: '#FEE2E2', 300: '#FCA5A5', 500: '#EF4444',
    600: '#DC2626', 700: '#B91C1C', 900: '#7F1D1D'
  };
  return colors[shade];
}

function getInfoColor(shade: number): string {
  const colors: Record<number, string> = {
    50: '#F0F9FF', 100: '#E0F2FE', 300: '#7DD3FC', 500: '#0EA5E9',
    600: '#0284C7', 700: '#0369A1', 900: '#0C4A6E'
  };
  return colors[shade];
}

function getGrayColor(shade: number): string {
  const colors: Record<number, string> = {
    50: '#F9FAFB', 100: '#F3F4F6', 200: '#E5E7EB', 300: '#D1D5DB',
    400: '#9CA3AF', 500: '#6B7280', 600: '#4B5563', 700: '#374151',
    800: '#1F2937', 900: '#111827'
  };
  return colors[shade];
}