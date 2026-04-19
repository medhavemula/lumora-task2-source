import { defineConfig } from 'vite'
import nunjucks from 'vite-plugin-nunjucks'
import { resolve } from 'path'
import nj from 'nunjucks'
import fs from 'fs'

const renderNunjucks = () => ({
  name: 'nunjucks-renderer',
  transformIndexHtml: {
    order: 'pre',
    handler(html, ctx) {
      const page = ctx.filename.split(/[\\/]/).pop()
      const vars = {
        'index.html':   { pageTitle: 'Home',    activeNav: 'home',    currentYear: new Date().getFullYear() },
        'about.html':   { pageTitle: 'About',   activeNav: 'about',   currentYear: new Date().getFullYear() },
        'contact.html': { pageTitle: 'Contact', activeNav: 'contact', currentYear: new Date().getFullYear() }
      }
      const env = new nj.Environment(
        new nj.FileSystemLoader(resolve(__dirname, 'src/templates'))
      )
      return env.renderString(html, vars[page] || {})
    }
  }
})

export default defineConfig({
  root: resolve(__dirname, 'src'),
  plugins: [renderNunjucks()],
  build: {
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main:    resolve(__dirname, 'src/index.html'),
        about:   resolve(__dirname, 'src/about.html'),
        contact: resolve(__dirname, 'src/contact.html')
      }
    }
  }
})