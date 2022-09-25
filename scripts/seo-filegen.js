import servicesData from "../constants/services.js";

//js script to generate robots.txt file
let baseUrl="https://www.mb-consulting.dev";

import { writeFile } from 'fs';
import { join } from 'path';
const robots = `User-agent: *
Allow: /
Disallow: /api
Sitemap: ${baseUrl}/sitemap.xml
`;

writeFile(join(__dirname, '../public/robots.txt'), robots, (err) => {
    if (err) throw err;
} );
// end of js script to generate robots.txt file

// js script to generate sitemap.xml file
let todayDate = (new Date()).toISOString().split('T')[0];
let date = new Date(todayDate);
let lastMonthDate = new Date(date.setMonth(date.getMonth() - 1)).toISOString().split('T')[0];
date = new Date(todayDate);
let lastYearDate = new Date(date.setFullYear(date.getFullYear() - 1)).toISOString().split('T')[0];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${lastMonthDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/contacts</loc>
    <lastmod>${lastYearDate}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/about</loc>
    <lastmod>${lastYearDate}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${baseUrl}/clients</loc>
    <lastmod>${lastMonthDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>${baseUrl}/service/</loc>
    <lastmod>${lastYearDate}</lastmod>
    <changefreq>yearly</changefreq> 
    <priority>0.9</priority>
  </url>
  ${servicesData.services.filter(service => service.active === true)?.map((service) => (
  `
  <url>
    <loc>${baseUrl}/service/${service.slug}</loc>
    <lastmod>${lastMonthDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  `)).join('')}
  <url>
    <loc>${baseUrl}/experience</loc>
    <lastmod>${lastYearDate}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.4</priority>
  </url>
  <url>
    <loc>${baseUrl}/privacy-policy</loc>
    <lastmod>${lastYearDate}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>${baseUrl}/cookie-policy</loc>
    <lastmod>${lastYearDate}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>${baseUrl}/projects</loc>
    <lastmod>1970-01-01</lastmod>
    <changefreq>never</changefreq>
    <priority>0.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/work-in-progress</loc>
    <lastmod>1970-01-01</lastmod>
    <changefreq>never</changefreq>
    <priority>0.0</priority>
  </url>
</urlset>
`;

writeFile(join(__dirname, '../public/sitemap.xml'), sitemap, (err) => {
    if (err) throw err;
} );

// end of js script to generate sitemap.xml file