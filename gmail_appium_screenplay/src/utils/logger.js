const fs = require('fs');
const path = require('path');

class Logger {
  static htmlPath = path.join(__dirname, '../../report.html');
  static lines = [];

  static initReport() {
    this.lines = [];
    this.lines.push('<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Test Report</title>');
    this.lines.push('<style>body{font-family:Arial;} .ok{color:green;} .error{color:red;} .info{color:blue;}</style>');
    this.lines.push('</head><body>');
    this.lines.push(`<h1>Test Report - ${new Date().toISOString()}</h1>`);
    this.writeReport();
  }

  static append(message, type = 'info') {
    const colorClass = type === 'ok' ? 'ok' : type === 'error' ? 'error' : 'info';
    const line = `<p class="${colorClass}">${new Date().toISOString()} - ${message}</p>`;
    this.lines.push(line);
    this.writeReport();
  }

  static endReport() {
    this.lines.push('</body></html>');
    this.writeReport(true);
  }

  static writeReport(final = false) {
    const content = this.lines.join('\n');
    fs.writeFileSync(this.htmlPath, content, { flag: 'w' });
    if (final) {
      console.log(`✅ Reporte generado: ${this.htmlPath}`);
    }
  }
}

module.exports = { Logger };