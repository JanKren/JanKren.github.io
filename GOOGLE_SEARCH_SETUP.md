# Google Search Setup Guide

## Current Status

Your website is already well-configured for SEO with:

- ✅ Sitemap generation (jekyll-sitemap plugin)
- ✅ Robots.txt file
- ✅ Meta descriptions and keywords
- ✅ OpenGraph tags for social media
- ✅ Schema.org structured data

## Steps to Make Your Site Searchable on Google

### 1. Submit Your Site to Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click "Add Property"
3. Enter your website URL: `https://JanKren.github.io`
4. Choose "URL prefix" method
5. Download the HTML verification file or copy the verification meta tag

### 2. Add Google Site Verification

Once you have the verification code from Google:

1. Edit `_config.yml` and add:

```yaml
google_site_verification: YOUR_VERIFICATION_CODE_HERE
enable_google_verification: true
```

### 3. Submit Your Sitemap

After verification:

1. In Google Search Console, go to "Sitemaps" section
2. Enter: `sitemap.xml`
3. Click "Submit"

Your sitemap URL will be: `https://JanKren.github.io/sitemap.xml`

### 4. Optional: Add Google Analytics

To track visitors:

1. Create a [Google Analytics](https://analytics.google.com) account
2. Get your tracking ID (format: G-XXXXXXXXXX)
3. Add to `_config.yml`:

```yaml
google_analytics: G-XXXXXXXXXX
enable_google_analytics: true
```

## SEO Checklist

Your site already has excellent SEO foundations:

- [x] Descriptive page titles
- [x] Meta descriptions
- [x] Keywords (computational fluid dynamics, multiphase flows, etc.)
- [x] Clean URLs
- [x] Mobile-responsive design
- [x] Fast loading (static site)
- [x] Semantic HTML structure
- [x] Alt text for images

## Timeline

- **Immediate**: Google will see your robots.txt and can crawl your site
- **1-3 days**: After submitting to Search Console, initial indexing begins
- **1-2 weeks**: Your site should appear in Google search results
- **1 month**: Full indexing of all pages

## Monitor Your Progress

Check these in Google Search Console:

- **Coverage**: Shows which pages are indexed
- **Performance**: Shows search queries, clicks, and impressions
- **Core Web Vitals**: Site performance metrics

## Tips for Better Ranking

1. Your research keywords are already well-defined
2. Regular updates (publications, blog posts) help ranking
3. Getting links from PSI, universities, and research papers improves authority
4. Your ORCID and Google Scholar profiles should link back to your site

## Quick Test

To see if Google has indexed your site, search:

```
site:JanKren.github.io
```

This will show all pages Google has indexed from your domain.
