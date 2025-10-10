'use client'

import { useState } from 'react'
import { Search, Filter, Target, DollarSign, Clock, Star, FileText, Code, Globe, Building, User, Tag, Calendar, TrendingUp, Settings, CheckCircle, AlertCircle } from 'lucide-react'

export default function AdvancedSearchPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchType, setSearchType] = useState('all')
  const [dateRange, setDateRange] = useState('any')
  const [economicWeight, setEconomicWeight] = useState('any')
  const [fileType, setFileType] = useState('any')
  const [language, setLanguage] = useState('any')
  const [region, setRegion] = useState('any')
  const [sortBy, setSortBy] = useState('relevance')
  const [showTenderForm, setShowTenderForm] = useState(false)
  const [tenderBudget, setTenderBudget] = useState('')
  const [tenderDescription, setTenderDescription] = useState('')
  const [tenderDeadline, setTenderDeadline] = useState('')

  const searchTypes = [
    { value: 'all', label: 'All Content', icon: '🔍' },
    { value: 'web', label: 'Web Pages', icon: '🌐' },
    { value: 'documents', label: 'Documents', icon: '📄' },
    { value: 'code', label: 'Source Code', icon: '💻' },
    { value: 'data', label: 'Datasets', icon: '📊' },
    { value: 'academic', label: 'Academic Papers', icon: '🎓' },
    { value: 'business', label: 'Business Info', icon: '🏢' },
    { value: 'people', label: 'People/Profiles', icon: '👤' }
  ]

  const dateRanges = [
    { value: 'any', label: 'Any time' },
    { value: 'hour', label: 'Past hour' },
    { value: 'day', label: 'Past 24 hours' },
    { value: 'week', label: 'Past week' },
    { value: 'month', label: 'Past month' },
    { value: 'year', label: 'Past year' },
    { value: 'custom', label: 'Custom range...' }
  ]

  const fileTypes = [
    { value: 'any', label: 'Any format' },
    { value: 'pdf', label: 'PDF' },
    { value: 'doc', label: 'Word Document' },
    { value: 'xls', label: 'Spreadsheet' },
    { value: 'ppt', label: 'Presentation' },
    { value: 'txt', label: 'Text File' },
    { value: 'html', label: 'HTML' },
    { value: 'json', label: 'JSON' },
    { value: 'csv', label: 'CSV' }
  ]

  const languages = [
    { value: 'any', label: 'Any language' },
    { value: 'en', label: 'English' },
    { value: 'es', label: 'Spanish' },
    { value: 'fr', label: 'French' },
    { value: 'de', label: 'German' },
    { value: 'zh', label: 'Chinese' },
    { value: 'ja', label: 'Japanese' },
    { value: 'ko', label: 'Korean' },
    { value: 'ru', label: 'Russian' }
  ]

  const regions = [
    { value: 'any', label: 'Any region' },
    { value: 'us', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'eu', label: 'European Union' },
    { value: 'asia', label: 'Asia-Pacific' },
    { value: 'americas', label: 'Americas' },
    { value: 'africa', label: 'Africa' },
    { value: 'middle-east', label: 'Middle East' }
  ]

  const submitTender = () => {
    if (!tenderBudget || !tenderDescription || !tenderDeadline) {
      alert('Please fill in all tender fields')
      return
    }
    
    alert(`Tender submitted successfully!\n\nBudget: $${tenderBudget} bSEARCH\nDeadline: ${tenderDeadline}\n\nYour tender will be reviewed and published to the marketplace within 24 hours.`)
    setShowTenderForm(false)
    setTenderBudget('')
    setTenderDescription('')
    setTenderDeadline('')
  }

  return (
    <div className="advanced-search-page">
      <div className="search-container">
        <div className="search-header">
          <div className="search-title">
            <Search className="title-icon" />
            <h1>Advanced Search</h1>
          </div>
          <p className="search-subtitle">
            Leverage economic weights and advanced filters to find exactly what you need
          </p>
        </div>

        <div className="search-form">
          {/* Main Search Input */}
          <div className="search-input-section">
            <div className="search-input-wrapper">
              <Search className="search-icon" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Enter your search query..."
                className="search-input"
              />
              <button className="search-button">
                <Search size={18} />
                Search
              </button>
            </div>
          </div>

          {/* Search Filters */}
          <div className="filters-grid">
            {/* Search Type */}
            <div className="filter-group">
              <label className="filter-label">
                <Target className="filter-icon" />
                Content Type
              </label>
              <select 
                value={searchType} 
                onChange={(e) => setSearchType(e.target.value)}
                className="filter-select"
              >
                {searchTypes.map(type => (
                  <option key={type.value} value={type.value}>
                    {type.icon} {type.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Date Range */}
            <div className="filter-group">
              <label className="filter-label">
                <Calendar className="filter-icon" />
                Date Range
              </label>
              <select 
                value={dateRange} 
                onChange={(e) => setDateRange(e.target.value)}
                className="filter-select"
              >
                {dateRanges.map(range => (
                  <option key={range.value} value={range.value}>
                    {range.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Economic Weight */}
            <div className="filter-group">
              <label className="filter-label">
                <TrendingUp className="filter-icon" />
                Economic Weight
              </label>
              <select 
                value={economicWeight} 
                onChange={(e) => setEconomicWeight(e.target.value)}
                className="filter-select"
              >
                <option value="any">Any weight</option>
                <option value="high">High value (&gt;1000 sats)</option>
                <option value="medium">Medium value (100-1000 sats)</option>
                <option value="low">Low value (10-100 sats)</option>
                <option value="minimal">Minimal value (&lt;10 sats)</option>
              </select>
            </div>

            {/* File Type */}
            <div className="filter-group">
              <label className="filter-label">
                <FileText className="filter-icon" />
                File Type
              </label>
              <select 
                value={fileType} 
                onChange={(e) => setFileType(e.target.value)}
                className="filter-select"
              >
                {fileTypes.map(type => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Language */}
            <div className="filter-group">
              <label className="filter-label">
                <Globe className="filter-icon" />
                Language
              </label>
              <select 
                value={language} 
                onChange={(e) => setLanguage(e.target.value)}
                className="filter-select"
              >
                {languages.map(lang => (
                  <option key={lang.value} value={lang.value}>
                    {lang.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Region */}
            <div className="filter-group">
              <label className="filter-label">
                <Building className="filter-icon" />
                Region
              </label>
              <select 
                value={region} 
                onChange={(e) => setRegion(e.target.value)}
                className="filter-select"
              >
                {regions.map(reg => (
                  <option key={reg.value} value={reg.value}>
                    {reg.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Sort Options */}
          <div className="sort-section">
            <label className="filter-label">
              <Settings className="filter-icon" />
              Sort Results By
            </label>
            <div className="sort-options">
              {[
                { value: 'relevance', label: 'Relevance' },
                { value: 'economic-weight', label: 'Economic Weight' },
                { value: 'date', label: 'Date (newest first)' },
                { value: 'date-asc', label: 'Date (oldest first)' },
                { value: 'popularity', label: 'Popularity' },
                { value: 'quality', label: 'Quality Score' }
              ].map(option => (
                <label key={option.value} className="sort-option">
                  <input
                    type="radio"
                    name="sortBy"
                    value={option.value}
                    checked={sortBy === option.value}
                    onChange={(e) => setSortBy(e.target.value)}
                  />
                  <span>{option.label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Contract Tender Section */}
        <div className="tender-section">
          <div className="tender-header">
            <div className="tender-title">
              <DollarSign className="title-icon" />
              <h2>Contract Tender</h2>
            </div>
            <p className="tender-subtitle">
              Can't find what you need? Put out a contract for tender and let the marketplace find it for you.
            </p>
          </div>

          {!showTenderForm ? (
            <button 
              className="tender-toggle-button"
              onClick={() => setShowTenderForm(true)}
            >
              <Target size={18} />
              Create Search Contract
            </button>
          ) : (
            <div className="tender-form">
              <div className="tender-form-grid">
                <div className="tender-field">
                  <label className="tender-label">
                    <DollarSign className="field-icon" />
                    Budget (bSEARCH tokens)
                  </label>
                  <input
                    type="number"
                    value={tenderBudget}
                    onChange={(e) => setTenderBudget(e.target.value)}
                    placeholder="1000"
                    className="tender-input"
                    min="100"
                    step="100"
                  />
                  <span className="field-hint">Minimum 100 bSEARCH tokens</span>
                </div>

                <div className="tender-field">
                  <label className="tender-label">
                    <Clock className="field-icon" />
                    Deadline
                  </label>
                  <input
                    type="datetime-local"
                    value={tenderDeadline}
                    onChange={(e) => setTenderDeadline(e.target.value)}
                    className="tender-input"
                  />
                </div>
              </div>

              <div className="tender-field full-width">
                <label className="tender-label">
                  <FileText className="field-icon" />
                  Search Requirements
                </label>
                <textarea
                  value={tenderDescription}
                  onChange={(e) => setTenderDescription(e.target.value)}
                  placeholder="Describe exactly what you're looking for, including specific criteria, quality requirements, and any special conditions..."
                  className="tender-textarea"
                  rows={6}
                />
                <span className="field-hint">
                  Be specific about your requirements. Higher detail leads to better results.
                </span>
              </div>

              <div className="tender-actions">
                <button 
                  className="tender-cancel-button"
                  onClick={() => setShowTenderForm(false)}
                >
                  Cancel
                </button>
                <button 
                  className="tender-submit-button"
                  onClick={submitTender}
                >
                  <CheckCircle size={18} />
                  Submit Tender
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Search Tips */}
        <div className="tips-section">
          <div className="tips-header">
            <Star className="title-icon" />
            <h3>Search Tips</h3>
          </div>
          <div className="tips-grid">
            <div className="tip-card">
              <AlertCircle className="tip-icon" />
              <div className="tip-content">
                <h4>Economic Weighting</h4>
                <p>Results are ranked by economic value. Higher stakes content appears first.</p>
              </div>
            </div>
            <div className="tip-card">
              <Target className="tip-icon" />
              <div className="tip-content">
                <h4>Precise Queries</h4>
                <p>Use quotes for exact phrases, + for required terms, - for exclusions.</p>
              </div>
            </div>
            <div className="tip-card">
              <DollarSign className="tip-icon" />
              <div className="tip-content">
                <h4>Contract Tenders</h4>
                <p>Set higher budgets for complex or time-sensitive search requirements.</p>
              </div>
            </div>
            <div className="tip-card">
              <Filter className="tip-icon" />
              <div className="tip-content">
                <h4>Advanced Filters</h4>
                <p>Combine multiple filters to narrow down results to exactly what you need.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .advanced-search-page {
          min-height: 100vh;
          background: #0a0a0a;
          color: #ffffff;
          padding: 2rem;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
        }

        .search-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .search-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .search-title {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .title-icon {
          color: #3b82f6;
          width: 2rem;
          height: 2rem;
        }

        .search-title h1 {
          font-size: 2.5rem;
          font-weight: 700;
          margin: 0;
          background: linear-gradient(135deg, #3b82f6, #1d4ed8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .search-subtitle {
          font-size: 1.1rem;
          color: #a3a3a3;
          margin: 0;
        }

        .search-form {
          background: rgba(15, 15, 15, 0.8);
          border: 1px solid rgba(55, 65, 81, 0.3);
          border-radius: 16px;
          padding: 2rem;
          margin-bottom: 3rem;
          backdrop-filter: blur(10px);
        }

        .search-input-section {
          margin-bottom: 2rem;
        }

        .search-input-wrapper {
          display: flex;
          align-items: center;
          background: rgba(30, 30, 30, 0.8);
          border: 1px solid rgba(55, 65, 81, 0.4);
          border-radius: 12px;
          padding: 0.75rem 1rem;
          gap: 1rem;
        }

        .search-icon {
          color: #6b7280;
          flex-shrink: 0;
        }

        .search-input {
          flex: 1;
          background: transparent;
          border: none;
          color: #ffffff;
          font-size: 1rem;
          outline: none;
        }

        .search-input::placeholder {
          color: #6b7280;
        }

        .search-button {
          background: linear-gradient(135deg, #3b82f6, #1d4ed8);
          color: white;
          border: none;
          border-radius: 8px;
          padding: 0.5rem 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.2s ease;
        }

        .search-button:hover {
          transform: translateY(-1px);
          box-shadow: 0 8px 25px rgba(59, 130, 246, 0.25);
        }

        .filters-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .filter-group {
          display: flex;
          flex-direction: column;
        }

        .filter-label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
          color: #e5e7eb;
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
        }

        .filter-icon {
          width: 1rem;
          height: 1rem;
          color: #3b82f6;
        }

        .filter-select, .tender-input {
          background: rgba(30, 30, 30, 0.8);
          border: 1px solid rgba(55, 65, 81, 0.4);
          border-radius: 8px;
          color: #ffffff;
          padding: 0.75rem;
          font-size: 0.9rem;
          outline: none;
          transition: border-color 0.2s ease;
        }

        .filter-select:focus, .tender-input:focus {
          border-color: #3b82f6;
        }

        .sort-section {
          border-top: 1px solid rgba(55, 65, 81, 0.3);
          padding-top: 1.5rem;
        }

        .sort-options {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
          margin-top: 1rem;
        }

        .sort-option {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          color: #e5e7eb;
          font-size: 0.9rem;
        }

        .sort-option input[type="radio"] {
          accent-color: #3b82f6;
        }

        .tender-section {
          background: rgba(15, 15, 15, 0.8);
          border: 1px solid rgba(55, 65, 81, 0.3);
          border-radius: 16px;
          padding: 2rem;
          margin-bottom: 3rem;
          backdrop-filter: blur(10px);
        }

        .tender-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .tender-title {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
        }

        .tender-title h2 {
          font-size: 1.75rem;
          font-weight: 700;
          margin: 0;
          color: #f59e0b;
        }

        .tender-subtitle {
          color: #a3a3a3;
          margin: 0;
        }

        .tender-toggle-button {
          background: linear-gradient(135deg, #f59e0b, #d97706);
          color: white;
          border: none;
          border-radius: 12px;
          padding: 1rem 2rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          cursor: pointer;
          font-weight: 600;
          font-size: 1rem;
          margin: 0 auto;
          transition: all 0.2s ease;
        }

        .tender-toggle-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(245, 158, 11, 0.3);
        }

        .tender-form {
          background: rgba(20, 20, 20, 0.6);
          border-radius: 12px;
          padding: 2rem;
        }

        .tender-form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .tender-field {
          display: flex;
          flex-direction: column;
        }

        .tender-field.full-width {
          grid-column: 1 / -1;
        }

        .tender-label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
          color: #e5e7eb;
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
        }

        .field-icon {
          width: 1rem;
          height: 1rem;
          color: #f59e0b;
        }

        .tender-textarea {
          background: rgba(30, 30, 30, 0.8);
          border: 1px solid rgba(55, 65, 81, 0.4);
          border-radius: 8px;
          color: #ffffff;
          padding: 0.75rem;
          font-size: 0.9rem;
          outline: none;
          resize: vertical;
          font-family: inherit;
          transition: border-color 0.2s ease;
        }

        .tender-textarea:focus {
          border-color: #f59e0b;
        }

        .field-hint {
          font-size: 0.8rem;
          color: #6b7280;
          margin-top: 0.25rem;
        }

        .tender-actions {
          display: flex;
          gap: 1rem;
          justify-content: flex-end;
          margin-top: 2rem;
        }

        .tender-cancel-button {
          background: transparent;
          color: #6b7280;
          border: 1px solid rgba(55, 65, 81, 0.4);
          border-radius: 8px;
          padding: 0.75rem 1.5rem;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.2s ease;
        }

        .tender-cancel-button:hover {
          color: #ffffff;
          border-color: #6b7280;
        }

        .tender-submit-button {
          background: linear-gradient(135deg, #10b981, #047857);
          color: white;
          border: none;
          border-radius: 8px;
          padding: 0.75rem 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.2s ease;
        }

        .tender-submit-button:hover {
          transform: translateY(-1px);
          box-shadow: 0 8px 25px rgba(16, 185, 129, 0.25);
        }

        .tips-section {
          background: rgba(15, 15, 15, 0.8);
          border: 1px solid rgba(55, 65, 81, 0.3);
          border-radius: 16px;
          padding: 2rem;
          backdrop-filter: blur(10px);
        }

        .tips-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }

        .tips-header h3 {
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0;
          color: #fbbf24;
        }

        .tips-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .tip-card {
          background: rgba(20, 20, 20, 0.6);
          border: 1px solid rgba(55, 65, 81, 0.2);
          border-radius: 12px;
          padding: 1.5rem;
          display: flex;
          gap: 1rem;
        }

        .tip-icon {
          color: #fbbf24;
          flex-shrink: 0;
          margin-top: 0.25rem;
        }

        .tip-content h4 {
          font-size: 1rem;
          font-weight: 600;
          margin: 0 0 0.5rem 0;
          color: #ffffff;
        }

        .tip-content p {
          font-size: 0.9rem;
          color: #a3a3a3;
          margin: 0;
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .advanced-search-page {
            padding: 1rem;
          }

          .search-title h1 {
            font-size: 2rem;
          }

          .tender-form-grid {
            grid-template-columns: 1fr;
          }

          .sort-options {
            grid-template-columns: 1fr;
          }

          .tips-grid {
            grid-template-columns: 1fr;
          }

          .tender-actions {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  )
}