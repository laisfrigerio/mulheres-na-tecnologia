# Quick Reference Guide

## 🚀 Common Commands

```bash
# Development
npm run dev                 # Start dev server (localhost:3000)
npm run build             # Create production build
npm start                 # Start production server
npm run type-check        # Check TypeScript errors

# Utilities
npm install               # Install/update dependencies
npm list                  # List installed packages
rm -rf .next              # Clear Next.js cache
npm cache clean --force   # Clear npm cache
```

---

## 📂 File Locations

| What          | Where                             |
| ------------- | --------------------------------- |
| Home page     | `src/app/page.tsx`                |
| Global styles | `src/styles/globals.css`          |
| Components    | `src/components/*.tsx`            |
| Types         | `src/types/content.ts`            |
| Utilities     | `src/utils/*.ts`                  |
| Content data  | `public/content.json`             |
| Images        | `public/images/`                  |
| Config        | `next.config.js`, `tsconfig.json` |

---

## 🎯 Common Tasks

### **Update Content**

1. Edit `/public/content.json`
2. Add/update images in `/public/images/`
3. No code changes needed
4. Changes visible immediately on page refresh

### **Modify Styling**

1. Edit `/src/styles/globals.css`
2. Update color tokens in `:root` or `[data-theme="dark"]`
3. Responsive changes in `@media` queries
4. Hot reload applies changes instantly

### **Add New Component**

1. Create file in `/src/components/ComponentName.tsx`
2. Mark with `'use client'` if interactive
3. Import in `/src/app/page.tsx`
4. Use: `<ComponentName />`

### **Add TypeScript Type**

1. Create in `/src/types/newtype.ts`
2. Export: `export interface MyType { ... }`
3. Import where needed: `import { MyType } from '@/types/newtype'`

### **Add Utility Function**

1. Create in `/src/utils/functionName.ts`
2. Export: `export const myFunction = () => { ... }`
3. Import where needed: `import { myFunction } from '@/utils/functionName'`

---

## 🌓 Dark Mode

### How It Works

- Theme stored in `localStorage` with key `theme`
- HTML has `data-theme` attribute
- CSS variables change based on `[data-theme="dark"]`

### Colors in Dark Mode

- Background: `#130e11`
- Surface: `#1d1519`
- Primary: `#b94e6f`
- Text: `#f5e6ea`

See `globals.css` for all color tokens.

---

## 🔍 Category Filtering

### Available Categories

From `content.json`, categories include:

- `artigo`, `system-design`, `carreira`
- `livro`, `youtube`, `comunidades`
- `programacao`, `cloud`, `dados`
- `front-end`, `back-end`, `ia`
- `instagram`, etc.

### How Filtering Works

1. User clicks filter button
2. Cards with matching `data-category` show
3. Others hide (display: none)
4. Active button highlighted

---

## 📱 Responsive Breakpoints

```css
/* Mobile first approach */
@media (max-width: 600px) { ... }   /* Small phones */
@media (max-width: 768px) { ... }   /* Tablets & mobile */
/* Default: > 768px Desktop */
```

Key breakpoint for images: 600px (aspect-ratio 16:9)

---

## 🌐 Browser Support

- Chrome/Edge: ✅ All features
- Firefox: ✅ All features
- Safari: ✅ All features
- IE: ❌ Not supported (Next.js targets modern browsers)

---

## 🐛 Debug Tips

### Check Console for Errors

```
Ctrl+Shift+I  →  Console tab
```

### Inspect Elements

```
Right-click  →  Inspect Element
```

### Check Network Requests

```
Ctrl+Shift+I  →  Network tab
→ Look for content.json fetch
```

### React Components

- Install "React Developer Tools" extension
- Inspect component props and state

---

## 📊 Performance Tips

1. **Images**: Use AVIF format when possible (smaller file size)
2. **Bundle**: Next.js automatically optimizes code splitting
3. **CSS**: Use CSS variables for themes (apply instantly)
4. **Data**: Content.json loaded once on page load

---

## 🔐 Environment Variables

### Available in Code

```typescript
process.env.NEXT_PUBLIC_SITE_URL;
process.env.NEXT_PUBLIC_GA_ID;
process.env.NEXT_PUBLIC_GTM_ID;
```

### Add New Variable

1. Add to `.env.local`: `NEXT_PUBLIC_MY_VAR=value`
2. Use in code: `process.env.NEXT_PUBLIC_MY_VAR`
3. Restart dev server for changes

---

## 🚢 Deployment Checklist

- [ ] `npm run build` succeeds
- [ ] `npm run type-check` shows no errors
- [ ] All images optimized
- [ ] Environment variables set
- [ ] Analytics IDs configured
- [ ] Content data is valid JSON
- [ ] No console errors in browser
- [ ] Responsive design tested
- [ ] Dark mode tested
- [ ] Filtering works correctly

---

## 📚 Component Props

### `ContentCard`

```typescript
{
  item: ContentItem,
  className?: string
}
```

### `RoundCard`

```typescript
{
  item: ContentItem,
  className?: string
}
```

### `ContentSection`

```typescript
{
  section: ContentSection;
}
```

---

## 🎨 Design Tokens

### Spacing

- `--space-xs`: 6px
- `--space-sm`: 10px
- `--space-md`: 16px
- `--space-lg`: 24px
- `--space-xl`: 40px
- `--space-2xl`: 80px

### Typography

- `--fs-xs`: 0.75rem
- `--fs-sm`: 0.9rem
- `--fs-md`: 1rem
- `--fs-lg`: 1.2rem
- `--fs-xl`: 2.5rem

### Border Radius

- `--radius-sm`: 8px
- `--radius-md`: 16px
- `--radius-pill`: 999px

---

## 🔗 Quick Links

- [Next.js Docs](https://nextjs.org/docs)
- [React Hooks](https://react.dev/reference/react/hooks)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [JSON Formatter](https://jsonformatter.org/)

---

## ✅ Checklist for New Contributors

1. Clone repository
2. Run `npm install`
3. Run `npm run dev`
4. Test in browser at localhost:3000
5. Try theme toggle (🌙 button)
6. Test filters on article section
7. Check responsive design (F12 Device Mode)
8. Make changes to learn the codebase
9. Run `npm run type-check` before commit
10. All should work without any errors!

---

**Questions? Check MIGRATION_SUMMARY.md or README_NEXTJS.md for more details.**
