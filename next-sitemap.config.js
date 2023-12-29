/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://pittcs.wiki/',
    generateRobotsTxt: true,
    generateIndexSitemap: false
  }