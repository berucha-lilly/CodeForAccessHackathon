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
      const violations = [];

      // Check for missing alt text
      const imgWithoutAlt = /<img[^>]*src[^>]*(?!alt=)[^>]*>/gi.exec(content);
      if (imgWithoutAlt) {
        violations.push({
          id: 'img-missing-alt',
          severity: 'error',
          message: 'Image missing alt text',
          wcagCriteria: ['1.1.1']
        });
      }

      // Check for div onClick without role
      const divOnClick = /<div[^>]*onClick[^>]*(?!role=)[^>]*>/gi.exec(content);
      if (divOnClick) {
        violations.push({
          id: 'div-button',
          severity: 'error',
          message: 'Non-semantic clickable div (use button instead)',
          wcagCriteria: ['4.1.2']
        });
      }

      // Check for input without label
      const inputWithoutLabel = /<input[^>]*(?!aria-label)[^>]*>/gi.exec(content);
      if (inputWithoutLabel && !content.includes('<label')) {
        violations.push({
          id: 'input-missing-label',
          severity: 'error',
          message: 'Input field missing associated label',
          wcagCriteria: ['3.3.2']
        });
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
