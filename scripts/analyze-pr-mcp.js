#!/usr/bin/env node
/**
 * Analyze PR files for accessibility violations using MCP server
 */

const fs = require('fs');
const { execSync } = require('child_process');

async function analyzePR() {
  try {
    console.log('📁 Detecting changed files in PR...');
    
    // Get changed files from git
    let changedFiles = [];
    try {
      const output = execSync('git diff --name-only origin/main...HEAD', { encoding: 'utf8' });
      changedFiles = output.split('\n').filter(f => f.trim() !== '');
    } catch (error) {
      console.log('⚠️  Could not detect changed files, analyzing sample files...');
      // Fallback: analyze common files
      changedFiles = [
        'src/App.js',
        'src/components/AccessibleFormValidation/FormValidation.js',
        'src/components/ColorContrastEnhancer/ContrastToggle.js',
        'src/components/KeyboardFriendlyNavigation/KeyboardNav.js'
      ].filter(f => fs.existsSync(f));
    }

    // Filter for relevant file types
    const relevantFiles = changedFiles.filter(f => 
      /\.(jsx?|tsx?|html?|css|scss)$/i.test(f) && fs.existsSync(f)
    );

    console.log(`📊 Analyzing ${relevantFiles.length} files...`);

    let totalViolations = 0;
    let totalErrors = 0;
    let totalWarnings = 0;
    const fileResults = [];

    // Simple regex-based analysis for now
    for (const filePath of relevantFiles) {
      const content = fs.readFileSync(filePath, 'utf8');
      const lines = content.split('\n');
      const violations = [];

      // Helper function to find line number
      const findLineNumber = (match) => {
        const beforeMatch = content.substring(0, match.index);
        return beforeMatch.split('\n').length;
      };

      // Check for missing alt text
      let imgMatch;
      const imgRegex = /<img[^>]*src[^>]*(?!alt=)[^>]*>/gi;
      while ((imgMatch = imgRegex.exec(content)) !== null) {
        const lineNum = findLineNumber(imgMatch);
        violations.push({
          id: 'img-missing-alt',
          severity: 'error',
          message: 'Image missing alt attribute',
          description: 'All images must have an alt attribute for screen readers',
          line: lineNum,
          wcagCriteria: ['1.1.1'],
          fix: 'Add alt attribute with meaningful description',
          suggestions: [
            'Add alt="description" to the image tag',
            'For decorative images, use alt=""',
            'Describe what the image conveys, not just what it looks like'
          ]
        });
        break; // Only report first occurrence per file
      }

      // Check for div onClick without role
      let divMatch;
      const divRegex = /<div[^>]*onClick[^>]*(?!role=)[^>]*>/gi;
      while ((divMatch = divRegex.exec(content)) !== null) {
        const lineNum = findLineNumber(divMatch);
        violations.push({
          id: 'div-button',
          severity: 'error',
          message: 'Non-semantic clickable div (use button instead)',
          description: 'Interactive elements should use semantic HTML for keyboard and screen reader accessibility',
          line: lineNum,
          wcagCriteria: ['4.1.2'],
          fix: 'Replace div with button element',
          suggestions: [
            'Use <button onClick={handler}>Text</button> instead',
            'If div is required, add role="button" and tabIndex={0}',
            'Add keyboard event handlers (onKeyDown) for Enter and Space keys'
          ]
        });
        break; // Only report first occurrence per file
      }

      // Check for input without label
      let inputMatch;
      const inputRegex = /<input[^>]*(?!aria-label)[^>]*>/gi;
      while ((inputMatch = inputRegex.exec(content)) !== null && !content.includes('<label')) {
        const lineNum = findLineNumber(inputMatch);
        violations.push({
          id: 'input-missing-label',
          severity: 'error',
          message: 'Input field missing associated label',
          description: 'Form inputs must have labels to help users understand their purpose',
          line: lineNum,
          wcagCriteria: ['3.3.2'],
          fix: 'Add label element associated with input',
          suggestions: [
            'Add <label htmlFor="inputId">Label Text</label> before the input',
            'Alternatively, use aria-label="Label Text" on the input',
            'Wrap input in label: <label>Label Text<input /></label>'
          ]
        });
        break; // Only report first occurrence per file
      }

      const errors = violations.filter(v => v.severity === 'error').length;
      const warnings = violations.filter(v => v.severity === 'warning').length;

      totalViolations += violations.length;
      totalErrors += errors;
      totalWarnings += warnings;

      if (violations.length > 0) {
        fileResults.push({
          filePath,
          violations,
          summary: {
            totalViolations: violations.length,
            errors,
            warnings
          }
        });
        console.log(`  ❌ ${filePath}: ${violations.length} violation(s)`);
      } else {
        console.log(`  ✅ ${filePath}: No violations`);
      }
    }

    // Write results
    const results = {
      analyzedFiles: relevantFiles.length,
      filesWithViolations: fileResults.length,
      summary: {
        totalViolations,
        errors: totalErrors,
        warnings: totalWarnings
      },
      files: fileResults
    };

    fs.writeFileSync('a11y-results.json', JSON.stringify(results, null, 2));
    console.log('\n✅ Analysis complete!');
    console.log(`📊 Total: ${totalViolations} violations (${totalErrors} errors, ${totalWarnings} warnings)`);

    process.exit(0);
  } catch (error) {
    console.error('❌ Analysis failed:', error.message);
    process.exit(1);
  }
}

analyzePR();
