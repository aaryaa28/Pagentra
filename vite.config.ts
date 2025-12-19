import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  css: {
    postcss: {
      plugins: [],
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: {
          // React and related libraries
          react: ["react", "react-dom"],
          
          // UI libraries
          radix: [
            "@radix-ui/react-accordion",
            "@radix-ui/react-alert-dialog",
            "@radix-ui/react-aspect-ratio",
            "@radix-ui/react-avatar",
            "@radix-ui/react-checkbox",
            "@radix-ui/react-collapsible",
            "@radix-ui/react-context-menu",
            "@radix-ui/react-dialog",
            "@radix-ui/react-dropdown-menu",
            "@radix-ui/react-hover-card",
            "@radix-ui/react-label",
            "@radix-ui/react-menubar",
            "@radix-ui/react-navigation-menu",
            "@radix-ui/react-popover",
            "@radix-ui/react-progress",
            "@radix-ui/react-radio-group",
            "@radix-ui/react-scroll-area",
            "@radix-ui/react-select",
            "@radix-ui/react-separator",
            "@radix-ui/react-slider",
            "@radix-ui/react-slot",
            "@radix-ui/react-switch",
            "@radix-ui/react-tabs",
            "@radix-ui/react-toast",
            "@radix-ui/react-toggle",
            "@radix-ui/react-toggle-group",
            "@radix-ui/react-tooltip"
          ],
          
          // Form and data handling
          forms: [
            "react-hook-form",
            "@hookform/resolvers",
            "zod",
            "zod-validation-error"
          ],
          
          // Charts and visualization
          charts: ["recharts", "embla-carousel-react"],
          
          // Animation and motion
          motion: ["framer-motion"],
          
          // Icons and utilities
          utils: [
            "lucide-react",
            "class-variance-authority",
            "clsx",
            "tailwind-merge",
            "cmdk"
          ],
          
          // Date handling
          dates: ["date-fns", "react-day-picker"],
          
          // Query and routing
          query: ["@tanstack/react-query", "wouter"],
          
          // Misc UI components
          misc: [
            "sonner",
            "vaul",
            "react-resizable-panels",
            "input-otp",
            "next-themes"
          ]
        }
      }
    },
    chunkSizeWarningLimit: 1000
  },
  server: {
    host: "0.0.0.0",
    allowedHosts: true,
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
